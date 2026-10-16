# 🎯 BỘ ĐỀ LUYỆN TẬP TOÀN DIỆN: CHƯƠNG 14 - TRIỂN KHAI LƯU TRỮ DỮ LIỆU VỚI SPRING DATA
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

**Câu 1 [Nhận biết]:** Sứ mệnh cốt lõi của dự án Spring Data trong hệ sinh thái Spring là gì?

A. Thay thế hoàn toàn các hệ quản trị cơ sở dữ liệu quan hệ bằng bộ nhớ đệm RAM  
B. Cung cấp tầng trừu tượng thống nhất cho lưu trữ dữ liệu và tự động sinh mã CRUD  
C. Tự động thiết kế bố cục giao diện người dùng trực tiếp từ các bảng cơ sở dữ liệu  
D. Quản lý việc sao lưu và đồng bộ dữ liệu của máy chủ lên các nền tảng đám mây  

**Câu 2 [Nhận biết]:** Giao diện cơ sở nào trong Spring Data cung cấp sẵn các thao tác CRUD cơ bản nhất (như `save`, `findById`, `findAll`, `deleteById`) mà lập trình viên chỉ cần kế thừa là có thể sử dụng ngay mà không phải tự viết bất kỳ dòng mã triển khai nào?

A. `JpaSpecificationExecutor` (Hỗ trợ xây dựng các câu truy vấn động theo tiêu chí)  
B. `EntityManager` (Thành phần quản lý các thao tác thực thể cấp thấp trong JPA)  
C. `CrudRepository` (Cung cấp sẵn các thao tác CRUD cơ bản nhất mà không cần viết code)  
D. `JdbcOperations` (Giao diện định nghĩa các phương thức thao tác SQL bằng JDBC template)  

**Câu 3 [Nhận biết]:** Chú thích nào bắt buộc phải được gắn trên thuộc tính của lớp thực thể (Entity) để chỉ định thuộc tính đó đóng vai trò là khóa chính (Primary Key) trong cơ sở dữ liệu?

A. `@Key` (Chú thích đánh dấu chỉ mục khóa trong các hệ CSDL phi quan hệ)  
B. `@PrimaryKey` (Chú thích tùy biến trong một số thư viện mở rộng của bên thứ ba)  
C. `@Identifier` (Xác định định danh đối tượng trong kiến trúc hướng miền DDD)  
D. `@Id` (Đánh dấu trường khóa chính duy nhất của lớp thực thể trong Spring Data)  

**Câu 4 [Nhận biết]:** Chú thích nào được sử dụng để định nghĩa một câu lệnh SQL tùy chỉnh trực tiếp trên phương thức của interface repository trong Spring Data?

A. `@Sql` (Khai báo tập lệnh SQL thực thi trong các kịch bản kiểm thử tự động)  
B. `@Query` (Định nghĩa trực tiếp câu lệnh truy vấn SQL tùy chỉnh trên phương thức)  
C. `@Select` (Chú thích chuyên biệt chỉ dùng cho các câu lệnh đọc dữ liệu dạng bảng)  
D. `@Native` (Bật tính năng thực thi câu lệnh SQL thuần túy không qua phân tích cú pháp)  

**Câu 5 [Nhận biết]:** Chú thích nào bắt buộc phải được đặt cùng với chú thích `@Query` khi phương thức thực thi các câu lệnh thay đổi dữ liệu như `UPDATE` hoặc `DELETE`?

A. `@Modifying` (Báo hiệu câu lệnh SQL làm biến đổi dữ liệu cần gọi executeUpdate)  
B. `@Transactional` (Kích hoạt tính năng quản lý giao dịch khai báo cho phương thức)  
C. `@Update` (Đánh dấu phương thức thực hiện cập nhật bản ghi trong cơ sở dữ liệu)  
D. `@Commit` (Ép buộc hệ thống phải ghi nhận vĩnh viễn thay đổi ngay sau khi chạy)  

**Câu 6 [Nhận biết]:** Chú thích nào được sử dụng để tùy biến tên bảng tương ứng trong cơ sở dữ liệu nếu tên bảng khác với tên của lớp thực thể Java?

A. `@DatabaseTable` (Định danh bảng lưu trữ trong các mô hình cơ sở dữ liệu cũ)  
B. `@EntityName` (Thiết lập tên gọi đại diện cho thực thể trong ngữ cảnh hệ thống)  
C. `@Table` (Tùy biến tên bảng cơ sở dữ liệu tương ứng với lớp thực thể trong Java)  
D. `@Collection` (Định nghĩa tên tập hợp tài liệu trong các hệ quản trị NoSQL)  

