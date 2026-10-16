# 🎓 HỆ THỐNG LUYỆN TẬP & TẠO ĐỀ THI TỰ ĐỘNG (MAKEQUIZ AI)

Chào mừng bạn đến với không gian học tập và luyện thi thông minh của **MakeQuiz**. 

Không gian này đã được tích hợp hệ thống chỉ dẫn tự động (**Persistent System Directives**) cho Antigravity. Từ nay, **bạn không cần phải nhắc lại bối cảnh, vai trò hay mục tiêu của dự án nữa!**

## 🌐 ỨNG DỤNG WEB HỌC TẬP TRỰC QUAN (MAKEQUIZ WEB APP)

Trang web học tập tương tác đã được xây dựng hoàn chỉnh với toàn bộ **465 câu hỏi từ 15 chương** của *Spring Start Here*:
- **Địa chỉ truy cập**: `http://localhost:8080` (hoặc mở trực tiếp file `index.html`).
- **Khởi chạy nhanh 1 chạm**: Nhấp đúp vào file [`start_quiz.bat`](file:///c:/Users/mrore/MakeQuiz/start_quiz.bat) hoặc chạy lệnh `python server.py`.

### Các tính năng cốt lõi:
1. **Luyện tập câu hỏi (Practice Mode)**:
   - **Trắc nghiệm 4 lựa chọn (MCQ)**: Chọn đáp án A-B-C-D $\rightarrow$ Hiện ngay Đúng/Sai (xanh/đỏ) + Khối giải thích chi tiết, Căn cứ tài liệu gốc và Phân tích bẫy tư duy.
   - **Trắc nghiệm Đúng/Sai (True/False)**: Từng mệnh đề có nút bấm riêng, phản hồi giải thích ngay khi chọn.
   - **Trả lời ngắn (Fill-in / Short Answer)**: Nhập câu trả lời rồi nhấn Enter $\rightarrow$ Hệ thống tự động so khớp các biến thể chấp nhận và đưa ra đáp án chuẩn.
2. **Thẻ ghi nhớ 3D (Flashcard Mode)**:
   - Lật thẻ 3D xoay mượt mà (phím cách `Space` hoặc bấm thẻ).
   - Đánh giá khả năng ghi nhớ: Chưa nhớ (1) / Tạm nhớ (2) / Đã thuộc (3).
   - Tự động lưu tiến độ vào trình duyệt (LocalStorage).
3. **Hiệu ứng âm thanh & Giao diện hiện đại**:
   - Âm thanh vòm phản hồi (ding khi đúng, thud khi sai) tạo qua Web Audio API.
   - Chế độ giao diện Sáng / Tối (Dark / Light Theme).

---


## 🚀 CÁCH SỬ DỤNG (CỰC KỲ ĐƠN GIẢN)

Mỗi lần truy cập vào workspace này, bạn chỉ cần thực hiện **1 bước duy nhất**:

### 👉 **Dán nội dung hoặc gửi tài liệu môn học vào khung chat!**
*(Có thể là đoạn văn bản, tài liệu PDF/Word, ghi chú bài giảng, slide tóm tắt, hoặc chỉ đơn giản là tên chủ đề bạn muốn ôn).*

Ngay lập tức, Antigravity sẽ:
1. 📖 **Tự động quét và trích xuất** các đơn vị kiến thức trọng tâm từ tài liệu.
2. 📊 **Lập ma trận đề thi chuẩn** theo tỷ lệ khoa học: **40% Nhận biết – 30% Thông hiểu – 30% Vận dụng**.
3. 📝 **Biên soạn trọn bộ 10 câu hỏi** gồm đủ 3 dạng thức khảo thí hiện đại:
   - **Phần I**: Trắc nghiệm 4 lựa chọn (A, B, C, D) – 5 câu.
   - **Phần II**: Trắc nghiệm Đúng / Sai (Chùm 4 mệnh đề) – 1 câu (4 ý).
   - **Phần III**: Trắc nghiệm Trả lời ngắn – 4 câu.
4. 💡 **Cung cấp Đáp án + Lời giải chi tiết + Trích dẫn tài liệu gốc** (được ẩn gọn gàng để bạn tự làm trước).

---

## ⚡ CÁC LỆNH TÙY BIẾN NHANH (NẾU BẠN CẦN)

Nếu muốn thay đổi cách luyện tập, bạn chỉ cần gõ kèm một trong các lệnh ngắn gọn sau:

| Lệnh / Từ khóa | Tác dụng |
| :--- | :--- |
| `Đố từng câu` hoặc `Tương tác` | Antigravity sẽ đưa từng câu một, đợi bạn trả lời rồi mới chấm và đưa tiếp câu sau. |
| `5 câu` / `15 câu` / `20 câu` | Thay đổi số lượng câu hỏi trong đề thi. |
| `Chỉ vận dụng` / `Đề nâng cao` | Tập trung 100% vào các câu hỏi case study, giải quyết tình huống và tính toán phức tạp. |
| `Tóm tắt trước` | Tổng hợp nhanh các gạch đầu dòng kiến thức cốt lõi trước khi xuất đề thi. |
| `Chấm điểm` | Nộp danh sách đáp án bạn vừa làm để Antigravity chấm điểm và chỉ ra lỗ hổng kiến thức. |

---

## 🏛️ CẤU TRÚC HỆ THỐNG ĐÃ THIẾT LẬP

Hệ thống được tổ chức hoàn toàn tự động và đồng bộ theo cơ chế Customizations của Antigravity:

- [GEMINI.md](file:///c:/Users/mrore/MakeQuiz/GEMINI.md) & [AGENTS.md](file:///c:/Users/mrore/MakeQuiz/AGENTS.md): Bản chỉ thị gốc (Prime Directive) luôn được nạp tự động mỗi phiên làm việc.
- [.agents/rules/item_writing_principles.md](file:///c:/Users/mrore/MakeQuiz/.agents/rules/item_writing_principles.md): Quy chuẩn sư phạm và khảo thí đo lường.
- [.agents/skills/quiz-master/SKILL.md](file:///c:/Users/mrore/MakeQuiz/.agents/skills/quiz-master/SKILL.md): Kỹ năng chuyên biệt phân tích tài liệu và biên soạn đề.
- [.agents/skills/quiz-master/references/bloom_cognitive_levels.md](file:///c:/Users/mrore/MakeQuiz/.agents/skills/quiz-master/references/bloom_cognitive_levels.md): Khung thang đo nhận thức Bloom (Nhận biết, Thông hiểu, Vận dụng).
- [.agents/skills/quiz-master/references/question_templates.md](file:///c:/Users/mrore/MakeQuiz/.agents/skills/quiz-master/references/question_templates.md): Mẫu hiển thị đề thi và lời giải bóc tách bẫy.
