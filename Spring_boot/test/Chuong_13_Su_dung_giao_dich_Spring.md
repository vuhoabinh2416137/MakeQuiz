# 🎯 BỘ ĐỀ LUYỆN TẬP TOÀN DIỆN: CHƯƠNG 13 - SỬ DỤNG GIAO DỊCH TRONG ỨNG DỤNG SPRING
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

**Câu 1 [Nhận biết]:** Trong 4 đặc tính ACID của giao dịch cơ sở dữ liệu, đặc tính nào quy định: *"Tất cả các thao tác trong giao dịch phải được thực thi như một khối thống nhất, hoặc là tất cả cùng thành công, hoặc là tất cả cùng thất bại và bị hủy bỏ hoàn toàn mà không bao giờ có trạng thái dở dang một nửa"*?

A. Consistency (Tính nhất quán đảm bảo tuân thủ mọi quy tắc ràng buộc dữ liệu)  
B. Atomicity (Tính nguyên tử tuân theo quy tắc tất cả hoặc không có gì)  
C. Isolation (Tính cô lập ngăn ngừa sự can thiệp giữa các giao dịch đồng thời)  
D. Durability (Tính bền vững đảm bảo dữ liệu đã ghi nhận không bị mất mát)  

**Câu 2 [Nhận biết]:** Chú thích nào được sử dụng để kích hoạt tính năng quản lý giao dịch khai báo (Declarative Transaction Management) trên một phương thức hoặc toàn bộ các phương thức của một lớp trong Spring?

A. `@Transaction` (Chú thích tùy biến trong các gói thư viện tiện ích bên ngoài)  
B. `@TransactionalService` (Đánh dấu tầng dịch vụ có hỗ trợ xử lý giao dịch)  
C. `@Transactional` (Kích hoạt cơ chế quản lý giao dịch tự động của Spring Framework)  
D. `@EnableTransaction` (Chú thích cấu hình kích hoạt các bộ quản lý giao dịch)  

**Câu 3 [Nhận biết]:** Lệnh SQL tiêu chuẩn nào được máy chủ cơ sở dữ liệu thực thi để ghi nhận vĩnh viễn toàn bộ các thay đổi của giao dịch khi phương thức kết thúc thành công?

A. `BEGIN` (Lệnh đánh dấu điểm khởi đầu của một phiên giao dịch mới trong CSDL)  
B. `ROLLBACK` (Lệnh hủy bỏ mọi thao tác đã thực hiện và khôi phục lại dữ liệu)  
C. `SAVEPOINT` (Lệnh đánh dấu mốc trung gian để có thể hoàn nguyên một phần)  
D. `COMMIT` (Lệnh ghi nhận vĩnh viễn toàn bộ thay đổi dữ liệu vào cơ sở dữ liệu)  

**Câu 4 [Nhận biết]:** Lệnh SQL tiêu chuẩn nào được gửi tới cơ sở dữ liệu để hủy bỏ mọi thay đổi tạm thời và đưa dữ liệu trở về trạng thái nguyên vẹn trước khi giao dịch bắt đầu?

A. `COMMIT` (Ghi nhận vĩnh viễn tất cả các câu lệnh đã chạy thành công xuống đĩa)  
B. `ROLLBACK` (Hủy bỏ các thay đổi tạm thời và hoàn nguyên trạng thái dữ liệu gốc)  
C. `CANCEL` (Lệnh ngắt luồng truy vấn đang chờ phản hồi từ máy chủ cơ sở dữ liệu)  
D. `RESET` (Khởi tạo lại cấu hình kết nối của phiên làm việc hiện tại trong CSDL)  

**Câu 5 [Nhận biết]:** Cơ chế kỹ thuật nền tảng nào trong Spring được sử dụng phía sau hậu trường để đánh chặn các lời gọi phương thức có chú thích `@Transactional` và điều phối việc mở/đóng giao dịch?