**Câu 7 [Thông hiểu]:** Cơ chế "Tạo truy vấn từ tên phương thức" (Derived Query Methods) trong Spring Data hoạt động như thế nào?

A. Spring Data gọi trợ lý ảo trí tuệ nhân tạo để phán đoán nghiệp vụ của lập trình viên  
B. Lập trình viên bắt buộc phải cấu hình câu lệnh SQL trong tệp XML đi kèm của gói  
C. Tên phương thức chỉ mang tính quy ước đặt tên chứ không thực thi câu lệnh truy vấn nào  
D. Spring Data phân tích cú pháp tên phương thức và tự sinh câu lệnh SQL tương ứng  

**Câu 8 [Thông hiểu]:** Điểm vượt trội lớn nhất của Spring Data so với việc sử dụng `JdbcTemplate` thuần túy (ở Chương 12) là gì?

A. Chỉ cần khai báo interface, Spring Data tự tạo Dynamic Proxy triển khai toàn bộ mã  
B. Spring Data có khả năng lưu trữ đối tượng mà hoàn toàn không cần đến cơ sở dữ liệu  
C. Spring Data giúp mã nguồn Java tăng tốc độ xử lý tính toán lên gấp mười lần  
D. Spring Data chỉ có thể hoạt động được với các hệ quản trị cơ sở dữ liệu NoSQL  

**Câu 9 [Thông hiểu]:** Phương thức `findById(ID id)` trong giao diện `CrudRepository` trả về kiểu dữ liệu nào trong Java để hỗ trợ việc xử lý an toàn giá trị rỗng, tránh lỗi `NullPointerException`?

A. Trả về trực tiếp thực thể `T` và gán giá trị rỗng nếu không tìm thấy bản ghi  
B. `Optional<T>` (Bao bọc đối tượng giúp kiểm tra và xử lý an toàn khi giá trị rỗng)  
C. `List<T>` (Luôn trả về danh sách chứa một phần tử duy nhất nếu tìm thấy kết quả)  
D. `CompletableFuture<T>` (Đối tượng đại diện cho kết quả xử lý bất đồng bộ từ mạng)  

**Câu 10 [Thông hiểu]:** Phương thức `save(entity)` trong `CrudRepository` xử lý linh hoạt hai trường hợp chèn mới (INSERT) và cập nhật (UPDATE) dựa trên tiêu chí nào?

A. Dựa trên số lượng ký tự có trong các trường dữ liệu kiểu chuỗi của lớp thực thể  
B. Dựa trên việc so sánh dấu thời gian hiện tại của đồng hồ hệ thống máy chủ  
C. Luôn luôn thực thi câu lệnh INSERT trong tất cả mọi trường hợp gọi phương thức  
D. Kiểm tra @Id: nếu ID null thì thực thi INSERT, nếu ID đã có giá trị thì UPDATE  

**Câu 11 [Thông hiểu]:** Tại sao khi dùng `@Query` để thực thi câu lệnh UPDATE trong Spring Data JDBC, ta bắt buộc phải gắn thêm chú thích `@Modifying`?

A. Để tự động mã hóa các dữ liệu nhạy cảm trước khi gửi xuống cơ sở dữ liệu  
B. Để yêu cầu Spring Data tạm thời khóa toàn bộ bảng dữ liệu trong suốt giao dịch  
C. Báo hiệu cho framework biết đây là lệnh DML cần gọi executeUpdate thay vì SELECT  
D. Để kích hoạt tính năng nén dữ liệu giúp giảm lưu lượng truyền tải trên đường truyền  

**Câu 12 [Thông hiểu]:** Phân cấp giao diện nào sau đây thể hiện đúng kiến trúc kế thừa trong các kho lưu trữ của Spring Data?

A. `CrudRepository` $ightarrow$ `Repository` $ightarrow$ `PagingAndSortingRepository`  
B. `Repository` (marker) $ightarrow$ `CrudRepository` (CRUD) $ightarrow$ `PagingAndSortingRepository`  
C. `JpaRepository` $ightarrow$ `Repository` $ightarrow$ `CrudRepository`  
D. Không có bất kỳ mối quan hệ kế thừa phân cấp nào giữa các giao diện lưu trữ này  

