# 🎯 BỘ ĐỀ LUYỆN TẬP TOÀN DIỆN: CHƯƠNG 4 - NGỮ CẢNH SPRING: SỬ DỤNG CÁC TẦNG TRỪU TƯỢNG
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

**Câu 1 [Nhận biết]:** Trong lập trình hướng đối tượng với Java, khái niệm nào đại diện cho một "bản hợp đồng" (contract) định nghĩa các chữ ký phương thức cần thực hiện mà không chứa phần cài đặt chi tiết?

A. Class (Lớp cụ thể định nghĩa đầy đủ thuộc tính và cài đặt các hành vi)  
B. Interface (Giao diện trừu tượng quy định hợp đồng hành vi giữa các lớp)  
C. Package (Cơ chế đóng gói nhằm phân chia không gian tên của các tệp nguồn)  
D. Record (Cấu trúc dữ liệu bất biến dùng để lưu trữ trạng thái thuần túy)  

**Câu 2 [Nhận biết]:** Chú thích định hình nào sau đây được thiết kế chuyên biệt để đánh dấu các lớp thuộc tầng lưu trữ dữ liệu (Data Persistence), đồng thời tự động kích hoạt tính năng chuyển đổi ngoại lệ (Exception Translation)?

A. `@Component` (Chú thích cơ sở dùng cho các thành phần quản trị chung)  
B. `@Service` (Đánh dấu các lớp chứa quy tắc và luồng nghiệp vụ cốt lõi)  
C. `@Repository` (Đánh dấu tầng lưu trữ và dịch chuyển đổi ngoại lệ CSDL)  
D. `@DataStore` (Chú thích tùy biến trong các mô hình lưu trữ phi quan hệ)  

**Câu 3 [Nhận biết]:** Chú thích định hình nào được sử dụng để làm nổi bật vai trò của một lớp chứa các logic và quy tắc nghiệp vụ (Business Logic) cốt lõi của ứng dụng trong kiến trúc nhiều tầng?

A. `@Service` (Đại diện cho các lớp cung cấp dịch vụ và xử lý quy tắc nghiệp vụ)  
B. `@Controller` (Đại diện cho tầng tiếp nhận yêu cầu và điều hướng luồng dữ liệu)  
C. `@Repository` (Đại diện cho tầng truy vấn và tương tác với hệ thống lưu trữ)  
D. `@Configuration` (Đại diện cho lớp khai báo cấu hình và định nghĩa các bean)  

**Câu 4 [Nhận biết]:** Nhóm đối tượng nào sau đây trong một ứng dụng doanh nghiệp **KHÔNG NÊN** đưa vào Spring Context để Spring quản lý vòng đời như các bean thông thường?

A. Tầng điều khiển (Controllers xử lý yêu cầu HTTP và chuyển tiếp dữ liệu)  
B. Tầng dịch vụ (Services thực thi logic nghiệp vụ và tính toán giao dịch)  
C. Tầng kho lưu trữ (Repositories thao tác trực tiếp với cơ sở dữ liệu)  
D. Các đối tượng mô hình dữ liệu (Models / Entities / DTOs chứa dữ liệu biến động)  

**Câu 5 [Nhận biết]:** Khi một interface có từ 2 lớp hiện thực trở lên cùng được đăng ký làm bean trong ngữ cảnh, nếu không dùng `@Primary` hay `@Qualifier`, Spring sẽ ném ra ngoại lệ nào khi tiêm phụ thuộc?

A. `NoSuchBeanDefinitionException` (Không tìm thấy bất kỳ bean nào phù hợp)  
B. `NoUniqueBeanDefinitionException` (Có nhiều bean cùng thỏa mãn nhưng không rõ chọn bean nào)  
C. `BeanCreationException` (Phát sinh lỗi nội bộ trong quá trình khởi tạo đối tượng)  
D. `NullPointerException` (Lỗi truy cập vào tham chiếu rỗng trong quá trình chạy)  

**Câu 6 [Thông hiểu]:** Theo nguyên lý thiết kế vàng được phân tích ở Mục 4.1 trong tài liệu, đối tượng sử dụng (ví dụ `DeliveryDetailsPrinter`) chỉ nên biết đối tượng được sử dụng:

