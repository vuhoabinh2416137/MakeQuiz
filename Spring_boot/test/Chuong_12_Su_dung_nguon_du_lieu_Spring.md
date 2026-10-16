# 🎯 BỘ ĐỀ LUYỆN TẬP TOÀN DIỆN: CHƯƠNG 12 - SỬ DỤNG NGUỒN DỮ LIỆU TRONG ỨNG DỤNG SPRING
*(Tài liệu: Spring Start Here - Laurentiu Spilca)*

> **Cấu trúc bộ đề**:  
> - **Phần I**: 20 câu Trắc nghiệm 4 lựa chọn (Cân bằng độ dài phương án, phân bổ ngẫu nhiên A/B/C/D).  
> - **Phần II**: 5 câu Trắc nghiệm Đúng/Sai (mỗi câu gồm 4 ý nhỏ a, b, c, d = 20 mệnh đề).  
> - **Phần III**: 6 câu Trắc nghiệm Trả lời ngắn.  
> **Ma trận phân bổ**: 40% Nhận biết – 30% Thông hiểu – 30% Vận dụng.  
> **Thời gian làm bài khuyến nghị**: 50 phút.  

---

## PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN (20 CÂU)
*Chọn duy nhất 01 đáp án đúng trong các phương án A, B, C, D.*

**Câu 1 [Nhận biết]:** Giao diện chuẩn mực nào trong gói `javax.sql` của Java được sử dụng để đại diện cho một nhà máy sản xuất và điều phối các kết nối cơ sở dữ liệu trong ứng dụng Spring?

A. `java.sql.Driver` (Giao diện điều khiển liên lạc cấp thấp của nhà cung cấp CSDL)  
B. `java.sql.Connection` (Giao diện đại diện cho một phiên kết nối vật lý cụ thể)  
C. `javax.sql.DataSource` (Giao diện chuẩn quản lý và điều phối các kết nối CSDL)  
D. `java.sql.DriverManager` (Lớp quản lý truyền thống dùng để mở kết nối trực tiếp)  

**Câu 2 [Nhận biết]:** Thư viện bể chứa kết nối (Connection Pool) hiệu năng cao nào được Spring Boot lựa chọn làm giải pháp mặc định nếu có sẵn trên classpath?

A. Apache Commons DBCP (Thư viện quản lý kết nối truyền thống của Apache)  
B. C3P0 (Thư viện bể chứa kết nối mã nguồn mở phổ biến trong các dự án cũ)  
C. Tomcat JDBC Pool (Mô-đun quản lý bể chứa kết nối tích hợp trong Tomcat)  
D. HikariCP (Thư viện Connection Pool hiệu năng cao mặc định của Spring Boot)  

**Câu 3 [Nhận biết]:** Lớp tiện ích trung tâm nào trong module `spring-jdbc` giúp lập trình viên thực thi các câu lệnh SQL mà không cần tự quản lý kết nối thủ công?

A. `SqlSession` (Giao diện thực thi câu lệnh SQL trong khung làm việc MyBatis)  
B. `JdbcTemplate` (Lớp tiện ích trung tâm thực thi SQL và xử lý tài nguyên tự động)  
C. `EntityManager` (Thành phần quản lý các thực thể trong chuẩn ORM JPA/Hibernate)  
D. `DbHelper` (Lớp tiện ích nội bộ tự tạo dùng trong các ứng dụng đơn giản)  

**Câu 4 [Nhận biết]:** Giao diện hàm (Functional Interface) nào trong Spring JDBC được sử dụng để ánh xạ từng dòng của `ResultSet` thành một đối tượng Java tương ứng?

A. `RowMapper<T>` (Giao diện ánh xạ từng dòng kết quả SQL thành đối tượng Java)  
B. `ResultSetExtractor<T>` (Trích xuất toàn bộ tập kết quả thành một đối tượng duy nhất)  
C. `RowCallbackHandler` (Xử lý từng dòng kết quả nhưng không trả về đối tượng)  
D. `EntityMapper<T>` (Giao diện chuyển đổi dữ liệu thực thể trong các khung ORM)  

