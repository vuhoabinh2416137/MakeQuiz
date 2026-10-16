# 🎯 BỘ ĐỀ LUYỆN TẬP TOÀN DIỆN: CHƯƠNG 9 - SỬ DỤNG CÁC PHẠM VI WEB CỦA SPRING
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

**Câu 1 [Nhận biết]:** Chú thích nào sau đây được sử dụng để định nghĩa một bean mà vòng đời của nó chỉ tồn tại duy nhất trong thời gian máy chủ xử lý một yêu cầu HTTP đơn lẻ và bị giải phóng ngay sau khi phản hồi được gửi đi?

A. `@RequestScope` (Gắn liền vòng đời của bean với một yêu cầu HTTP đơn lẻ)  
B. `@SessionScope` (Duy trì thể hiện bean xuyên suốt phiên làm việc người dùng)  
C. `@ApplicationScope` (Chia sẻ chung thể hiện bean trong toàn bộ ServletContext)  
D. `@PrototypeScope` (Tạo thể hiện mới cho mỗi lần thực hiện lookup trong context)  

**Câu 2 [Nhận biết]:** Chú thích nào được sử dụng để định nghĩa một bean có khả năng duy trì trạng thái dữ liệu riêng biệt cho từng người dùng xuyên suốt nhiều yêu cầu HTTP liên tiếp?

A. `@RequestScope` (Chỉ tồn tại trong giới hạn của một lần gửi nhận HTTP duy nhất)  
B. `@SessionScope` (Duy trì trạng thái dữ liệu riêng cho từng phiên người dùng)  
C. `@ApplicationScope` (Duy trì một thể hiện duy nhất cho toàn bộ hệ thống web)  
D. `@UserScope` (Chú thích tùy biến không tồn tại trong gói Spring Web chuẩn)  

**Câu 3 [Nhận biết]:** Thành phần nào thường được lưu trữ trong Cookie của trình duyệt để máy chủ nhận diện và liên kết các yêu cầu HTTP tiếp theo với đúng phiên làm việc (Session) của người dùng đó?

A. `USER_AGENT` (Chuỗi thông tin nhận dạng trình duyệt và hệ điều hành máy khách)  
B. `CSRF_TOKEN` (Chuỗi mã bảo vệ chống lại tấn công giả mạo yêu cầu từ trang khác)  
C. `JSESSIONID` (Mã định danh phiên làm việc chuẩn do Servlet Container cấp phát)  
D. `BEARER_AUTH` (Chuỗi mã thông báo ủy quyền truy cập vào các điểm cuối REST)  

**Câu 4 [Nhận biết]:** Chú thích `@RequestScope` là một chú thích cấu thành (composed annotation) tương đương với cách khai báo nào sau đây bằng chú thích `@Scope`?

A. `@Scope("prototype")` (Tạo mới đối tượng cho mỗi lần tiêm hoặc triệu gọi hàm)  
B. `@Scope("transient")` (Đánh dấu trường dữ liệu không bị tuần tự hóa ra đĩa)  
C. `@Scope(BeanDefinition.SCOPE_SINGLETON)` (Chỉ duy nhất một thể hiện chung)  
D. `@Scope(WebApplicationContext.SCOPE_REQUEST)` (Phạm vi yêu cầu HTTP chuẩn)  

**Câu 5 [Nhận biết]:** Đối tượng kỹ thuật nào được Spring tự động tạo ra để đứng làm cầu nối khi bạn tiêm một bean có phạm vi vòng đời ngắn (như Request hay Session) vào một Controller có phạm vi Singleton?

A. Stub Factory (Bộ sinh đối tượng giả lập dùng trong kiểm thử tự động của hệ thống)  
B. Scoped Proxy (Đối tượng đại diện bọc ngoài giúp ủy thác lời gọi theo ngữ cảnh)  
C. Invocation Interceptor (Bộ đánh chặn can thiệp vào tầng giao vận gói tin mạng)  
D. Static Wrapper (Lớp bao bọc chứa các biến toàn cục tĩnh chia sẻ trong ứng dụng)  

