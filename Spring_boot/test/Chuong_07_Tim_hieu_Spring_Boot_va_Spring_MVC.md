# 🎯 BỘ ĐỀ LUYỆN TẬP TOÀN DIỆN: CHƯƠNG 7 - TÌM HIỂU SPRING BOOT VÀ SPRING MVC
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

**Câu 1 [Nhận biết]:** Thành phần nào trong Spring MVC đóng vai trò là "Bộ điều khiển mặt tiền" (Front Controller), tiếp nhận mọi yêu cầu HTTP từ Servlet Container và điều phối đến các Controller tương ứng?

A. `HandlerMapping` (Ánh xạ các yêu cầu HTTP tới các phương thức xử lý tương ứng)  
B. `ViewResolver` (Phân giải tên khung nhìn logic thành tệp giao diện hiển thị)  
C. `DispatcherServlet` (Front Controller tiếp nhận và điều phối mọi yêu cầu HTTP)  
D. `ContextLoaderListener` (Khởi tạo ngữ cảnh ứng dụng gốc lúc bật máy chủ web)  

**Câu 2 [Nhận biết]:** Chú thích `@SpringBootApplication` là sự kết hợp của 3 chú thích cốt lõi nào sau đây trong kiến trúc Spring Boot?

A. `@Configuration`, `@EnableAsync`, `@Service` (Cấu hình bất đồng bộ cho tầng dịch vụ)  
B. `@SpringBootConfiguration`, `@EnableAutoConfiguration`, `@ComponentScan`  
C. `@Controller`, `@ResponseBody`, `@Autowired` (Xây dựng tầng điều khiển RESTful)  
D. `@EnableWebMvc`, `@Repository`, `@Aspect` (Tích hợp khía cạnh vào tầng lưu trữ dữ liệu)  

**Câu 3 [Nhận biết]:** Máy chủ web nhúng (Embedded Server) mặc định được Spring Boot khởi chạy khi khai báo gói phụ thuộc `spring-boot-starter-web` là gì?

A. Jetty (Máy chủ web nhúng gọn nhẹ phù hợp cho môi trường kiểm thử)  
B. Undertow (Máy chủ web nhúng hiệu năng cao tối ưu cho kiến trúc non-blocking)  
C. Nginx (Máy chủ phân phối tải trung gian được cài đặt độc lập bên ngoài)  
D. Apache Tomcat (Máy chủ web nhúng chuẩn mực được tích hợp mặc định)  

**Câu 4 [Nhận biết]:** Cổng mạng mặc định (Default port) mà ứng dụng Spring Boot lắng nghe khi khởi chạy trên máy chủ nhúng là bao nhiêu?

A. Cổng 8080 (Cổng lắng nghe mặc định của máy chủ nhúng Tomcat trong Spring Boot)  
B. Cổng 80 (Cổng giao tiếp chuẩn của giao thức HTTP không mã hóa trên Internet)  
C. Cổng 443 (Cổng giao tiếp chuẩn dành cho các kết nối an toàn giao thức HTTPS)  
D. Cổng 3306 (Cổng mạng mặc định dành cho hệ quản trị cơ sở dữ liệu MySQL)  

**Câu 5 [Nhận biết]:** Công cụ tạo khung dự án Spring trực tuyến chính thức do đội ngũ phát triển Spring cung cấp tại địa chỉ `start.spring.io` có tên là gì?

A. Spring Generator (Bộ công cụ tạo mã nguồn tự động của cộng đồng mã nguồn mở)  
B. Spring Initializr (Công cụ trực tuyến chính thức giúp khởi tạo khung dự án)  
C. Spring Starter Studio (Giao diện đồ họa thiết kế các module hệ thống đám mây)  
D. Spring Builder (Tiện ích hỗ trợ xây dựng và tối ưu hóa tệp tin cấu hình Maven)  

**Câu 6 [Nhận biết]:** Thành phần nào trong kiến trúc Spring MVC chịu trách nhiệm tra cứu và chỉ ra chính xác phương thức Controller nào khớp với URL và phương thức HTTP của yêu cầu nhận được?

A. `ViewResolver` (Chuyển đổi chuỗi định danh thành tệp template HTML cụ thể)  
B. `ModelMap` (Lưu trữ các cặp khóa giá trị dữ liệu để truyền qua khung nhìn)  
C. `HandlerMapping` (Xác định chính xác phương thức xử lý khớp với yêu cầu HTTP)  
D. `DispatcherServlet` (Servlet trung tâm tiếp nhận yêu cầu từ tầng mạng gửi vào)  

