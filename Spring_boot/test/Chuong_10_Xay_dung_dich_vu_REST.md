# 🎯 BỘ ĐỀ LUYỆN TẬP TOÀN DIỆN: CHƯƠNG 10 - XÂY DỰNG CÁC DỊCH VỤ REST
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

**Câu 1 [Nhận biết]:** Chú thích `@RestController` trong Spring MVC thực chất là sự kết hợp tiện lợi của 2 chú thích cốt lõi nào sau đây?

A. `@Controller` và `@RequestMapping` (Định tuyến yêu cầu web truyền thống)  
B. `@Controller` và `@ResponseBody` (Định tuyến và ghi thẳng dữ liệu vào thân response)  
C. `@Service` và `@ResponseBody` (Cung cấp dịch vụ nghiệp vụ trả về dữ liệu thô)  
D. `@Component` và `@Scope` (Đăng ký thành phần bean với phạm vi vòng đời tùy chọn)  

**Câu 2 [Nhận biết]:** Chú thích nào được đặt trước tham số của phương thức Controller để báo hiệu cho Spring đọc và giải tuần tự hóa (deserialize) nội dung JSON trong phần thân yêu cầu HTTP (HTTP request body) thành một đối tượng Java?

A. `@RequestParam` (Trích xuất các giá trị tham số truy vấn nằm sau dấu hỏi trên URL)  
B. `@PathVariable` (Trích xuất các biến định danh nằm trên phân đoạn đường dẫn URL)  
C. `@RequestBody` (Giải tuần tự hóa nội dung JSON từ phần thân HTTP request)  
D. `@RequestHeader` (Trích xuất các cặp khóa giá trị trong tiêu đề của gói tin HTTP)  

**Câu 3 [Nhận biết]:** Thư viện mã nguồn mở nào được Spring Boot tích hợp sẵn theo mặc định để tự động chuyển đổi giữa các đối tượng Java (POJO) và định dạng chuỗi JSON?

A. Google Gson (Thư viện xử lý JSON của Google dùng phổ biến trên nền tảng Android)  
B. FastJson (Thư viện xử lý chuỗi JSON tốc độ cao của tập đoàn thương mại Alibaba)  
C. Moshi (Thư viện giải mã JSON hiện đại tối ưu cho ngôn ngữ lập trình Kotlin)  
D. Jackson (Thư viện mặc định được tích hợp trong Spring Boot để xử lý JSON)  

**Câu 4 [Nhận biết]:** Lớp đối tượng generic nào trong Spring Framework cho phép lập trình viên toàn quyền cấu hình tùy biến cả ba thành phần của một phản hồi HTTP: Mã trạng thái (HTTP Status), Tiêu đề (Headers) và Thân dữ liệu (Body)?

A. `HttpResponse<T>` (Giao diện đại diện cho phản hồi giao thức ở tầng mạng Java thuần)  
B. `ResponseEntity<T>` (Đối tượng bao bọc toàn bộ cấu trúc phản hồi HTTP trong Spring)  
C. `HttpEntity<T>` (Đối tượng cơ sở chỉ bao gồm phần tiêu đề và dữ liệu thân gói tin)  
D. `ResponseData<T>` (Lớp cấu trúc dữ liệu tùy biến do lập trình viên tự xây dựng)  

**Câu 5 [Nhận biết]:** Chú thích nào được sử dụng để đánh dấu một lớp đóng vai trò là nơi xử lý và bắt các ngoại lệ tập trung toàn cục (Global Exception Handler) cho các REST Controller?

A. `@RestControllerAdvice` (Đánh dấu lớp xử lý ngoại lệ tập trung cho REST API)  
B. `@ExceptionHandler` (Đánh dấu phương thức cụ thể bắt một loại ngoại lệ chỉ định)  
C. `@GlobalErrorHandler` (Chú thích tùy biến chỉ có trong các khung làm việc khác)  
D. `@ResponseFilter` (Bộ lọc can thiệp vào các gói tin phản hồi trước khi gửi về)  

