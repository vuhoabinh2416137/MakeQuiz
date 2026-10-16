# 🎯 BỘ ĐỀ LUYỆN TẬP TOÀN DIỆN: CHƯƠNG 11 - TIÊU THỤ CÁC ĐIỂM CUỐI REST
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

**Câu 1 [Nhận biết]:** Công cụ nào trong hệ sinh thái Spring cho phép lập trình viên gọi các điểm cuối REST theo phong cách **khai báo (Declarative REST Client)**, tức là chỉ cần định nghĩa một interface kèm các chú thích mà không cần tự viết mã cài đặt mạng?

A. `RestTemplate` (Công cụ gọi REST truyền thống yêu cầu viết mã thực thi cụ thể)  
B. `HttpURLConnection` (Lớp giao tiếp mạng cấp thấp có sẵn trong thư viện chuẩn Java)  
C. `Spring Cloud OpenFeign` (Thư viện gọi REST theo mô hình khai báo qua interface)  
D. `OkHttpClient` (Thư viện máy khách HTTP độc lập của bên thứ ba do Square phát triển)  

**Câu 2 [Nhận biết]:** Chú thích nào được đặt trên một interface Java để chỉ định rằng nó là một REST Client được quản lý và tự động tạo proxy bởi OpenFeign?

A. `@RestClient` (Đánh dấu máy khách REST trong các phiên bản Spring Framework mới)  
B. `@FeignClient` (Khai báo interface REST Client tự động được quản lý bởi OpenFeign)  
C. `@HttpClient` (Chú thích tùy biến chỉ định cấu hình giao vận tầng mạng của hệ thống)  
D. `@RemoteService` (Đánh dấu điểm cuối gọi thủ tục từ xa theo chuẩn kiến trúc RPC)  

**Câu 3 [Nhận biết]:** Chú thích nào bắt buộc phải đặt trên một lớp cấu hình `@Configuration` hoặc lớp chính `@SpringBootApplication` để kích hoạt tính năng OpenFeign trong ứng dụng?

A. `@EnableFeignClients` (Kích hoạt tính năng quét và tạo Dynamic Proxy cho Feign)  
B. `@EnableRestClients` (Khai báo quét các lớp giao tiếp mạng trong các dự án cũ)  
C. `@EnableHttpProxy` (Kích hoạt bộ định tuyến trung gian cho các gói tin mạng HTTP)  
D. `@EnableRemoteCall` (Bật tính năng thực thi các phương thức từ xa qua mạng nội bộ)  

**Câu 4 [Nhận biết]:** Lớp kinh điển nào được tích hợp sẵn trong module `spring-web` từ Spring 3.0 chuyên dùng cho các cuộc gọi REST đồng bộ chặn (Synchronous & Blocking)?

A. `WebClient` (Công cụ gọi HTTP hiện đại hỗ trợ mô hình phản ứng phi ngăn chặn)  
B. `AsyncHttpClient` (Thư viện hỗ trợ gửi các yêu cầu mạng bất đồng bộ theo luồng)  
C. `SocketClient` (Giao diện điều khiển luồng dữ liệu thô ở tầng giao vận TCP/IP)  
D. `RestTemplate` (Lớp truyền thống kinh điển thực hiện cuộc gọi REST đồng bộ chặn)  

**Câu 5 [Nhận biết]:** Công cụ hiện đại nào trong module `spring-webflux` được thiết kế để thực thi các cuộc gọi HTTP theo mô hình phản ứng phi ngăn chặn (Reactive & Non-blocking)?

A. `WebClient` (Công cụ phản ứng phi ngăn chặn hiện đại thuộc module Spring WebFlux)  
B. `RestTemplate` (Công cụ truyền thống hoạt động theo mô hình đồng bộ ngăn chặn luồng)  
C. `HttpURLConnection` (Công cụ cơ bản của Java không hỗ trợ cơ chế phản ứng dòng dữ liệu)  
D. `ReactiveFeign` (Module mở rộng độc lập không nằm trong gói thư viện chuẩn Spring Web)  