A. LÀM NHƯ THẾ NÀO (how) về mặt thuật toán nội bộ chứ không cần biết LÀM CÁI GÌ (what)  
B. Được lưu trữ ở địa chỉ vùng nhớ ô nhớ nào trong bộ nhớ Heap của máy ảo Java khi chạy  
C. LÀM CÁI GÌ (what) thông qua hợp đồng hành vi chứ không nên bị ràng buộc vào cách LÀM NHƯ THẾ NÀO (how)  
D. Được biên dịch bởi trình biên dịch của hãng nào và cài đặt bằng phiên bản Java cụ thể nào  

**Câu 7 [Thông hiểu]:** Lợi ích lớn nhất của việc cho lớp dịch vụ `CommentService` phụ thuộc vào interface `CommentRepository` thay vì phụ thuộc trực tiếp vào lớp cụ thể `DBCommentRepository` là gì?

A. Tăng gấp đôi tốc độ thực thi các câu lệnh truy vấn SQL nhờ tối ưu hóa bộ nhớ đệm  
B. Giúp mã nguồn tự động biên dịch sang mã máy C++ để chạy trực tiếp trên hệ điều hành  
C. Loại bỏ hoàn toàn sự cần thiết của việc cấu hình trình điều khiển JDBC trong ứng dụng  
D. Giúp tách rời (decouple) hai lớp, dễ dàng thay đổi công nghệ lưu trữ mà không sửa lớp dịch vụ  

**Câu 8 [Thông hiểu]:** Tại sao các đối tượng thực thể (Entity) hoặc đối tượng truyền dữ liệu (DTO) như `Comment` lại được khuyến nghị tạo thủ công bằng toán tử `new` thay vì để Spring quản lý trong context?

A. Vì các đối tượng này đại diện cho dữ liệu cụ thể, có trạng thái thay đổi liên tục theo từng yêu cầu  
B. Vì máy ảo Spring cấm hoàn toàn việc đưa các lớp có chứa phương thức getter và setter vào ngữ cảnh  
C. Vì ngôn ngữ Java quy định rằng chỉ các lớp trừu tượng mới được phép quản lý bởi IoC container  
D. Vì việc để Spring quản lý các lớp mô hình dữ liệu sẽ làm tiêu hao toàn bộ dung lượng ổ cứng  

**Câu 9 [Thông hiểu]:** Điểm giống nhau bản chất về mặt kỹ thuật giữa `@Component`, `@Service` và `@Repository` trong Spring Framework là gì?

A. Cả ba chú thích đều bắt buộc tất cả các phương thức khai báo bên trong phải là phương thức tĩnh  
B. Cả ba chú thích đều chỉ hoạt động được khi ứng dụng được triển khai trên máy chủ Apache Tomcat  
C. Cả ba chú thích đều là Spring bean, vì `@Service` và `@Repository` được gắn siêu chú thích `@Component`  
D. Cả ba chú thích đều kích hoạt tính năng tự động chuyển đổi ngoại lệ truy vấn cơ sở dữ liệu  

**Câu 10 [Thông hiểu]:** Tính năng "Chuyển đổi ngoại lệ" (Exception Translation) do `@Repository` kích hoạt mang lại giá trị kiến trúc quan trọng nào sau đây?

A. Tự động dịch toàn bộ các thông điệp thông báo lỗi SQL sang ngôn ngữ bản địa của người dùng  
B. Tự động tắt mọi cảnh báo lỗi khi truy vấn cơ sở dữ liệu thất bại để ứng dụng không bị sập  
C. Tự động mã hóa và ẩn danh toàn bộ các tham số nhạy cảm trong câu lệnh SQL trước khi gửi đi  
D. Bắt ngoại lệ kiểm tra đặc thù CSDL (`SQLException`) và chuyển thành ngoại lệ không kiểm tra của Spring  

**Câu 11 [Thông hiểu]:** Nếu một interface `SortingAlgorithm` có hai lớp hiện thực là `BubbleSort` và `QuickSort`, và lớp `QuickSort` được đánh dấu bằng `@Primary`, điều gì xảy ra khi lớp `SearchService` khai báo tiêm:
```java
@Autowired
private SortingAlgorithm sortingAlgorithm;
```

A. Bean `QuickSort` sẽ được tự động chọn và tiêm vào nhờ có chú thích chỉ định ưu tiên `@Primary`  
B. Spring lập tức ném ra ngoại lệ `NoUniqueBeanDefinitionException` vì phát hiện hai bean cùng kiểu  
C. Bean `BubbleSort` sẽ luôn luôn được chọn vì có tên đứng trước theo thứ tự bảng chữ cái alphabet  
D. Cả hai bean đều bị loại bỏ khỏi context và trường `sortingAlgorithm` sẽ nhận giá trị null  