**Câu 7 [Nhận biết]:** Chú thích nào được sử dụng để đánh dấu một lớp đóng vai trò là tầng điều khiển trong mô hình kiến trúc MVC truyền thống của Spring?

A. `@Controller` (Đánh dấu lớp tầng điều khiển xử lý yêu cầu và điều hướng View)  
B. `@Component` (Chú thích tổng quát dùng để đăng ký bất kỳ bean nào vào context)  
C. `@WebFilter` (Đánh dấu bộ lọc chặn các yêu cầu HTTP ở tầng Servlet container)  
D. `@Servlet` (Định nghĩa trực tiếp một Servlet theo tiêu chuẩn kỹ thuật Java EE)  

**Câu 8 [Thông hiểu]:** Điểm khác biệt căn bản giữa kiến trúc Kết xuất phía máy chủ (Server-Side Rendering - SSR) và kiến trúc REST API là gì?

A. SSR chỉ dùng được với hệ điều hành Windows, còn REST dùng độc quyền cho Linux  
B. SSR không sử dụng giao thức HTTP mà truyền dữ liệu qua giao thức WebSocket tĩnh  
C. REST API hoàn toàn không cần máy chủ mà dữ liệu do trình duyệt tự động sinh ra  
D. SSR trả về tài liệu HTML hoàn chỉnh; REST API chỉ trả về dữ liệu thô (JSON/XML)  

**Câu 9 [Thông hiểu]:** Trong một lớp có chú thích `@Controller`, khi một phương thức ánh xạ trả về một chuỗi ký tự (ví dụ: `return "home.html";`), giá trị chuỗi này theo mặc định được Spring MVC xử lý như thế nào?

A. In trực tiếp chuỗi ký tự đó ra màn hình điều khiển dòng lệnh của máy chủ  
B. Coi đó là tên logic của khung nhìn để ViewResolver tìm tệp giao diện hiển thị  
C. Gửi chuỗi ký tự đó về trình duyệt dưới dạng một tệp văn bản đính kèm tải xuống  
D. Tự động ném ra ngoại lệ cú pháp vì kiểu trả về bắt buộc phải là một đối tượng  

**Câu 10 [Thông hiểu]:** Khái niệm "Servlet Container" (chẳng hạn như Apache Tomcat) đóng vai trò gì trong việc vận hành một ứng dụng Web Java?

A. Tự động thiết kế bố cục và viết toàn bộ mã giao diện HTML cho người dùng cuối  
B. Quản lý việc thực thi các câu lệnh truy vấn dữ liệu SQL xuống hệ CSDL quan hệ  
C. Tự động biên dịch mã nguồn Java từ dạng text sang dạng bytecode `.class`  
D. Lắng nghe cổng mạng TCP, chuyển đổi gói tin HTTP thành request/response và điều phối Servlet  

**Câu 11 [Thông hiểu]:** Triết lý thiết kế cốt lõi của Spring Boot là "Quy ước hơn cấu hình" (Convention over Configuration). Điều này thể hiện rõ nhất qua tính năng nào?

A. Bắt buộc lập trình viên phải tự viết mã khai báo thủ công cho mọi thư viện ngoài  
B. Nghiêm cấm hoàn toàn việc thay đổi cổng mặc định 8080 của máy chủ ứng dụng  
C. Tự động cấu hình các bean hợp lý dựa trên thư viện tìm thấy trong classpath  
D. Bắt buộc mọi biến và tên hàm trong ứng dụng phải đặt hoàn toàn bằng tiếng Anh  

**Câu 12 [Thông hiểu]:** Nếu bạn muốn một phương thức trong lớp `@Controller` gửi thẳng chuỗi văn bản `"Hello World"` về cho người dùng (thay vì tìm kiếm tệp view `Hello World.html`), bạn cần gắn thêm chú thích nào?

A. `@ResponseBody` (Chỉ thị ghi dữ liệu trả về trực tiếp vào thân HTTP response)  
B. `@DirectView` (Tự động tạo ra một trang giao diện trắng chứa nội dung chuỗi)  
C. `@RawData` (Chuyển đổi dữ liệu đối tượng sang định dạng nhị phân không mã hóa)  
D. `@PrintStream` (Chuyển tiếp luồng xuất dữ liệu của máy chủ về phía máy khách)  