**Câu 5 [Nhận biết]:** Khi sử dụng `JdbcTemplate`, phương thức nào sau đây được sử dụng để thực thi các câu lệnh SQL thay đổi trạng thái bảng (như INSERT, UPDATE, DELETE)?

A. `query()` (Thực thi các câu lệnh truy vấn dữ liệu SELECT và trả về danh sách)  
B. `executeSelect()` (Phương thức chuyên biệt dùng cho việc lấy dữ liệu dạng bảng)  
C. `update()` (Thực thi các câu lệnh SQL làm biến đổi dữ liệu như INSERT, UPDATE, DELETE)  
D. `mutate()` (Phương thức tùy biến chỉ có trong các khung xử lý dữ liệu phi quan hệ)  

**Câu 6 [Nhận biết]:** Tệp tin nào theo quy ước chuẩn của Spring Boot được đặt trong thư mục `src/main/resources` để tự động khởi tạo cấu trúc bảng (DDL - Data Definition Language) lúc khởi động?

A. `init.sql` (Tệp khởi tạo tùy biến dùng trong một số bộ công cụ cơ sở dữ liệu)  
B. `database.sql` (Tệp chứa kịch bản tổng hợp thông tin cấu hình của máy chủ)  
C. `schema.sql` (Tệp quy ước chuẩn chứa các câu lệnh DDL khởi tạo cấu trúc bảng)  
D. `tables.sql` (Tệp văn bản liệt kê tên các bảng được quản lý bởi ứng dụng)  

**Câu 7 [Thông hiểu]:** Lý do căn bản nhất khiến các hệ thống phần mềm doanh nghiệp luôn sử dụng cơ chế Bể chứa kết nối (Connection Pool) thay vì dùng `DriverManager` mở một kết nối mạng mới cho mỗi câu lệnh SQL là gì?

A. Vì cơ sở dữ liệu quan hệ chỉ chấp nhận tối đa duy nhất 1 kết nối tại một thời điểm  
B. Tái sử dụng kết nối mở sẵn giúp triệt tiêu độ trễ bắt tay mạng và tăng vọt hiệu năng  
C. Để hệ thống có thể tự động chuyển đổi câu lệnh SQL sang mã nguồn bytecode Java  
D. Vì hệ điều hành sẽ tự động khóa ứng dụng nếu phát hiện mở kết nối mạng vật lý  

**Câu 8 [Thông hiểu]:** Khi một luồng nghiệp vụ trong Spring gọi phương thức `connection.close()` trên một kết nối được cấp phát bởi một DataSource có cơ chế Connection Pool, hành vi thực tế nào diễn ra?

A. Kết nối mạng TCP vật lý tới máy chủ cơ sở dữ liệu bị ngắt hoàn toàn ngay lập tức  
B. Toàn bộ máy chủ cơ sở dữ liệu sẽ tự động thực hiện quá trình khởi động lại dịch vụ  
C. Kết nối bị xóa bỏ hoàn toàn khỏi bộ nhớ heap và máy chủ phải mở lại cổng mạng mới  
D. Kết nối không bị ngắt vật lý mà được trả về trạng thái rảnh rỗi trong bể chứa  

**Câu 9 [Thông hiểu]:** Nhược điểm lớn nhất của việc sử dụng thư viện JDBC tiêu chuẩn (Java Database Connectivity thuần túy) mà không có `JdbcTemplate` là gì?

A. Phải tự viết nhiều mã lặp lại: mở kết nối, tạo statement, đóng tài nguyên và bắt SQLException  
B. Không có khả năng kết nối được với các hệ quản trị cơ sở dữ liệu quan hệ như MySQL  
C. Hoàn toàn không hỗ trợ cú pháp câu lệnh SQL tiêu chuẩn ANSI được quy định quốc tế  
D. Chỉ có thể thực thi được trên các hệ điều hành họ Unix chứ không chạy được trên Windows  

**Câu 10 [Thông hiểu]:** Tính năng "Chuyển đổi ngoại lệ" (Exception Translation) của Spring JDBC chuyển đổi các ngoại lệ kiểm tra (`java.sql.SQLException`) thành phân cấp ngoại lệ nào?