**Câu 12 [Thông hiểu]:** Khi nào lập trình viên nên sử dụng chú thích gốc `@Component` thay vì dùng các chuyên biệt hóa như `@Service` hay `@Repository`?

A. Khi lớp đó trực tiếp thực hiện các câu truy vấn cơ sở dữ liệu thông qua giao tiếp JDBC thuần túy  
B. Khi lớp đó đóng vai trò tiếp nhận và xác thực các yêu cầu gửi đến từ trình duyệt web của người dùng  
C. Khi lớp đó chứa đựng toàn bộ các quy tắc tính toán nghiệp vụ cốt lõi của bài toán doanh nghiệp  
D. Khi lớp đó là một tiện ích kỹ thuật chung (Utility, Helper, Listener...) không thuộc phân tầng cụ thể  

**Câu 13 [Thông hiểu]:** Mô hình kiến trúc phân tầng chuẩn mực trong ứng dụng Spring doanh nghiệp tuân theo thứ tự điều hướng luồng dữ liệu nào sau đây?

A. Repository (tầng dữ liệu) $ightarrow$ Controller (tầng điều khiển) $ightarrow$ Service (tầng nghiệp vụ) $ightarrow$ Database  
B. Database $ightarrow$ Controller (tầng điều khiển) $ightarrow$ Repository (tầng dữ liệu) $ightarrow$ Service (tầng nghiệp vụ)  
C. Controller (tầng điều khiển) $ightarrow$ Service (tầng nghiệp vụ) $ightarrow$ Repository (tầng dữ liệu) $ightarrow$ Database  
D. Service (tầng nghiệp vụ) $ightarrow$ Repository (tầng dữ liệu) $ightarrow$ Controller (tầng điều khiển) $ightarrow$ Client  

**Câu 14 [Thông hiểu]:** Nguyên lý Đảo ngược phụ thuộc (Dependency Inversion Principle - chữ D trong SOLID) được thể hiện như thế nào trong thiết kế của Chương 4?

A. Cả hai module cấp cao (`CommentService`) và module cấp thấp (`DBCommentRepository`) đều phụ thuộc vào trừu tượng  
B. Module cấp thấp kế thừa trực tiếp toàn bộ các phương thức công khai do module cấp cao định nghĩa  
C. Tất cả các lớp trong hệ thống đều bị cấm chứa hàm khởi tạo và phải khởi tạo qua phương thức clone  
D. Toàn bộ các trường dữ liệu nội bộ đều phải chuyển đổi sang phạm vi truy cập công khai `public`  

**Câu 15 [Vận dụng]:** Lớp `PaymentService` cần gọi một cổng thanh toán. Trong context có hai bean hiện thực `PaymentGateway`: `"paypalGateway"` và `"vnpayGateway"`. Bạn muốn cấu hình để mặc định hệ thống luôn dùng `"vnpayGateway"`, nhưng nếu một service khác cần thì vẫn có thể chỉ định rõ `"paypalGateway"`. Giải pháp thiết kế nào sau đây là tối ưu nhất?

A. Xóa bỏ hoàn toàn lớp `PaypalGateway` để loại bỏ nguy cơ phát sinh xung đột định nghĩa trong ngữ cảnh  
B. Đánh dấu `"vnpayGateway"` bằng `@Primary`, và ở nơi cần dùng PayPal thì gắn thêm `@Qualifier("paypalGateway")`  
C. Viết gộp chung toàn bộ mã nguồn của cả hai cổng thanh toán vào bên trong một lớp dịch vụ đơn lẻ  
D. Đặt tên phương thức khởi tạo của `vnpayGateway` trùng khớp hoàn toàn với tên của lớp `PaymentService`  

**Câu 16 [Vận dụng]:** Bạn đang viết bài kiểm thử đơn vị độc lập (Unit Test) cho lớp `CommentService`:
```java
public class CommentService {
    private final CommentRepository commentRepository;
    private final CommentNotificationProxy notificationProxy;

    public CommentService(CommentRepository commentRepository, 
                          CommentNotificationProxy notificationProxy) {
        this.commentRepository = commentRepository;
        this.notificationProxy = notificationProxy;
    }
}
```
Nhờ vào việc lập trình hướng giao diện (Program to Interfaces), bài test của bạn có lợi thế lớn nào?