**Câu 6 [Nhận biết]:** Lớp đối tượng nào trong Spring được dùng để đóng gói cả phần thân dữ liệu (Body) và các tiêu đề (HTTP Headers) khi gửi yêu cầu thông qua `RestTemplate`?

A. `HttpPayload<T>` (Đối tượng chứa dữ liệu nhị phân truyền tải qua các socket mạng)  
B. `HttpEntity<T>` (Đóng gói phần thân dữ liệu kèm theo các tiêu đề HTTP Headers gửi đi)  
C. `RequestWrapper<T>` (Lớp bao bọc dùng để tùy biến và ghi đè nội dung của gói tin HTTP)  
D. `DataPacket<T>` (Cấu trúc dữ liệu phân mảnh dùng trong giao thức truyền thông UDP)  

**Câu 7 [Thông hiểu]:** Bản chất của mô hình "Đồng bộ chặn" (Synchronous Blocking) khi sử dụng `RestTemplate` để gọi một API từ xa là gì?

A. Trình biên dịch Java sẽ tạm dừng quá trình biên dịch mã nguồn cho đến khi có mạng  
B. Máy chủ ứng dụng sẽ tự động ngắt kết nối mạng Internet để bảo vệ dữ liệu an toàn  
C. Cổng kết nối TCP của máy chủ sẽ bị khóa vĩnh viễn và từ chối các yêu cầu tiếp theo  
D. Luồng xử lý bị phong tỏa chờ phản hồi từ xa, không thể làm việc khác trong lúc chờ  

**Câu 8 [Thông hiểu]:** Điểm vượt trội về mặt hiệu năng của mô hình "Phản ứng phi ngăn chặn" (Reactive Non-blocking) trong `WebClient` khi hệ thống phải xử lý đồng thời hàng nghìn kết nối mạng I/O là gì?

A. Giúp giảm thiểu tối đa chi phí cước thuê bao đường truyền Internet của trung tâm dữ liệu  
B. Tự động khắc phục các lỗi sai cú pháp của chuỗi dữ liệu JSON bị hỏng trên đường truyền  
C. Giải phóng luồng trong thời gian chờ mạng, phục vụ hàng ngàn kết nối bằng ít luồng  
D. Cho phép ứng dụng bỏ qua hoàn toàn việc xác thực chứng chỉ số SSL khi gọi giao thức HTTPS  

**Câu 9 [Thông hiểu]:** Sự khác biệt cốt lõi giữa phương thức `getForObject()` và `getForEntity()` của đối tượng `RestTemplate` là gì?

A. `getForObject()` chỉ hỗ trợ giao thức HTTP, còn `getForEntity()` chỉ hỗ trợ giao thức HTTPS  
B. `getForObject` chỉ trả về thân dữ liệu; `getForEntity` trả về ResponseEntity có đủ headers  
C. `getForObject()` thực thi bất đồng bộ trên luồng nền, còn `getForEntity()` thực thi đồng bộ  
D. Hai phương thức này hoàn toàn giống hệt nhau về cả cấu trúc tham số và kiểu dữ liệu trả về  

**Câu 10 [Thông hiểu]:** Phương thức nào trên đối tượng `RestTemplate` mang tính tổng quát nhất, cho phép lập trình viên chỉ định bất kỳ phương thức HTTP nào (GET, POST, PUT, DELETE...), truyền tiêu đề và nhận lại `ResponseEntity`?

A. `executeRequest()` (Phương thức cấp thấp chỉ dùng cho các giao dịch nội bộ của Spring)  
B. `sendAndReceive()` (Phương thức gửi nhận thông điệp qua hàng đợi tin nhắn bất đồng bộ)  
C. `dispatch()` (Phương thức điều phối gói tin trực tiếp xuống tầng điều khiển mạng vật lý)  
D. `exchange()` (Phương thức tổng quát hỗ trợ mọi HTTP method, headers và ResponseEntity)  