**Câu 13 [Thông hiểu]:** Nếu một phương thức Controller sử dụng chú thích `@RequestMapping("/login")` mà không khai báo thuộc tính `method`, phương thức đó sẽ chấp nhận những phương thức HTTP nào?

A. Chỉ chấp nhận duy nhất phương thức HTTP GET gửi đến đường dẫn `/login`  
B. Chỉ chấp nhận duy nhất phương thức HTTP POST từ các biểu mẫu của trang web  
C. Chấp nhận tất cả các phương thức HTTP (GET, POST, PUT, DELETE...) gửi đến `/login`  
D. Từ chối tất cả các yêu cầu và lập tức trả về mã lỗi bảo mật HTTP 403 Forbidden  

**Câu 14 [Thông hiểu]:** Gói phụ thuộc bắt đầu (Starter Dependency) như `spring-boot-starter-web` trong Spring Boot giải quyết bài toán khó khăn nào trong khâu quản lý phụ thuộc truyền thống?

A. Tự động nén kích thước của các tệp hình ảnh để tối ưu hóa tốc độ tải trang web  
B. Gom nhóm và quản lý phiên bản tương thích giữa các thư viện, loại bỏ xung đột  
C. Tự động chuyển đổi các đoạn mã Java phức tạp thành các hàm lambda ngắn gọn  
D. Tự động tạo các kịch bản kiểm thử tải tự động cho toàn bộ hệ thống máy chủ  

**Câu 15 [Thông hiểu]:** Chú thích `@GetMapping("/products")` có mối quan hệ như thế nào với chú thích gốc `@RequestMapping` trong Spring MVC?

A. Là một thư viện độc lập của bên thứ ba không nằm trong gói thư viện chuẩn Spring  
B. Chỉ có thể sử dụng được khi ứng dụng kết nối trực tiếp với CSDL đám mây  
C. Bắt buộc phương thức xử lý phải trả về kiểu dữ liệu mảng byte nhị phân tĩnh  
D. Là chú thích rút gọn tương đương với `@RequestMapping(path="/products", method=RequestMethod.GET)`  

**Câu 16 [Vận dụng]:** Bạn muốn thay đổi cổng mặc định của ứng dụng Spring Boot từ `8080` sang `9090`. Cấu hình nào trong tệp `src/main/resources/application.properties` là chính xác nhất?

A. `server.port=9090` (Thiết lập cổng lắng nghe của máy chủ nhúng sang 9090)  
B. `port.number=9090` (Khai báo biến chỉ số cổng cho các module tiện ích mở rộng)  
C. `tomcat.http.port=9090` (Cấu hình riêng biệt chỉ có hiệu lực trên máy chủ ngoài)  
D. `app.port=9090` (Định nghĩa biến môi trường cục bộ dùng cho quá trình kiểm thử)  

**Câu 17 [Vận dụng]:** Một ứng dụng web cần phục vụ một tệp hình ảnh tĩnh `logo.png` và tệp CSS `styles.css`. Theo quy ước chuẩn mực của Spring Boot, bạn cần đặt các tệp này vào thư mục nào trong dự án?

A. `src/main/java/static/` (Thư mục chứa mã nguồn Java logic nghiệp vụ của dự án)  
B. `src/main/resources/templates/` (Thư mục dành riêng cho các tệp mẫu giao diện HTML)  
C. `src/main/resources/static/` (Thư mục quy ước chuẩn để lưu trữ tài nguyên tĩnh)  
D. Ngay tại thư mục gốc bên ngoài dự án ngang hàng với tệp quản lý cấu hình build  

**Câu 18 [Vận dụng]:** Lớp chính của bạn nằm ở gói `com.example.app`. Một lớp `@Controller` khác nằm ở gói `com.example.controllers`. Khi khởi chạy ứng dụng, truy cập vào đường dẫn thì nhận thông báo lỗi HTTP 404 (Not Found). Nguyên nhân phổ biến nhất là gì?

A. Do card mạng của máy tính bị mất kết nối trong quá trình khởi chạy ứng dụng  
B. Do `@SpringBootApplication` chỉ quét gói hiện tại và con; gói controllers bị bỏ sót  
C. Do cổng 8080 bị tường lửa của hệ điều hành chặn hoàn toàn các kết nối gửi tới  
D. Do máy chủ Tomcat nhúng không hỗ trợ các lớp điều khiển có nhiều phương thức  