**Câu 6 [Nhận biết]:** Chú thích nào được đặt trên phương thức xử lý lỗi bên trong lớp Advice để chỉ thị cụ thể loại ngoại lệ Java nào sẽ kích hoạt phương thức đó?

A. `@CatchException` (Chỉ định khối lệnh bắt ngoại lệ theo cơ chế bắt lỗi truyền thống)  
B. `@ThrowAdvice` (Định nghĩa hành vi can thiệp khi có ngoại lệ phát sinh trong luồng)  
C. `@ExceptionHandler` (Chỉ định lớp ngoại lệ mục tiêu kích hoạt phương thức xử lý lỗi)  
D. `@ErrorTarget` (Đánh dấu đối tượng tiếp nhận thông tin lỗi từ tầng nghiệp vụ)  

**Câu 7 [Thông hiểu]:** Điểm khác biệt căn bản về mặt luồng xử lý bên trong Spring MVC giữa một Web Controller truyền thống và một REST Controller là gì?

A. REST Controller hoàn toàn không sử dụng thành phần điều phối `DispatcherServlet`  
B. REST Controller không có khả năng tiếp nhận các tham số truy vấn truyền từ URL  
C. REST Controller bắt buộc phải chạy trên cổng kết nối an toàn 443 với giao thức HTTPS  
D. REST Controller ghi thẳng dữ liệu vào thân response, bỏ qua khâu tìm kiếm qua ViewResolver  

**Câu 8 [Thông hiểu]:** Khái niệm "Tuần tự hóa" (Serialization) trong ngữ cảnh của dịch vụ RESTful được hiểu chính xác là gì?

A. Quá trình chuyển đổi đối tượng Java trong bộ nhớ thành chuỗi dữ liệu (như JSON)  
B. Việc sắp xếp các bản ghi cơ sở dữ liệu theo thứ tự tăng dần của trường khóa chính  
C. Quá trình mã hóa mật khẩu tài khoản người dùng thành chuỗi băm một chiều SHA-256  
D. Quá trình biên dịch mã nguồn Java từ dạng văn bản sang định dạng bytecode thực thi  

**Câu 9 [Thông hiểu]:** Khi một phương thức trong lớp `@RestController` trả về một danh sách các đối tượng Java (ví dụ: `List<Country>`), Jackson sẽ chuyển đổi danh sách này thành cấu trúc JSON tương ứng nào?

A. Một đối tượng JSON đơn lẻ được bao bọc bên trong một cặp dấu ngoặc nhọn `{ ... }`  
B. Một chuỗi văn bản thuần túy với các giá trị được phân tách bởi các dấu chấm phẩy  
C. Một mảng JSON (JSON Array) bọc trong cặp ngoặc vuông `[ ... ]` chứa các phần tử  
D. Hệ thống sẽ báo lỗi biên dịch vì REST không cho phép trả về dữ liệu dạng danh sách  

**Câu 10 [Thông hiểu]:** Khi nào lập trình viên bắt buộc phải sử dụng kiểu trả về là `ResponseEntity<T>` thay vì chỉ trả về đối tượng dữ liệu `T` thuần túy trong phương thức REST?

A. Khi phương thức cần trả về một chuỗi ký tự đơn giản thay vì một đối tượng phức hợp  
B. Khi phương thức không tiếp nhận bất kỳ tham số đầu vào nào từ phía người dùng gửi lên  
C. Khi ứng dụng kết nối trực tiếp với các hệ quản trị cơ sở dữ liệu phi quan hệ NoSQL  
D. Khi cần tùy biến mã trạng thái HTTP (như 201 Created) hoặc bổ sung tiêu đề HTTP tùy chọn  

**Câu 11 [Thông hiểu]:** Mã trạng thái HTTP nào sau đây là chuẩn mực RESTful nhất để phản hồi cho client khi một tài nguyên mới vừa được tạo thành công trên hệ thống?