**Câu 13 [Thông hiểu]:** Cú pháp tham số có tên (Named Parameters) trong câu lệnh `@Query` của Spring Data được biểu diễn như thế nào?

A. Sử dụng tiền tố dấu hỏi chấm kèm theo số thứ tự của tham số (ví dụ: `?1`, `?2`)  
B. Sử dụng cặp dấu ngoặc vuông bao quanh tên của tham số truyền vào (ví dụ: `[amount]`)  
C. Sử dụng ký hiệu phần trăm hai đầu để định dạng chuỗi mẫu (ví dụ: `%amount%`)  
D. Dấu hai chấm đi liền với tên tham số (ví dụ: `:amount`) trùng khớp tham số Java  

**Câu 14 [Thông hiểu]:** Khi bạn khai báo interface `public interface AccountRepository extends CrudRepository<Account, Long> {}`, đối tượng nào thực sự thực thi các câu lệnh cơ sở dữ liệu khi bạn tiêm `AccountRepository` vào một Service?

A. Một lớp mã nguồn Java tĩnh do bạn tự tay hiện thực bằng thư viện JDBC thuần túy  
B. Trình biên dịch javac của hệ thống tự động sinh ra mã bytecode nhị phân trên đĩa  
C. Dynamic Proxy do Spring Data khởi tạo lúc chạy, chứa mã truy xuất CSDL tương ứng  
D. Máy chủ ứng dụng Apache Tomcat tự động định tuyến các câu lệnh mạng trực tiếp  

**Câu 15 [Thông hiểu]:** Một phương thức trong repository có tên `findAccountsByAmountGreaterThan(BigDecimal threshold)`. Spring Data sẽ phân tích tên phương thức này và sinh ra câu lệnh SQL có mệnh đề WHERE như thế nào?

A. `WHERE amount > ?` (Ánh xạ từ khóa GreaterThan thành toán tử so sánh lớn hơn)  
B. `WHERE amount = ?` (Mặc định luôn ánh xạ thành phép so sánh bằng chính xác)  
C. `WHERE amount < ?` (Ánh xạ từ khóa GreaterThan thành toán tử so sánh nhỏ hơn)  
D. `WHERE amount BETWEEN ? AND ?` (Ánh xạ thành phép so sánh nằm trong khoảng giá trị)  

**Câu 16 [Vận dụng]:** Bạn có một lớp thực thể `Purchase` với khóa chính `id` thuộc kiểu `Integer`. Khai báo interface kho lưu trữ Spring Data nào sau đây là chuẩn cú pháp nhất?

A.
```java
public interface PurchaseRepository extends CrudRepository<Purchase, Integer> {
}
```
B.
```java
public class PurchaseRepository implements CrudRepository<Purchase, Integer> {
}
```
C.
```java
public interface PurchaseRepository extends CrudRepository<Integer, Purchase> {
}
```
D.
```java
public interface PurchaseRepository {
    void save(Purchase p);
}
```

**Câu 17 [Vận dụng]:** Bạn muốn viết một phương thức tìm kiếm tất cả các tài khoản có tên chính xác khớp với tham số truyền vào bằng cơ chế Derived Query Method. Khai báo nào sau đây là chính xác?

A. `List<Account> searchName(String name);`  
B. `Account queryName(String name);`  
C. `void getAccountWithName(String name);`  
D. `List<Account> findAccountsByName(String name);` (hoặc `List<Account> findByName(String name);`)  

**Câu 18 [Vận dụng]:** Bạn muốn thực thi câu lệnh cập nhật số dư cho tài khoản bằng câu lệnh SQL tùy chỉnh:
```java
@Modifying
@Query("UPDATE account SET amount = :amount WHERE id = :id")
void changeAmount(long id, BigDecimal amount);
```
Điều kiện tiên quyết để phương thức này hoạt động an toàn và đồng bộ dữ liệu vào CSDL khi được gọi từ Service là gì?

A. Phải chuyển đổi kiểu dữ liệu của biến `id` từ kiểu số `long` sang kiểu chuỗi `String`  
B. Phương thức gọi nó trong Service phải được đặt trong giao dịch có chú thích `@Transactional`  
C. Máy chủ cơ sở dữ liệu quan hệ phải được tiến hành khởi động lại sau mỗi lần thực thi  
D. Bắt buộc phải xóa bỏ chú thích `@Modifying` để tránh phát sinh lỗi xung đột dữ liệu  