**Câu 19 [Vận dụng]:** Bạn có đoạn mã sau:
```java
@Controller
public class HelloController {
    @GetMapping("/hello")
    public String sayHello() {
        return "hello";
    }
}
```
Khi người dùng truy cập `http://localhost:8080/hello`, trình duyệt báo lỗi `Circular view path [hello]: would dispatch back to the current handler URL again`. Để sửa lỗi này và trả về chuỗi văn bản `"hello"` cho client, giải pháp đơn giản nhất là:

A. Thêm chú thích `@ResponseBody` lên hàm `sayHello()` hoặc đổi sang `@RestController`  
B. Đổi tên phương thức `sayHello()` thành phương thức khởi chạy ứng dụng `main()`  
C. Thay đổi kiểu dữ liệu trả về của phương thức từ kiểu `String` sang kiểu số `int`  
D. Cài đặt lại toàn bộ hệ điều hành của máy chủ để xóa sạch bộ nhớ cache tạm thời  

**Câu 20 [Vận dụng]:** Bạn muốn chuyển đổi máy chủ nhúng của Spring Boot từ Apache Tomcat sang Undertow để tối ưu hóa hiệu năng chịu tải. Cách cấu hình đúng trong tệp `pom.xml` của Maven là:

A. Xóa hoàn toàn tệp `pom.xml` và tải Undertow về cài đặt thủ công qua trình cài đặt  
B. Chỉ cần thêm dòng thuộc tính `server.engine=undertow` vào `application.properties`  
C. Cài đặt thêm máy chủ WebLogic để điều phối chuyển đổi giữa các máy chủ nhúng  
D. Dùng `<exclusions>` loại bỏ Tomcat trong starter-web, rồi thêm phụ thuộc starter-undertow  

---

## PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI (5 CÂU - 20 MỆNH ĐỀ)
*Đọc từng đoạn ngữ cảnh sau và xác định tính ĐÚNG hoặc SAI của từng mệnh đề a, b, c, d.*

**Câu 21:** Về mô hình kiến trúc MVC (Model - View - Controller):
- **a)** [Nhận biết] Model đại diện cho dữ liệu và trạng thái cần hiển thị tới người dùng.  
- **b)** [Thông hiểu] Controller đóng vai trò điều phối, tiếp nhận yêu cầu từ client, gọi các dịch vụ nghiệp vụ và chọn View phù hợp.  
- **c)** [Thông hiểu] Trong mô hình Server-Side Rendering (SSR), việc kết hợp dữ liệu từ Model vào mẫu giao diện View được thực hiện trực tiếp bởi trình duyệt web của người dùng.  
- **d)** [Vận dụng] Mô hình MVC giúp phân tách rõ ràng trách nhiệm giữa tầng hiển thị giao diện và tầng điều hướng logic.  

**Câu 22:** Về các đặc trưng ưu việt của Spring Boot so với Spring Framework truyền thống:
- **a)** [Nhận biết] Spring Boot cung cấp các máy chủ web nhúng (như Tomcat) giúp ứng dụng có thể chạy độc lập như một tệp JAR thông thường mà không cần cài đặt Tomcat bên ngoài.  
- **b)** [Thông hiểu] Cơ chế Auto-Configuration tự động cấu hình các bean chuẩn dựa trên các thư viện có mặt trong classpath.  
- **c)** [Thông hiểu] Để cấu hình một ứng dụng Spring Boot Web, bắt buộc phải tạo tệp cấu hình triển khai `web.xml`.  
- **d)** [Vận dụng] Một ứng dụng Spring Boot sau khi đóng gói thành tệp "Fat JAR" chứa đầy đủ cả mã nguồn, thư viện phụ thuộc và máy chủ web nhúng.  

**Câu 23:** Về luồng xử lý yêu cầu của `DispatcherServlet` trong Spring MVC:
- **a)** [Nhận biết] `DispatcherServlet` là điểm tiếp nhận duy nhất cho toàn bộ các yêu cầu HTTP gửi đến ứng dụng Spring MVC.  
- **b)** [Thông hiểu] `DispatcherServlet` sử dụng `HandlerMapping` để tự động chuyển đổi dữ liệu HTTP sang định dạng JSON.  
- **c)** [Thông hiểu] Sau khi nhận kết quả từ Controller, `DispatcherServlet` ủy thác cho `ViewResolver` để tìm và kết xuất tệp View cụ thể.  
- **d)** [Vận dụng] Nếu `HandlerMapping` không tìm thấy bất kỳ phương thức Controller nào khớp với URL yêu cầu, `DispatcherServlet` sẽ trả về mã trạng thái HTTP 404 (Not Found).  