**Câu 6 [Nhận biết]:** Chú thích nào trong số các phạm vi web của Spring cho phép chia sẻ chung một thể hiện bean duy nhất cho tất cả các yêu cầu và tất cả người dùng trong toàn bộ ngữ cảnh `ServletContext`?

A. `@RequestScope` (Phạm vi giới hạn trong từng yêu cầu HTTP riêng biệt gửi đến)  
B. `@SessionScope` (Phạm vi giới hạn theo từng phiên làm việc của mỗi trình duyệt)  
C. `@ApplicationScope` (Phạm vi toàn cục chia sẻ chung cho toàn bộ ServletContext)  
D. `@FlashScope` (Phạm vi tạm thời duy trì dữ liệu qua một lần chuyển hướng trang)  

**Câu 7 [Thông hiểu]:** Vòng đời của một bean được đánh dấu bằng chú thích `@RequestScope` bắt đầu và kết thúc chính xác vào thời điểm nào?

A. Bắt đầu khi ứng dụng Spring Boot khởi động và kết thúc khi máy chủ ngừng chạy  
B. Bắt đầu khi người dùng đăng nhập tài khoản và kết thúc khi người dùng đăng xuất  
C. Tồn tại cố định trong khoảng thời gian mặc định 30 phút rồi tự động giải phóng  
D. Bắt đầu khi máy chủ nhận HTTP request và kết thúc ngay sau khi gửi HTTP response  

**Câu 8 [Thông hiểu]:** Tại sao trong ứng dụng web đa luồng, việc lưu trữ thông tin nhận được từ form nhập liệu của người dùng trong một bean Singleton lại là một lỗi kiến trúc nghiêm trọng?

A. Vì các luồng phục vụ request cùng ghi vào biến chung gây Race Condition và rò rỉ dữ liệu  
B. Vì máy ảo Java (JVM) sẽ lập tức phát sinh lỗi cú pháp khi nạp định nghĩa của lớp  
C. Vì các bean Singleton hoàn toàn bị cấm chứa các trường dữ liệu có kiểu chuỗi `String`  
D. Vì việc này sẽ khiến cho trình duyệt của người dùng không thể tải được các tệp mã CSS  

**Câu 9 [Thông hiểu]:** Khi một Singleton Controller gọi một phương thức trên một Scoped Proxy của một bean `@RequestScope`, đối tượng Proxy đó xử lý lời gọi như thế nào?

A. Proxy tự thực thi toàn bộ logic mà không cần chuyển tiếp lời gọi cho bean thực tế  
B. Proxy tự động tạo ra một tiến trình hệ điều hành độc lập mới để xử lý tính toán  
C. Proxy tra cứu ngữ cảnh luồng hiện tại, tìm đúng instance của request và chuyển tiếp  
D. Proxy lập tức trả về giá trị null cho phương thức gọi mà không thực hiện thao tác nào  

**Câu 10 [Thông hiểu]:** Phiên làm việc (Session) của một người dùng trên máy chủ ứng dụng web thường sẽ kết thúc trong những trường hợp nào?

A. Chỉ khi máy chủ ứng dụng bị ngắt nguồn điện vật lý đột ngột trong khi đang chạy  
B. Hết hạn timeout không tương tác, gọi session.invalidate(), hoặc server khởi động lại  
C. Bị hủy bỏ ngay lập tức mỗi khi người dùng thực hiện thao tác chuyển đổi tab duyệt web  
D. Tự động kết thúc chính xác sau mỗi 5 giây kể từ thời điểm đăng nhập thành công  

**Câu 11 [Thông hiểu]:** Điểm khác biệt căn bản giữa phạm vi Singleton và phạm vi Application (`@ApplicationScope`) trong kiến trúc ứng dụng web Java là gì?

A. Singleton không hỗ trợ ứng dụng web, trong khi Application scope chỉ dùng cho web  
B. Application scope tự động khởi tạo lại thể hiện mới sau mỗi chu kỳ tròn 24 giờ  
C. Singleton bean hoàn toàn không thể giải phóng được bộ nhớ RAM khi tắt ứng dụng  
D. Singleton là duy nhất trong một ApplicationContext; Application là duy nhất trong ServletContext  