A. Bắt buộc lập trình viên phải dựng một container Docker chứa cơ sở dữ liệu thật trước khi kiểm thử  
B. Trình biên dịch sẽ tự động viết toàn bộ các câu lệnh khẳng định (assert) mà không cần code  
C. Dễ dàng tạo các đối tượng giả lập (Mock) hiện thực interface để kiểm thử cô lập logic nghiệp vụ  
D. Có thể bỏ qua toàn bộ các ngoại lệ về kiểm tra kiểu dữ liệu trong suốt quá trình chạy kiểm thử  

**Câu 17 [Vận dụng]:** Ứng dụng của bạn hiện chỉ gửi thông báo bình luận qua Email. Trong tương lai, hệ thống muốn bổ sung thêm tính năng gửi tin nhắn SMS và gửi Push Notification lên điện thoại. Thiết kế nào sau đây giúp hệ thống dễ mở rộng nhất mà không vi phạm nguyên lý Open/Closed (OCP)?

A. Viết gộp toàn bộ logic gửi Email, SMS và Push Notification vào một hàm duy nhất trong `CommentService`  
B. Xây dựng 3 lớp hoàn toàn tách biệt không có giao diện chung và tiêm cả 3 đối tượng vào `CommentService`  
C. Loại bỏ hoàn toàn tính năng gửi thông báo để giữ cho kiến trúc hệ thống luôn đơn giản và tinh gọn  
D. Định nghĩa interface `CommentNotificationProxy` rồi tạo các lớp riêng biệt hiện thực interface đó  

**Câu 18 [Vận dụng]:** Trong Spring, nếu bạn khai báo tiêm một danh sách các interface:
```java
@Service
public class CommentService {
    private final List<CommentNotificationProxy> notificationProxies;

    public CommentService(List<CommentNotificationProxy> notificationProxies) {
        this.notificationProxies = notificationProxies;
    }
}
```
Spring Context sẽ xử lý trường hợp này như thế nào nếu trong ngữ cảnh có 3 bean khác nhau cùng hiện thực interface `CommentNotificationProxy`?

A. Tự động thu thập toàn bộ 3 bean đó và tiêm tất cả vào danh sách `notificationProxies` theo thứ tự phù hợp  
B. Ném ra ngoại lệ `NoUniqueBeanDefinitionException` vì Spring không thể quyết định chọn một bean duy nhất  
C. Chỉ chọn tiêm bean được khai báo đầu tiên và bỏ qua hoàn toàn hai bean còn lại trong ngữ cảnh  
D. Khởi tạo một danh sách rỗng (`Collections.emptyList()`) và không thực hiện gán bất kỳ bean nào  

**Câu 19 [Vận dụng]:** Một lập trình viên mới quyết định gắn chú thích `@Component` lên lớp thực thể `Comment`:
```java
@Component
public class Comment {
    private String author;
    private String text;
}
```
Hậu quả nghiêm trọng nào sẽ xảy ra nếu làm như vậy trong một ứng dụng web phục vụ hàng ngàn người dùng đồng thời?

A. Máy chủ ứng dụng sẽ sập ngay khi khởi động vì Spring từ chối nạp các lớp có thuộc tính kiểu String  
B. Vì bean là Singleton, mọi yêu cầu sẽ dùng chung một đối tượng, dẫn đến ghi đè dữ liệu lẫn nhau (Race Condition)  
C. Toàn bộ các bảng trong cơ sở dữ liệu quan hệ sẽ bị xóa sạch do cơ chế bảo vệ của container  
D. Ứng dụng sẽ tự động chuyển đổi giao diện từ nền tảng Web sang ứng dụng Desktop Swing độc lập  

**Câu 20 [Vận dụng]:** Quan sát đoạn mã cấu hình sau:
```java
@Configuration
public class ProjectConfig {
    @Bean
    public CommentRepository dbCommentRepository() {
        return new DBCommentRepository();
    }

    @Bean
    public CommentRepository fileCommentRepository() {
        return new FileCommentRepository();
    }

    @Bean
    public CommentService commentService(CommentRepository dbCommentRepository) {
        return new CommentService(dbCommentRepository, null);
    }
}
```
Phương thức `commentService` sẽ nhận bean nào vào làm đối số và tại sao?

A. Nhận `fileCommentRepository` vì nó được định nghĩa sau cùng trong tệp cấu hình của ứng dụng  
B. Nhận `dbCommentRepository` vì tên tham số trùng khớp với tên phương thức định nghĩa bean đó  
C. Báo lỗi `NoUniqueBeanDefinitionException` vì bắt buộc phải có chú thích tường minh `@Qualifier`  
D. Không bean nào được tiêm vào phương thức, tham số `dbCommentRepository` sẽ mang giá trị null  