A. Phân cấp các ngoại lệ kiểm tra (Checked Exceptions) mới thuộc gói thư viện Spring  
B. Phân cấp ngoại lệ không kiểm tra (Unchecked Exceptions) kế thừa từ DataAccessException  
C. Bỏ qua hoàn toàn mọi lỗi phát sinh và không ném bất kỳ ngoại lệ nào ra luồng chính  
D. Tự động chuyển đổi toàn bộ các ngoại lệ cơ sở dữ liệu thành lỗi `NullPointerException`  

**Câu 11 [Thông hiểu]:** Giá trị trả về của phương thức `jdbcTemplate.update(sql, params...)` đại diện cho thông tin gì?

A. Thời gian thực thi câu lệnh SQL trên máy chủ cơ sở dữ liệu tính bằng mili-giây  
B. Khóa chính tự sinh (Auto-generated Primary Key) của bản ghi đầu tiên vừa được chèn  
C. Số lượng bản ghi (rows) trong bảng bị ảnh hưởng hoặc được thêm mới bởi câu lệnh SQL  
D. Luôn luôn trả về giá trị cố định là 0 để báo hiệu câu lệnh không gặp lỗi cú pháp  

**Câu 12 [Thông hiểu]:** Bộ ba thuộc tính cấu hình nào trong tệp `application.properties` là bắt buộc phải có để Spring Boot tự động cấu hình một `DataSource` kết nối tới cơ sở dữ liệu?

A. `spring.datasource.url`, `spring.datasource.username`, `spring.datasource.password`  
B. `server.port`, `server.servlet.context-path` và `server.tomcat.max-threads`  
C. `spring.jpa.hibernate.ddl-auto`, `spring.mvc.view.prefix` và `spring.mvc.view.suffix`  
D. `app.database.name`, `app.database.host` và `app.database.connection-timeout`  

**Câu 13 [Thông hiểu]:** Tệp tin `data.sql` đặt trong thư mục `src/main/resources` có vai trò chuẩn mực gì trong quy trình khởi tạo dữ liệu của Spring Boot?

A. Chứa các câu lệnh định nghĩa cấu trúc bảng (CREATE TABLE, ALTER TABLE) của CSDL  
B. Chứa thông tin tài khoản và mật khẩu dùng để xác thực kết nối với máy chủ CSDL  
C. Chứa các chỉ dẫn kỹ thuật cấu hình việc sao lưu và phục hồi dữ liệu tự động định kỳ  
D. Chứa các câu lệnh chèn dữ liệu mẫu hoặc dữ liệu ban đầu (INSERT INTO) vào các bảng  

**Câu 14 [Thông hiểu]:** Sự khác biệt giữa `DriverManagerDataSource` và `HikariDataSource` khi định nghĩa bean `DataSource` thủ công trong lớp cấu hình là gì?

A. `DriverManagerDataSource` cung cấp tốc độ phản hồi truy vấn nhanh hơn `HikariDataSource`  
B. DriverManagerDataSource tạo kết nối mới mỗi lần gọi, còn HikariCP là pool hoàn chỉnh  
C. `HikariDataSource` chỉ hoạt động được với cơ sở dữ liệu trong bộ nhớ H2 Database  
D. `DriverManagerDataSource` tự động sinh câu lệnh SQL mà không cần lập trình viên viết mã  

**Câu 15 [Thông hiểu]:** Phương thức `jdbcTemplate.queryForObject(sql, rowMapper, id)` sẽ phản ứng như thế nào nếu câu lệnh SELECT không tìm thấy bất kỳ dòng dữ liệu nào khớp với điều kiện?

A. Ném ra ngoại lệ `EmptyResultDataAccessException` báo hiệu không có dòng dữ liệu khớp  
B. Trả về giá trị `null` một cách an toàn mà không phát sinh bất kỳ ngoại lệ nào  
C. Tự động chèn thêm một dòng dữ liệu mặc định mới vào bảng để tránh trả về rỗng  
D. Khiến toàn bộ ứng dụng Spring Boot bị dừng lại và phải khởi động lại máy chủ  

**Câu 16 [Vận dụng]:** Bạn cần viết phương thức thêm mới một giao dịch vào bảng `purchase` bằng `JdbcTemplate`. Đoạn mã nào sau đây là chuẩn mực và an toàn trước tấn công SQL Injection?