**Câu 24:** Về việc ánh xạ đường dẫn HTTP với `@RequestMapping`:
- **a)** [Nhận biết] Chú thích `@RequestMapping` có thể được gắn trên mức lớp (Class-level) và mức phương thức (Method-level).  
- **b)** [Thông hiểu] Khi đặt `@RequestMapping("/api")` trên lớp, tất cả các phương thức bên trong lớp đó sẽ tự động kế thừa đường dẫn cơ sở `/api`.  
- **c)** [Thông hiểu] Ta có thể khai báo hai phương thức Controller có cùng đường dẫn URL và cùng phương thức HTTP GET mà không bị báo lỗi khi khởi động.  
- **d)** [Vận dụng] Nếu gửi một yêu cầu HTTP POST đến một endpoint chỉ khai báo `@GetMapping`, máy chủ sẽ phản hồi mã lỗi HTTP 405 (Method Not Allowed).  

**Câu 25:** Về việc cấu hình ứng dụng và phục vụ tài nguyên tĩnh trong Spring Boot:
- **a)** [Nhận biết] Tệp cấu hình mặc định của Spring Boot là `application.properties` hoặc `application.yml`.  
- **b)** [Thông hiểu] Các tệp đặt trong thư mục `src/main/resources/static/` có thể được truy cập trực tiếp từ trình duyệt qua đường dẫn gốc của URL.  
- **c)** [Thông hiểu] Các tệp giao diện mẫu (templates như Thymeleaf) đặt trong `src/main/resources/templates/` có thể được người dùng truy cập trực tiếp bằng URL tĩnh mà không cần thông qua Controller.  
- **d)** [Vận dụng] Lập trình viên có thể tùy biến đường dẫn ngữ cảnh (Context Path) của ứng dụng bằng thuộc tính `server.servlet.context-path`.  

---

## PHẦN III: TRẢ LỜI NGẮN (6 CÂU)
*Điền câu trả lời ngắn gọn, chính xác vào chỗ trống theo yêu cầu của từng câu.*

**Câu 26 [Nhận biết]:** Thành phần Servlet trung tâm trong Spring MVC đóng vai trò là "Bộ điều khiển mặt tiền" (Front Controller) tiếp nhận mọi yêu cầu HTTP có tên lớp là gì?  
*(Quy định: Điền tên lớp Java chính xác trong Spring MVC)*  
👉 **Trả lời:** ............................................................

**Câu 27 [Nhận biết]:** Máy chủ web nhúng (embedded servlet container) mặc định được Spring Boot tự động tích hợp và chạy khi sử dụng starter `spring-boot-starter-web` là máy chủ nào?  
*(Quy định: Điền tên máy chủ web)*  
👉 **Trả lời:** ............................................................

**Câu 28 [Nhận biết]:** Cổng mạng mặc định (default port) mà ứng dụng Spring Boot lắng nghe khi khởi chạy trên máy chủ nhúng là cổng số bao nhiêu?  
*(Quy định: Điền số nguyên đại diện cho cổng mạng)*  
👉 **Trả lời:** ............................................................

**Câu 29 [Thông hiểu]:** Khi một phương thức trong lớp `@Controller` trả về một chuỗi `String` mà KHÔNG có chú thích `@ResponseBody`, Spring MVC mặc định hiểu chuỗi đó đại diện cho thành phần nào?  
*(Quy định: Điền tên thành phần bằng tiếng Việt hoặc tiếng Anh, ví dụ: Tên khung nhìn / View name)*  
👉 **Trả lời:** ............................................................

**Câu 30 [Thông hiểu]:** Chú thích nào được đặt trên phương thức của `@Controller` (hoặc trên chính lớp đó) để chỉ thị cho Spring bỏ qua cơ chế phân giải khung nhìn (ViewResolver) và ghi trực tiếp dữ liệu trả về vào thân của HTTP Response?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 31 [Vận dụng]:** Viết dòng cấu hình chính xác trong tệp `application.properties` để thay đổi cổng lắng nghe của máy chủ nhúng Spring Boot từ 8080 sang cổng 9090.  
*(Quy định: Ghi rõ cặp key=value không chứa khoảng trắng thừa)*  
👉 **Trả lời:** ............................................................