**Câu 11 [Thông hiểu]:** Phía sau hậu trường, Spring Cloud OpenFeign hiện thực hóa interface `@FeignClient` bằng cách nào mà lập trình viên không cần viết bất kỳ dòng mã mạng nào?

A. Tự động tạo thêm một tệp mã nguồn Java mới trên ổ cứng rồi biên dịch lại ứng dụng  
B. Nhúng một trình duyệt web Chromium ẩn danh chạy ngầm bên trong máy ảo Java của server  
C. Tạo Dynamic Proxy lúc chạy, đọc chú thích trên interface để tự động gửi HTTP và giải mã JSON  
D. Mở kết nối mạng trực tiếp vào cơ sở dữ liệu của dịch vụ từ xa thông qua cổng JDBC  

**Câu 12 [Thông hiểu]:** Trong mô hình lập trình phản ứng với `WebClient`, kiểu dữ liệu `Mono<T>` của thư viện Project Reactor đại diện cho điều gì?

A. Nhà phát hành dữ liệu bất đồng bộ (Publisher) phát ra tối đa 0 hoặc 1 phần tử dữ liệu  
B. Một luồng phát dữ liệu vô hạn không bao giờ dừng lại cho đến khi tắt ứng dụng  
C. Một mảng danh sách cố định chứa hàng triệu phần tử số nguyên trong bộ nhớ RAM  
D. Một kết nối đơn luồng duy nhất được thiết lập tới hệ quản trị cơ sở dữ liệu quan hệ  

**Câu 13 [Thông hiểu]:** Trong mô hình lập trình phản ứng với `WebClient`, kiểu dữ liệu `Flux<T>` đại diện cho điều gì?

A. Một giá trị logic boolean đơn lẻ biểu thị trạng thái kết nối mạng thành công hay thất bại  
B. Một đối tượng bao bọc chứa duy nhất một mã lỗi HTTP khi máy chủ từ xa gặp sự cố  
C. Một kết nối socket bị đóng ngay lập tức sau khi gửi gói tin đầu tiên qua đường truyền  
D. Nhà phát hành dữ liệu bất đồng bộ phát ra từ 0 đến N phần tử (dòng dữ liệu liên tục)  

**Câu 14 [Thông hiểu]:** Trong khai báo `@FeignClient(name = "payments", url = "${payments.service.url}")`, việc sử dụng cú pháp `${payments.service.url}` mang lại lợi ích gì?

A. Cho phép hệ thống tự động mã hóa mật khẩu truy cập của đường dẫn mạng trước khi gửi  
B. Tách rời URL vào application.properties, dễ dàng thay đổi theo môi trường (Dev/Prod)  
C. Tự động chuyển đổi cổng mạng của dịch vụ từ xa về cổng mặc định 8080 của máy chủ  
D. Khiến ứng dụng có thể hoạt động ngoại tuyến bình thường mà không cần có kết nối mạng  

**Câu 15 [Thông hiểu]:** Trong tình huống nào sau đây thì việc sử dụng `WebClient` là sự lựa chọn kiến trúc tối ưu hơn hẳn so với `RestTemplate` hay `OpenFeign`?

A. Ứng dụng quản lý nội bộ nhỏ chỉ phục vụ một người dùng truy cập định kỳ mỗi tuần  
B. Khi ứng dụng được triển khai trên các thiết bị máy tính cá nhân hoàn toàn ngắt kết nối  
C. Hệ thống chịu tải lớn, hàng nghìn request đồng thời, gọi nhiều dịch vụ và tối ưu phần cứng  
D. Khi cơ sở dữ liệu của hệ thống chỉ lưu trữ dưới 10 bản ghi và không có nhu cầu mở rộng  

**Câu 16 [Vận dụng]:** Bạn cần dùng `RestTemplate` để gửi yêu cầu POST tới URL `http://localhost:8080/payment`, kèm theo tiêu đề `requestId: 12345` và thân là đối tượng `payment`. Đoạn mã nào sau đây thực hiện chuẩn xác?