A. Reflection API thuần túy (Chỉ đọc thông tin mô tả các chú thích lúc nạp lớp)  
B. Bytecode Decompiler (Dịch ngược mã nguồn bytecode của ứng dụng khi thực thi)  
C. Dynamic Proxy dựa trên Spring AOP (Bọc quanh bean để đánh chặn và quản lý giao dịch)  
D. Servlet Filter (Bộ lọc can thiệp vào các gói tin HTTP ở tầng máy chủ web nhúng)  

**Câu 6 [Thông hiểu]:** Theo hành vi mặc định của Spring Framework, phương thức có gắn chú thích `@Transactional` sẽ tự động thực hiện hoàn nguyên (Rollback) giao dịch khi gặp phải nhóm ngoại lệ nào?

A. Mọi loại ngoại lệ kể cả Checked Exception và Unchecked Exception trong Java  
B. Chỉ hoàn nguyên khi gặp các ngoại lệ kiểm tra (Checked Exception) của hệ thống  
C. Không bao giờ tự động hoàn nguyên trừ khi có lời gọi lệnh hoàn nguyên thủ công  
D. Ngoại lệ không kiểm tra (RuntimeException) và lỗi hệ thống nghiêm trọng (Error)  

**Câu 7 [Thông hiểu]:** Đặc tính "Tính cô lập" (Isolation) trong mô hình ACID có ý nghĩa quan trọng như thế nào đối với các ứng dụng xử lý dữ liệu đồng thời?

A. Đảm bảo toàn bộ dữ liệu nghiệp vụ không bao giờ bị mất mát khi xảy ra mất điện  
B. Ngăn các giao dịch đồng thời nhìn thấy trạng thái trung gian chưa commit của nhau  
C. Tự động mã hóa mật khẩu người dùng trước khi ghi nhận xuống cơ sở dữ liệu  
D. Ngăn chặn người dùng đăng nhập tài khoản từ hai trình duyệt web khác nhau  

**Câu 8 [Thông hiểu]:** Thuộc tính `rollbackFor` trong chú thích `@Transactional` được sử dụng nhằm mục đích chính nào?

A. Mở rộng quy tắc Rollback cho cả các Checked Exception (như Exception.class)  
B. Chỉ định số lần thử lại tối đa (Retry Count) khi giao dịch bị xung đột khóa  
C. Bỏ qua hoàn toàn việc kiểm tra ngoại lệ để giao dịch luôn luôn được commit  
D. Tự động đóng kết nối mạng tới cơ sở dữ liệu ngay khi có một cảnh báo nhỏ  

**Câu 9 [Thông hiểu]:** Nếu một phương thức nghiệp vụ gắn `@Transactional` ném ra ngoại lệ kiểm tra `java.io.IOException` (mà không cấu hình thuộc tính `rollbackFor`), hành vi nào sẽ diễn ra với giao dịch cơ sở dữ liệu?

A. Giao dịch sẽ tự động Rollback ngay lập tức để bảo vệ an toàn cho dữ liệu  
B. Hệ quản trị CSDL sẽ tự động khóa vĩnh viễn bảng dữ liệu vừa thao tác  
C. Giao dịch vẫn COMMIT bình thường vì IOException là Checked Exception mặc định không rollback  
D. Toàn bộ máy chủ ứng dụng Spring Boot sẽ lập tức dừng hoạt động và khởi động lại  

**Câu 10 [Thông hiểu]:** Tại sao chú thích `@Transactional` được khuyến nghị mạnh mẽ là **KHÔNG NÊN** đặt trên các phương thức có phạm vi truy cập là `private`?

A. Vì cú pháp ngôn ngữ Java cấm hoàn toàn việc đặt chú thích trên phương thức private  
B. Vì hệ quản trị cơ sở dữ liệu sẽ ném ra ngoại lệ sai cú pháp SQL khi thực thi  
C. Vì việc này sẽ làm cho thời gian biên dịch mã nguồn của ứng dụng tăng lên gấp 10 lần  
D. Vì Spring AOP Proxy không thể override phương thức private, khiến giao dịch bị bỏ qua  