**Câu 12 [Thông hiểu]:** Tính năng nào sau đây là ứng viên phù hợp nhất để thiết kế bằng Session Scope (`@SessionScope`) trong một ứng dụng thương mại điện tử?

A. Một lớp tiện ích tĩnh dùng để định dạng thời gian và tiền tệ theo chuẩn quốc tế  
B. Quản lý trạng thái thông tin tài khoản đã đăng nhập và Giỏ hàng (Shopping Cart)  
C. Lưu trữ chuỗi kết nối và thông tin tài khoản quản trị cơ sở dữ liệu của hệ thống  
D. Thực hiện các phép toán logic cơ bản như kiểm tra tính chẵn lẻ của một con số  

**Câu 13 [Thông hiểu]:** Nguy cơ tiêu cực tiềm ẩn lớn nhất đối với hệ thống khi lập trình viên lạm dụng việc lưu trữ quá nhiều dữ liệu lớn vào `@SessionScope` là gì?

A. Hệ thống cơ sở dữ liệu quan hệ sẽ tự động xóa sạch toàn bộ các bảng hiện có  
B. Làm cho các đoạn mã nguồn Java của dự án hoàn toàn bị mất đi tính đa hình OOP  
C. Nhiều người dùng đồng thời khiến bộ nhớ RAM máy chủ cạn kiệt (OutOfMemoryError)  
D. Trình duyệt web của tất cả mọi người dùng sẽ bị hệ điều hành đóng băng hoàn toàn  

**Câu 14 [Thông hiểu]:** Giá trị thuộc tính `proxyMode = ScopedProxyMode.TARGET_CLASS` trong khai báo `@Scope` có ý nghĩa gì đối với Spring?

A. Yêu cầu Spring dùng CGLIB tạo Proxy kế thừa trực tiếp từ lớp mục tiêu (Class-based)  
B. Bắt buộc lớp mục tiêu phải triển khai ít nhất một giao diện trừu tượng trong mã  
C. Vô hiệu hóa hoàn toàn tính năng tiêm phụ thuộc tự động của Spring IoC container  
D. Tự động chuyển đổi toàn bộ các phương thức của lớp thành phương thức tĩnh (`static`)  

**Câu 15 [Thông hiểu]:** Trong mô hình bảo vệ trang web bằng Session Scope: Lớp `LoggedUserManagementService` được đặt ở phạm vi `@SessionScope` để giữ biến `username`. Khi người dùng truy cập vào trang chính `/main`, Controller kiểm tra nếu `loggedUserManagementService.getUsername() == null` thì cần xử lý thế nào?

A. Lập tức hiển thị trang thông báo lỗi máy chủ nghiêm trọng HTTP 500 cho người dùng  
B. Tự động cấp quyền quản trị viên cao nhất cho người dùng để tiếp tục sử dụng hệ thống  
C. Tắt ngay lập tức tiến trình máy chủ web nhúng để bảo vệ an toàn cho dữ liệu  
D. Trả về lệnh chuyển hướng "redirect:/" để đưa người dùng quay lại trang đăng nhập  

**Câu 16 [Vận dụng]:** Giả sử hai người dùng A và B gửi yêu cầu đăng nhập cùng một phần nghìn giây. Lớp `LoginProcessor` được đánh dấu là `@RequestScope`. Điều gì đảm bảo thông tin mật khẩu của người dùng A không bao giờ bị người dùng B nhìn thấy?

A. Nhờ `@RequestScope`, Spring tạo hai instance độc lập ở hai vùng nhớ riêng cho A và B  
B. Nhờ máy ảo Java có cơ chế tự động mã hóa toàn bộ bộ nhớ RAM của hệ điều hành  
C. Do trình duyệt của người dùng B tự động chặn gói tin khi phát hiện người dùng A gửi  
D. Do máy chủ Tomcat chỉ cho phép duy nhất một người dùng được gửi dữ liệu một lúc  