A.
```java
HttpHeaders headers = new HttpHeaders();
headers.add("requestId", "12345");
HttpEntity<Payment> httpEntity = new HttpEntity<>(payment, headers);
ResponseEntity<Payment> response = restTemplate.exchange(
    "http://localhost:8080/payment", HttpMethod.POST, httpEntity, Payment.class);
```
B.
```java
restTemplate.postForObject("http://localhost:8080/payment", payment, Payment.class);
// Cách này không hỗ trợ truyền tiêu đề tùy biến
```
C.
```java
ResponseEntity<Payment> response = restTemplate.getForEntity(
    "http://localhost:8080/payment?requestId=12345", Payment.class);
```
D.
```java
HttpEntity<Payment> httpEntity = new HttpEntity<>(payment);
restTemplate.delete("http://localhost:8080/payment");
```

**Câu 17 [Vận dụng]:** Bạn muốn định nghĩa một interface OpenFeign để gọi điểm cuối GET `/payments/{id}` của dịch vụ từ xa. Khai báo nào sau đây là chuẩn mực nhất?

A.
```java
@FeignClient(name = "payments")
public class PaymentsProxy {
    public Payment getPayment(String id) { return null; }
}
```
B.
```java
@FeignClient(name = "payments", url = "${payments.url}")
public interface PaymentsProxy {
    @PostMapping("/payments")
    Payment getPayment(@RequestBody String id);
}
```
C.
```java
public interface PaymentsProxy {
    @GetMapping("/payments/{id}")
    Payment getPayment(@RequestParam String id);
}
```
D.
```java
@FeignClient(name = "payments", url = "${payments.url}")
public interface PaymentsProxy {
    @GetMapping("/payments/{id}")
    Payment getPayment(@PathVariable("id") String id);
}
```

**Câu 18 [Vận dụng]:** Để sử dụng `WebClient` trong ứng dụng Spring Boot, bạn cấu hình một Bean trong lớp cấu hình như thế nào là chuẩn mực?

A.
```java
@Configuration
public class ProjectConfig {
    @Bean
    public WebClient webClient() {
        return WebClient.builder().build();
    }
}
```
B.
```java
@Configuration
public class ProjectConfig {
    @Bean
    public WebClient webClient() {
        return new WebClient(); // Hàm khởi tạo private không gọi được trực tiếp
    }
}
```
C.
```java
@Bean
public WebClient webClient() {
    return WebClient.createStaticInstance();
}
```
D. Không cần cấu hình, WebClient tự động có sẵn trong Spring Core mà không cần khai báo  

**Câu 19 [Vận dụng]:** Khi gọi một phương thức trả về `Mono<Payment>` từ `WebClient` trong một ứng dụng đồng bộ truyền thống, nếu lập trình viên gọi phương thức `.block()` trên đối tượng `Mono`, điều gì sẽ xảy ra?

A. Ứng dụng sẽ bị dừng đột ngột và hệ điều hành sẽ tiến hành tắt máy chủ web nhúng  
B. Luồng hiện tại bị chặn (blocking) chờ kết quả hoàn tất và trả về đối tượng Payment  
C. Đối tượng `Mono` sẽ bị hủy bỏ ngay lập tức và ném ra ngoại lệ `CancellationException`  
D. Dữ liệu nhận được sẽ tự động được ghi thẳng vào bảng tương ứng trong cơ sở dữ liệu  

**Câu 20 [Vận dụng]:** Khi dịch vụ thanh toán từ xa phản hồi mã lỗi `404 Not Found` hoặc `500 Internal Server Error`, OpenFeign theo mặc định sẽ xử lý tình huống này như thế nào?

A. Tự động trả về giá trị `null` và coi như yêu cầu đã được xử lý hoàn toàn thành công  
B. Tự động gửi lại yêu cầu mạng đó 100 lần liên tiếp cho đến khi máy chủ từ xa phản hồi 200  
C. Ném ngoại lệ FeignException (như NotFound, InternalServerError) để ứng dụng bắt lỗi  
D. Khởi động lại toàn bộ ứng dụng Spring Boot để thiết lập lại các kết nối mạng trung gian  