**Câu 11 [Thông hiểu]:** Hiện tượng cạm bẫy "Self-invocation" (tự gọi nội bộ) ảnh hưởng như thế nào đến `@Transactional` trong cùng một lớp Bean?

A. Khiến cho giao dịch bị nhân đôi và commit hai lần liên tiếp xuống cơ sở dữ liệu  
B. Gọi qua `this` diễn ra trong instance thực, không qua Proxy nên giao dịch bị bỏ qua  
C. Khiến phương thức mục tiêu tự động chuyển sang thực thi trên một luồng nền mới  
D. Tự động chuyển đổi phương thức mục tiêu thành một hàm tĩnh (`static method`)  

**Câu 12 [Thông hiểu]:** Thuộc tính lan truyền mặc định (Propagation Behavior) của `@Transactional` trong Spring là gì?

A. `Propagation.REQUIRED` (Tham gia vào giao dịch hiện có hoặc tạo mới nếu chưa có)  
B. `Propagation.REQUIRES_NEW` (Luôn luôn tạm dừng giao dịch cha và tạo giao dịch mới)  
C. `Propagation.SUPPORTS` (Chạy có giao dịch nếu có sẵn, không thì chạy không giao dịch)  
D. `Propagation.NEVER` (Ném ra ngoại lệ nếu phát hiện có giao dịch đang hoạt động)  

**Câu 13 [Thông hiểu]:** Hành vi lan truyền `Propagation.REQUIRED` hoạt động như thế nào khi một phương thức giao dịch được gọi từ một phương thức khác?

A. Luôn luôn bắt buộc phải khởi tạo một giao dịch mới độc lập và tạm dừng giao dịch cha  
B. Luôn luôn ném ra ngoại lệ xung đột nếu phát hiện đang có một giao dịch đang chạy  
C. Tham gia vào giao dịch đang chạy nếu có; nếu chưa có thì khởi tạo giao dịch mới  
D. Không bao giờ sử dụng giao dịch và luôn thực thi các câu lệnh theo chế độ auto-commit  

**Câu 14 [Thông hiểu]:** Điểm khác biệt căn bản giữa `Propagation.REQUIRED` và `Propagation.REQUIRES_NEW` là gì?

A. `Propagation.REQUIRED` chỉ chạy trên MySQL, còn `REQUIRES_NEW` chạy độc quyền trên Oracle  
B. `Propagation.REQUIRES_NEW` hoàn toàn không hỗ trợ lệnh Rollback khi có ngoại lệ  
C. Hai thuộc tính lan truyền này hoàn toàn tương đương nhau về mọi mặt cơ chế hoạt động  
D. REQUIRES_NEW luôn tạm dừng giao dịch cha và tạo giao dịch mới độc lập hoàn toàn  

**Câu 15 [Thông hiểu]:** Nếu một phương thức gắn `@Transactional` thực thi khối lệnh `try-catch` và chủ động "nuốt" ngoại lệ (tức bắt ngoại lệ mà không ném tiếp ra ngoài), đối tượng Proxy của Spring sẽ phản ứng như thế nào?

A. Proxy không thấy ngoại lệ văng ra nên hiểu là thành công và gửi lệnh COMMIT về CSDL  
B. Vẫn tự động Rollback bình thường vì Proxy có khả năng can thiệp vào bộ nhớ trong  
C. Ném ra ngoại lệ `TransactionSuspendedException` và dừng hoàn toàn luồng nghiệp vụ  
D. Ngắt ngay lập tức kết nối socket mạng TCP của phiên giao dịch hiện tại  

**Câu 16 [Vận dụng]:** Bạn thiết kế dịch vụ chuyển khoản giữa hai tài khoản ngân hàng:
```java
@Service
public class TransferService {
    @Transactional
    public void transferMoney(long fromId, long toId, BigDecimal amount) {
        accountRepository.decreaseAmount(fromId, amount);
        if (true) {
            throw new RuntimeException("Lỗi mạng đột ngột!");
        }
        accountRepository.increaseAmount(toId, amount);
    }
}
```
Kết quả thực tế diễn ra trong cơ sở dữ liệu sau khi phương thức trên được thực thi là gì?