---

## PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI (5 CÂU - 20 MỆNH ĐỀ)
*Đọc từng đoạn ngữ cảnh sau và xác định tính ĐÚNG hoặc SAI của từng mệnh đề a, b, c, d.*

**Câu 21:** Về việc sử dụng Interface để trừu tượng hóa các tầng trong ứng dụng Spring:
- **a)** [Nhận biết] Interface định nghĩa "bản hợp đồng" về các hành vi mà một thành phần cam kết cung cấp cho các thành phần khác.  
- **b)** [Thông hiểu] Nhờ có Interface, module tiêu thụ (ví dụ `CommentService`) hoàn toàn không cần phụ thuộc vào bản cài đặt cụ thể (Implementation class).  
- **c)** [Thông hiểu] Việc sử dụng Interface làm cho việc viết Unit Test trở nên khó khăn hơn vì lập trình viên không thể biết được mã nguồn thật sự chạy bên dưới.  
- **d)** [Vận dụng] Lập trình hướng giao diện (Programming to Interfaces) là nền tảng cốt lõi giúp hệ thống tuân thủ nguyên lý Đảo ngược phụ thuộc (DIP) và nguyên lý Mở/Đóng (OCP).  

**Câu 22:** Về việc phân biệt đối tượng cần quản lý bởi Spring (Beans) và đối tượng dữ liệu (Models/DTOs):
- **a)** [Nhận biết] Các lớp dịch vụ (`@Service`), lớp điều khiển (`@Controller`) và kho lưu trữ (`@Repository`) là những đối tượng nên được quản lý bởi Spring Context.  
- **b)** [Thông hiểu] Các đối tượng thực thể (Entities/DTOs) như `Comment`, `Order`, `User` nên được đánh dấu bằng `@Component` để Spring tự động quản lý vòng đời.  
- **c)** [Thông hiểu] Các đối tượng mô hình dữ liệu chứa thông tin biến đổi theo từng người dùng hoặc từng bản ghi nên được tạo động bằng toán tử `new` trong luồng xử lý.  
- **d)** [Vận dụng] Đưa các đối tượng mang trạng thái cá nhân (stateful data) vào làm Singleton Bean trong Spring Context là một lỗi kiến trúc nghiêm trọng dẫn đến sai lệch dữ liệu trong môi trường đa luồng.  

**Câu 23:** Về các chú thích định hình (Stereotype Annotations) `@Component`, `@Service`, `@Repository`:
- **a)** [Nhận biết] Cả `@Service` và `@Repository` đều là các chuyên biệt hóa (specializations) của chú thích cơ sở `@Component`.  
- **b)** [Thông hiểu] Về mặt kỹ thuật đăng ký và khởi tạo bean trong Spring IoC Container, `@Component`, `@Service` và `@Repository` đều tạo ra các Spring Bean tương đương nhau.  
- **c)** [Thông hiểu] Việc sử dụng `@Service` và `@Repository` giúp mã nguồn rõ ràng về mặt ngữ nghĩa (semantic), giúp các lập trình viên khác nhận biết ngay vai trò của lớp trong kiến trúc nhiều tầng.  
- **d)** [Vận dụng] Chú thích `@Repository` hoàn toàn không có thêm bất kỳ tính năng kỹ thuật nào khác so với `@Component`, nó chỉ thuần túy đóng vai trò là một nhãn đánh dấu trực quan.  

**Câu 24:** Về kỹ thuật tiêm phụ thuộc qua Interface khi có nhiều lớp hiện thực:
- **a)** [Nhận biết] Khi tiêm một phụ thuộc, ta nên khai báo kiểu của biến là kiểu Interface thay vì kiểu của lớp cụ thể.  
- **b)** [Thông hiểu] Nếu có 2 lớp cùng hiện thực một interface và đều là bean, Spring sẽ tự động chọn lớp có tên xuất hiện trước theo thứ tự bảng chữ cái nếu không có `@Primary`.  
- **c)** [Thông hiểu] `@Qualifier` có thể được đặt tại điểm tiêm phụ thuộc để chỉ định rõ ràng tên của bản cài đặt cụ thể mà ta mong muốn sử dụng.  
- **d)** [Vận dụng] Spring hỗ trợ tiêm toàn bộ các bean hiện thực của một interface vào một trường có kiểu `List<Interface>` hoặc `Collection<Interface>`.  