**Câu 17 [Vận dụng]:** Bạn cần xây dựng tính năng: *"Đếm tổng số lượt đăng nhập thành công của tất cả mọi người dùng trên toàn hệ thống kể từ khi máy chủ khởi động"*. Bean đảm nhiệm biến đếm tổng này (`LoginCountService`) nên được thiết lập ở phạm vi nào?

A. `@RequestScope` (Giá trị biến đếm sẽ bị xóa bỏ ngay sau khi yêu cầu hiện tại kết thúc)  
B. `@SessionScope` (Biến đếm chỉ duy trì riêng biệt cho từng người dùng trong phiên của họ)  
C. `@ApplicationScope` (hoặc Singleton mặc định để chia sẻ chung cho toàn hệ thống)  
D. `@PrototypeScope` (Tạo mới thể hiện mỗi lần gọi khiến biến đếm luôn quay về giá trị 0)  

**Câu 18 [Vận dụng]:** Trong chức năng "Đăng xuất" (Logout), lớp `LoggedUserManagementService` (mang phạm vi `@SessionScope`) cần thực hiện thao tác nào để người dùng không còn quyền truy cập vào các trang bảo vệ?

A. Xóa bỏ vĩnh viễn tệp mã nguồn `.java` của lớp dịch vụ ra khỏi thư mục dự án  
B. Đổi tên người dùng trong phiên làm việc thành chuỗi ký tự mặc định `"anonymous"`  
C. Ngắt kết nối mạng Internet của máy chủ để ép tất cả người dùng ngắt kết nối  
D. Đặt lại trường `this.username = null;` hoặc gọi lệnh hủy phiên `session.invalidate()`  

**Câu 19 [Vận dụng]:** Xét lớp điều khiển sau:
```java
@Controller
public class LoginController {
    private final LoginProcessor loginProcessor;

    public LoginController(LoginProcessor loginProcessor) {
        this.loginProcessor = loginProcessor;
    }
}
```
Nếu `LoginProcessor` được đánh dấu `@RequestScope`, tại thời điểm Spring Context khởi động ứng dụng (chưa có bất kỳ yêu cầu HTTP nào từ người dùng), đối tượng được tiêm vào constructor của `LoginController` thực chất là gì?

A. Một giá trị `null` và Spring sẽ gán lại giá trị khi có yêu cầu đầu tiên xuất hiện  
B. Một thể hiện Scoped Proxy (CGLIB) do Spring sinh ra đại diện cho `LoginProcessor`  
C. Spring sẽ ném ra ngoại lệ `BeanCreationException` khiến ứng dụng không thể khởi động  
D. Một đối tượng `LoginProcessor` thực sự với tất cả các thuộc tính nhận giá trị rỗng  

**Câu 20 [Vận dụng]:** Khi triển khai ứng dụng web Spring Boot trên môi trường phân cụm (Cluster gồm nhiều máy chủ chạy song song phía sau Load Balancer), nếu sử dụng `@SessionScope` lưu trữ trên RAM mặc định, vấn đề nào sẽ phát sinh khi Load Balancer điều phối yêu cầu thứ hai của người dùng sang một máy chủ khác?

A. Người dùng bị mất phiên và phải đăng nhập lại do phiên chỉ nằm trên RAM máy chủ cũ  
B. Máy chủ thứ hai sẽ tự động sao chép toàn bộ bộ nhớ RAM của máy chủ thứ nhất qua mạng  
C. Toàn bộ cơ sở dữ liệu quan hệ sẽ bị khóa vĩnh viễn do xung đột phiên làm việc  
D. Tốc độ truyền tải mạng của người dùng sẽ tự động tăng lên gấp hai lần một cách bất ngờ  

---

## PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI (5 CÂU - 20 MỆNH ĐỀ)
*Đọc từng đoạn ngữ cảnh sau và xác định tính ĐÚNG hoặc SAI của từng mệnh đề a, b, c, d.*