A. Tài khoản người gửi bị trừ tiền vĩnh viễn, trong khi người nhận không nhận được tiền  
B. RuntimeException kích hoạt ROLLBACK tự động, tiền người gửi được hoàn nguyên nguyên vẹn  
C. Người nhận vẫn nhận được tiền do cơ sở dữ liệu có cơ chế tự động bù trừ số dư  
D. Toàn bộ bảng tài khoản sẽ bị hệ thống khóa vĩnh viễn và không thể thực hiện giao dịch  

**Câu 17 [Vận dụng]:** Bạn muốn đảm bảo rằng phương thức ghi lịch sử kiểm toán `logAudit()` luôn luôn được lưu thành công vào CSDL kể cả khi giao dịch chuyển tiền chính bị thất bại và Rollback. Thuộc tính `propagation` nào nên được cấu hình cho phương thức `logAudit()`?

A. `@Transactional(propagation = Propagation.REQUIRED)` (Sẽ bị rollback chung với giao dịch cha)  
B. `@Transactional(propagation = Propagation.MANDATORY)` (Bắt buộc phải có giao dịch cha chạy sẵn)  
C. `@Transactional(propagation = Propagation.REQUIRES_NEW)` (Tạo giao dịch độc lập không bị rollback theo)  
D. `@Transactional(propagation = Propagation.NOT_SUPPORTED)` (Thực thi hoàn toàn ngoài giao dịch)  

**Câu 18 [Vận dụng]:** Để bảo vệ toàn diện một phương thức chuyển tiền trước mọi rủi ro ngoại lệ (kể cả ngoại lệ kiểm tra của thư viện bên thứ ba như lỗi tệp `IOException` hay lỗi `SQLException`), cách khai báo chú thích chuẩn mực nhất là:

A. `@Transactional(rollbackFor = Exception.class)` (Ép buộc Rollback cho mọi loại ngoại lệ)  
B. `@Transactional(noRollbackFor = RuntimeException.class)` (Bỏ qua hoàn nguyên ngoại lệ runtime)  
C. `@Transactional(readOnly = true)` (Chỉ định phương thức chỉ thực hiện các thao tác đọc dữ liệu)  
D. `@Transactional(timeout = 0)` (Thiết lập thời gian chờ tối đa bằng 0 giây cho giao dịch)  

**Câu 19 [Vận dụng]:** Lớp `OrderService` có hai phương thức:
```java
@Service
public class OrderService {
    public void processOrder() {
        this.saveOrderWithTransaction(); // Gọi nội bộ
    }

    @Transactional
    public void saveOrderWithTransaction() {
        // Thao tác chèn bảng orders và payment
    }
}
```
Khi client gọi `orderService.processOrder()`, tính năng quản lý giao dịch có được kích hoạt cho `saveOrderWithTransaction()` không?

A. Có, giao dịch vẫn được mở và commit hoàn toàn bình thường nhờ Spring AOP  
B. Có, nhưng giao dịch chỉ hỗ trợ các câu lệnh đọc dữ liệu SELECT đơn thuần  
C. Chương trình sẽ phát sinh lỗi biên dịch ngay tại dòng lệnh gọi con trỏ `this.`  
D. Không, do Self-invocation qua this không qua Proxy nên phương thức chạy không có giao dịch  

**Câu 20 [Vận dụng]:** Để giải quyết triệt để lỗi bỏ qua giao dịch do Self-invocation ở Câu 19 theo chuẩn thiết kế hướng đối tượng, cách tái cấu trúc nào sau đây là tốt nhất?

A. Tách `saveOrderWithTransaction()` sang một Service riêng và tiêm vào `OrderService`  
B. Đổi phương thức `saveOrderWithTransaction()` từ phạm vi `public` thành `private`  
C. Thay đổi kiểu dữ liệu trả về của phương thức từ kiểu `void` thành kiểu chuỗi `String`  
D. Bổ sung thêm từ khóa bất biến `final` vào trước phần khai báo tên lớp `OrderService`  