A.
```java
String sql = "INSERT INTO purchase VALUES ('" + purchase.getProduct() + "', " + purchase.getPrice() + ")";
jdbcTemplate.execute(sql);
```
B.
```java
String sql = "INSERT INTO purchase (product, price) VALUES (:p, :pr)";
jdbcTemplate.query(sql, purchase);
```
C.
```java
jdbcTemplate.update("INSERT INTO purchase (product, price)", purchase);
```
D.
```java
String sql = "INSERT INTO purchase (product, price) VALUES (?, ?)";
jdbcTemplate.update(sql, purchase.getProduct(), purchase.getPrice());
```

**Câu 17 [Vận dụng]:** Bạn muốn lấy ra toàn bộ danh sách các đối tượng `Purchase` từ bảng `purchase`. Đoạn mã sử dụng biểu thức Lambda cho `RowMapper` nào sau đây là chính xác?

A.
```java
String sql = "SELECT * FROM purchase";
return jdbcTemplate.query(sql, (rs, rowNum) -> {
    Purchase p = new Purchase();
    p.setId(rs.getInt("id"));
    p.setProduct(rs.getString("product"));
    p.setPrice(rs.getBigDecimal("price"));
    return p;
});
```
B.
```java
String sql = "SELECT * FROM purchase";
return jdbcTemplate.update(sql, (rs, rowNum) -> new Purchase());
```
C.
```java
return jdbcTemplate.queryForObject("SELECT * FROM purchase", Purchase.class);
```
D.
```java
return jdbcTemplate.query("SELECT * FROM purchase", Purchase.class);
```

**Câu 18 [Vận dụng]:** Để kết nối tới một cơ sở dữ liệu MySQL chạy trên máy cục bộ ở cổng `3306`, tên cơ sở dữ liệu là `store_db`, chuỗi cấu hình `spring.datasource.url` nào sau đây là chính xác?

A. `spring.datasource.url=http://localhost:3306/store_db`  
B. `spring.datasource.url=jdbc:mysql://localhost:3306/store_db`  
C. `spring.datasource.url=mysql:tcp://127.0.0.1:store_db`  
D. `spring.datasource.url=datasource:mysql:localhost:3306/store_db`  

**Câu 19 [Vận dụng]:** Bạn muốn cấu hình một cơ sở dữ liệu trong bộ nhớ H2 (In-memory database) để phục vụ việc kiểm thử nhanh mà không cần cài đặt phần mềm CSDL bên ngoài. Cấu hình URL chuẩn mực là:

A. `spring.datasource.url=file:///h2/database` (Đường dẫn kết nối tới tệp cục bộ trên đĩa)  
B. `spring.datasource.url=jdbc:oracle:thin:@localhost:1521:xe` (Chuỗi kết nối hệ CSDL Oracle)  
C. `spring.datasource.url=jdbc:h2:mem:testdb` (Chuỗi kết nối CSDL H2 chạy trong bộ nhớ RAM)  
D. `spring.datasource.url=h2://memory/test` (Cú pháp giao thức không hỗ trợ chuẩn JDBC)  

**Câu 20 [Vận dụng]:** Một lập trình viên viết phương thức truy vấn một sản phẩm duy nhất theo ID:
```java
public Purchase findById(int id) {
    String sql = "SELECT * FROM purchase WHERE id = ?";
    return jdbcTemplate.queryForObject(sql, rowMapper, id);
}
```
Để ngăn ứng dụng bị sập khi người dùng tìm kiếm một ID không tồn tại trong CSDL, cách xử lý ngoại lệ chuẩn mực nhất là gì?

A. Xóa toàn bộ cơ sở dữ liệu hiện tại và thực hiện nạp lại dữ liệu từ tệp `data.sql`  
B. Chuyển đổi phương thức `queryForObject()` sang sử dụng phương thức `update()`  
C. Loại bỏ hoàn toàn mệnh đề WHERE trong câu lệnh SQL để luôn lấy được dòng dữ liệu đầu tiên  
D. Dùng khối try-catch bắt EmptyResultDataAccessException và trả về Optional rỗng  