A. `200 OK` (Thao tác thành công chung và gửi trả về dữ liệu kết quả thông thường)  
B. `201 Created` (Tài nguyên mới đã được tạo lập thành công trên hệ thống máy chủ)  
C. `202 Accepted` (Yêu cầu đã được tiếp nhận để xử lý nhưng chưa hoàn thành ngay)  
D. `204 No Content` (Thao tác thành công nhưng không có dữ liệu trả về trong thân)  

**Câu 12 [Thông hiểu]:** Mã trạng thái HTTP nào sau đây nên được trả về khi một hành động xóa tài nguyên thành công và máy chủ không cần gửi kèm bất kỳ nội dung dữ liệu nào trong phần thân phản hồi?

A. `204 No Content` (Xóa thành công và không kèm theo dữ liệu trong phần thân phản hồi)  
B. `200 OK` (Thao tác hoàn tất và bắt buộc phải trả về một đối tượng JSON xác nhận)  
C. `301 Moved Permanently` (Tài nguyên đã được chuyển vĩnh viễn sang địa chỉ mới)  
D. `404 Not Found` (Không tìm thấy tài nguyên chỉ định trong cơ sở dữ liệu hệ thống)  

**Câu 13 [Thông hiểu]:** Lợi ích kiến trúc lớn nhất của việc sử dụng `@RestControllerAdvice` kết hợp với `@ExceptionHandler` để quản lý ngoại lệ là gì?

A. Giúp tăng gấp hai lần tốc độ truy vấn dữ liệu từ các bảng trong cơ sở dữ liệu  
B. Tự động khắc phục các lỗi cú pháp phát sinh trong mã nguồn Java lúc đang chạy  
C. Ngăn chặn tuyệt đối 100% các cuộc tấn công từ chối dịch vụ phân tán từ tin tặc  
D. Phân tách logic xử lý lỗi khỏi nghiệp vụ, loại bỏ try-catch và chuẩn hóa phản hồi lỗi  

**Câu 14 [Thông hiểu]:** Khi client gửi một yêu cầu HTTP POST có đính kèm phần thân JSON, tiêu đề yêu cầu (HTTP Request Header) nào bắt buộc phải có để Spring MVC biết và ủy thác cho Jackson phân giải dữ liệu?

A. `Accept: text/html` (Thông báo máy khách chỉ chấp nhận dữ liệu dạng tài liệu HTML)  
B. `Content-Type: application/json` (Khai báo định dạng dữ liệu trong thân yêu cầu là JSON)  
C. `User-Agent: Postman` (Định danh công cụ kiểm thử phần mềm đang gửi gói tin đến)  
D. `Authorization: Bearer` (Chứa chuỗi mã khóa xác thực ủy quyền bảo mật của người dùng)  

**Câu 15 [Thông hiểu]:** Nếu client gửi một chuỗi JSON có cú pháp sai lệch (ví dụ thiếu dấu ngoặc nhọn kết thúc) tới một endpoint sử dụng `@RequestBody`, Spring MVC theo mặc định sẽ phản hồi mã trạng thái HTTP nào?

A. `200 OK` với phần thân phản hồi mang giá trị rỗng để tránh làm gián đoạn máy khách  
B. `404 Not Found` vì máy chủ không thể tìm thấy phương thức nào xử lý dữ liệu sai  
C. `400 Bad Request` do phát sinh ngoại lệ `HttpMessageNotReadableException`  
D. `500 Internal Server Error` do máy ảo Java bị lỗi nghiêm trọng không thể phục hồi  

**Câu 16 [Vận dụng]:** Bạn muốn xây dựng một endpoint POST `/payments` để tạo thanh toán. Khi tạo thành công, bạn muốn phản hồi mã trạng thái `201 Created` kèm theo đối tượng thanh toán vừa tạo trong body. Cú pháp nào sau đây là chuẩn xác nhất?