---

## PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI (5 CÂU - 20 MỆNH ĐỀ)
*Đọc từng đoạn ngữ cảnh sau và xác định tính ĐÚNG hoặc SAI của từng mệnh đề a, b, c, d.*

**Câu 21:** Về 4 đặc tính chuẩn ACID của giao dịch cơ sở dữ liệu:
- **a)** [Nhận biết] Tính nguyên tử (Atomicity) đảm bảo nguyên tắc "Tất cả hoặc không có gì" (All-or-Nothing).  
- **b)** [Thông hiểu] Tính nhất quán (Consistency) đảm bảo cơ sở dữ liệu không bao giờ vi phạm các ràng buộc toàn vẹn khóa ngoại hoặc kiểm tra dữ liệu sau khi commit.  
- **c)** [Thông hiểu] Tính bền vững (Durability) quy định rằng một khi giao dịch đã commit, các thay đổi sẽ không bao giờ bị mất đi kể cả khi máy chủ sập nguồn ngay sau đó.  
- **d)** [Vận dụng] Nếu một hệ thống không sử dụng giao dịch, dữ liệu tài chính có thể bị sai lệch vĩnh viễn khi có sự cố xảy ra ở bước giữa chừng của chuỗi xử lý.  

**Câu 22:** Về cơ chế AOP Proxy của chú thích `@Transactional`:
- **a)** [Nhận biết] Spring tự động tạo một đối tượng Proxy bọc ngoài bean Service khi phát hiện có chú thích `@Transactional`.  
- **b)** [Thông hiểu] Proxy đánh chặn cuộc gọi từ bên ngoài và gửi lệnh `BEGIN TRANSACTION` tới CSDL trước khi bàn giao quyền điều khiển cho phương thức service.  
- **c)** [Thông hiểu] Nếu phương thức service kết thúc êm thấm mà không có ngoại lệ, Proxy sẽ tự động gửi lệnh `COMMIT` tới CSDL.  
- **d)** [Vận dụng] Nếu gắn `@Transactional` trên một phương thức `public` của một lớp thông thường (không phải Spring Bean), Spring vẫn tự động tạo proxy và mở giao dịch như thường.  

**Câu 23:** Về các quy tắc hoàn nguyên (Rollback Rules) trong Spring:
- **a)** [Nhận biết] Mặc định Spring tự động Rollback cho tất cả các ngoại lệ kế thừa từ `RuntimeException`.  
- **b)** [Thông hiểu] Mặc định Spring sẽ tự động Rollback nếu phương thức ném ra một Checked Exception (như `SQLException` hoặc `ClassNotFoundException`).  
- **c)** [Thông hiểu] Thuộc tính `rollbackFor = Exception.class` mở rộng phạm vi hoàn nguyên cho mọi loại ngoại lệ xảy ra trong phương thức.  
- **d)** [Vận dụng] Nếu lập trình viên chủ động bắt ngoại lệ bằng `try-catch` và không ném lại ngoại lệ ra ngoài phương thức, Spring Proxy sẽ vẫn thực hiện COMMIT giao dịch.  

**Câu 24:** Về các thuộc tính lan truyền giao dịch (Transaction Propagation):
- **a)** [Nhận biết] Mặc định thuộc tính lan truyền là `Propagation.REQUIRED`.  
- **b)** [Thông hiểu] Với `Propagation.REQUIRED`, nếu phương thức con ném ngoại lệ làm hỏng giao dịch thì toàn bộ giao dịch của phương thức cha cũng sẽ bị rollback theo.  
- **c)** [Thông hiểu] Thuộc tính `Propagation.REQUIRES_NEW` tạm dừng giao dịch hiện tại và khởi tạo một giao dịch độc lập hoàn toàn mới.  
- **d)** [Vận dụng] Nếu giao dịch con được cấu hình `REQUIRES_NEW` bị rollback, giao dịch cha bắt buộc cũng phải bị rollback theo trong mọi trường hợp.  