**Câu 21:** Về phạm vi yêu cầu (`@RequestScope`) và tính an toàn luồng trong Spring Web:
- **a)** [Nhận biết] Mỗi yêu cầu HTTP gửi đến máy chủ sẽ được cấp phát một thể hiện bean `@RequestScope` hoàn toàn mới.  
- **b)** [Thông hiểu] Hai yêu cầu HTTP gửi đến đồng thời từ hai người dùng khác nhau sẽ dùng chung một thể hiện của bean `@RequestScope`.  
- **c)** [Thông hiểu] Nhờ có `@RequestScope`, các lớp xử lý nghiệp vụ của từng request có thể lưu trữ trạng thái mà không sợ bị tranh chấp dữ liệu giữa các luồng.  
- **d)** [Vận dụng] Thể hiện của bean `@RequestScope` sẽ được giữ lại trong bộ nhớ vĩnh viễn cho đến khi tắt máy chủ ứng dụng.  

**Câu 22:** Về phạm vi phiên (`@SessionScope`) và cơ chế định danh phiên người dùng:
- **a)** [Nhận biết] Phiên làm việc (Session) cho phép máy chủ theo dõi và duy trì trạng thái của một người dùng cụ thể xuyên suốt nhiều yêu cầu HTTP.  
- **b)** [Thông hiểu] Trình duyệt web và máy chủ kết nối phiên làm việc với nhau thông qua mã định danh `JSESSIONID` lưu trong Cookie.  
- **c)** [Thông hiểu] Nếu người dùng mở hai cửa sổ trình duyệt hoàn toàn độc lập (hoặc một cửa sổ ẩn danh Incognito), máy chủ sẽ cấp hai phiên làm việc khác nhau cho hai cửa sổ đó.  
- **d)** [Vận dụng] Khi người dùng đóng trình duyệt, máy chủ web luôn luôn nhận được thông báo tức thì và giải phóng phiên ngay tại giây đó.  

**Câu 23:** Về cơ chế Scoped Proxy trong Spring Framework:
- **a)** [Nhận biết] Scoped Proxy được sử dụng khi có sự bất đồng về vòng đời giữa hai bean (ví dụ tiêm bean vòng đời ngắn vào bean Singleton).  
- **b)** [Thông hiểu] Nếu không có cơ chế Scoped Proxy, việc tiêm trực tiếp một bean `@RequestScope` vào một Controller Singleton sẽ khiến bean request đó bị khởi tạo đúng một lần duy nhất lúc bật server và mất đi tính chất theo request.  
- **c)** [Thông hiểu] Khi gọi một phương thức trên Scoped Proxy, nó sẽ tra cứu và ủy thác lời gọi cho thể hiện bean thực tế tương ứng với luồng hiện tại.  
- **d)** [Vận dụng] Scoped Proxy làm tăng đáng kể dung lượng tệp JAR của ứng dụng lên gấp 10 lần.  

**Câu 24:** Về phạm vi ứng dụng (`@ApplicationScope`) và so sánh với Singleton:
- **a)** [Nhận biết] Chú thích `@ApplicationScope` tạo ra một bean có vòng đời gắn liền với vòng đời của `ServletContext`.  
- **b)** [Thông hiểu] Dữ liệu lưu trong bean `@ApplicationScope` được chia sẻ chung cho toàn bộ mọi người dùng và mọi yêu cầu trên hệ thống.  
- **c)** [Thông hiểu] Trong hầu hết các ứng dụng Spring Boot tiêu chuẩn hiện đại (chỉ có duy nhất một `ApplicationContext` gắn với một `ServletContext`), hành vi của `@ApplicationScope` thực tế tương đương với Singleton Scope.  
- **d)** [Vận dụng] Biến thành viên trong một bean `@ApplicationScope` không cần quan tâm đến vấn đề đồng bộ hóa (Synchronization) vì nó tự động an toàn luồng.  