A.
```java
@PostMapping("/payments")
public ResponseEntity<Payment> createPayment(@RequestBody Payment p) {
    Payment saved = paymentService.process(p);
    return ResponseEntity.status(HttpStatus.CREATED).body(saved);
}
```
B.
```java
@PostMapping("/payments")
public Payment createPayment(@RequestBody Payment p) {
    return paymentService.process(p);
}
```
C.
```java
@PostMapping("/payments")
public ResponseEntity<Payment> createPayment(@RequestParam Payment p) {
    return ResponseEntity.ok(p);
}
```
D.
```java
@PostMapping("/payments")
public String createPayment(Payment p) {
    return "201 Created";
}
```

**Câu 17 [Vận dụng]:** Trong quá trình chuyển khoản, nếu số dư không đủ, tầng Service ném ngoại lệ tự tạo `NotEnoughMoneyException`. Bạn muốn bắt ngoại lệ này ở tầng Controller Advice và gửi về mã `400 Bad Request` cùng đối tượng `ErrorDetails`. Khai báo phương thức nào sau đây là chính xác?

A.
```java
@Catch(NotEnoughMoneyException.class)
public ErrorDetails handle(NotEnoughMoneyException ex) {
    return new ErrorDetails(ex.getMessage());
}
```
B.
```java
@ExceptionHandler
public String handle(Exception ex) {
    return "error.html";
}
```
C.
```java
@ExceptionHandler(NotEnoughMoneyException.class)
public ResponseEntity<Void> handle() {
    return ResponseEntity.status(500).build();
}
```
D.
```java
@ExceptionHandler(NotEnoughMoneyException.class)
public ResponseEntity<ErrorDetails> handleNotEnoughMoney(NotEnoughMoneyException ex) {
    var error = new ErrorDetails(ex.getMessage());
    return ResponseEntity.badRequest().body(error);
}
```

**Câu 18 [Vận dụng]:** Bạn muốn thêm một tiêu đề phản hồi tùy biến `X-Trace-Id: 987654` vào phản hồi trả về cho client. Cách làm nào sau đây sử dụng `ResponseEntity` là chuẩn mực nhất?

A. Ghi trực tiếp tiêu đề vào chuỗi JSON của phần thân dữ liệu trả về cho client  
B. `return ResponseEntity.ok().header("X-Trace-Id", "987654").body(result);`  
C. Định nghĩa một thuộc tính tĩnh trong lớp đối tượng dữ liệu trả về của phương thức  
D. Khai báo tham số `String traceId` trực tiếp vào hàm khởi tạo của lớp Controller  

**Câu 19 [Vận dụng]:** Một đối tượng `Country` có hai trường: `name` và `population`. Khi một endpoint trả về `new Country("France", 67000000)`, định dạng chuỗi JSON thô mà Jackson gửi về qua mạng có cấu trúc như thế nào?

A. `<country><name>France</name><population>67000000</population></country>`  
B. `name=France&population=67000000` (Định dạng chuỗi tham số biểu mẫu mã hóa URL)  
C. `{"name":"France","population":67000000}` (Cấu trúc đối tượng JSON chuẩn xác)  
D. `[France, 67000000]` (Mảng giá trị không kèm theo tên các thuộc tính tương ứng)  

**Câu 20 [Vận dụng]:** Khi thiết kế API xóa tài khoản người dùng `DELETE /users/{id}`, sau khi xóa thành công trong CSDL, phương thức Controller nên trả về phản hồi nào sau đây để tối ưu hóa băng thông đường truyền và tuân thủ chuẩn REST?

A. `return ResponseEntity.status(HttpStatus.NO_CONTENT).build();` (hoặc `noContent().build()`)  
B. Trả về toàn bộ tệp HTML giao diện trang chủ kèm theo thông báo xóa thành công  
C. Trả về một chuỗi văn bản thuần túy `"Xóa thành công rồi nhé!"` kèm mã trạng thái 200  
D. Trả về mã lỗi 404 Not Found để thông báo rằng tài nguyên hiện tại không còn tồn tại nữa  