**Câu 25:** Về các cạm bẫy thực tế và hạn chế khi sử dụng `@Transactional`:
- **a)** [Nhận biết] `@Transactional` chỉ có hiệu lực trên các phương thức có phạm vi truy cập `public`.  
- **b)** [Thông hiểu] Hiện tượng Self-invocation (gọi nội bộ giữa hai phương thức trong cùng một bean) sẽ khiến `@Transactional` bị vô hiệu hóa vì không đi qua Proxy.  
- **c)** [Thông hiểu] Đặt `@Transactional` trên lớp Controller được coi là một thực hành kiến trúc chuẩn mực hơn đặt ở tầng Service.  
- **d)** [Vận dụng] Để xử lý triệt để cạm bẫy Self-invocation, giải pháp sạch sẽ và chuẩn nguyên lý phân tách trách nhiệm nhất là tách phương thức cần giao dịch sang một lớp Service riêng biệt.  

---

## PHẦN III: TRẢ LỜI NGẮN (6 CÂU)
*Điền câu trả lời ngắn gọn, chính xác vào chỗ trống theo yêu cầu của từng câu.*

**Câu 26 [Nhận biết]:** Tên viết tắt gồm 4 chữ cái đại diện cho 4 tính chất tiêu chuẩn của một giao dịch cơ sở dữ liệu (Atomicity, Consistency, Isolation, Durability) là gì?  
*(Quy định: Điền 4 chữ cái viết hoa)*  
👉 **Trả lời:** ............................................................

**Câu 27 [Nhận biết]:** Chú thích nào trong Spring được gắn trên phương thức hoặc lớp để kích hoạt cơ chế quản lý giao dịch khai báo tự động?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 28 [Nhận biết]:** Lệnh SQL tiêu chuẩn nào được Spring Proxy gửi tới máy chủ CSDL để hủy bỏ mọi thay đổi tạm thời và đưa dữ liệu về trạng thái ban đầu khi giao dịch thất bại?  
*(Quy định: Điền tên lệnh SQL viết hoa)*  
👉 **Trả lời:** ............................................................

**Câu 29 [Thông hiểu]:** Theo mặc định, Spring chỉ tự động Rollback giao dịch khi gặp các ngoại lệ không kiểm tra (Unchecked) thuộc phân cấp lớp cha nào trong Java?  
*(Quy định: Điền tên lớp Java)*  
👉 **Trả lời:** ............................................................

**Câu 30 [Thông hiểu]:** Để yêu cầu Spring Rollback cho TẤT CẢ các loại ngoại lệ (bao gồm cả Checked Exception), thuộc tính nào được cấu hình trong chú thích `@Transactional`?  
*(Quy định: Điền cặp key = value, ví dụ: rollbackFor = Exception.class)*  
👉 **Trả lời:** ............................................................

**Câu 31 [Vận dụng]:** Nếu đặt chú thích `@Transactional` trên một phương thức có phạm vi truy cập là `private`, tính năng quản lý giao dịch của Spring AOP Proxy có hoạt động hay không?  
*(Quy định: Trả lời "Có" hoặc "Không")*  
👉 **Trả lời:** ............................................................

---

## 🔍 BẢNG ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT

<details>
<summary><b>BẤM VÀO ĐÂY ĐỂ XEM ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT</b></summary>

### BẢNG ĐÁP ÁN NHANH PHẦN I (MCQ)
| Câu | Đáp án | Mức độ | Câu | Đáp án | Mức độ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | **B** | Nhận biết | 11 | **B** | Thông hiểu |
| 2 | **C** | Nhận biết | 12 | **A** | Thông hiểu |
| 3 | **D** | Nhận biết | 13 | **C** | Thông hiểu |
| 4 | **B** | Nhận biết | 14 | **D** | Thông hiểu |
| 5 | **C** | Nhận biết | 15 | **A** | Thông hiểu |
| 6 | **D** | Thông hiểu | 16 | **B** | Vận dụng |
| 7 | **B** | Thông hiểu | 17 | **C** | Vận dụng |
| 8 | **A** | Thông hiểu | 18 | **A** | Vận dụng |
| 9 | **C** | Thông hiểu | 19 | **D** | Vận dụng |
| 10 | **D** | Thông hiểu | 20 | **A** | Vận dụng |

