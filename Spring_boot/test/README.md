# 📚 TỔNG HỢP HỆ THỐNG BỘ ĐỀ LUYỆN TẬP TOÀN DIỆN: SPRING START HERE (15 CHƯƠNG)
*(Tác giả: Laurentiu Spilca - Dịch bản tiêu chuẩn tiếng Việt)*

Toàn bộ **15 chương** của cuốn sách *Spring Start Here* đã được nâng cấp và chuẩn hóa toàn diện theo cấu trúc khảo thí hiện đại, đáp ứng đầy đủ yêu cầu khắt khe về tính sư phạm, tính sư phạm phân tầng nhận thức và trải nghiệm học tập chủ động (Active Recall).

---

## 📊 QUY CHUẨN CẤU TRÚC MỖI CHƯƠNG (31 CÂU HỎI / CHƯƠNG)
Mỗi chương trong ngân hàng đề thi được thiết kế đồng nhất theo cấu trúc:
1. **Phần I: 20 câu Trắc nghiệm 4 lựa chọn (MCQ)**:
   - Các phương án A, B, C, D được phân tách dòng rõ ràng bên dưới câu hỏi (`\n\n`), không bị dính chữ trên cùng một dòng.
   - 40% Nhận biết – 30% Thông hiểu – 30% Vận dụng & Tình huống thực tế.
2. **Phần II: 5 câu Trắc nghiệm Đúng / Sai (Chùm 4 ý nhỏ a, b, c, d = 20 mệnh đề)**:
   - Đánh giá năng lực phân tích đa chiều, đào sâu bản chất cơ chế của framework.
3. **Phần III: 6 câu Trắc nghiệm Trả lời ngắn (Short Answer)**:
   - Người học tự điền kết quả chính xác (chú thích `@...`, tên lớp, mã trạng thái HTTP, cú pháp), triệt tiêu thói quen đoán mò.
4. **Hệ thống Đáp án & Lời giải chi tiết**:
   - Khối gấp gọn `<details><summary>...</summary>` bảo vệ tính bảo mật khi luyện tập.
   - Bảng tra cứu đáp án nhanh cho cả 3 phần.
   - Giải thích chi tiết, đối chiếu trích dẫn chính xác số trang tài liệu gốc và bóc tách các bẫy tư duy thường gặp.

> 📈 **Quy mô toàn hệ thống**: **465 câu hỏi** (gồm 300 câu MCQ + 75 câu Đúng/Sai chùm = 300 mệnh đề + 90 câu Trả lời ngắn).

---

## 🗂️ DANH MỤC 15 BỘ ĐỀ THEO CHƯƠNG