---

## PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI (5 CÂU - 20 MỆNH ĐỀ)
*Đọc từng đoạn ngữ cảnh sau và xác định tính ĐÚNG hoặc SAI của từng mệnh đề a, b, c, d.*

**Câu 21:** Về khái niệm Nguồn dữ liệu (DataSource) và Bể chứa kết nối (Connection Pool):
- **a)** [Nhận biết] Giao diện `DataSource` là thành phần trung gian quản lý việc cấp phát và thu hồi kết nối CSDL trong ứng dụng.  
- **b)** [Thông hiểu] Trong môi trường sản phẩm thực tế, việc mở và đóng kết nối CSDL trực tiếp qua `DriverManager` được khuyến khích hơn dùng Connection Pool.  
- **c)** [Thông hiểu] HikariCP được đánh giá cao nhờ tốc độ vượt trội, cấu trúc mã nhẹ và khả năng tối ưu hóa việc mượn/trả kết nối.  
- **d)** [Vận dụng] Nếu tất cả các kết nối trong Connection Pool đều đang bận phục vụ, luồng yêu cầu tiếp theo sẽ phải chờ một khoảng thời gian trước khi ném ngoại lệ timeout nếu không có kết nối nào được trả lại.  

**Câu 22:** Về công cụ `JdbcTemplate` trong Spring Framework:
- **a)** [Nhận biết] `JdbcTemplate` là một lớp cụ thể nằm trong module `spring-jdbc`.  
- **b)** [Thông hiểu] `JdbcTemplate` tự động xử lý việc đóng đối tượng `Connection` và `PreparedStatement` sau khi câu lệnh SQL hoàn tất, ngăn ngừa rò rỉ kết nối (Connection Leak).  
- **c)** [Thông hiểu] Sử dụng `JdbcTemplate` yêu cầu lập trình viên phải bắt buộc viết các khối lệnh `try-catch` bắt ngoại lệ kiểm tra `SQLException`.  
- **d)** [Vận dụng] `JdbcTemplate` hỗ trợ cơ chế truyền tham số dạng dấu chấm hỏi `?` giúp triệt tiêu hoàn toàn nguy cơ bị tấn công tiêm mã độc SQL Injection.  

**Câu 23:** Về giao diện ánh xạ dòng `RowMapper<T>`:
- **a)** [Nhận biết] Phương thức duy nhất cần hiện thực trong `RowMapper<T>` là `mapRow(ResultSet rs, int rowNum)`.  
- **b)** [Thông hiểu] Phương thức `mapRow` được `JdbcTemplate` tự động gọi lặp lại cho từng dòng kết quả có trong `ResultSet`.  
- **c)** [Thông hiểu] Vì `RowMapper` là một Functional Interface (chỉ có duy nhất một phương thức trừu tượng), lập trình viên có thể hiện thực nó bằng biểu thức Lambda cực kỳ ngắn gọn.  
- **d)** [Vận dụng] `RowMapper` chỉ có thể ánh xạ được các trường dữ liệu kiểu số nguyên (`int`), không hỗ trợ ánh xạ chuỗi (`String`) hoặc kiểu ngày tháng.  

**Câu 24:** Về các thao tác truy vấn dữ liệu với `JdbcTemplate`:
- **a)** [Nhận biết] Phương thức `jdbcTemplate.query(...)` luôn luôn trả về một danh sách các đối tượng (`List<T>`).  
- **b)** [Thông hiểu] Nếu câu lệnh SQL trong `jdbcTemplate.query(...)` không tìm thấy bản ghi nào, nó sẽ trả về một danh sách rỗng (Empty List) chứ không ném ngoại lệ.  
- **c)** [Thông hiểu] Phương thức `jdbcTemplate.queryForObject(...)` nếu tìm thấy nhiều hơn 1 bản ghi thỏa mãn điều kiện thì nó sẽ tự động lấy bản ghi đầu tiên mà không báo lỗi.  
- **d)** [Vận dụng] Khi cần đếm tổng số dòng trong một bảng (ví dụ: `SELECT COUNT(*) FROM purchase`), ta có thể dùng `jdbcTemplate.queryForObject(sql, Integer.class)`.  