---

## PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI (5 CÂU - 20 MỆNH ĐỀ)
*Đọc từng đoạn ngữ cảnh sau và xác định tính ĐÚNG hoặc SAI của từng mệnh đề a, b, c, d.*

**Câu 21:** Về bản chất của dịch vụ REST và truyền thông giữa các ứng dụng (App-to-App):
- **a)** [Nhận biết] Dịch vụ REST cho phép các ứng dụng di động, ứng dụng SPA (React, Vue) và các Microservices giao tiếp dữ liệu có cấu trúc với nhau.  
- **b)** [Thông hiểu] Trong dịch vụ REST, định dạng dữ liệu trao đổi phổ biến nhất hiện nay là chuỗi nhị phân không đọc được của JVM.  
- **c)** [Thông hiểu] Khác với ứng dụng web truyền thống trả về mã HTML để hiển thị, REST endpoint trả về dữ liệu thô (như JSON) cho client tự xử lý giao diện.  
- **d)** [Vận dụng] Một ứng dụng Spring Boot hoàn toàn có thể vừa chứa các Controller kết xuất HTML giao diện, vừa chứa các REST Controller cung cấp API.  

**Câu 22:** Về các chú thích `@ResponseBody` và `@RestController`:
- **a)** [Nhận biết] Chú thích `@RestController` là siêu chú thích (meta-annotation) được cấu thành từ `@Controller` và `@ResponseBody`.  
- **b)** [Thông hiểu] Khi một lớp được gắn chú thích `@RestController`, tất cả các phương thức ánh xạ HTTP bên trong nó đều tự động kế thừa hành vi của `@ResponseBody`.  
- **c)** [Thông hiểu] Nếu gắn chú thích `@ResponseBody` lên một phương thức trả về chuỗi `String`, Spring sẽ tìm kiếm tệp giao diện HTML trùng tên với chuỗi đó.  
- **d)** [Vận dụng] Sử dụng `@RestController` giúp mã nguồn ngắn gọn hơn vì không phải lặp lại chú thích `@ResponseBody` trên từng phương thức.  

**Câu 23:** Về đối tượng `ResponseEntity` và tùy biến phản hồi HTTP:
- **a)** [Nhận biết] `ResponseEntity` cho phép cấu hình mã trạng thái HTTP, các tiêu đề HTTP Headers và thân dữ liệu phản hồi.  
- **b)** [Thông hiểu] Các phương thức tiện ích tĩnh như `ResponseEntity.ok()`, `ResponseEntity.badRequest()`, `ResponseEntity.noContent()` giúp khởi tạo nhanh các phản hồi tương ứng.  
- **c)** [Thông hiểu] Khi sử dụng `ResponseEntity`, kiểu dữ liệu phần thân phản hồi bắt buộc phải là kiểu `String`.  
- **d)** [Vận dụng] Ta có thể sử dụng `ResponseEntity<Void>` kết hợp với `.build()` cho các phản hồi không có phần thân dữ liệu (Body rỗng).  

**Câu 24:** Về cơ chế xử lý ngoại lệ tập trung với `@RestControllerAdvice`:
- **a)** [Nhận biết] Chú thích `@RestControllerAdvice` được sử dụng để định nghĩa một lớp đánh chặn các ngoại lệ văng ra từ toàn bộ các Controller trong ứng dụng.  
- **b)** [Thông hiểu] Phương thức gắn chú thích `@ExceptionHandler` chỉ được kích hoạt khi có ngoại lệ đúng kiểu (hoặc lớp con của kiểu) được khai báo văng ra từ Controller.  
- **c)** [Thông hiểu] Dữ liệu trả về từ phương thức trong lớp `@RestControllerAdvice` cũng tự động được chuyển đổi sang định dạng JSON gửi về cho client.  
- **d)** [Vận dụng] Tách rời logic xử lý ngoại lệ vào Controller Advice giúp các phương thức trong Controller nghiệp vụ chỉ tập trung vào luồng xử lý thành công (Happy Path).  