**Câu 19 [Vận dụng]:** Trong lớp `TransferService`, bạn cần tìm một tài khoản theo ID bằng phương thức `accountRepository.findById(id)`. Nếu không tìm thấy tài khoản, bạn muốn ném ra ngoại lệ `AccountNotFoundException`. Đoạn mã nào sau đây chuẩn phong cách Functional Programming của Java 8?

A.
```java
Account acc = accountRepository.findById(id).get();
if (acc == null) throw new AccountNotFoundException();
```
B.
```java
Account acc = (Account) accountRepository.findById(id);
```
C.
```java
Account acc = accountRepository.findById(id)
    .orElseThrow(() -> new AccountNotFoundException("Không tìm thấy tài khoản"));
```
D.
```java
Account acc = accountRepository.findById(id).orElse(new Account());
```

**Câu 20 [Vận dụng]:** Trong tệp cấu hình Maven `pom.xml`, gói starter chuẩn xác nào của Spring Boot cần được khai báo để sử dụng Spring Data JDBC?

A. `spring-boot-starter-data-jdbc` (Starter chuẩn của Spring Boot cho module Spring Data JDBC)  
B. `spring-boot-starter-jdbc` (Starter chỉ bao gồm JdbcTemplate mà không có Spring Data)  
C. `spring-boot-starter-data-jpa` (Starter tích hợp công nghệ Hibernate ORM đầy đủ)  
D. `spring-data-core` (Gói thư viện lõi không chứa các phụ thuộc tự động cấu hình)  

---

## PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI (5 CÂU - 20 MỆNH ĐỀ)
*Đọc từng đoạn ngữ cảnh sau và xác định tính ĐÚNG hoặc SAI của từng mệnh đề a, b, c, d.*

**Câu 21:** Về sứ mệnh và kiến trúc tổng thể của Spring Data:
- **a)** [Nhận biết] Spring Data là một dự án bao trùm, cung cấp các module chuyên biệt cho cả CSDL quan hệ (JDBC, JPA) và CSDL NoSQL (MongoDB, Redis).  
- **b)** [Thông hiểu] Nhờ có Spring Data, cú pháp thao tác với kho lưu trữ (Repository) trở nên đồng nhất, giảm thiểu tối đa chi phí học tập khi chuyển đổi giữa các công nghệ lưu trữ.  
- **c)** [Thông hiểu] Khi sử dụng Spring Data, lập trình viên bắt buộc phải tự tay viết lớp cài đặt (`implements`) cho từng interface Repository.  
- **d)** [Vận dụng] Spring Data hoàn toàn tương thích và kết hợp nhịp nhàng với tính năng quản lý giao dịch `@Transactional` của Spring.  

**Câu 22:** Về giao diện `CrudRepository<T, ID>`:
- **a)** [Nhận biết] Tham số kiểu generic `T` đại diện cho lớp thực thể (Entity) và `ID` đại diện cho kiểu dữ liệu của khóa chính.  
- **b)** [Thông hiểu] Phương thức `findAll()` trong `CrudRepository` trả về một đối tượng `Iterable<T>` (có thể ép kiểu hoặc chuyển đổi thành `List<T>`).  
- **c)** [Thông hiểu] Phương thức `existsById(ID id)` thực thi một truy vấn tối ưu để kiểm tra sự tồn tại của bản ghi và trả về giá trị boolean `true`/`false`.  
- **d)** [Vận dụng] Để xóa một bản ghi theo khóa chính, ta bắt buộc phải truy vấn đối tượng đó lên trước rồi mới truyền vào phương thức `delete(T entity)`.  

**Câu 23:** Về cơ chế suy diễn truy vấn từ tên phương thức (Derived Query Methods):
- **a)** [Nhận biết] Tên phương thức phải bắt đầu bằng các tiền tố quy ước như `find...By`, `read...By`, `get...By`, `count...By`.  
- **b)** [Thông hiểu] Spring Data hỗ trợ các toán tử logic như `And`, `Or` để kết hợp nhiều tiêu chí tìm kiếm (ví dụ: `findByNameAndAmount`).  
- **c)** [Thông hiểu] Tên thuộc tính trong tên phương thức không cần trùng khớp với tên trường trong lớp Java, Spring Data sẽ tự động tìm trường có kiểu dữ liệu phù hợp nhất.  
- **d)** [Vận dụng] Nếu một tên phương thức bị sai cú pháp (ví dụ: `findByNonExistentField`), ứng dụng sẽ không bị lỗi biên dịch mà chỉ báo lỗi khi có request gọi đến phương thức đó.  