**Câu 25:** Về tính năng Chuyển đổi ngoại lệ (Exception Translation) của `@Repository`:
- **a)** [Nhận biết] Chú thích `@Repository` được tích hợp sẵn khả năng hỗ trợ chuyển đổi ngoại lệ truy cập dữ liệu của Spring.  
- **b)** [Thông hiểu] Ngoại lệ `DataAccessException` của Spring là một ngoại lệ không kiểm tra (Unchecked Exception - kế thừa từ `RuntimeException`).  
- **c)** [Thông hiểu] Nhờ Exception Translation, tầng Service không bị phụ thuộc vào các ngoại lệ đặc thù của riêng một hệ quản trị CSDL cụ thể (như `SQLException`).  
- **d)** [Vận dụng] Nếu chỉ dùng chú thích `@Component` trên lớp kho lưu trữ thay vì `@Repository`, tính năng tự động chuyển đổi ngoại lệ này sẽ không được Spring kích hoạt theo mặc định.  

---

## PHẦN III: TRẢ LỜI NGẮN (6 CÂU)
*Điền câu trả lời ngắn gọn, chính xác vào chỗ trống theo yêu cầu của từng câu.*

**Câu 26 [Nhận biết]:** Chú thích định hình (Stereotype Annotation) nào được khuyến nghị sử dụng chuyên biệt cho các lớp thuộc tầng nghiệp vụ (Business logic layer)?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 27 [Nhận biết]:** Chú thích định hình nào được khuyến nghị sử dụng chuyên biệt cho các lớp thực hiện lưu trữ và truy vấn dữ liệu (Persistence layer)?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 28 [Thông hiểu]:** Khi một interface có 2 bean hiện thực cùng đăng ký trong context mà không có `@Primary` hay `@Qualifier`, Spring sẽ ném ra ngoại lệ cụ thể nào khi cố gắng tiêm interface này vào một bean khác?  
*(Quy định: Điền tên chính xác của lớp Exception trong Spring)*  
👉 **Trả lời:** ............................................................

**Câu 29 [Thông hiểu]:** Nhóm đối tượng đại diện cho dữ liệu có trạng thái thay đổi theo từng người dùng (như `Comment`, `User`, `Order`) được gọi chung là gì trong kiến trúc phần mềm, mà không nên đưa vào Spring Context?  
*(Quy định: Điền 1 thuật ngữ chuyên ngành tiếng Anh)*  
👉 **Trả lời:** ............................................................

**Câu 30 [Vận dụng]:** Để Spring tự động gom và tiêm TẤT CẢ các bean hiện thực của interface `NotificationProxy` vào một thuộc tính, lập trình viên cần khai báo kiểu dữ liệu của thuộc tính đó là gì trong Java?  
*(Quy định: Điền kiểu dữ liệu Generic, ví dụ `List<InterfaceName>`)*  
👉 **Trả lời:** ............................................................

**Câu 31 [Vận dụng]:** Tên của lớp ngoại lệ gốc (root unchecked exception) mà Spring dùng để bao bọc và chuẩn hóa toàn bộ các lỗi liên quan đến truy cập dữ liệu từ các hệ CSDL khác nhau là gì?  
*(Quy định: Điền tên chính xác của lớp Exception trong Spring)*  
👉 **Trả lời:** ............................................................

---

## 🔍 BẢNG ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT

<details>
<summary><b>BẤM VÀO ĐÂY ĐỂ XEM ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT</b></summary>

### BẢNG ĐÁP ÁN NHANH PHẦN I (MCQ)
| Câu | Đáp án | Mức độ | Câu | Đáp án | Mức độ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | **B** | Nhận biết | 11 | **A** | Thông hiểu |
| 2 | **C** | Nhận biết | 12 | **D** | Thông hiểu |
| 3 | **A** | Nhận biết | 13 | **C** | Thông hiểu |
| 4 | **D** | Nhận biết | 14 | **A** | Thông hiểu |
| 5 | **B** | Nhận biết | 15 | **B** | Vận dụng |
| 6 | **C** | Thông hiểu | 16 | **C** | Vận dụng |
| 7 | **D** | Thông hiểu | 17 | **D** | Vận dụng |
| 8 | **A** | Thông hiểu | 18 | **A** | Vận dụng |
| 9 | **C** | Thông hiểu | 19 | **B** | Vận dụng |
| 10 | **D** | Thông hiểu | 20 | **B** | Vận dụng |

---

