import os
import glob
import re
import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

TEST_DIR = r'c:\Users\mrore\MakeQuiz\Spring_boot\test'
OUTPUT_JSON = r'c:\Users\mrore\MakeQuiz\quiz_data.json'
OUTPUT_JS = r'c:\Users\mrore\MakeQuiz\quiz_data.js'

files = sorted(glob.glob(os.path.join(TEST_DIR, 'Chuong_*.md')))

def extract_accepted_answers(raw_text):
    """
    Parses strings like:
    `Spring Core`
    `IoC` (hoặc `Inversion of Control`, `Đảo ngược điều khiển`)
    Constructor Injection (Tiêm qua hàm khởi tạo)
    Tên khung nhìn (hoặc `View name`, `Logical view name`)
    `Regression Testing` (hoặc `Kiểm thử hồi quy`)
    """
    answers = []
    # 1. Look for backtick quoted tokens
    codes = re.findall(r'`([^`]+)`', raw_text)
    if codes:
        for c in codes:
            c = c.strip()
            if c and c not in answers:
                answers.append(c)
    
    # 2. Look for text inside brackets or outside
    # Remove outer backticks
    clean = raw_text.replace('`', '').strip()
    # If there's (hoặc ...)
    m = re.search(r'^(.*?)\s*\((?:hoặc\s+)?(.*?)\)$', clean)
    if m:
        main_part = m.group(1).strip()
        if main_part and main_part not in answers:
            answers.append(main_part)
        alts = m.group(2).split(',')
        for a in alts:
            a = a.replace('hoặc', '').strip()
            if a and a not in answers:
                answers.append(a)
    else:
        if clean and clean not in answers:
            answers.append(clean)
            
    return answers