**Câu 24:** Về việc sử dụng chú thích `@Query` và `@Modifying`:
- **a)** [Nhận biết] Chú thích `@Query` cho phép lập trình viên viết câu lệnh SQL tường minh khi cơ chế Derived Query Method quá phức tạp.  
- **b)** [Thông hiểu] Các tham số trong câu lệnh `@Query` có thể được gắn kết bằng cơ chế Named Parameter với cú pháp `:tênThamSố`.  
- **c)** [Thông hiểu] Mọi câu lệnh SQL viết trong `@Query` đều mặc định coi là câu lệnh SELECT trừ khi có chú thích `@Modifying`.  
- **d)** [Vận dụng] Nếu một phương thức thực thi câu lệnh UPDATE có gắn `@Query` nhưng thiếu chú thích `@Modifying`, Spring Data sẽ ném ngoại lệ khi thực thi.  

**Câu 25:** Về ánh xạ lớp thực thể (Entity Mapping) trong Spring Data JDBC:
- **a)** [Nhận biết] Mỗi lớp thực thể trong Spring Data JDBC đại diện cho một bảng trong cơ sở dữ liệu quan hệ.  
- **b)** [Thông hiểu] Chú thích `@Id` được sử dụng để xác định trường nào là khóa chính duy nhất của thực thể.  
- **c)** [Thông hiểu] Theo mặc định, Spring Data JDBC ánh xạ tên lớp thành tên bảng bằng quy tắc chữ hoa toàn bộ (ví dụ: lớp `PurchaseOrder` thành bảng `PURCHASEORDER`).  
- **d)** [Vận dụng] Lớp thực thể cần cung cấp các phương thức getter và setter (hoặc hàm khởi tạo phù hợp) để Spring Data có thể đọc và ghi dữ liệu vào các trường.  

---

## PHẦN III: TRẢ LỜI NGẮN (6 CÂU)
*Điền câu trả lời ngắn gọn, chính xác vào chỗ trống theo yêu cầu của từng câu.*

**Câu 26 [Nhận biết]:** Giao diện generic cơ sở trong Spring Data cung cấp sẵn các phương thức CRUD chuẩn mực (như `save`, `findById`, `findAll`, `deleteById`) là gì?  
*(Quy định: Điền tên giao diện bằng tiếng Anh)*  
👉 **Trả lời:** ............................................................

**Câu 27 [Nhận biết]:** Chú thích nào được đặt trên trường dữ liệu của lớp thực thể để chỉ định nó là khóa chính (Primary Key) trong cơ sở dữ liệu?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 28 [Nhận biết]:** Chú thích nào bắt buộc phải đi kèm với `@Query` khi phương thức thực thi các câu lệnh thay đổi dữ liệu như UPDATE hoặc DELETE?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 29 [Thông hiểu]:** Kiểu dữ liệu nào được phương thức `findById()` trong `CrudRepository` trả về để đại diện cho một giá trị có thể tồn tại hoặc rỗng?  
*(Quy định: Điền tên kiểu dữ liệu trong Java)*  
👉 **Trả lời:** ............................................................

**Câu 30 [Thông hiểu]:** Cơ chế tự động phân tích tên phương thức (như `findByAmountGreaterThan`) để sinh câu lệnh SQL trong Spring Data được gọi là gì?  
*(Quy định: Điền thuật ngữ tiếng Anh gồm 3 từ, ví dụ: Derived Query Methods)*  
👉 **Trả lời:** ............................................................

**Câu 31 [Vận dụng]:** Cú pháp Named Parameter trong câu lệnh `@Query` để ánh xạ vào tham số `amount` của phương thức được viết như thế nào?  
*(Quy định: Điền ký tự tiền tố kèm tên tham số, ví dụ: :param)*  
👉 **Trả lời:** ............................................................

---

## 🔍 BẢNG ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT

<details>
<summary><b>BẤM VÀO ĐÂY ĐỂ XEM ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT</b></summary>