### BẢNG ĐÁP ÁN NHANH PHẦN II (ĐÚNG / SAI)
- **Câu 21:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**
- **Câu 22:** a: **ĐÚNG** | b: **SAI** | c: **ĐÚNG** | d: **ĐÚNG**
- **Câu 23:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **SAI**
- **Câu 24:** a: **ĐÚNG** | b: **SAI** | c: **ĐÚNG** | d: **ĐÚNG**
- **Câu 25:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **ĐÚNG**

---

### BẢNG ĐÁP ÁN NHANH PHẦN III (TRẢ LỜI NGẮN)
- **Câu 26:** `@Service`
- **Câu 27:** `@Repository`
- **Câu 28:** `NoUniqueBeanDefinitionException`
- **Câu 29:** `Entity` (hoặc `Model`, `DTO`)
- **Câu 30:** `List<NotificationProxy>` (hoặc `Collection<NotificationProxy>`)
- **Câu 31:** `DataAccessException`

---

### HƯỚNG DẪN GIẢI CHI TIẾT

#### PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN
- **Câu 1: Đáp án B**
  - *Căn cứ tài liệu*: Trang 76 mục "Using interfaces for abstractions". Interface đóng vai trò bản hợp đồng trừu tượng định nghĩa tập các thao tác mà không quan tâm chi tiết cài đặt.
- **Câu 2: Đáp án C**
  - *Căn cứ tài liệu*: Trang 101 mục "Using stereotype annotations". Chú thích `@Repository` dành cho tầng lưu trữ dữ liệu và tự động kích hoạt tính năng chuyển đổi ngoại lệ (Exception Translation).
- **Câu 3: Đáp án A**
  - *Căn cứ tài liệu*: Trang 100 mục "Stereotype annotations". `@Service` đại diện cho các lớp chứa logic và quy tắc nghiệp vụ (Business logic).
- **Câu 4: Đáp án D**
  - *Căn cứ tài liệu*: Trang 81-82. Các đối tượng mô hình dữ liệu (Models/Entities/DTOs) chứa trạng thái cụ thể của từng thực thể, không phải dịch vụ dùng chung, nên không được đưa vào Spring Context.
- **Câu 5: Đáp án B**
  - *Căn cứ tài liệu*: Trang 93. Ngoại lệ `NoUniqueBeanDefinitionException` xảy ra khi Spring tìm thấy nhiều bean cùng thỏa mãn một kiểu yêu cầu mà không có tiêu chí phân giải (như `@Primary` hay `@Qualifier`).
- **Câu 6: Đáp án C**
  - *Căn cứ tài liệu*: Trang 76. Nguyên tắc phân tách trách nhiệm: đối tượng tiêu thụ chỉ cần biết đối tượng cung cấp LÀM GÌ (What), chứ không bị phụ thuộc vào cách LÀM NHƯ THẾ NÀO (How).
- **Câu 7: Đáp án D**
  - *Căn cứ tài liệu*: Trang 78-79. Tách rời phụ thuộc giúp thay đổi bản cài đặt (từ DB sang File hoặc dịch vụ bên thứ ba) mà không làm ảnh hưởng đến lớp dịch vụ `CommentService`.
- **Câu 8: Đáp án A**
  - *Căn cứ tài liệu*: Trang 82. Entity mang trạng thái riêng theo từng giao dịch của người dùng; nếu để Spring quản lý mặc định là Singleton sẽ dẫn đến chia sẻ nhầm trạng thái giữa các luồng.
- **Câu 9: Đáp án C**
  - *Căn cứ tài liệu*: Trang 100. Cả `@Service` và `@Repository` đều là meta-annotated bởi `@Component`, nên container đều xem chúng là các Spring Bean có thể được quét bởi `@ComponentScan`.
- **Câu 10: Đáp án D**
  - *Căn cứ tài liệu*: Trang 102. Exception Translation tự động bắt các ngoại lệ cấp thấp của CSDL (`SQLException`) và chuyển thành ngoại lệ không kiểm tra `DataAccessException` của Spring.
- **Câu 11: Đáp án A**
  - *Căn cứ tài liệu*: Trang 95. `@Primary` được ưu tiên chọn khi tìm kiếm theo kiểu trừu tượng nếu không có chú thích cụ thể hơn tại điểm tiêm.
- **Câu 12: Đáp án D**
  - *Căn cứ tài liệu*: `@Component` là nhãn chung cho các bean tiện ích kỹ thuật không thuộc phân tầng MVC hay phân tầng truy cập dữ liệu chuẩn.