---

## PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI (5 CÂU - 20 MỆNH ĐỀ)
*Đọc từng đoạn ngữ cảnh sau và xác định tính ĐÚNG hoặc SAI của từng mệnh đề a, b, c, d.*

**Câu 21:** Về công cụ Spring Cloud OpenFeign:
- **a)** [Nhận biết] OpenFeign là một thư viện hỗ trợ gọi REST API theo mô hình khai báo (Declarative Client).  
- **b)** [Thông hiểu] Trong interface của OpenFeign, ta có thể tái sử dụng trực tiếp các chú thích Spring MVC quen thuộc như `@GetMapping`, `@PostMapping`, `@RequestBody`, `@RequestHeader`.  
- **c)** [Thông hiểu] OpenFeign chỉ có thể kết nối với các dịch vụ viết bằng Spring Boot, không thể gọi được các API viết bằng Node.js hay Python.  
- **d)** [Vận dụng] Sau khi định nghĩa interface `@FeignClient`, ta có thể tiêm (`@Autowired`) nó vào bất kỳ Service nào như một Spring Bean thông thường.  

**Câu 22:** Về công cụ kinh điển `RestTemplate`:
- **a)** [Nhận biết] `RestTemplate` thuộc module `spring-web` và là công cụ truyền thống lâu đời nhất của Spring để gọi REST.  
- **b)** [Thông hiểu] `RestTemplate` hoạt động theo mô hình một luồng trên một yêu cầu (Thread-per-request) và thực hiện chặn đồng bộ (Blocking).  
- **c)** [Thông hiểu] `RestTemplate` không hỗ trợ gửi các yêu cầu có đính kèm HTTP Headers tùy biến.  
- **d)** [Vận dụng] Mặc dù hiện nay Spring khuyến nghị dùng `WebClient` cho các dự án mới, `RestTemplate` vẫn được hỗ trợ và duy trì trong rất nhiều hệ thống doanh nghiệp sẵn có.  

**Câu 23:** Về công cụ phản ứng phi ngăn chặn `WebClient`:
- **a)** [Nhận biết] `WebClient` thuộc module `spring-webflux` và hỗ trợ các hoạt động HTTP theo mô hình phản ứng (Reactive Streams).  
- **b)** [Thông hiểu] `WebClient` có thể xử lý việc truyền dữ liệu dạng dòng liên tục (Streaming) mà không cần nạp toàn bộ dữ liệu vào bộ nhớ cùng lúc.  
- **c)** [Thông hiểu] Mô hình Reactive Non-blocking của `WebClient` vẫn giữ chặt một luồng xử lý riêng biệt trong suốt toàn bộ thời gian chờ máy chủ từ xa phản hồi.  
- **d)** [Vận dụng] Trong một ứng dụng Spring MVC thông thường (không phải WebFlux hoàn toàn), ta vẫn có thể sử dụng `WebClient` kết hợp phương thức `.block()` để thay thế cho `RestTemplate`.  

**Câu 24:** Về hiệu năng và việc lựa chọn giải pháp tiêu thụ REST API:
- **a)** [Nhận biết] Trong mô hình Blocking, nếu số lượng yêu cầu đồng thời vượt quá kích thước tối đa của Thread Pool, các yêu cầu mới sẽ bị xếp hàng chờ (Queueing) gây tăng đột biến độ trễ.  
- **b)** [Thông hiểu] Khi một dịch vụ bên ngoài phản hồi rất chậm (ví dụ mất 10 giây), sử dụng `RestTemplate` có thể dẫn đến hiện tượng cạn kiệt luồng (Thread Starvation) làm tê liệt toàn bộ ứng dụng gọi.  
- **c)** [Thông hiểu] `WebClient` sử dụng số lượng luồng rất nhỏ (thường bằng số lõi CPU) nhờ dựa trên cơ chế gom sự kiện (Event Loop) của máy chủ Netty.  
- **d)** [Vận dụng] Chuyển đổi một cuộc gọi API đơn lẻ từ `RestTemplate` sang `WebClient` sẽ làm giảm thời gian phản hồi mạng (Network Latency) của riêng cuộc gọi đó xuống một nửa.  