**Câu 25:** Về cấu hình nguồn dữ liệu tự động và khởi tạo CSDL trong Spring Boot:
- **a)** [Nhận biết] Khi có starter `spring-boot-starter-jdbc` và thư viện driver CSDL trong classpath, Spring Boot sẽ tự động cấu hình bean `DataSource` và `JdbcTemplate`.  
- **b)** [Thông hiểu] Spring Boot tự động phát hiện và thực thi các tệp `schema.sql` và `data.sql` nằm trong thư mục `src/main/resources`.  
- **c)** [Thông hiểu] Thứ tự thực thi tự động của Spring Boot luôn là: thực thi `schema.sql` để tạo cấu trúc bảng trước, sau đó mới thực thi `data.sql` để chèn dữ liệu.  
- **d)** [Vận dụng] Nếu đã cấu hình DataSource qua `application.properties`, ta không được phép tự tạo bean `DataSource` bằng mã Java trong lớp `@Configuration` vì sẽ gây xung đột không thể khởi động ứng dụng.  

---

## PHẦN III: TRẢ LỜI NGẮN (6 CÂU)
*Điền câu trả lời ngắn gọn, chính xác vào chỗ trống theo yêu cầu của từng câu.*

**Câu 26 [Nhận biết]:** Giao diện chuẩn mực nào trong gói `javax.sql` đại diện cho nhà máy sản xuất và điều phối các kết nối cơ sở dữ liệu trong ứng dụng Spring?  
*(Quy định: Điền tên giao diện bằng tiếng Anh)*  
👉 **Trả lời:** ............................................................

**Câu 27 [Nhận biết]:** Tên của thư viện Connection Pool mặc định được tích hợp trong Spring Boot nhờ hiệu năng cao và kích thước gọn nhẹ là gì?  
*(Quy định: Điền tên thư viện viết hoa chữ cái)*  
👉 **Trả lời:** ............................................................

**Câu 28 [Nhận biết]:** Lớp tiện ích trung tâm trong Spring JDBC chịu trách nhiệm thực thi các câu lệnh SQL và quản lý tài nguyên đóng mở kết nối có tên là gì?  
*(Quy định: Điền tên lớp Java)*  
👉 **Trả lời:** ............................................................

**Câu 29 [Thông hiểu]:** Phương thức nào của `JdbcTemplate` được sử dụng để thực thi các câu lệnh làm thay đổi dữ liệu như INSERT, UPDATE, DELETE?  
*(Quy định: Điền tên phương thức kèm cặp ngoặc tròn, ví dụ: execute())*  
👉 **Trả lời:** ............................................................

**Câu 30 [Thông hiểu]:** Giao diện hàm (Functional Interface) nào trong Spring JDBC được sử dụng để chuyển đổi từng hàng dữ liệu của `ResultSet` thành đối tượng Java?  
*(Quy định: Điền tên giao diện)*  
👉 **Trả lời:** ............................................................

**Câu 31 [Vận dụng]:** Tên của tệp tin SQL chuẩn mà Spring Boot tự động tìm kiếm trong thư mục `resources` để thực thi khởi tạo cấu trúc bảng (DDL) lúc khởi động là gì?  
*(Quy định: Điền tên tệp tin kèm đuôi mở rộng .sql)*  
👉 **Trả lời:** ............................................................

---

## 🔍 BẢNG ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT

<details>
<summary><b>BẤM VÀO ĐÂY ĐỂ XEM ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT</b></summary>

### BẢNG ĐÁP ÁN NHANH PHẦN I (MCQ)
| Câu | Đáp án | Mức độ | Câu | Đáp án | Mức độ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | **C** | Nhận biết | 11 | **C** | Thông hiểu |
| 2 | **D** | Nhận biết | 12 | **A** | Thông hiểu |
| 3 | **B** | Nhận biết | 13 | **D** | Thông hiểu |
| 4 | **A** | Nhận biết | 14 | **B** | Thông hiểu |
| 5 | **C** | Nhận biết | 15 | **A** | Thông hiểu |
| 6 | **C** | Nhận biết | 16 | **D** | Vận dụng |
| 7 | **B** | Thông hiểu | 17 | **A** | Vận dụng |
| 8 | **D** | Thông hiểu | 18 | **B** | Vận dụng |
| 9 | **A** | Thông hiểu | 19 | **C** | Vận dụng |
| 10 | **B** | Thông hiểu | 20 | **D** | Vận dụng |