- **Câu 13: Đáp án C**
  - *Căn cứ tài liệu*: Kiến trúc nhiều tầng chuẩn: Controller $ightarrow$ Service $ightarrow$ Repository $ightarrow$ Data source.
- **Câu 14: Đáp án A**
  - *Căn cứ tài liệu*: Dependency Inversion Principle: Module cấp cao và cấp thấp đều phụ thuộc vào trừu tượng (Interface).
- **Câu 15: Đáp án B**
  - *Căn cứ tài liệu*: Kết hợp `@Primary` cho lựa chọn mặc định và `@Qualifier` cho những nơi cần chọn tường minh là giải pháp linh hoạt nhất.
- **Câu 16: Đáp án C**
  - *Căn cứ tài liệu*: Nhờ phụ thuộc vào Interface, trong Unit Test ta có thể mock các thành phần này độc lập mà không cần kết nối hệ thống bên ngoài.
- **Câu 17: Đáp án D**
  - *Căn cứ tài liệu*: Áp dụng Interface `NotificationProxy` để dễ dàng bổ sung SMS, Push theo nguyên lý Open/Closed Principle (OCP).
- **Câu 18: Đáp án A**
  - *Căn cứ tài liệu*: Tính năng tiêm danh sách của Spring: Tự động gom toàn bộ các bean hiện thực interface vào một `List<Interface>`.
- **Câu 19: Đáp án B**
  - *Căn cứ tài liệu*: Đưa Entity thành Singleton bean gây lỗi Race Condition và rò rỉ dữ liệu giữa các luồng người dùng khác nhau.
- **Câu 20: Đáp án B**
  - *Căn cứ tài liệu*: Tên tham số `dbCommentRepository` khớp chính xác với tên bean của phương thức cấu hình.

---

#### PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI
- **Câu 21:**
  - a: **ĐÚNG** (Trang 76).
  - b: **ĐÚNG** (Trang 77-78).
  - c: **SAI** (Interface giúp kiểm thử đơn vị dễ dàng hơn nhờ khả năng mock phụ thuộc).
  - d: **ĐÚNG** (Trang 79).
- **Câu 22:**
  - a: **ĐÚNG** (Trang 100).
  - b: **SAI** (Trang 82: Tuyệt đối không đưa Entity/DTO vào Spring Context).
  - c: **ĐÚNG** (Tạo đối tượng dữ liệu bằng `new` khi có dữ liệu mới).
  - d: **ĐÚNG** (Lạm dụng bean Singleton cho dữ liệu có trạng thái gây ra xung đột luồng).
- **Câu 23:**
  - a: **ĐÚNG** (Trang 100).
  - b: **ĐÚNG** (Về mặt IoC container, chúng đều được đăng ký là bean).
  - c: **ĐÚNG** (Làm rõ ngữ nghĩa của từng tầng kiến trúc).
  - d: **SAI** (Trang 102: `@Repository` có thêm tính năng Exception Translation tự động).
- **Câu 24:**
  - a: **ĐÚNG** (Nguyên lý lập trình hướng giao diện).
  - b: **SAI** (Spring không đoán mò theo thứ tự bảng chữ cái mà ném ra lỗi `NoUniqueBeanDefinitionException`).
  - c: **ĐÚNG** (Trang 98).
  - d: **ĐÚNG** (Spring hỗ trợ tiêm `List<Interface>` gom tất cả các bean hiện thực).
- **Câu 25:**
  - a: **ĐÚNG** (Trang 102).
  - b: **ĐÚNG** (`DataAccessException` kế thừa từ `RuntimeException`, không bắt buộc phải try-catch).
  - c: **ĐÚNG** (Tầng Service không bị ràng buộc vào ngoại lệ đặc thù của riêng một hệ quản trị CSDL).
  - d: **ĐÚNG** (Nếu dùng `@Component` thuần túy, `PersistenceExceptionTranslationPostProcessor` không tự kích hoạt dịch ngoại lệ).

---

#### PHẦN III: TRẢ LỜI NGẮN
- **Câu 26:** `@Service` (Trang 100).
- **Câu 27:** `@Repository` (Trang 101).
- **Câu 28:** `NoUniqueBeanDefinitionException` (Trang 93).
- **Câu 29:** `Entity` (hoặc `Model`, `DTO`) (Trang 81-82).
- **Câu 30:** `List<NotificationProxy>` (hoặc `Collection<NotificationProxy>`) (Trang 97).
- **Câu 31:** `DataAccessException` (Trang 102).

</details>