**Câu 25:** Về cơ chế tiếp nhận dữ liệu qua `@RequestBody` và chuyển đổi JSON:
- **a)** [Nhận biết] Chú thích `@RequestBody` trích xuất nội dung từ phần thân của yêu cầu HTTP (HTTP Request Body).  
- **b)** [Thông hiểu] Jackson sử dụng các hàm khởi tạo và phương thức getter/setter của đối tượng Java để thực hiện việc chuyển đổi dữ liệu từ JSON.  
- **c)** [Thông hiểu] Một phương thức Controller có thể khai báo nhiều tham số cùng được gắn chú thích `@RequestBody` để nhận nhiều gói tin JSON khác nhau.  
- **d)** [Vận dụng] Nếu client gửi dữ liệu có chứa một trường thuộc tính mà trong đối tượng Java không có khai báo, Jackson theo mặc định có thể ném ngoại lệ trừ khi được cấu hình bỏ qua thuộc tính lạ.  

---

## PHẦN III: TRẢ LỜI NGẮN (6 CÂU)
*Điền câu trả lời ngắn gọn, chính xác vào chỗ trống theo yêu cầu của từng câu.*

**Câu 26 [Nhận biết]:** Chú thích định hình nào trong Spring MVC là sự kết hợp của `@Controller` và `@ResponseBody`, chuyên dùng để xây dựng các dịch vụ RESTful?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 27 [Nhận biết]:** Chú thích nào được đặt trước tham số phương thức để Spring đọc và giải tuần tự hóa dữ liệu JSON từ phần thân HTTP Request?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 28 [Nhận biết]:** Thư viện mã nguồn mở mặc định được Spring Boot sử dụng để tuần tự hóa và giải tuần tự hóa dữ liệu JSON có tên là gì?  
*(Quy định: Điền tên thư viện viết hoa chữ cái đầu)*  
👉 **Trả lời:** ............................................................

**Câu 29 [Thông hiểu]:** Chú thích nào được đặt trên phương thức trong Controller hoặc Controller Advice để chỉ định phương thức đó sẽ bắt một loại Exception cụ thể?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 30 [Thông hiểu]:** Lớp đối tượng generic nào của Spring cho phép bạn tùy biến toàn bộ phản hồi HTTP bao gồm Status Code, Headers và Body?  
*(Quy định: Điền tên lớp Java)*  
👉 **Trả lời:** ............................................................

**Câu 31 [Vận dụng]:** Mã trạng thái HTTP chuẩn mực gồm 3 chữ số nào được khuyến nghị phản hồi cho client khi một thao tác DELETE tài nguyên thực hiện thành công và không cần trả về nội dung dữ liệu?  
*(Quy định: Điền mã trạng thái bằng 3 chữ số)*  
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
| 3 | **D** | Nhận biết | 13 | **D** | Thông hiểu |
| 4 | **B** | Nhận biết | 14 | **B** | Thông hiểu |
| 5 | **A** | Nhận biết | 15 | **C** | Thông hiểu |
| 6 | **C** | Nhận biết | 16 | **A** | Vận dụng |
| 7 | **D** | Thông hiểu | 17 | **D** | Vận dụng |
| 8 | **A** | Thông hiểu | 18 | **B** | Vận dụng |
| 9 | **C** | Thông hiểu | 19 | **C** | Vận dụng |
| 10 | **D** | Thông hiểu | 20 | **A** | Vận dụng |

---

### BẢNG ĐÁP ÁN NHANH PHẦN II (ĐÚNG / SAI)
- **Câu 21:** a: **ĐÚNG** | b: **SAI** | c: **ĐÚNG** | d: **ĐÚNG**
- **Câu 22:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**
- **Câu 23:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**
- **Câu 24:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **ĐÚNG**
- **Câu 25:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**

---