### PHẦN I: NỀN TẢNG CỐT LÕI (CORE FUNDAMENTALS)
1. 📖 [Chương 1: Spring trong thế giới thực](file:///c:/Users/mrore/MakeQuiz/test/Chuong_01_Spring_trong_the_gioi_thuc.md) *(31 câu: 20 MCQ + 5 Đúng/Sai + 6 Trả lời ngắn)*
   - Khái niệm Framework, Hệ sinh thái Spring, Spring Core, Spring Boot, Khi nào không nên dùng framework.
2. 📖 [Chương 2: Ngữ cảnh Spring: Định nghĩa các bean](file:///c:/Users/mrore/MakeQuiz/test/Chuong_02_Ngu_canh_Spring_Dinh_nghia_bean.md) *(31 câu: 20 MCQ + 5 Đúng/Sai + 6 Trả lời ngắn)*
   - Spring Context, `@Configuration`, `@Bean`, `@Primary`, Stereotypes `@Component` & `@ComponentScan`, `@PostConstruct`, `registerBean`.
3. 📖 [Chương 3: Ngữ cảnh Spring: Nối dây các bean](file:///c:/Users/mrore/MakeQuiz/test/Chuong_03_Ngu_canh_Spring_Noi_day_bean.md) *(31 câu: 20 MCQ + 5 Đúng/Sai + 6 Trả lời ngắn)*
   - Nối dây trực tiếp qua CGLIB proxy, Nối dây qua tham số, `@Autowired` (Field, Constructor, Setter), Phân giải bean với `@Qualifier`, Phụ thuộc vòng.
4. 📖 [Chương 4: Ngữ cảnh Spring: Sử dụng các tầng trừu tượng](file:///c:/Users/mrore/MakeQuiz/test/Chuong_04_Ngu_canh_Spring_Su_dung_truu_tuong.md) *(31 câu: 20 MCQ + 5 Đúng/Sai + 6 Trả lời ngắn)*
   - Tách rời phụ thuộc qua Interface, Đối tượng nên và không nên đưa vào Context (DTO/Entity), `@Service`, `@Repository` & Exception Translation.
5. 📖 [Chương 5: Ngữ cảnh Spring: Phạm vi và vòng đời của bean](file:///c:/Users/mrore/MakeQuiz/test/Chuong_05_Pham_vi_va_vong_doi_bean.md) *(31 câu: 20 MCQ + 5 Đúng/Sai + 6 Trả lời ngắn)*
   - Singleton Scope vs GoF Singleton, An toàn đa luồng & Mutable state, `@Lazy` instantiation, Prototype Scope, Cạm bẫy tiêm Prototype vào Singleton.
6. 📖 [Chương 6: Sử dụng các khía cạnh với Spring AOP](file:///c:/Users/mrore/MakeQuiz/test/Chuong_06_Su_dung_khia_canh_Spring_AOP.md) *(31 câu: 20 MCQ + 5 Đúng/Sai + 6 Trả lời ngắn)*
   - AOP, Aspect, Advice (`@Around`, `@Before`, `@After`...), Pointcut AspectJ, Join Point, Dynamic Proxy, Custom Annotation `@ToLog`, `@Order`.

---

### PHẦN II: PHÁT TRIỂN ỨNG DỤNG WEB & DỊCH VỤ REST (WEB & REST)
7. 📖 [Chương 7: Tìm hiểu Spring Boot và Spring MVC](file:///c:/Users/mrore/MakeQuiz/test/Chuong_07_Tim_hieu_Spring_Boot_va_Spring_MVC.md) *(31 câu: 20 MCQ + 5 Đúng/Sai + 6 Trả lời ngắn)*
   - Khái niệm ứng dụng web & Servlet Container, Spring Boot Starters, `@SpringBootApplication`, `DispatcherServlet` (Front Controller), Luồng MVC.
8. 📖 [Chương 8: Triển khai ứng dụng web với Spring Boot và Spring MVC](file:///c:/Users/mrore/MakeQuiz/test/Chuong_08_Trien_khai_web_Spring_Boot_MVC.md) *(31 câu: 20 MCQ + 5 Đúng/Sai + 6 Trả lời ngắn)*
   - Khung nhìn động Thymeleaf, `Model`, Tham số `@RequestParam`, Biến đường dẫn `@PathVariable`, GET vs POST, HTML Form binding, Mẫu thiết kế PRG.
9. 📖 [Chương 9: Sử dụng các phạm vi web của Spring](file:///c:/Users/mrore/MakeQuiz/test/Chuong_09_Su_dung_pham_vi_web_Spring.md) *(31 câu: 20 MCQ + 5 Đúng/Sai + 6 Trả lời ngắn)*
   - `@RequestScope`, `@SessionScope` (Cookie `JSESSIONID`), `@ApplicationScope`, Scoped Proxy khi tiêm vào Controller, Quản lý đăng nhập/đăng xuất.
10. 📖 [Chương 10: Xây dựng các dịch vụ REST](file:///c:/Users/mrore/MakeQuiz/test/Chuong_10_Xay_dung_dich_vu_REST.md) *(31 câu: 20 MCQ + 5 Đúng/Sai + 6 Trả lời ngắn)*
    - REST Architecture, `@RestController` vs `@ResponseBody`, Tuần tự hóa JSON với Jackson, `ResponseEntity`, `@RestControllerAdvice` & `@ExceptionHandler`, `@RequestBody`.
11. 📖 [Chương 11: Tiêu thụ các điểm cuối REST](file:///c:/Users/mrore/MakeQuiz/test/Chuong_11_Tieu_thu_cac_diem_cuoi_REST.md) *(31 câu: 20 MCQ + 5 Đúng/Sai + 6 Trả lời ngắn)*
    - REST Consumer, Khai báo tinh gọn với `Spring Cloud OpenFeign`, Lời gọi đồng bộ chặn với `RestTemplate`, Phản ứng phi ngăn chặn với `WebClient`.

---

### PHẦN III: TẦNG DỮ LIỆU & KIỂM THỬ (PERSISTENCE & TESTING)
12. 📖 [Chương 12: Sử dụng nguồn dữ liệu trong ứng dụng Spring](file:///c:/Users/mrore/MakeQuiz/test/Chuong_12_Su_dung_nguon_du_lieu_Spring.md) *(31 câu: 20 MCQ + 5 Đúng/Sai + 6 Trả lời ngắn)*
    - `javax.sql.DataSource`, Bể kết nối (Connection Pool - HikariCP), `JdbcTemplate` loại bỏ boilerplate, `RowMapper`, Cấu hình `application.properties`, Cơ sở dữ liệu H2.
13. 📖 [Chương 13: Sử dụng giao dịch trong ứng dụng Spring](file:///c:/Users/mrore/MakeQuiz/test/Chuong_13_Su_dung_giao_dich_Spring.md) *(31 câu: 20 MCQ + 5 Đúng/Sai + 6 Trả lời ngắn)*
    - Khái niệm Giao dịch & 4 tính chất ACID, Chú thích `@Transactional`, Quy tắc rollback mặc định (`RuntimeException`), Mở rộng rollback với `rollbackFor`, Cạm bẫy self-invocation.
14. 📖 [Chương 14: Triển khai lưu trữ dữ liệu với Spring Data](file:///c:/Users/mrore/MakeQuiz/test/Chuong_14_Luu_tru_du_lieu_Spring_Data.md) *(31 câu: 20 MCQ + 5 Đúng/Sai + 6 Trả lời ngắn)*
    - Kiến trúc trừu tượng Spring Data, `CrudRepository<T, ID>`, Khóa chính `@Id`, Tự động sinh SQL từ tên phương thức (Derived Queries), Truy vấn tùy chỉnh với `@Query` & `@Modifying`.
15. 📖 [Chương 15: Kiểm thử ứng dụng Spring](file:///c:/Users/mrore/MakeQuiz/test/Chuong_15_Kiem_thu_ung_dung_Spring.md) *(31 câu: 20 MCQ + 5 Đúng/Sai + 6 Trả lời ngắn)*
    - Unit Tests vs Integration Tests, Mockito (`@Mock`, `@InjectMocks`, `when()`, `verify()`), `@SpringBootTest` & `@MockBean`, Giả lập yêu cầu web với `MockMvc`.