**Câu 25:** Về thiết kế luồng xác thực đăng nhập, bảo vệ trang và đăng xuất:
- **a)** [Nhận biết] Lớp `LoginProcessor` thường được thiết kế với `@RequestScope` vì dữ liệu tài khoản/mật khẩu chỉ có ý nghĩa trong một lần gửi form đăng nhập.  
- **b)** [Thông hiểu] Lớp `LoggedUserManagementService` được thiết kế với `@SessionScope` để lưu trữ tên đăng nhập của người dùng sau khi xác thực thành công.  
- **c)** [Thông hiểu] Khi người dùng đã đăng nhập thành công vào trang `/main`, nếu họ thực hiện thao tác đăng xuất, ứng dụng chỉ cần xóa Cookie trên trình duyệt mà không cần xử lý gì trên máy chủ.  
- **d)** [Vận dụng] Để ngăn chặn việc hiển thị lại trang bảo vệ khi người dùng nhấn nút Back trên trình duyệt sau khi đã đăng xuất, ta có thể kết hợp cấu hình HTTP Cache-Control để cấm trình duyệt lưu cache trang đó.  

---

## PHẦN III: TRẢ LỜI NGẮN (6 CÂU)
*Điền câu trả lời ngắn gọn, chính xác vào chỗ trống theo yêu cầu của từng câu.*

**Câu 26 [Nhận biết]:** Chú thích chuyên biệt nào trong Spring Web được sử dụng để thiết lập vòng đời của bean gắn liền với một yêu cầu HTTP đơn lẻ?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 27 [Nhận biết]:** Chú thích chuyên biệt nào trong Spring Web được sử dụng để thiết lập vòng đời của bean gắn liền với toàn bộ phiên làm việc của một người dùng cụ thể?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 28 [Nhận biết]:** Tên của Cookie chuẩn được các Servlet Container (như Tomcat) tự động sinh ra và gửi về trình duyệt để định danh phiên làm việc là gì?  
*(Quy định: Điền đúng tên cookie viết hoa)*  
👉 **Trả lời:** ............................................................

**Câu 29 [Thông hiểu]:** Khi tiêm một bean có phạm vi `@RequestScope` vào một `@Controller` có phạm vi Singleton, Spring sẽ tiêm một đối tượng đại diện kỹ thuật được gọi là gì?  
*(Quy định: Điền thuật ngữ gồm 2 từ tiếng Anh, ví dụ: Scoped ...)*  
👉 **Trả lời:** ............................................................

**Câu 30 [Thông hiểu]:** Chú thích phạm vi web nào trong Spring có phạm vi rộng nhất, chia sẻ chung một thể hiện duy nhất cho tất cả người dùng trong toàn bộ vùng chứa `ServletContext`?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 31 [Vận dụng]:** Trong bài toán đăng nhập, để ngăn chặn người dùng chưa đăng nhập xem trang `/main`, nếu kiểm tra thấy `username` trong session là `null`, phương thức Controller cần trả về chuỗi điều hướng nào để đưa người dùng về trang chủ?  
*(Quy định: Ghi rõ chuỗi trả về dạng `"redirect:..."`)*  
👉 **Trả lời:** ............................................................

---

## 🔍 BẢNG ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT

<details>
<summary><b>BẤM VÀO ĐÂY ĐỂ XEM ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT</b></summary>

### BẢNG ĐÁP ÁN NHANH PHẦN I (MCQ)
| Câu | Đáp án | Mức độ | Câu | Đáp án | Mức độ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | **A** | Nhận biết | 11 | **D** | Thông hiểu |
| 2 | **B** | Nhận biết | 12 | **B** | Thông hiểu |
| 3 | **C** | Nhận biết | 13 | **C** | Thông hiểu |
| 4 | **D** | Nhận biết | 14 | **A** | Thông hiểu |
| 5 | **B** | Nhận biết | 15 | **D** | Thông hiểu |
| 6 | **C** | Nhận biết | 16 | **A** | Vận dụng |
| 7 | **D** | Thông hiểu | 17 | **C** | Vận dụng |
| 8 | **A** | Thông hiểu | 18 | **D** | Vận dụng |
| 9 | **C** | Thông hiểu | 19 | **B** | Vận dụng |
| 10 | **B** | Thông hiểu | 20 | **A** | Vận dụng |

---

