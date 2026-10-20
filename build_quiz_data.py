import os
import glob
import re
import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR = r'c:\Users\mrore\MakeQuiz'
OUTPUT_JSON = os.path.join(BASE_DIR, 'quiz_data.json')
OUTPUT_JS = os.path.join(BASE_DIR, 'quiz_data.js')

SUBJECTS = [
    {
        'id': 'attt',
        'name': 'An toàn thông tin (HUST)',
        'badge': '🛡️ ATTT',
        'dir': os.path.join(BASE_DIR, 'An_toan_thong_tin', 'test')
    },
    {
        'id': 'spring_boot',
        'name': 'Spring Boot',
        'badge': '🍃 Spring Boot',
        'dir': os.path.join(BASE_DIR, 'Spring_boot', 'test')
    }
]

def extract_accepted_answers(raw_text):
    answers = []
    codes = re.findall(r'`([^`]+)`', raw_text)
    if codes:
        for c in codes:
            c = c.strip()
            if c and c not in answers:
                answers.append(c)
    
    clean = raw_text.replace('`', '').strip()
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

    title_m = re.search(r'^#\s+🎯\s*BỘ ĐỀ LUYỆN TẬP TOÀN DIỆN:\s*(.+)$', content, re.MULTILINE)
    if not title_m:
        title_m = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
    full_title = title_m.group(1).strip() if title_m else os.path.basename(file_path)

    sec1 = content.split('## PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN')[1].split('## PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI')[0]
    sec2 = content.split('## PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI')[1].split('## PHẦN III: TRẢ LỜI NGẮN')[0]
    sec3 = content.split('## PHẦN III: TRẢ LỜI NGẮN')[1].split('## 🔍 BẢNG ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT')[0]
    sec_ans = content.split('## 🔍 BẢNG ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT')[1]

    mcq_table_rows = re.findall(r'\|\s*(\d+)\s*\|\s*\*\*([A-D])\*\*\s*\|\s*([^\|]+?)\s*\|\s*(\d+)\s*\|\s*\*\*([A-D])\*\*\s*\|\s*([^\|]+?)\s*\|', sec_ans)
    mcq_ans_map = {}
    for r in mcq_table_rows:
        mcq_ans_map[int(r[0])] = {'answer': r[1], 'level': r[2].strip()}
        mcq_ans_map[int(r[3])] = {'answer': r[4], 'level': r[5].strip()}

    ans_parts = re.split(r'####\s+', sec_ans)
    p1_exp_text = ''
    p2_exp_text = ''
    p3_exp_text = ''
    for p in ans_parts:
        if 'PHẦN I:' in p: p1_exp_text = p
        elif 'PHẦN II:' in p: p2_exp_text = p
        elif 'PHẦN III:' in p: p3_exp_text = p

    p1_exp = {}
    p1_exp_blocks = re.split(r'-\s+\*\*Câu\s+(\d+):\s*Đáp\s*án\s*([A-D])\*\*', p1_exp_text)
    for i in range(1, len(p1_exp_blocks), 3):
        qnum = int(p1_exp_blocks[i])
        ans = p1_exp_blocks[i+1]
        body = p1_exp_blocks[i+2].strip()
        p1_exp[qnum] = {'answer': ans, 'explanation': body}

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
        if len(opt_matches) >= 4:
            stem = body[:opt_matches[0].start()].strip()
            options = [{'key': m.group(1), 'text': m.group(2).strip()} for m in opt_matches[:4]]
        else:
            stem = body
            options = []

        ans_info = p1_exp.get(qnum, {})
        correct_opt = ans_info.get('answer') or mcq_ans_map.get(qnum, {}).get('answer', 'A')
        exp = ans_info.get('explanation', '')

        questions.append({
            'num': qnum,
            'part': 1,
            'partName': 'Trắc nghiệm 4 lựa chọn',
            'type': 'mcq',
            'level': level,
            'stem': stem,
            'options': options,
            'correctAnswer': correct_opt,
            'explanation': exp
        })

    # 2. Part II: True / False (Questions 21 to 25)
    tf_splits = re.split(r'\*\*Câu\s+(\d+):\*\*', sec2)
    for i in range(1, len(tf_splits), 2):
        qnum = int(tf_splits[i])
        body = tf_splits[i+1].strip()

        context_m = re.search(r'^(.*?)(?=-\s*\*\*a\))', body, re.DOTALL)
        context = context_m.group(1).strip() if context_m else ''

        sub_items = []
        item_matches = list(re.finditer(r'-\s*\*\*([a-d])\)\*\*\s*(?:\[(.*?)\])?\s*(.*?)(?=(?:-\s*\*\*|$))', body, re.DOTALL))
        for im in item_matches:
            opt_key = im.group(1)
            opt_lvl = im.group(2).strip() if im.group(2) else 'Thông hiểu'
            opt_text = im.group(3).strip()
            
            c_val = tf_ans_map.get(qnum, {}).get(opt_key, True)
            c_exp = p2_exp_map.get(qnum, {}).get(opt_key, {}).get('note', '')

            sub_items.append({
                'key': opt_key,
                'level': opt_lvl,
                'text': opt_text,
                'correct': c_val,
                'note': c_exp
            })

        questions.append({
            'num': qnum,
            'part': 2,
            'partName': 'Trắc nghiệm Đúng / Sai',
            'type': 'true_false',
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

all_chapters = []
total_q = 0
global_id = 1

for subj in SUBJECTS:
    if not os.path.exists(subj['dir']):
        continue
    files = sorted(glob.glob(os.path.join(subj['dir'], 'Chuong_*.md')))
    print(f"\nScanning {subj['name']} ({len(files)} files)...")
    for f in files:
        m = re.search(r'Chuong_(\d+)', os.path.basename(f))
        ch_num = int(m.group(1)) if m else global_id

        ch_data = parse_chapter(global_id, f)
        ch_data['subjectId'] = subj['id']
        ch_data['subjectName'] = subj['name']
        ch_data['subjectBadge'] = subj['badge']
        ch_data['chapterNum'] = ch_num
        all_chapters.append(ch_data)
        total_q += len(ch_data['questions'])
        print(f"[{global_id}] [{subj['badge']}] {ch_data['filename']} -> {len(ch_data['questions'])} questions parsed.")
        global_id += 1

print(f"\n==========================================")
print(f"Total parsed: {len(all_chapters)} chapters, {total_q} questions across subjects.")
print(f"==========================================")

with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
    json.dump(all_chapters, f, ensure_ascii=False, indent=2)
print(f"Saved to {OUTPUT_JSON}")

with open(OUTPUT_JS, 'w', encoding='utf-8') as f:
    f.write('window.QUIZ_DATA = ' + json.dumps(all_chapters, ensure_ascii=False) + ';')
print(f"Saved to {OUTPUT_JS}")