### BẢNG ĐÁP ÁN NHANH PHẦN I (MCQ)
| Câu | Đáp án | Mức độ | Câu | Đáp án | Mức độ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | **B** | Nhận biết | 11 | **C** | Thông hiểu |
| 2 | **C** | Nhận biết | 12 | **B** | Thông hiểu |
| 3 | **D** | Nhận biết | 13 | **D** | Thông hiểu |
| 4 | **B** | Nhận biết | 14 | **C** | Thông hiểu |
| 5 | **A** | Nhận biết | 15 | **A** | Thông hiểu |
| 6 | **C** | Nhận biết | 16 | **A** | Vận dụng |
| 7 | **D** | Thông hiểu | 17 | **D** | Vận dụng |
| 8 | **A** | Thông hiểu | 18 | **B** | Vận dụng |
| 9 | **B** | Thông hiểu | 19 | **C** | Vận dụng |
| 10 | **D** | Thông hiểu | 20 | **A** | Vận dụng |

---

### BẢNG ĐÁP ÁN NHANH PHẦN II (ĐÚNG / SAI)
- **Câu 21:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**
- **Câu 22:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **SAI**
- **Câu 23:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **SAI**
- **Câu 24:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **ĐÚNG**
- **Câu 25:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**

---

### BẢNG ĐÁP ÁN NHANH PHẦN III (TRẢ LỜI NGẮN)
- **Câu 26:** `CrudRepository` (hoặc `CrudRepository<T, ID>`)
- **Câu 27:** `@Id`
- **Câu 28:** `@Modifying`
- **Câu 29:** `Optional` (hoặc `Optional<T>`)
- **Câu 30:** `Derived Query Methods` (hoặc `Tạo truy vấn từ tên phương thức`)
- **Câu 31:** `:amount`

---

### HƯỚNG DẪN GIẢI CHI TIẾT

#### PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN
- **Câu 1: Đáp án B**
  - *Căn cứ tài liệu*: Trang 288-289 mục "What Spring Data is". Sứ mệnh của Spring Data là cung cấp trừu tượng thống nhất cho mọi công nghệ lưu trữ dữ liệu.
- **Câu 2: Đáp án C**
  - *Căn cứ tài liệu*: Trang 291 mục "How Spring Data works". `CrudRepository` cung cấp đầy đủ các thao tác CRUD cơ bản nhất.
- **Câu 3: Đáp án D**
  - *Căn cứ tài liệu*: Trang 294. Chú thích `@Id` (từ gói `org.springframework.data.annotation`) đánh dấu khóa chính.
- **Câu 4: Đáp án B**
  - *Căn cứ tài liệu*: Trang 303 mục "Using custom queries with @Query". Chú thích `@Query` dùng để định nghĩa câu lệnh SQL tùy biến.
- **Câu 5: Đáp án A**
  - *Căn cứ tài liệu*: Trang 304. Chú thích `@Modifying` bắt buộc đi kèm khi câu lệnh SQL trong `@Query` làm biến đổi dữ liệu (INSERT, UPDATE, DELETE).
- **Câu 6: Đáp án C**
  - *Căn cứ tài liệu*: Trang 294. Chú thích `@Table("tên_bảng")` tùy biến ánh xạ bảng trong CSDL.
- **Câu 7: Đáp án D**
  - *Căn cứ tài liệu*: Trang 301 mục "Writing methods that generate queries". Spring Data phân tích cú pháp các từ khóa trên tên phương thức để tự động sinh câu truy vấn SQL tương ứng.
- **Câu 8: Đáp án A**
  - *Căn cứ tài liệu*: Trang 290. Lập trình viên chỉ cần khai báo interface, Spring Data tự tạo proxy triển khai toàn bộ mã truy xuất.
- **Câu 9: Đáp án B**
  - *Căn cứ tài liệu*: `findById()` trả về `Optional<T>` giúp kiểm tra kết quả tồn tại một cách thanh lịch và tránh lỗi NPE.
- **Câu 10: Đáp án D**
  - *Căn cứ tài liệu*: Spring Data kiểm tra trường `@Id`: nếu ID là null/mặc định thì thực thi INSERT, nếu ID đã có giá trị thì thực thi UPDATE.
- **Câu 11: Đáp án C**
  - *Căn cứ tài liệu*: Trang 304. `@Modifying` báo cho framework gọi `executeUpdate()` thay vì xử lý như một câu lệnh truy vấn đọc SELECT.