### BẢNG ĐÁP ÁN NHANH PHẦN II (ĐÚNG / SAI)
- **Câu 21:** a: **ĐÚNG** | b: **SAI** | c: **ĐÚNG** | d: **SAI**
- **Câu 22:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **SAI**
- **Câu 23:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **SAI**
- **Câu 24:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **SAI**
- **Câu 25:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**

---

### BẢNG ĐÁP ÁN NHANH PHẦN III (TRẢ LỜI NGẮN)
- **Câu 26:** `@RequestScope`
- **Câu 27:** `@SessionScope`
- **Câu 28:** `JSESSIONID`
- **Câu 29:** `Scoped Proxy` (hoặc `Proxy`)
- **Câu 30:** `@ApplicationScope`
- **Câu 31:** `redirect:/` (hoặc `redirect:/login`)

---

### HƯỚNG DẪN GIẢI CHI TIẾT

#### PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN
- **Câu 1: Đáp án A**
  - *Căn cứ tài liệu*: Trang 205 mục "Using request scope in Spring apps". Chú thích `@RequestScope` tạo một bean mới cho mỗi yêu cầu HTTP.
- **Câu 2: Đáp án B**
  - *Căn cứ tài liệu*: Trang 215 mục "Using session scope in Spring apps". Chú thích `@SessionScope` duy trì trạng thái dữ liệu xuyên suốt các yêu cầu của cùng một người dùng.
- **Câu 3: Đáp án C**
  - *Căn cứ tài liệu*: Trang 215-216. Cookie chuẩn `JSESSIONID` định danh phiên làm việc giữa trình duyệt và Servlet Container.
- **Câu 4: Đáp án D**
  - *Căn cứ tài liệu*: Trang 208. `@RequestScope` là alias của `@Scope(WebApplicationContext.SCOPE_REQUEST)`.
- **Câu 5: Đáp án B**
  - *Căn cứ tài liệu*: Trang 209-210 mục "Spring scoped proxies". Scoped Proxy đóng vai trò cầu nối đại diện cho bean vòng đời ngắn trong bean Singleton.
- **Câu 6: Đáp án C**
  - *Căn cứ tài liệu*: Trang 223 mục "Using application scope in Spring apps". Chú thích `@ApplicationScope` chia sẻ một thể hiện duy nhất cho toàn bộ ServletContext.
- **Câu 7: Đáp án D**
  - *Căn cứ tài liệu*: Trang 205. Vòng đời Request scope bắt đầu khi máy chủ nhận HTTP request và bị GC dọn dẹp ngay sau khi gửi phản hồi HTTP.
- **Câu 8: Đáp án A**
  - *Căn cứ tài liệu*: Trang 205-206. Các luồng xử lý yêu cầu song song sẽ tranh chấp dữ liệu (Race condition) trên biến thành viên của Singleton bean.
- **Câu 9: Đáp án C**
  - *Căn cứ tài liệu*: Trang 209-210. Scoped Proxy tra cứu ngữ cảnh của luồng hiện tại để tìm đúng instance của request tương ứng rồi chuyển tiếp lời gọi.
- **Câu 10: Đáp án B**
  - *Căn cứ tài liệu*: Trang 216. Phiên kết thúc khi hết timeout không hoạt động, ứng dụng chủ động gọi `session.invalidate()`, hoặc máy chủ khởi động lại.
- **Câu 11: Đáp án D**
  - *Căn cứ tài liệu*: Trang 223-224. Singleton là duy nhất trong một `ApplicationContext`, còn Application scope là duy nhất trên toàn bộ `ServletContext`.
- **Câu 12: Đáp án B**
  - *Căn cứ tài liệu*: Trang 215. Giỏ hàng và phiên đăng nhập là các trường hợp sử dụng kinh điển của `@SessionScope`.
- **Câu 13: Đáp án C**
  - *Căn cứ tài liệu*: Trang 216. Lưu trữ quá nhiều dữ liệu lớn vào Session sẽ làm cạn kiệt bộ nhớ RAM khi số lượng người dùng đồng thời tăng cao.