---

### BẢNG ĐÁP ÁN NHANH PHẦN II (ĐÚNG / SAI)
- **Câu 21:** a: **ĐÚNG** | b: **SAI** | c: **ĐÚNG** | d: **ĐÚNG**
- **Câu 22:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**
- **Câu 23:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **SAI**
- **Câu 24:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**
- **Câu 25:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **SAI**

---

### BẢNG ĐÁP ÁN NHANH PHẦN III (TRẢ LỜI NGẮN)
- **Câu 26:** `DataSource` (hoặc `javax.sql.DataSource`)
- **Câu 27:** `HikariCP` (hoặc `HikariDataSource`)
- **Câu 28:** `JdbcTemplate`
- **Câu 29:** `update()`
- **Câu 30:** `RowMapper`
- **Câu 31:** `schema.sql`

---

### HƯỚNG DẪN GIẢI CHI TIẾT

#### PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN
- **Câu 1: Đáp án C**
  - *Căn cứ tài liệu*: Trang 262-263 mục "What is a Data Source?". Giao diện chuẩn `javax.sql.DataSource` đại diện cho kết nối cơ sở dữ liệu trong Java.
- **Câu 2: Đáp án D**
  - *Căn cứ tài liệu*: Trang 264. HikariCP là Connection Pool mặc định được tích hợp trong Spring Boot nhờ tốc độ và hiệu năng vượt trội.
- **Câu 3: Đáp án B**
  - *Căn cứ tài liệu*: Trang 265 mục "Using JdbcTemplate to work with data". `JdbcTemplate` đóng gói mọi tác vụ chuẩn mực của JDBC.
- **Câu 4: Đáp án A**
  - *Căn cứ tài liệu*: Trang 268-269 mục "Using a RowMapper to map data". `RowMapper<T>` chuyển đổi từng bản ghi của ResultSet thành đối tượng Java.
- **Câu 5: Đáp án C**
  - *Căn cứ tài liệu*: Trang 266. Phương thức `jdbcTemplate.update()` dùng cho các thao tác INSERT, UPDATE, DELETE.
- **Câu 6: Đáp án C**
  - *Căn cứ tài liệu*: Trang 265. Tệp `schema.sql` được Spring Boot tự động thực thi để tạo cấu trúc bảng ban đầu.
- **Câu 7: Đáp án B**
  - *Căn cứ tài liệu*: Trang 263-264. Thao tác mở kết nối mạng vật lý rất tốn kém tài nguyên CPU và thời gian; Connection Pool cho phép tái sử dụng kết nối mở sẵn.
- **Câu 8: Đáp án D**
  - *Căn cứ tài liệu*: Trang 264. Trong cơ chế Connection Pool, lệnh `close()` đóng vai trò trả kết nối về lại cho bể chứa thay vì ngắt kết nối socket vật lý.
- **Câu 9: Đáp án A**
  - *Căn cứ tài liệu*: Trang 265. JDBC thuần bắt buộc phải viết rất nhiều mã lặp lại (boilerplate) để đóng mở tài nguyên và xử lý ngoại lệ.
- **Câu 10: Đáp án B**
  - *Căn cứ tài liệu*: Trang 102 và 265. Spring tự động dịch `SQLException` sang phân cấp ngoại lệ không kiểm tra `DataAccessException`.
- **Câu 11: Đáp án C**
  - *Căn cứ tài liệu*: Phương thức `update()` trả về số nguyên biểu thị số dòng (affected rows) bị thay đổi trong bảng.
- **Câu 12: Đáp án A**
  - *Căn cứ tài liệu*: Trang 265. Bộ ba thuộc tính tối thiểu: `spring.datasource.url`, `username` và `password`.
- **Câu 13: Đáp án D**
  - *Căn cứ tài liệu*: Tệp `data.sql` được thiết kế chuyên biệt cho các câu lệnh nạp dữ liệu ban đầu (DML).