**Câu 25:** Về các kỹ thuật nâng cao khi gọi REST API (Headers & Exception Handling):
- **a)** [Nhận biết] Tiêu đề `Authorization` thường được sử dụng để truyền mã thông báo bảo mật (Bearer Token / JWT) khi gọi các API được bảo vệ.  
- **b)** [Thông hiểu] Khi sử dụng `RestTemplate`, nếu dịch vụ từ xa phản hồi mã lỗi `4xx` hoặc `5xx`, `RestTemplate` theo mặc định sẽ ném ra ngoại lệ `HttpStatusCodeException` (như `HttpClientErrorException` hoặc `HttpServerErrorException`).  
- **c)** [Thông hiểu] Với OpenFeign, ta có thể triển khai một `ErrorDecoder` tùy biến để chuyển đổi các phản hồi lỗi HTTP từ xa thành các ngoại lệ nghiệp vụ tương ứng của ứng dụng gọi.  
- **d)** [Vận dụng] Cả ba công cụ (`RestTemplate`, `OpenFeign`, `WebClient`) đều dựa trên cơ chế Jackson Object Mapper để tự động giải mã dữ liệu JSON nhận được thành các đối tượng Java.  

---

## PHẦN III: TRẢ LỜI NGẮN (6 CÂU)
*Điền câu trả lời ngắn gọn, chính xác vào chỗ trống theo yêu cầu của từng câu.*

**Câu 26 [Nhận biết]:** Chú thích nào được đặt trên interface để kích hoạt tính năng Declarative REST Client của Spring Cloud OpenFeign?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 27 [Nhận biết]:** Chú thích nào bắt buộc phải đặt trên lớp cấu hình chính để Spring Boot quét và đăng ký các Feign Client vào ngữ cảnh?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 28 [Nhận biết]:** Tên của lớp truyền thống kinh điển trong Spring chuyên dùng cho các cuộc gọi REST đồng bộ và chặn luồng (Synchronous Blocking) là gì?  
*(Quy định: Điền tên lớp Java)*  
👉 **Trả lời:** ............................................................

**Câu 29 [Nhận biết]:** Tên của công cụ hiện đại trong module Spring WebFlux hỗ trợ các cuộc gọi HTTP theo mô hình phản ứng phi ngăn chặn (Reactive Non-blocking) là gì?  
*(Quy định: Điền tên lớp/giao diện Java)*  
👉 **Trả lời:** ............................................................

**Câu 30 [Thông hiểu]:** Phương thức nào trên đối tượng `RestTemplate` cho phép lập trình viên toàn quyền tùy biến phương thức HTTP, truyền `HttpEntity` (chứa headers và body) và nhận về `ResponseEntity`?  
*(Quy định: Điền tên phương thức kèm cặp ngoặc tròn, ví dụ: execute())*  
👉 **Trả lời:** ............................................................

**Câu 31 [Thông hiểu]:** Trong thư viện Project Reactor của Spring WebFlux, kiểu dữ liệu đại diện cho một luồng phát dữ liệu bất đồng bộ chỉ phát ra tối đa 0 hoặc 1 giá trị có tên là gì?  
*(Quy định: Điền tên kiểu dữ liệu Reactive)*  
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
| 3 | **A** | Nhận biết | 13 | **D** | Thông hiểu |
| 4 | **D** | Nhận biết | 14 | **B** | Thông hiểu |
| 5 | **A** | Nhận biết | 15 | **C** | Thông hiểu |
| 6 | **B** | Nhận biết | 16 | **A** | Vận dụng |
| 7 | **D** | Thông hiểu | 17 | **D** | Vận dụng |
| 8 | **C** | Thông hiểu | 18 | **A** | Vận dụng |
| 9 | **B** | Thông hiểu | 19 | **B** | Vận dụng |
| 10 | **D** | Thông hiểu | 20 | **C** | Vận dụng |