### BẢNG ĐÁP ÁN NHANH PHẦN III (TRẢ LỜI NGẮN)
- **Câu 26:** `@RestController`
- **Câu 27:** `@RequestBody`
- **Câu 28:** `Jackson`
- **Câu 29:** `@ExceptionHandler`
- **Câu 30:** `ResponseEntity`
- **Câu 31:** `204`

---

### HƯỚNG DẪN GIẢI CHI TIẾT

#### PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN
- **Câu 1: Đáp án B**
  - *Căn cứ tài liệu*: Trang 233 mục "Using @RestController". Chú thích `@RestController` là sự kết hợp tiện lợi của `@Controller` và `@ResponseBody`.
- **Câu 2: Đáp án C**
  - *Căn cứ tài liệu*: Trang 243 mục "Receiving data in request body". Chú thích `@RequestBody` hướng dẫn Spring trích xuất nội dung từ thân gói tin HTTP và giải tuần tự hóa thành đối tượng Java.
- **Câu 3: Đáp án D**
  - *Căn cứ tài liệu*: Trang 231 mục "Returning an object as response". Spring Boot tích hợp thư viện Jackson theo mặc định để chuyển đổi đối tượng sang JSON.
- **Câu 4: Đáp án B**
  - *Căn cứ tài liệu*: Trang 235 mục "Configuring the HTTP response". Lớp `ResponseEntity<T>` đại diện cho toàn bộ phản hồi HTTP bao gồm mã trạng thái, tiêu đề và thân dữ liệu.
- **Câu 5: Đáp án A**
  - *Căn cứ tài liệu*: Trang 240 mục "Managing exceptions at the controller level". Chú thích `@RestControllerAdvice` là phiên bản chuyên biệt của `@ControllerAdvice` dành riêng cho REST API.
- **Câu 6: Đáp án C**
  - *Căn cứ tài liệu*: Trang 240. Chú thích `@ExceptionHandler` xác định loại ngoại lệ cần bắt và xử lý.
- **Câu 7: Đáp án D**
  - *Căn cứ tài liệu*: Trang 230 Hình 10.2. Trong REST Controller, dữ liệu được ghi trực tiếp vào phần thân phản hồi HTTP, bỏ qua hoàn toàn công đoạn phân giải khung nhìn qua `ViewResolver`.
- **Câu 8: Đáp án A**
  - *Căn cứ tài liệu*: Trang 231. Serialization là quá trình chuyển đổi đối tượng Java thành định dạng chuỗi JSON có thể truyền tải qua mạng.
- **Câu 9: Đáp án C**
  - *Căn cứ tài liệu*: Trang 233. Khi một danh sách được tuần tự hóa, Jackson sẽ bao bọc các đối tượng trong cặp dấu ngoặc vuông đại diện cho mảng JSON `[...]`.
- **Câu 10: Đáp án D**
  - *Căn cứ tài liệu*: Trang 235-236. `ResponseEntity` cần thiết khi muốn kiểm soát mã trạng thái HTTP khác với `200 OK` hoặc khi cần thêm tiêu đề tùy biến.
- **Câu 11: Đáp án B**
  - *Căn cứ tài liệu*: Mã trạng thái chuẩn mực của giao thức HTTP cho việc tạo mới tài nguyên thành công là `201 Created`.
- **Câu 12: Đáp án A**
  - *Căn cứ tài liệu*: Mã `204 No Content` thông báo thao tác đã thành công và không cần phản hồi nội dung trong phần thân.
- **Câu 13: Đáp án D**
  - *Căn cứ tài liệu*: Trang 240-241. Controller Advice giúp tách rời hoàn toàn các khối xử lý ngoại lệ ra khỏi luồng nghiệp vụ chính, giữ mã nguồn tinh gọn và sạch sẽ.
- **Câu 14: Đáp án B**
  - *Căn cứ tài liệu*: Tiêu đề `Content-Type: application/json` thông báo cho máy chủ biết định dạng dữ liệu trong body là JSON để kích hoạt bộ chuyển đổi Jackson.