---

## 🔍 BẢNG ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT

<details>
<summary><b>BẤM VÀO ĐÂY ĐỂ XEM ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT</b></summary>

### BẢNG ĐÁP ÁN NHANH PHẦN I (MCQ)
| Câu | Đáp án | Mức độ | Câu | Đáp án | Mức độ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | **C** | Nhận biết | 11 | **C** | Thông hiểu |
| 2 | **B** | Nhận biết | 12 | **A** | Thông hiểu |
| 3 | **D** | Nhận biết | 13 | **C** | Thông hiểu |
| 4 | **A** | Nhận biết | 14 | **B** | Thông hiểu |
| 5 | **B** | Nhận biết | 15 | **D** | Thông hiểu |
| 6 | **C** | Nhận biết | 16 | **A** | Vận dụng |
| 7 | **A** | Nhận biết | 17 | **C** | Vận dụng |
| 8 | **D** | Thông hiểu | 18 | **B** | Vận dụng |
| 9 | **B** | Thông hiểu | 19 | **A** | Vận dụng |
| 10 | **D** | Thông hiểu | 20 | **D** | Vận dụng |

---

### BẢNG ĐÁP ÁN NHANH PHẦN II (ĐÚNG / SAI)
- **Câu 21:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**
- **Câu 22:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**
- **Câu 23:** a: **ĐÚNG** | b: **SAI** | c: **ĐÚNG** | d: **ĐÚNG**
- **Câu 24:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**
- **Câu 25:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**

---

### BẢNG ĐÁP ÁN NHANH PHẦN III (TRẢ LỜI NGẮN)
- **Câu 26:** `DispatcherServlet`
- **Câu 27:** `Tomcat` (hoặc `Apache Tomcat`)
- **Câu 28:** `8080`
- **Câu 29:** Tên khung nhìn (hoặc `View name`, `Logical view name`)
- **Câu 30:** `@ResponseBody`
- **Câu 31:** `server.port=9090`

---

### HƯỚNG DẪN GIẢI CHI TIẾT

#### PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN
- **Câu 1: Đáp án C**
  - *Căn cứ tài liệu*: Trang 175-176 mục "How Spring MVC works". `DispatcherServlet` là Front Controller tiếp nhận mọi yêu cầu gửi tới Spring MVC.
- **Câu 2: Đáp án B**
  - *Căn cứ tài liệu*: Trang 171. `@SpringBootApplication` tổ hợp của 3 chú thích: `@SpringBootConfiguration`, `@EnableAutoConfiguration` và `@ComponentScan`.
- **Câu 3: Đáp án D**
  - *Căn cứ tài liệu*: Trang 168. Apache Tomcat là máy chủ nhúng mặc định của Spring Boot trong starter web.
- **Câu 4: Đáp án A**
  - *Căn cứ tài liệu*: Trang 172. Cổng mạng mặc định của ứng dụng web Spring Boot là 8080.
- **Câu 5: Đáp án B**
  - *Căn cứ tài liệu*: Trang 166. Công cụ khởi tạo dự án trực tuyến chính thức tại `start.spring.io` là Spring Initializr.
- **Câu 6: Đáp án C**
  - *Căn cứ tài liệu*: Trang 176. `HandlerMapping` khớp nối yêu cầu HTTP nhận được với phương thức Controller phù hợp.
- **Câu 7: Đáp án A**
  - *Căn cứ tài liệu*: Trang 173. Chú thích `@Controller` dùng để đánh dấu tầng điều khiển trong kiến trúc MVC.
- **Câu 8: Đáp án D**
  - *Căn cứ tài liệu*: Trang 163-165. Phân biệt Server-Side Rendering (kết xuất HTML hoàn chỉnh trên server) và REST API (chỉ trả về dữ liệu thô như JSON).
- **Câu 9: Đáp án B**
  - *Căn cứ tài liệu*: Trang 174. Trong `@Controller`, chuỗi String trả về là tên logic của khung nhìn để chuyển cho `ViewResolver`.
- **Câu 10: Đáp án D**
  - *Căn cứ tài liệu*: Trang 165. Servlet Container quản lý các kết nối mạng TCP, phân giải giao thức HTTP và điều phối các Servlet.
- **Câu 11: Đáp án C**
  - *Căn cứ tài liệu*: Triết lý "Convention over Configuration" tự động cấu hình các bean chuẩn dựa trên thư viện trong classpath.