---

### BẢNG ĐÁP ÁN NHANH PHẦN II (ĐÚNG / SAI)
- **Câu 21:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **ĐÚNG**
- **Câu 22:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **SAI**
- **Câu 23:** a: **ĐÚNG** | b: **SAI** | c: **ĐÚNG** | d: **ĐÚNG**
- **Câu 24:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **SAI**
- **Câu 25:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**

---

### BẢNG ĐÁP ÁN NHANH PHẦN III (TRẢ LỜI NGẮN)
- **Câu 26:** `ACID` (Trang 276-277).
- **Câu 27:** `@Transactional` (Trang 277).
- **Câu 28:** `ROLLBACK` (Trang 278).
- **Câu 29:** `RuntimeException` (hoặc `Error`) (Trang 277).
- **Câu 30:** `rollbackFor = Exception.class` (Trang 285).
- **Câu 31:** `Không` (Do hạn chế của Spring AOP proxy).

---

### HƯỚNG DẪN GIẢI CHI TIẾT

#### PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN
- **Câu 1: Đáp án B**
  - *Căn cứ tài liệu*: Trang 276 mục "Transactions in Spring apps". Tính nguyên tử (Atomicity) đảm bảo nguyên tắc tất cả hoặc không có gì (All-or-Nothing).
- **Câu 2: Đáp án C**
  - *Căn cứ tài liệu*: Trang 277. Chú thích `@Transactional` kích hoạt cơ chế quản lý giao dịch khai báo trong Spring.
- **Câu 3: Đáp án D**
  - *Căn cứ tài liệu*: Trang 278 Hình 13.5. Lệnh `COMMIT` ghi nhận vĩnh viễn toàn bộ các thay đổi vào cơ sở dữ liệu.
- **Câu 4: Đáp án B**
  - *Căn cứ tài liệu*: Trang 278 Hình 13.5. Lệnh `ROLLBACK` hủy bỏ toàn bộ các câu lệnh đã chạy trong phạm vi giao dịch.
- **Câu 5: Đáp án C**
  - *Căn cứ tài liệu*: Trang 277. Spring sử dụng kỹ thuật Dynamic Proxy dựa trên AOP để bao bọc bean và đánh chặn phương thức.
- **Câu 6: Đáp án D**
  - *Căn cứ tài liệu*: Trang 277 và 285. Mặc định Spring chỉ rollback đối với `RuntimeException` và `Error`.
- **Câu 7: Đáp án B**
  - *Căn cứ tài liệu*: Trang 277. Isolation ngăn chặn các giao dịch đồng thời đọc phải dữ liệu rác (Dirty Read) hoặc can thiệp dữ liệu chưa commit của nhau.
- **Câu 8: Đáp án A**
  - *Căn cứ tài liệu*: Trang 285 mục "Rollback rules". Thuộc tính `rollbackFor` mở rộng điều kiện rollback cho cả các Checked Exceptions.
- **Câu 9: Đáp án C**
  - *Căn cứ tài liệu*: `IOException` là một checked exception; nếu không có `rollbackFor`, Spring mặc định vẫn gửi lệnh COMMIT về CSDL.
- **Câu 10: Đáp án D**
  - *Căn cứ tài liệu*: Proxy của Spring không thể can thiệp hoặc override các phương thức `private`, khiến `@Transactional` bị vô hiệu hóa hoàn toàn.
- **Câu 11: Đáp án B**
  - *Căn cứ tài liệu*: Lời gọi nội bộ qua con trỏ `this` chạy trực tiếp trong target object mà không đi qua proxy bọc ngoài.