---

### BẢNG ĐÁP ÁN NHANH PHẦN II (ĐÚNG / SAI)
- **Câu 21:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**
- **Câu 22:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**
- **Câu 23:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**
- **Câu 24:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **SAI**
- **Câu 25:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **ĐÚNG**

---

### BẢNG ĐÁP ÁN NHANH PHẦN III (TRẢ LỜI NGẮN)
- **Câu 26:** `@FeignClient`
- **Câu 27:** `@EnableFeignClients`
- **Câu 28:** `RestTemplate`
- **Câu 29:** `WebClient`
- **Câu 30:** `exchange()`
- **Câu 31:** `Mono` (hoặc `Mono<T>`)

---

### HƯỚNG DẪN GIẢI CHI TIẾT

#### PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN
- **Câu 1: Đáp án C**
  - *Căn cứ tài liệu*: Trang 247-248 mục "Calling REST endpoints using Spring Cloud OpenFeign". OpenFeign cho phép gọi REST theo phong cách declarative (chỉ khai báo interface).
- **Câu 2: Đáp án B**
  - *Căn cứ tài liệu*: Trang 250. Chú thích `@FeignClient` đánh dấu interface client và cấu hình thông tin định danh dịch vụ.
- **Câu 3: Đáp án A**
  - *Căn cứ tài liệu*: Trang 250. Chú thích `@EnableFeignClients` kích hoạt quét và tạo proxy cho các interface Feign.
- **Câu 4: Đáp án D**
  - *Căn cứ tài liệu*: Trang 253 mục "Calling REST endpoints using RestTemplate". `RestTemplate` là công cụ kinh điển trong `spring-web`.
- **Câu 5: Đáp án A**
  - *Căn cứ tài liệu*: Trang 257 mục "Calling REST endpoints using WebClient". `WebClient` thuộc Spring WebFlux hỗ trợ lập trình phản ứng.
- **Câu 6: Đáp án B**
  - *Căn cứ tài liệu*: Trang 255. `HttpEntity<T>` được sử dụng để đóng gói cả body và headers trong một đối tượng gửi đi.
- **Câu 7: Đáp án D**
  - *Căn cứ tài liệu*: Trang 253. Khái niệm blocking: luồng thực thi bị treo để chờ phản hồi từ mạng, không thể làm việc khác.
- **Câu 8: Đáp án C**
  - *Căn cứ tài liệu*: Trang 257-258. Mô hình non-blocking giải phóng luồng trong thời gian chờ đợi I/O, giúp phục vụ được hàng ngàn kết nối đồng thời với lượng luồng rất nhỏ.
- **Câu 9: Đáp án B**
  - *Căn cứ tài liệu*: Trang 254. `getForObject()` chỉ trả về body, còn `getForEntity()` trả về `ResponseEntity` kèm status code và headers.
- **Câu 10: Đáp án D**
  - *Căn cứ tài liệu*: Trang 255-256. Phương thức `exchange()` là phương thức mạnh mẽ nhất hỗ trợ đầy đủ các phương thức HTTP và tùy biến header.
- **Câu 11: Đáp án C**
  - *Căn cứ tài liệu*: Trang 249-250. Spring sinh Dynamic Proxy lúc runtime đọc chú thích để thực thi HTTP request tự động.
- **Câu 12: Đáp án A**
  - *Căn cứ tài liệu*: Trang 258. `Mono<T>` trong Project Reactor đại diện cho một luồng bất đồng bộ phát ra 0 hoặc 1 giá trị.
- **Câu 13: Đáp án D**
  - *Căn cứ tài liệu*: `Flux<T>` đại diện cho một luồng phát ra từ 0 đến N giá trị (dữ liệu dòng liên tục / stream).