- **Câu 12: Đáp án A**
  - *Căn cứ tài liệu*: Trang 174. `@ResponseBody` chuyển hướng dữ liệu trả về trực tiếp vào HTTP response body, bỏ qua ViewResolver.
- **Câu 13: Đáp án C**
  - *Căn cứ tài liệu*: Khi không chỉ định HTTP method, `@RequestMapping` mặc định chấp nhận mọi phương thức HTTP.
- **Câu 14: Đáp án B**
  - *Căn cứ tài liệu*: Trang 168. Starter dependencies quản lý đồng bộ và kiểm thử độ tương thích giữa các thư viện phụ thuộc.
- **Câu 15: Đáp án D**
  - *Căn cứ tài liệu*: `@GetMapping` là chú thích cấu thành rút gọn của `@RequestMapping(method = RequestMethod.GET)`.
- **Câu 16: Đáp án A**
  - *Căn cứ tài liệu*: Thuộc tính chuẩn trong Spring Boot để đổi cổng là `server.port=9090`.
- **Câu 17: Đáp án C**
  - *Căn cứ tài liệu*: Spring Boot tự động phục vụ các tệp tĩnh đặt trong thư mục `src/main/resources/static/`.
- **Câu 18: Đáp án B**
  - *Căn cứ tài liệu*: `@SpringBootApplication` mặc định chỉ quét package chứa nó và các sub-package, bỏ sót controller ngoài phạm vi.
- **Câu 19: Đáp án A**
  - *Căn cứ tài liệu*: Thêm `@ResponseBody` hoặc đổi sang `@RestController` để trả về chuỗi văn bản thay vì tìm View name bị lặp vô tận.
- **Câu 20: Đáp án D**
  - *Căn cứ tài liệu*: Loại trừ Tomcat bằng thẻ `<exclusions>` và thêm starter của Undertow trong Maven.

---

#### PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI
- **Câu 21:**
  - a: **ĐÚNG** (Trang 162).
  - b: **ĐÚNG** (Trang 163).
  - c: **SAI** (Trong SSR, việc ghép Model vào View diễn ra hoàn toàn trên máy chủ backend).
  - d: **ĐÚNG** (Trang 164-165).
- **Câu 22:**
  - a: **ĐÚNG** (Trang 171).
  - b: **ĐÚNG** (Trang 169).
  - c: **SAI** (Spring Boot loại bỏ hoàn toàn việc dùng tệp cấu hình triển khai `web.xml`).
  - d: **ĐÚNG** (Trang 168: Khái niệm Fat JAR / Executable JAR).
- **Câu 23:**
  - a: **ĐÚNG** (Trang 175).
  - b: **SAI** (`HandlerMapping` chỉ định vị Controller tương ứng, không làm nhiệm vụ chuyển đổi JSON).
  - c: **ĐÚNG** (Trang 176).
  - d: **ĐÚNG** (Trả về mã lỗi HTTP 404 khi không tìm thấy endpoint khớp).
- **Câu 24:**
  - a: **ĐÚNG** (Trang 173).
  - b: **ĐÚNG** (Định nghĩa base URL chung cho toàn bộ controller).
  - c: **SAI** (Spring sẽ báo lỗi xung đột đường dẫn `IllegalStateException: Ambiguous mapping`).
  - d: **ĐÚNG** (Trả về mã lỗi 405 Method Not Allowed khi sai phương thức HTTP).
- **Câu 25:**
  - a: **ĐÚNG** (Trang 183).
  - b: **ĐÚNG** (Phục vụ tài nguyên tĩnh trực tiếp từ thư mục `static/`).
  - c: **SAI** (Thư mục `templates/` được bảo vệ, chỉ có thể hiển thị thông qua sự điều phối của Controller).
  - d: **ĐÚNG** (Trang 172).

---

#### PHẦN III: TRẢ LỜI NGẮN
- **Câu 26:** `DispatcherServlet` (Trang 175).
- **Câu 27:** `Tomcat` hoặc `Apache Tomcat` (Trang 168).
- **Câu 28:** `8080` (Trang 172).
- **Câu 29:** Tên khung nhìn (hoặc `View name`, `Logical view name`) (Trang 174).
- **Câu 30:** `@ResponseBody` (Trang 174).
- **Câu 31:** `server.port=9090` (Trang 172).

</details>