def parse_chapter(ch_idx, file_path):
    with open(file_path, encoding='utf-8') as f:
        content = f.read()

    # Extract title
    title_m = re.search(r'^#\s+🎯\s*BỘ ĐỀ LUYỆN TẬP TOÀN DIỆN:\s*(.+)$', content, re.MULTILINE)
    if not title_m:
        title_m = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
    full_title = title_m.group(1).strip() if title_m else os.path.basename(file_path)

    sec1 = content.split('## PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN')[1].split('## PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI')[0]
    sec2 = content.split('## PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI')[1].split('## PHẦN III: TRẢ LỜI NGẮN')[0]
    sec3 = content.split('## PHẦN III: TRẢ LỜI NGẮN')[1].split('## 🔍 BẢNG ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT')[0]
    sec_ans = content.split('## 🔍 BẢNG ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT')[1]

    # Quick answer table for MCQ
    mcq_table_rows = re.findall(r'\|\s*(\d+)\s*\|\s*\*\*([A-D])\*\*\s*\|\s*([^\|]+?)\s*\|\s*(\d+)\s*\|\s*\*\*([A-D])\*\*\s*\|\s*([^\|]+?)\s*\|', sec_ans)
    mcq_ans_map = {}
    for r in table_rows if (table_rows := mcq_table_rows) else []:
        mcq_ans_map[int(r[0])] = {'answer': r[1], 'level': r[2].strip()}
        mcq_ans_map[int(r[3])] = {'answer': r[4], 'level': r[5].strip()}

    # Detailed solutions
    ans_parts = re.split(r'####\s+', sec_ans)
    p1_exp_text = ''
    p2_exp_text = ''
    p3_exp_text = ''
    for p in ans_parts:
        if 'PHẦN I:' in p: p1_exp_text = p
        elif 'PHẦN II:' in p: p2_exp_text = p
        elif 'PHẦN III:' in p: p3_exp_text = p

    # P1 explanations
    p1_exp = {}
    p1_exp_blocks = re.split(r'-\s+\*\*Câu\s+(\d+):\s*Đáp\s*án\s*([A-D])\*\*', p1_exp_text)
    for i in range(1, len(p1_exp_blocks), 3):
        qnum = int(p1_exp_blocks[i])
        ans = p1_exp_blocks[i+1]
        body = p1_exp_blocks[i+2].strip()
        p1_exp[qnum] = {'answer': ans, 'explanation': body}

    # P2 True/False quick answers
    tf_ans_map = {}
    tf_quick_matches = re.findall(r'-\s+\*\*Câu\s+(\d+):\*\*\s+a:\s*\*\*([^\*]+)\*\*\s*\|\s*b:\s*\*\*([^\*]+)\*\*\s*\|\s*c:\s*\*\*([^\*]+)\*\*\s*\|\s*d:\s*\*\*([^\*]+)\*\*', sec_ans, re.IGNORECASE)
    for m in tf_quick_matches:
        qnum = int(m[0])
        tf_ans_map[qnum] = {
            'a': 'ĐÚNG' in m[1].upper(),
            'b': 'ĐÚNG' in m[2].upper(),
            'c': 'ĐÚNG' in m[3].upper(),
            'd': 'ĐÚNG' in m[4].upper()
        }

    # P2 explanations
    p2_exp_map = {}
    p2_exp_blocks = re.split(r'-\s+\*\*Câu\s+(\d+):\*\*', p2_exp_text)
    for i in range(1, len(p2_exp_blocks), 2):
        qnum = int(p2_exp_blocks[i])
        lines = p2_exp_blocks[i+1].strip().split('\n')
        exp_sub = {}
        for line in lines:
            sm = re.search(r'-\s*([a-d]):\s*\*\*([^\*]+)\*\*\s*(.*)', line)
            if sm:
                exp_sub[sm.group(1)] = {
                    'val': 'ĐÚNG' in sm.group(2).upper(),
                    'note': sm.group(3).strip('() ')
                }
        p2_exp_map[qnum] = exp_sub

    # P3 Short Answer quick answers
    p3_ans_map = {}
    p3_ans_lines = re.findall(r'-\s+\*\*Câu\s+(\d+):\*\*\s+(.*)', sec_ans)
    for m in p3_ans_lines:
        qnum = int(m[0])
        if 26 <= qnum <= 31 and qnum not in p3_ans_map:
            raw = m[1].strip()
            p3_ans_map[qnum] = {
                'raw': raw,
                'accepted': extract_accepted_answers(raw)
            }

    # P3 explanations
    p3_exp_map = {}
    p3_exp_lines = re.findall(r'-\s+\*\*Câu\s+(\d+):\*\*\s+(.*)', p3_exp_text)
    for m in p3_exp_lines:
        qnum = int(m[0])
        p3_exp_map[qnum] = m[1].strip()

    questions = []

    # 1. Part I: MCQ (Questions 1 to 20)
    q_splits = re.split(r'\*\*Câu\s+(\d+)\s*(?:\[(.*?)\])?:\*\*', sec1)
    for i in range(1, len(q_splits), 3):
        qnum = int(q_splits[i])
        level = q_splits[i+1].strip() if q_splits[i+1] else mcq_ans_map.get(qnum, {}).get('level', 'Nhận biết')
        body = q_splits[i+2].strip()

        opt_matches = list(re.finditer(r'^([A-D])\.\s+(.*)$', body, re.MULTILINE))
        stem = body[:opt_matches[0].start()].strip() if opt_matches else body
        options = []
        for om in opt_matches:
            options.append({
                'key': om.group(1),
                'text': om.group(2).strip()
            })

        c_ans = mcq_ans_map.get(qnum, {}).get('answer') or p1_exp.get(qnum, {}).get('answer', 'A')
        exp = p1_exp.get(qnum, {}).get('explanation', '')

        # Parse citation and trap rationale if available
        citation = ''
        trap = ''
        c_m = re.search(r'-\s*\*Căn cứ tài liệu\*:\s*(.+)', exp)
        if c_m:
            citation = c_m.group(1).strip()
        t_m = re.search(r'-\s*\*Phân tích bẫy\*:\s*(.+)', exp)
        if t_m:
            trap = t_m.group(1).strip()

        questions.append({
            'num': qnum,
            'part': 1,
            'partName': 'Trắc nghiệm 4 lựa chọn',
            'type': 'mcq',
            'level': level,
            'stem': stem,
            'options': options,
            'correctAnswer': c_ans,
            'explanation': exp,
            'citation': citation,
            'trap': trap
        })

    # 2. Part II: True/False (Questions 21 to 25)
    p2_splits = re.split(r'\*\*Câu\s+(\d+):\*\*', sec2)
    for i in range(1, len(p2_splits), 2):
        qnum = int(p2_splits[i])
        body = p2_splits[i+1].strip()
        lines = body.split('\n')
        context = lines[0].strip()
        sub_items = []
        for line in lines[1:]:
            im = re.search(r'-\s+\*\*([a-d])\)\*\*\s+(?:\[(.*?)\])?\s*(.*)$', line)
            if im:
                s_key = im.group(1)
                s_level = im.group(2).strip() if im.group(2) else 'Thông hiểu'
                s_text = im.group(3).strip()
                s_ans = tf_ans_map.get(qnum, {}).get(s_key, True)
                s_exp = p2_exp_map.get(qnum, {}).get(s_key, {}).get('note', '')
                sub_items.append({
                    'key': s_key,
                    'level': s_level,
                    'text': s_text,
                    'correctAnswer': s_ans,
                    'explanation': s_exp
                })

        questions.append({
            'num': qnum,
            'part': 2,
            'partName': 'Trắc nghiệm Đúng / Sai',
            'type': 'true_false',
            'level': 'Đúng / Sai tổng hợp',
            'context': context,
            'items': sub_items
        })

    # 3. Part III: Short Answer (Questions 26 to 31)
    p3_splits = re.split(r'\*\*Câu\s+(\d+)\s*(?:\[(.*?)\])?:\*\*', sec3)
    for i in range(1, len(p3_splits), 3):
        qnum = int(p3_splits[i])
        level = q_splits[i+1].strip() if q_splits[i+1] else 'Nhận biết'
        body = p3_splits[i+2].strip()

        guide_m = re.search(r'\*\((Quy định:[^)]+)\)\*', body)
        guideline = guide_m.group(1).strip() if guide_m else ''
        clean_stem = re.sub(r'\*\((Quy định:[^)]+)\)\*', '', body)
        clean_stem = re.sub(r'👉\s*\*\*Trả lời:\*\*.*', '', clean_stem).strip()

        ans_info = p3_ans_map.get(qnum, {'raw': '', 'accepted': []})
        exp = p3_exp_map.get(qnum, '')

        questions.append({
            'num': qnum,
            'part': 3,
            'partName': 'Trả lời ngắn',
            'type': 'short_answer',
            'level': level,
            'stem': clean_stem,
            'guideline': guideline,
            'acceptedAnswers': ans_info['accepted'],
            'canonicalAnswer': ans_info['raw'],
            'explanation': exp
        })

    return {
        'id': ch_idx,
        'title': full_title,
        'filename': os.path.basename(file_path),
        'questionCount': len(questions),
        'questions': questions
    }

print(f"Parsing {len(files)} chapters...")
all_chapters = []
total_q = 0
for idx, f in enumerate(files, 1):
    ch_data = parse_chapter(idx, f)
    all_chapters.append(ch_data)
    total_q += len(ch_data['questions'])
    print(f"[{idx}/15] {ch_data['filename']} -> {len(ch_data['questions'])} questions parsed.")

print(f"\nTotal parsed: {len(all_chapters)} chapters, {total_q} questions.")

# Save to JSON
with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
    json.dump(all_chapters, f, ensure_ascii=False, indent=2)
print(f"Saved to {OUTPUT_JSON}")

# Save to JS for zero-cors direct static execution
with open(OUTPUT_JS, 'w', encoding='utf-8') as f:
    f.write('window.QUIZ_DATA = ' + json.dumps(all_chapters, ensure_ascii=False) + ';')
print(f"Saved to {OUTPUT_JS}")