- **Câu 14: Đáp án B**
  - *Căn cứ tài liệu*: Trang 271. `DriverManagerDataSource` không duy trì pool và mở kết nối mới mỗi lần gọi, chỉ thích hợp cho thử nghiệm.
- **Câu 15: Đáp án A**
  - *Căn cứ tài liệu*: Khi không có dòng nào khớp, `queryForObject()` ném ra ngoại lệ `EmptyResultDataAccessException`.
- **Câu 16: Đáp án D**
  - *Căn cứ tài liệu*: Trang 266-267 Listing 12.2. Sử dụng dấu hỏi chấm `?` giúp `PreparedStatement` ngăn chặn tấn công SQL Injection.
- **Câu 17: Đáp án A**
  - *Căn cứ tài liệu*: Trang 269 Listing 12.5. Cú pháp chuẩn kết hợp `query()` và biểu thức lambda `(rs, rowNum) -> { ... }`.
- **Câu 18: Đáp án B**
  - *Căn cứ tài liệu*: Cú pháp JDBC URL chuẩn của MySQL: `jdbc:mysql://host:port/database_name`.
- **Câu 19: Đáp án C**
  - *Căn cứ tài liệu*: Trang 265. Cấu hình cơ sở dữ liệu bộ nhớ H2: `jdbc:h2:mem:testdb`.
- **Câu 20: Đáp án D**
  - *Căn cứ tài liệu*: Bắt `EmptyResultDataAccessException` để trả về giá trị an toàn khi không tìm thấy kết quả.

---

#### PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI
- **Câu 21:**
  - a: **ĐÚNG** (Trang 262).
  - b: **SAI** (Dùng DriverManager trong production sẽ làm sập hệ thống do nghẽn tài nguyên kết nối).
  - c: **ĐÚNG** (Trang 264).
  - d: **ĐÚNG** (Cơ chế connection timeout của pool).
- **Câu 22:**
  - a: **ĐÚNG** (Trang 265).
  - b: **ĐÚNG** (Đóng tài nguyên tự động và an toàn).
  - c: **SAI** (`JdbcTemplate` ném ra `DataAccessException` là ngoại lệ unchecked, không bắt buộc try-catch).
  - d: **ĐÚNG** (Tự động dùng `PreparedStatement` tham số hóa).
- **Câu 23:**
  - a: **ĐÚNG** (Trang 268).
  - b: **ĐÚNG** (Lặp qua từng dòng của ResultSet).
  - c: **ĐÚNG** (Khả năng viết gọn với lambda).
  - d: **SAI** (Hỗ trợ tất cả các kiểu dữ liệu phong phú của Java và SQL).
- **Câu 24:**
  - a: **ĐÚNG** (Trang 269).
  - b: **ĐÚNG** (Không có kết quả thì trả về danh sách có size = 0).
  - c: **SAI** (`queryForObject` sẽ ném ngoại lệ `IncorrectResultSizeDataAccessException` nếu kết quả có từ 2 dòng trở lên).
  - d: **ĐÚNG** (Hỗ trợ ánh xạ kiểu nguyên thủy/wrapper khi đếm).
- **Câu 25:**
  - a: **ĐÚNG** (Trang 265).
  - b: **ĐÚNG** (Tính năng Database Initialization tự động).
  - c: **ĐÚNG** (Thứ tự chuẩn: DDL trước, DML sau).
  - d: **SAI** (Lập trình viên hoàn toàn có thể tự định nghĩa bean `DataSource` để ghi đè cấu hình tự động của Spring Boot - Trang 271).

---

#### PHẦN III: TRẢ LỜI NGẮN
- **Câu 26:** `DataSource` (hoặc `javax.sql.DataSource`) (Trang 262).
- **Câu 27:** `HikariCP` (hoặc `HikariDataSource`) (Trang 264).
- **Câu 28:** `JdbcTemplate` (Trang 265).
- **Câu 29:** `update()` (Trang 266).
- **Câu 30:** `RowMapper` (Trang 268).
- **Câu 31:** `schema.sql` (Trang 265).

</details>