- **Câu 14: Đáp án B**
  - *Căn cứ tài liệu*: Trang 251. Dùng thuộc tính `${...}` giúp dễ dàng cấu hình URL động theo từng môi trường triển khai.
- **Câu 15: Đáp án C**
  - *Căn cứ tài liệu*: Trang 257. `WebClient` tối ưu cho các hệ thống vi dịch vụ chịu tải cao, nhiều kết nối I/O chờ mạng liên tục.
- **Câu 16: Đáp án A**
  - *Căn cứ tài liệu*: Trang 255 Listing 11.6. Kết hợp `HttpHeaders`, `HttpEntity` và `exchange()` với `HttpMethod.POST`.
- **Câu 17: Đáp án D**
  - *Căn cứ tài liệu*: Trang 250-251. Khai báo interface với `@FeignClient` và phương thức gắn chú thích `@GetMapping("/payments/{id}")`.
- **Câu 18: Đáp án A**
  - *Căn cứ tài liệu*: Trang 258 Listing 11.7. Sử dụng `WebClient.builder().build()` để tạo bean.
- **Câu 19: Đáp án B**
  - *Căn cứ tài liệu*: Phương thức `.block()` buộc đối tượng `Mono` phải chờ đến khi nhận được kết quả và trả về dữ liệu đồng bộ.
- **Câu 20: Đáp án C**
  - *Căn cứ tài liệu*: OpenFeign bắt các phản hồi HTTP lỗi từ xa (4xx, 5xx) và chuyển thành `FeignException`.

---

#### PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI
- **Câu 21:**
  - a: **ĐÚNG** (Trang 247).
  - b: **ĐÚNG** (Trang 250).
  - c: **SAI** (Giao tiếp qua HTTP/REST chuẩn, gọi được mọi ngôn ngữ).
  - d: **ĐÚNG** (Spring đăng ký proxy vào context dưới dạng bean).
- **Câu 22:**
  - a: **ĐÚNG** (Trang 253).
  - b: **ĐÚNG** (Mô hình synchronous blocking truyền thống).
  - c: **SAI** (Hỗ trợ đầy đủ thông qua `HttpHeaders` và `HttpEntity`).
  - d: **ĐÚNG** (Vẫn rất phổ biến trong các dự án hiện có).
- **Câu 23:**
  - a: **ĐÚNG** (Trang 257).
  - b: **ĐÚNG** (Hỗ trợ Server-Sent Events và streaming).
  - c: **SAI** (Mô hình non-blocking giải phóng luồng ngay khi gửi request).
  - d: **ĐÚNG** (Có thể dùng WebClient trong cả ứng dụng Spring MVC thông thường).
- **Câu 24:**
  - a: **ĐÚNG** (Hạn chế về thread pool trong blocking).
  - b: **ĐÚNG** (Gây nghẽn luồng nghiêm trọng khi dịch vụ ngoài chậm).
  - c: **ĐÚNG** (Dựa trên Netty và event loop I/O multiplexing).
  - d: **SAI** (Thời gian của một request đơn lẻ vẫn phụ thuộc độ trễ mạng, non-blocking chỉ tăng thông lượng tổng thể của cả hệ thống).
- **Câu 25:**
  - a: **ĐÚNG** (Distributed Tracing / Correlation ID).
  - b: **ĐÚNG** (Trang 255).
  - c: **ĐÚNG** (Trang 250).
  - d: **ĐÚNG** (Jackson cần getter/setter để đọc và ghi thuộc tính).

---

#### PHẦN III: TRẢ LỜI NGẮN
- **Câu 26:** `@FeignClient` (Trang 250).
- **Câu 27:** `@EnableFeignClients` (Trang 250).
- **Câu 28:** `RestTemplate` (Trang 253).
- **Câu 29:** `WebClient` (Trang 257).
- **Câu 30:** `exchange()` (Trang 255).
- **Câu 31:** `Mono` (hoặc `Mono<T>`) (Trang 258).

</details>