- **Câu 12: Đáp án A**
  - *Căn cứ tài liệu*: Mặc định của Spring là `Propagation.REQUIRED`.
- **Câu 13: Đáp án C**
  - *Căn cứ tài liệu*: `REQUIRED` tham gia vào giao dịch hiện có hoặc tạo mới nếu chưa có.
- **Câu 14: Đáp án D**
  - *Căn cứ tài liệu*: `REQUIRES_NEW` luôn tạo một giao dịch độc lập mới và tạm dừng giao dịch cha đang chạy.
- **Câu 15: Đáp án A**
  - *Căn cứ tài liệu*: Nếu nuốt ngoại lệ bằng `try-catch`, Proxy không bắt được ngoại lệ văng ra nên sẽ commit giao dịch.
- **Câu 16: Đáp án B**
  - *Căn cứ tài liệu*: Trang 284-285. Ngoại lệ `RuntimeException` kích hoạt lệnh ROLLBACK tự động, bảo vệ tiền của tài khoản nguồn.
- **Câu 17: Đáp án C**
  - *Căn cứ tài liệu*: `REQUIRES_NEW` chạy trong giao dịch riêng rẽ, không bị rollback khi giao dịch chính gặp sự cố.
- **Câu 18: Đáp án A**
  - *Căn cứ tài liệu*: Cú pháp chuẩn `@Transactional(rollbackFor = Exception.class)`.
- **Câu 19: Đáp án D**
  - *Căn cứ tài liệu*: Lỗi Self-invocation kinh điển do vượt qua Proxy.
- **Câu 20: Đáp án A**
  - *Căn cứ tài liệu*: Tách phương thức sang Service riêng biệt để cuộc gọi đi qua Spring Proxy là giải pháp sạch sẽ nhất.

---

#### PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI
- **Câu 21:**
  - a: **ĐÚNG** (Trang 276).
  - b: **ĐÚNG** (Trang 277).
  - c: **ĐÚNG** (Trang 277).
  - d: **ĐÚNG** (Trang 275-276).
- **Câu 22:**
  - a: **ĐÚNG** (Trang 277).
  - b: **ĐÚNG** (Trang 278).
  - c: **ĐÚNG** (Trang 278).
  - d: **SAI** (Spring AOP chỉ áp dụng được cho các bean do Spring quản lý trong context).
- **Câu 23:**
  - a: **ĐÚNG** (Trang 277).
  - b: **SAI** (Checked exceptions mặc định không gây rollback).
  - c: **ĐÚNG** (Trang 285).
  - d: **ĐÚNG** (Proxy không thấy lỗi thì sẽ commit).
- **Câu 24:**
  - a: **ĐÚNG**.
  - b: **ĐÚNG** (Chung một giao dịch vật lý).
  - c: **ĐÚNG** (Tạo giao dịch độc lập mới).
  - d: **SAI** (Nếu giao dịch cha bắt ngoại lệ của con thì cha vẫn có thể commit bình thường).
- **Câu 25:**
  - a: **ĐÚNG** (Hạn chế của cơ chế proxy Spring).
  - b: **ĐÚNG** (Bỏ qua đối tượng proxy).
  - c: **SAI** (Giao dịch nên đặt ở tầng Service chứa logic nghiệp vụ, không nên đặt ở Controller).
  - d: **ĐÚNG** (Tái cấu trúc theo Single Responsibility Principle).

---

#### PHẦN III: TRẢ LỜI NGẮN
- **Câu 26:** `ACID` (Trang 276-277).
- **Câu 27:** `@Transactional` (Trang 277).
- **Câu 28:** `ROLLBACK` (Trang 278).
- **Câu 29:** `RuntimeException` (hoặc `Error`) (Trang 277).
- **Câu 30:** `rollbackFor = Exception.class` (Trang 285).
- **Câu 31:** `Không` (Do hạn chế của Spring AOP proxy).

</details>