- **Câu 14: Đáp án A**
  - *Căn cứ tài liệu*: Trang 208. `ScopedProxyMode.TARGET_CLASS` chỉ thị tạo Proxy kế thừa lớp mục tiêu bằng CGLIB.
- **Câu 15: Đáp án D**
  - *Căn cứ tài liệu*: Trang 220-221. Nếu người dùng chưa đăng nhập (`username == null`), trả về `"redirect:/"` để đưa về trang đăng nhập.
- **Câu 16: Đáp án A**
  - *Căn cứ tài liệu*: Trang 205-206. Mỗi request có một thể hiện `LoginProcessor` riêng biệt trong heap, không thể can thiệp dữ liệu của nhau.
- **Câu 17: Đáp án C**
  - *Căn cứ tài liệu*: Trang 224-225. Biến đếm chung cho toàn bộ hệ thống nên dùng `@ApplicationScope` hoặc Singleton Service.
- **Câu 18: Đáp án D**
  - *Căn cứ tài liệu*: Trang 222. Đặt `this.username = null;` hoặc hủy session để xóa thông tin phiên của người dùng.
- **Câu 19: Đáp án B**
  - *Căn cứ tài liệu*: Trang 209-210. Khi khởi động, Spring tạo một CGLIB Proxy rỗng bọc ngoài tiêm vào Singleton Controller.
- **Câu 20: Đáp án A**
  - *Căn cứ tài liệu*: Trong môi trường multi-server cluster, session mặc định lưu trên RAM cục bộ của máy chủ sẽ không được đồng bộ sang máy khác nếu không có distributed cache.

---

#### PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI
- **Câu 21:**
  - a: **ĐÚNG** (Trang 205).
  - b: **SAI** (Mỗi yêu cầu có một thể hiện riêng biệt).
  - c: **ĐÚNG** (Trang 206: Loại bỏ race condition mà không cần lock).
  - d: **SAI** (Bị giải phóng ngay sau khi phản hồi HTTP gửi đi).
- **Câu 22:**
  - a: **ĐÚNG** (Trang 215).
  - b: **ĐÚNG** (Trang 216).
  - c: **ĐÚNG** (Trình duyệt ẩn danh tạo một cookie store riêng).
  - d: **SAI** (Trình duyệt đóng lại không tự gửi thông báo HTTP về máy chủ; phiên chỉ hết hạn khi máy chủ đạt giới hạn timeout).
- **Câu 23:**
  - a: **ĐÚNG** (Trang 209).
  - b: **ĐÚNG** (Nếu không có proxy, bean tiêm vào constructor singleton sẽ bị ghim cố định mãi mãi).
  - c: **ĐÚNG** (Trang 210).
  - d: **SAI** (Proxy được sinh ra động trong bộ nhớ lúc chạy bằng bytecode manipulation, không ảnh hưởng tệp JAR).
- **Câu 24:**
  - a: **ĐÚNG** (Trang 223).
  - b: **ĐÚNG** (Trang 224).
  - c: **ĐÚNG** (Trang 224: Trong ứng dụng chuẩn, mỗi ServletContext chỉ có một Spring context).
  - d: **SAI** (Vì được chia sẻ cho mọi luồng, biến thành viên của bean ApplicationScope vẫn phải được đồng bộ an toàn luồng).
- **Câu 25:**
  - a: **ĐÚNG** (Trang 206).
  - b: **ĐÚNG** (Trang 217).
  - c: **SAI** (Cần hủy trạng thái phiên trên server để vô hiệu hóa quyền hạn).
  - d: **ĐÚNG** (Ngăn chặn browser history cache hiển thị lại trang riêng tư).

---

#### PHẦN III: TRẢ LỜI NGẮN
- **Câu 26:** `@RequestScope` (Trang 205).
- **Câu 27:** `@SessionScope` (Trang 215).
- **Câu 28:** `JSESSIONID` (Trang 216).
- **Câu 29:** `Scoped Proxy` (hoặc `Proxy`) (Trang 209).
- **Câu 30:** `@ApplicationScope` (Trang 223).
- **Câu 31:** `redirect:/` (hoặc `redirect:/login`) (Trang 221).

</details>