- **Câu 15: Đáp án C**
  - *Căn cứ tài liệu*: Khi JSON sai cú pháp hoặc không thể giải tuần tự hóa, Spring ném ngoại lệ `HttpMessageNotReadableException` và trả về mã lỗi `400 Bad Request`.
- **Câu 16: Đáp án A**
  - *Căn cứ tài liệu*: Sử dụng `@RequestBody` để nhận dữ liệu và `ResponseEntity.status(HttpStatus.CREATED).body(...)` để trả về mã 201 cùng dữ liệu.
- **Câu 17: Đáp án D**
  - *Căn cứ tài liệu*: Cú pháp chuẩn kết hợp `@ExceptionHandler(NotEnoughMoneyException.class)` và `ResponseEntity.badRequest().body(error)`.
- **Câu 18: Đáp án B**
  - *Căn cứ tài liệu*: Sử dụng phương thức `.header(name, value)` trên builder của `ResponseEntity`.
- **Câu 19: Đáp án C**
  - *Căn cứ tài liệu*: Trang 231-232. Jackson tự động ánh xạ các thuộc tính thành các cặp key-value trong chuỗi JSON `{"name":"France","population":67000000}`.
- **Câu 20: Đáp án A**
  - *Căn cứ tài liệu*: `ResponseEntity.noContent().build()` là giải pháp chuẩn RESTful và tiết kiệm băng thông nhất cho thao tác xóa.

---

#### PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI
- **Câu 21:**
  - a: **ĐÚNG** (Trang 228-229).
  - b: **SAI** (Định dạng phổ biến nhất là văn bản JSON, không phải nhị phân JVM).
  - c: **ĐÚNG** (Trang 229).
  - d: **ĐÚNG** (Hai loại controller có thể cùng tồn tại trong một dự án Spring Boot).
- **Câu 22:**
  - a: **ĐÚNG** (Trang 233).
  - b: **ĐÚNG** (Kế thừa tự động cho mọi phương thức).
  - c: **SAI** (`@ResponseBody` khiến Spring trả chuỗi trực tiếp về body chứ không tìm view HTML).
  - d: **ĐÚNG** (Tránh lặp lại mã nguồn trên từng phương thức).
- **Câu 23:**
  - a: **ĐÚNG** (Trang 235).
  - b: **ĐÚNG** (Các phương thức static factory tiện dụng).
  - c: **SAI** (`ResponseEntity` là generic class hỗ trợ bất kỳ kiểu đối tượng nào `ResponseEntity<T>`).
  - d: **ĐÚNG** (Dùng cho các trường hợp không có nội dung trả về như mã 204).
- **Câu 24:**
  - a: **ĐÚNG** (Trang 240).
  - b: **ĐÚNG** (Khớp theo lớp ngoại lệ được chỉ định).
  - c: **ĐÚNG** (Vì mang bản chất của RestController nên tự động tuần tự hóa sang JSON).
  - d: **ĐÚNG** (Tuân thủ nguyên lý Single Responsibility).
- **Câu 25:**
  - a: **ĐÚNG** (Trang 243).
  - b: **ĐÚNG** (Sử dụng reflection, getters và setters).
  - c: **SAI** (Gói tin HTTP chỉ có một body duy nhất, do đó mỗi phương thức chỉ được có một tham số `@RequestBody`).
  - d: **ĐÚNG** (Jackson mặc định ném ngoại lệ `UnrecognizedPropertyException` nếu gặp trường lạ).

---

#### PHẦN III: TRẢ LỜI NGẮN
- **Câu 26:** `@RestController` (Trang 233).
- **Câu 27:** `@RequestBody` (Trang 243).
- **Câu 28:** `Jackson` (Trang 231).
- **Câu 29:** `@ExceptionHandler` (Trang 240).
- **Câu 30:** `ResponseEntity` (Trang 235).
- **Câu 31:** `204` (Trang 236).

</details>