- **Câu 12: Đáp án B**
  - *Căn cứ tài liệu*: Phân cấp chuẩn mực: `Repository` là giao diện đánh dấu $ightarrow$ `CrudRepository` thêm các hàm CRUD $ightarrow$ `PagingAndSortingRepository` thêm phân trang.
- **Câu 13: Đáp án D**
  - *Căn cứ tài liệu*: Trang 303. Cú pháp Named Parameter trong Spring Data sử dụng dấu hai chấm `:tênThamSố`.
- **Câu 14: Đáp án C**
  - *Căn cứ tài liệu*: Trang 291. Spring Data sinh ra một Dynamic Proxy tại runtime để hiện thực các phương thức của interface.
- **Câu 15: Đáp án A**
  - *Căn cứ tài liệu*: Từ khóa `GreaterThan` được ánh xạ tương ứng với toán tử `>` trong SQL.
- **Câu 16: Đáp án A**
  - *Căn cứ tài liệu*: Cú pháp chuẩn mực `public interface PurchaseRepository extends CrudRepository<Purchase, Integer>`.
- **Câu 17: Đáp án D**
  - *Căn cứ tài liệu*: Trang 301 Listing 14.12. Phương thức `List<Account> findAccountsByName(String name)` khớp với trường `name`.
- **Câu 18: Đáp án B**
  - *Căn cứ tài liệu*: Trang 304. Các thao tác sửa đổi dữ liệu qua `@Modifying` bắt buộc phải chạy trong ngữ cảnh giao dịch `@Transactional`.
- **Câu 19: Đáp án C**
  - *Căn cứ tài liệu*: Sử dụng phương thức `.orElseThrow(...)` của đối tượng `Optional`.
- **Câu 20: Đáp án A**
  - *Căn cứ tài liệu*: Trang 293. Starter chuẩn cho Spring Data JDBC là `spring-boot-starter-data-jdbc`.

---

#### PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI
- **Câu 21:**
  - a: **ĐÚNG** (Trang 288-289).
  - b: **ĐÚNG** (Trang 290).
  - c: **SAI** (Spring Data tự động tạo proxy triển khai, lập trình viên chỉ cần khai báo interface).
  - d: **ĐÚNG** (Tích hợp hoàn hảo với `@Transactional`).
- **Câu 22:**
  - a: **ĐÚNG** (Trang 291).
  - b: **ĐÚNG**.
  - c: **ĐÚNG** (Kiểm tra nhanh không cần tải toàn bộ entity).
  - d: **SAI** (Có thể dùng trực tiếp phương thức `deleteById(id)` mà không cần truy vấn entity trước).
- **Câu 23:**
  - a: **ĐÚNG** (Trang 301).
  - b: **ĐÚNG** (Hỗ trợ toán tử And, Or).
  - c: **SAI** (Tên trường trong phương thức bắt buộc phải khớp chính xác với thuộc tính trong lớp entity).
  - d: **SAI** (Spring Data kiểm tra cú pháp tên phương thức ngay khi khởi động ứng dụng; nếu sai thuộc tính sẽ ném lỗi khởi động ngay lập tức - Fail-Fast).
- **Câu 24:**
  - a: **ĐÚNG** (Trang 303).
  - b: **ĐÚNG** (Cú pháp `:tênThamSố`).
  - c: **ĐÚNG** (Mặc định hiểu là SELECT).
  - d: **ĐÚNG** (Trang 304: Bắt buộc phải có `@Modifying` cho các lệnh UPDATE/DELETE).
- **Câu 25:**
  - a: **ĐÚNG** (Trang 294).
  - b: **ĐÚNG** (Trang 294: Chú thích `@Id` của Spring Data).
  - c: **SAI** (Mặc định ánh xạ theo quy tắc snake_case / chữ thường, ví dụ `purchase_order`).
  - d: **ĐÚNG** (Cần thiết cho quá trình ánh xạ dữ liệu).

---

#### PHẦN III: TRẢ LỜI NGẮN
- **Câu 26:** `CrudRepository` (hoặc `CrudRepository<T, ID>`) (Trang 291).
- **Câu 27:** `@Id` (Trang 294).
- **Câu 28:** `@Modifying` (Trang 304).
- **Câu 29:** `Optional` (hoặc `Optional<T>`) (Trang 292).
- **Câu 30:** `Derived Query Methods` (hoặc `Tạo truy vấn từ tên phương thức`) (Trang 301).
- **Câu 31:** `:amount` (Trang 303).

</details>
