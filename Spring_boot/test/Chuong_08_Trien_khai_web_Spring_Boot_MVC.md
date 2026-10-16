# 🎯 BỘ ĐỀ LUYỆN TẬP TOÀN DIỆN: CHƯƠNG 8 - TRIỂN KHAI ỨNG DỤNG WEB VỚI SPRING BOOT VÀ SPRING MVC
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

**Câu 1 [Nhận biết]:** Trong Spring MVC kết hợp với Thymeleaf, đối tượng nào được cung cấp sẵn qua tham số của phương thức Controller để lập trình viên truyền tải dữ liệu động sang cho trang giao diện HTML?

A. `HttpSession` (Đối tượng lưu trữ phiên làm việc của người dùng trên máy chủ)  
B. `Model` (Đối tượng dạng ánh xạ dùng để truyền dữ liệu từ Controller sang View)  
C. `ServletContext` (Ngữ cảnh chung chia sẻ tài nguyên toàn cục cho ứng dụng web)  
D. `HttpServletResponse` (Đối tượng đại diện cho phản hồi HTTP gửi về máy khách)  

**Câu 2 [Nhận biết]:** Chú thích nào sau đây được sử dụng để trích xuất một tham số truy vấn (Query Parameter) từ chuỗi URL (ví dụ: lấy giá trị `blue` từ URL `/home?color=blue`)?

A. `@PathVariable` (Trích xuất các biến nằm trên các phân đoạn đường dẫn URL)  
B. `@RequestBody` (Trích xuất và ánh xạ toàn bộ phần thân của yêu cầu HTTP)  
C. `@RequestHeader` (Trích xuất các giá trị trường tiêu đề trong gói tin HTTP)  
D. `@RequestParam` (Trích xuất các tham số truy vấn nằm sau dấu hỏi trên URL)  

**Câu 3 [Nhận biết]:** Chú thích nào được sử dụng để trích xuất giá trị nằm trực tiếp trên đoạn đường dẫn của URL (ví dụ: lấy giá trị `blue` từ URL `/home/blue`)?

A. `@PathVariable` (Trích xuất giá trị trực tiếp từ các phân đoạn đường dẫn URL)  
B. `@RequestParam` (Trích xuất giá trị các tham số truy vấn sau dấu hỏi trên URL)  
C. `@CookieValue` (Trích xuất dữ liệu cookie được gửi kèm theo trong HTTP request)  
D. `@ModelAttribute` (Ràng buộc dữ liệu từ biểu mẫu vào đối tượng Java cụ thể)  

**Câu 4 [Nhận biết]:** Cú pháp thuộc tính nào của Thymeleaf được sử dụng để thay thế nội dung văn bản bên trong một thẻ HTML bằng giá trị của một biến từ `Model`?

A. `th:value` (Thiết lập giá trị thuộc tính value cho các thẻ nhập liệu input)  
B. `th:content` (Định nghĩa nội dung phần đầu trang trong cấu trúc tài liệu)  
C. `th:text` (Thay thế nội dung văn bản hiển thị bên trong cặp thẻ HTML)  
D. `th:bind` (Liên kết trường dữ liệu hai chiều giữa giao diện và mô hình)  

**Câu 5 [Nhận biết]:** Thuộc tính nào của Thymeleaf được sử dụng để lặp qua một danh sách (Collection/List) và hiển thị lặp lại các phần tử HTML?

A. `th:for` (Khai báo vòng lặp duyệt phần tử theo phong cách ngôn ngữ kịch bản)  
B. `th:loop` (Thuộc tính lặp tuần tự các khối dữ liệu trong biểu mẫu động)  
C. `th:repeat` (Tái lặp lại cấu trúc của một phần tử HTML theo số lần cố định)  
D. `th:each` (Duyệt qua danh sách tập hợp và lặp lại việc kết xuất thẻ HTML)  

**Câu 6 [Thông hiểu]:** Nếu một phương thức Controller khai báo `@RequestParam String color` mà người dùng truy cập vào URL không truyền tham số `color`, mã trạng thái HTTP mặc định mà máy chủ phản hồi về là gì?

A. `200 OK` với giá trị chuỗi rỗng được tự động gán vào tham số phương thức  
B. `400 Bad Request` vì `@RequestParam` mặc định có thuộc tính `required = true`  
C. `404 Not Found` do máy chủ không tìm thấy tài nguyên nào có tên tương ứng  
D. `500 Internal Server Error` do máy ảo Java bị lỗi truy cập con trỏ rỗng  

**Câu 7 [Thông hiểu]:** Điểm khác biệt căn bản về mặt ngữ nghĩa RESTful giữa việc sử dụng `@PathVariable` và `@RequestParam` là gì?

A. `@PathVariable` dùng để định danh tài nguyên; `@RequestParam` dùng để lọc/phân trang  
B. `@PathVariable` chỉ dùng cho số nguyên, còn `@RequestParam` chỉ dùng cho chuỗi văn bản  
C. `@RequestParam` có tính an toàn bảo mật cao hơn nhiều so với `@PathVariable`  
D. Hai chú thích này hoàn toàn tương đương nhau và có thể thay thế tự do cho nhau  

**Câu 8 [Thông hiểu]:** Đặc tính "An toàn" (Safe) và "Lũy đẳng" (Idempotent) của phương thức HTTP GET có ý nghĩa như thế nào trong thiết kế web?

A. Yêu cầu GET tự động mã hóa toàn bộ dữ liệu người dùng trước khi gửi qua mạng  
B. Yêu cầu GET chỉ có thể được sử dụng khi người dùng đã đăng nhập vào hệ thống  
C. GET không làm thay đổi dữ liệu máy chủ và gọi nhiều lần luôn cho kết quả như nhau  
D. Yêu cầu GET có thể trực tiếp thực thi thao tác xóa dữ liệu khi đường truyền mạng ổn định  

**Câu 9 [Thông hiểu]:** Tại sao các biểu mẫu nhập thông tin nhạy cảm (như biểu mẫu thanh toán hoặc đăng nhập) không bao giờ được phép gửi đi bằng phương thức HTTP GET?

A. Vì phương thức GET có tốc độ truyền tải gói tin chậm hơn nhiều so với POST  
B. Vì phương thức GET chỉ chấp nhận các ký tự số chứ không hỗ trợ chuỗi chữ cái  
C. Vì phương thức GET tự động mã hóa thông tin thành định dạng nhị phân khó đọc  
D. Vì GET lộ dữ liệu trên URL và lưu lại trong lịch sử duyệt web cũng như log máy chủ  

**Câu 10 [Thông hiểu]:** Cơ chế "Ràng buộc mô hình" (Model Binding / Parameter Binding) của Spring MVC giúp lập trình viên xử lý biểu mẫu (Form) như thế nào?

A. Tự động kiểm tra lỗi ngữ pháp và chính tả của các đoạn văn bản nhập từ form  
B. Tự động khớp tên các ô input trong form với thuộc tính của đối tượng Java POJO  
C. Bắt buộc lập trình viên phải đọc từng dòng từ đối tượng `HttpServletRequest`  
D. Tự động tạo mới các bảng tương ứng trong cơ sở dữ liệu nếu bảng đó chưa tồn tại  

**Câu 11 [Thông hiểu]:** Mô hình thiết kế PRG (Post-Redirect-Get) được sinh ra nhằm mục đích giải quyết vấn đề kỹ thuật nào?

A. Ngăn người dùng nhấn F5 gửi lại form POST, tránh bị tạo dữ liệu hoặc trừ tiền hai lần  
B. Giúp tăng tốc độ kết nối mạng giữa trình duyệt và máy chủ lên gấp ba lần  
C. Tự động mã hóa toàn bộ các tham số của biểu mẫu trước khi gửi về cơ sở dữ liệu  
D. Cho phép trình duyệt web tự động đóng lại ngay sau khi hoàn tất gửi biểu mẫu  

**Câu 12 [Thông hiểu]:** Trong mô hình PRG, sau khi tiếp nhận và xử lý xong yêu cầu POST (ví dụ thêm sản phẩm mới), phương thức Controller sẽ trả về kết quả gì cho trình duyệt?

A. Trả về trực tiếp tệp mã HTML của trang kết quả kèm toàn bộ dữ liệu vừa tạo  
B. Trả về mã lỗi 404 để thông báo cho trình duyệt biết thao tác thêm đã kết thúc  
C. Trả về lệnh chuyển hướng (HTTP Redirect 302/303) yêu cầu client phát lệnh GET mới  
D. Hoàn toàn không trả về bất kỳ dữ liệu nào và lập tức đóng kết nối mạng TCP  

**Câu 13 [Thông hiểu]:** Cú pháp Thymeleaf nào sau đây được sử dụng để hiển thị một khối HTML chỉ khi một điều kiện logic là đúng (Conditional Rendering)?

A. `th:switch="${hasErrors}"` (Cú pháp rẽ nhánh điều khiển nhiều trường hợp)  
B. `th:when="${hasErrors}"` (Điều kiện nhánh con được đánh giá trong thẻ chọn lựa)  
C. `th:check="${hasErrors}"` (Kiểm tra trạng thái đánh dấu của ô chọn hộp kiểm)  
D. `th:if="${hasErrors}"` (Hiển thị phần tử HTML khi biểu thức đánh giá là đúng)  

**Câu 14 [Thông hiểu]:** Để một tham số `@RequestParam` trở thành tùy chọn (không bắt buộc người dùng phải truyền) và có giá trị mặc định là `"red"`, cú pháp khai báo nào sau đây là chuẩn xác nhất?

A. `@RequestParam(optional = true, value = "red") String color`  
B. `@RequestParam(required = false, defaultValue = "red") String color`  
C. `@RequestParam(default = "red") String color`  
D. `@RequestParam(nullable = true) String color = "red"`  

**Câu 15 [Thông hiểu]:** Trong dự án Spring Boot sử dụng công cụ kết xuất giao diện Thymeleaf, tất cả các tệp mẫu `.html` bắt buộc phải được đặt trong thư mục nào để `ViewResolver` có thể tự động tìm thấy?

A. `src/main/resources/templates/` (Thư mục quy ước chuẩn để lưu các tệp mẫu giao diện)  
B. `src/main/resources/static/` (Thư mục quy ước dùng cho các tài nguyên tĩnh không đổi)  
C. `src/main/java/views/` (Thư mục lưu trữ các lớp mã nguồn Java xử lý giao diện)  
D. `src/main/resources/views/` (Thư mục tùy biến chỉ dùng trong các dự án Spring cũ)  

**Câu 16 [Vận dụng]:** Bạn muốn xây dựng một endpoint xem chi tiết sản phẩm theo mã định danh, ví dụ truy cập `/product/15` sẽ hiển thị sản phẩm có ID là 15. Khai báo phương thức Controller nào sau đây là chính xác nhất?

A.
```java
@GetMapping("/product")
public String getProduct(@PathVariable("id") int id, Model model) { ... }
```
B.
```java
@GetMapping("/product?id={id}")
public String getProduct(@RequestParam int id, Model model) { ... }
```
C.
```java
@PostMapping("/product/{id}")
public String getProduct(@RequestBody int id) { ... }
```
D.
```java
@GetMapping("/product/{id}")
public String getProduct(@PathVariable("id") int id, Model model) { ... }
```

**Câu 17 [Vận dụng]:** Trong Controller, bạn đưa một danh sách các sản phẩm vào `Model`:
```java
model.addAttribute("products", productService.findAll());
```
Trong tệp giao diện Thymeleaf, đoạn mã nào sau đây duyệt qua danh sách và hiển thị tên sản phẩm trong từng thẻ `<li>` một cách chuẩn xác?

A. `<li th:loop="p : products" th:text="p.name"></li>`  
B. `<li th:each="p : ${products}" th:text="${p.name}"></li>`  
C. `<li th:for="${products}" th:value="name"></li>`  
D. `<li th:iterate="p in ${products}" th:print="${p.name}"></li>`  

**Câu 18 [Vận dụng]:** Một học viên viết phương thức thêm sản phẩm như sau:
```java
@PostMapping("/product-add")
public String addProduct(Product p, Model model) {
    productService.addProduct(p);
    model.addAttribute("products", productService.findAll());
    return "products.html"; // Trả về trực tiếp view hiển thị danh sách
}
```
Lỗi trải nghiệm người dùng nghiêm trọng nào sẽ xảy ra với đoạn mã trên?

A. Sản phẩm hoàn toàn không bao giờ được ghi nhận vào trong cơ sở dữ liệu hệ thống  
B. Trình duyệt người dùng sẽ lập tức báo lỗi màn hình trắng và không hiển thị danh sách  
C. Vi phạm mô hình PRG: Nhấn F5 ở trang kết quả sẽ gửi lại form POST gây thêm trùng sản phẩm  
D. Cổng mạng 8080 của máy chủ web nhúng sẽ bị sập ngay khi có hai người gửi biểu mẫu  

**Câu 19 [Vận dụng]:** Để khắc phục triệt để lỗi gửi lặp dữ liệu ở Câu 18, lập trình viên cần sửa dòng lệnh trả về `return "products.html";` thành dòng lệnh nào?

A. `return "redirect:/products";` (Chuyển hướng trình duyệt phát lệnh GET tới trang danh sách)  
B. `return "forward:/products";` (Chuyển tiếp nội bộ trên máy chủ vẫn giữ nguyên phương thức POST)  
C. `return "index.html";` (Quay trở về trang chủ tĩnh của ứng dụng mà không mang theo dữ liệu)  
D. `return null;` (Không trả về bất kỳ kết quả nào để trình duyệt tự động ngắt kết nối mạng)  

**Câu 20 [Vận dụng]:** Bạn muốn hiển thị một thông báo màu đỏ `"Đăng nhập thất bại!"` trên trang HTML chỉ khi trong `Model` có chứa thuộc tính `"errorMessage"`. Đoạn mã Thymeleaf nào sau đây thực hiện đúng yêu cầu?

A. `<p style="color:red;" th:show="${errorMessage}"></p>`  
B. `<p style="color:red;" th:display="${errorMessage}"></p>`  
C. `<p style="color:red;" th:if="${errorMessage != null}" th:text="${errorMessage}"></p>`  
D. `<p style="color:red;" th:case="${errorMessage}"></p>`  

---

## PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI (5 CÂU - 20 MỆNH ĐỀ)
*Đọc từng đoạn ngữ cảnh sau và xác định tính ĐÚNG hoặc SAI của từng mệnh đề a, b, c, d.*

**Câu 21:** Về cơ chế chuyển giao dữ liệu từ Controller sang View qua đối tượng `Model`:
- **a)** [Nhận biết] Đối tượng `Model` hoạt động như một cấu trúc dữ liệu dạng Map lưu trữ các cặp khóa - giá trị (Key - Value).  
- **b)** [Thông hiểu] Phương thức `model.addAttribute(key, value)` cho phép đặt bất kỳ đối tượng Java nào vào Model để View sử dụng.  
- **c)** [Thông hiểu] Trong cùng một phương thức Controller, ta có thể gọi `model.addAttribute()` nhiều lần với các khóa khác nhau để truyền nhiều dữ liệu sang cho View.  
- **d)** [Vận dụng] Nếu một đối tượng được đặt vào Model với tên khóa `"user"`, trong tệp Thymeleaf ta có thể truy xuất thuộc tính `name` của đối tượng đó thông qua biểu thức `${user.name}`.  

**Câu 22:** Về cách xử lý tham số truy vấn HTTP với `@RequestParam`:
- **a)** [Nhận biết] Tham số truy vấn là phần thông tin xuất hiện sau dấu chấm hỏi `?` trên thanh địa chỉ URL.  
- **b)** [Thông hiểu] Nếu tên của biến trong mã Java trùng khớp với tên tham số trên URL, ta có thể viết `@RequestParam String name` mà không cần ghi rõ `@RequestParam("name")`.  
- **c)** [Thông hiểu] Spring MVC tự động chuyển đổi chuỗi ký tự nhận được từ URL sang kiểu dữ liệu số nguyên (`int` hoặc `Integer`) nếu tham số Java được khai báo kiểu số.  
- **d)** [Vận dụng] Nếu người dùng truyền một chuỗi chữ cái (ví dụ: `?age=abc`) vào một tham số kiểu `int`, Spring sẽ tự động gán giá trị bằng `0` mà không báo lỗi.  

**Câu 23:** Về cách xử lý biến đường dẫn với `@PathVariable`:
- **a)** [Nhận biết] Cú pháp khai báo biến đường dẫn trong chuỗi URL của `@GetMapping` là sử dụng cặp ngoặc nhọn `{...}` (ví dụ: `/orders/{id}`).  
- **b)** [Thông hiểu] Một phương thức Controller có thể khai báo và tiếp nhận nhiều `@PathVariable` trên cùng một mẫu URL (ví dụ: `/store/{storeId}/product/{productId}`).  
- **c)** [Thông hiểu] Biến đường dẫn `@PathVariable` bắt buộc phải nằm ở phân đoạn cuối cùng của chuỗi URL, không thể nằm ở đoạn giữa.  
- **d)** [Vận dụng] Một phương thức Controller hoàn toàn có thể kết hợp sử dụng đồng thời cả `@PathVariable` và `@RequestParam`.  

**Câu 24:** Về các phương thức HTTP và thiết kế tiếp nhận dữ liệu Web:
- **a)** [Nhận biết] Phương thức HTTP GET thường được sử dụng cho các thao tác đọc/truy vấn dữ liệu và hiển thị giao diện.  
- **b)** [Thông hiểu] Phương thức HTTP POST đưa dữ liệu vào phần thân yêu cầu (Request Body), giúp che giấu dữ liệu khỏi thanh địa chỉ URL và không bị giới hạn độ dài ký tự như GET.  
- **c)** [Thông hiểu] Một biểu mẫu HTML chuẩn (`<form>`) có thể hỗ trợ trực tiếp các giá trị của thuộc tính `method` là `PUT` và `DELETE` mà không cần bất kỳ thủ thuật hay cấu hình bổ sung nào.  
- **d)** [Vận dụng] Mọi hành động làm thay đổi dữ liệu trên máy chủ (tạo mới, sửa đổi, xóa bỏ) đều nên sử dụng phương thức POST (hoặc PUT/DELETE) để đảm bảo an toàn.  

**Câu 25:** Về mô hình chuyển hướng điều hướng Post-Redirect-Get (PRG):
- **a)** [Nhận biết] PRG là một mẫu thiết kế điều hướng luồng xử lý web nhằm ngăn chặn việc gửi lại dữ liệu biểu mẫu trùng lặp.  
- **b)** [Thông hiểu] Khi Controller trả về chuỗi `"redirect:/home"`, Spring MVC sẽ tự động chuyển hướng nội bộ trên server mà không gửi tín hiệu phản hồi mạng nào về cho trình duyệt client.  
- **c)** [Thông hiểu] Nhờ có PRG, khi người dùng ở trang danh sách và nhấn F5 (Refresh), thao tác được lặp lại chỉ là một yêu cầu GET an toàn chứ không phải yêu cầu POST gửi form.  
- **d)** [Vận dụng] Dữ liệu được đưa vào `Model` trong phương thức xử lý POST sẽ tự động tồn tại và sẵn sàng hiển thị trên trang giao diện của yêu cầu GET sau khi chuyển hướng bằng `"redirect:"`.  

---

## PHẦN III: TRẢ LỜI NGẮN (6 CÂU)
*Điền câu trả lời ngắn gọn, chính xác vào chỗ trống theo yêu cầu của từng câu.*

**Câu 26 [Nhận biết]:** Chú thích nào trong Spring MVC được sử dụng để trích xuất một tham số truy vấn (query parameter) từ chuỗi URL (ví dụ: lấy giá trị `red` từ `/products?color=red`)?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 27 [Nhận biết]:** Chú thích nào trong Spring MVC được sử dụng để trích xuất giá trị nằm trực tiếp trên đoạn đường dẫn của URL (ví dụ: lấy giá trị `123` từ `/products/123`)?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 28 [Nhận biết]:** Thuộc tính nào của công cụ mẫu Thymeleaf được sử dụng để lặp qua một danh sách (Collection/List) và kết xuất lặp lại các phần tử HTML?  
*(Quy định: Điền tên thuộc tính Thymeleaf bắt đầu bằng tiền tố `th:`)*  
👉 **Trả lời:** ............................................................

**Câu 29 [Thông hiểu]:** Khi người dùng gửi yêu cầu HTTP thiếu tham số bắt buộc được gắn `@RequestParam(required = true)`, Spring MVC sẽ phản hồi về mã trạng thái HTTP số bao nhiêu?  
*(Quy định: Điền mã trạng thái bằng 3 chữ số)*  
👉 **Trả lời:** ............................................................

**Câu 30 [Thông hiểu]:** Để áp dụng mô hình PRG sau khi xử lý xong yêu cầu POST, phương thức Controller cần trả về một chuỗi bắt đầu bằng từ khóa tiền tố nào kèm theo đường dẫn chuyển hướng?  
*(Quy định: Điền từ khóa tiền tố kèm dấu hai chấm, ví dụ: forward:)*  
👉 **Trả lời:** ............................................................

**Câu 31 [Vận dụng]:** Trong chú thích `@RequestParam`, thuộc tính nào được sử dụng để quy định giá trị mặc định được gán cho biến nếu người dùng không truyền tham số đó trên URL?  
*(Quy định: Điền tên thuộc tính)*  
👉 **Trả lời:** ............................................................

---

## 🔍 BẢNG ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT

<details>
<summary><b>BẤM VÀO ĐÂY ĐỂ XEM ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT</b></summary>

### BẢNG ĐÁP ÁN NHANH PHẦN I (MCQ)
| Câu | Đáp án | Mức độ | Câu | Đáp án | Mức độ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | **B** | Nhận biết | 11 | **A** | Thông hiểu |
| 2 | **D** | Nhận biết | 12 | **C** | Thông hiểu |
| 3 | **A** | Nhận biết | 13 | **D** | Thông hiểu |
| 4 | **C** | Nhận biết | 14 | **B** | Thông hiểu |
| 5 | **D** | Nhận biết | 15 | **A** | Thông hiểu |
| 6 | **B** | Thông hiểu | 16 | **D** | Vận dụng |
| 7 | **A** | Thông hiểu | 17 | **B** | Vận dụng |
| 8 | **C** | Thông hiểu | 18 | **C** | Vận dụng |
| 9 | **D** | Thông hiểu | 19 | **A** | Vận dụng |
| 10 | **B** | Thông hiểu | 20 | **C** | Vận dụng |

---

### BẢNG ĐÁP ÁN NHANH PHẦN II (ĐÚNG / SAI)
- **Câu 21:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **ĐÚNG**
- **Câu 22:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **SAI**
- **Câu 23:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**
- **Câu 24:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**
- **Câu 25:** a: **ĐÚNG** | b: **SAI** | c: **ĐÚNG** | d: **SAI**

---

### BẢNG ĐÁP ÁN NHANH PHẦN III (TRẢ LỜI NGẮN)
- **Câu 26:** `@RequestParam` (Trang 188).
- **Câu 27:** `@PathVariable` (Trang 190).
- **Câu 28:** `th:each` (Trang 196).
- **Câu 29:** `400` (hoặc `400 Bad Request`) (Trang 189).
- **Câu 30:** `redirect:` (hoặc `redirect:/products`) (Trang 200).
- **Câu 31:** `defaultValue` (Trang 189).

---

### HƯỚNG DẪN GIẢI CHI TIẾT

#### PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN
- **Câu 1: Đáp án B**
  - *Căn cứ tài liệu*: Trang 184 mục "Sending data from the controller to the view". Đối tượng `Model` truyền tải dữ liệu từ Controller sang View.
- **Câu 2: Đáp án D**
  - *Căn cứ tài liệu*: Trang 188 mục "Getting data using HTTP request parameters". Chú thích `@RequestParam` lấy tham số query parameter từ URL.
- **Câu 3: Đáp án A**
  - *Căn cứ tài liệu*: Trang 190 mục "Using path variables". Chú thích `@PathVariable` trích xuất biến trực tiếp từ phân đoạn đường dẫn.
- **Câu 4: Đáp án C**
  - *Căn cứ tài liệu*: Trang 185. Thuộc tính `th:text` thay thế nội dung văn bản bên trong thẻ HTML bằng dữ liệu từ Model.
- **Câu 5: Đáp án D**
  - *Căn cứ tài liệu*: Trang 196. Thuộc tính `th:each` được Thymeleaf sử dụng cho vòng lặp duyệt tập hợp.
- **Câu 6: Đáp án B**
  - *Căn cứ tài liệu*: Trang 189. Mặc định `@RequestParam` có `required = true`, nếu thiếu tham số máy chủ sẽ phản hồi lỗi `400 Bad Request`.
- **Câu 7: Đáp án A**
  - *Căn cứ tài liệu*: Trang 191. `@PathVariable` mang tính định danh tài nguyên (chính yếu), còn `@RequestParam` mang tính tùy chọn lọc/phân trang (phụ trợ).
- **Câu 8: Đáp án C**
  - *Căn cứ tài liệu*: Trang 192. Chuẩn HTTP quy định GET là an toàn (safe) và lũy đẳng (idempotent), không được gây biến đổi dữ liệu server.
- **Câu 9: Đáp án D**
  - *Căn cứ tài liệu*: Tham số trong yêu cầu GET hiển thị lộ liễu trên URL và lưu lại trong browser history, không đảm bảo an toàn cho dữ liệu nhạy cảm.
- **Câu 10: Đáp án B**
  - *Căn cứ tài liệu*: Trang 197-198. Tính năng Model Binding ánh xạ tự động các trường input trong form vào thuộc tính của đối tượng Java POJO.
- **Câu 11: Đáp án A**
  - *Căn cứ tài liệu*: Trang 200-201. Mô hình PRG ngăn chặn hiện tượng duplicate submission khi người dùng refresh lại trang.
- **Câu 12: Đáp án C**
  - *Căn cứ tài liệu*: Lệnh redirect phản hồi mã HTTP 302/303 yêu cầu trình duyệt gửi một request GET mới tới URL đích.
- **Câu 13: Đáp án D**
  - *Căn cứ tài liệu*: `th:if` là thuộc tính kết xuất có điều kiện chuẩn mực của Thymeleaf.
- **Câu 14: Đáp án B**
  - *Căn cứ tài liệu*: Cú pháp chuẩn mực: `@RequestParam(required = false, defaultValue = "red")`.
- **Câu 15: Đáp án A**
  - *Căn cứ tài liệu*: Trang 183. Tệp mẫu Thymeleaf luôn được đặt trong thư mục `src/main/resources/templates/`.
- **Câu 16: Đáp án D**
  - *Căn cứ tài liệu*: Khai báo biến trong đường dẫn `{id}` và trích xuất bằng `@PathVariable("id") int id`.
- **Câu 17: Đáp án B**
  - *Căn cứ tài liệu*: Cú pháp duyệt danh sách trong Thymeleaf: `th:each="p : ${products}"` và `th:text="${p.name}"`.
- **Câu 18: Đáp án C**
  - *Căn cứ tài liệu*: Trả về trực tiếp view sau yêu cầu POST khiến trình duyệt cảnh báo Form Resubmission khi nhấn F5, có thể gây trùng lặp bản ghi.
- **Câu 19: Đáp án A**
  - *Căn cứ tài liệu*: Trả về `"redirect:/products"` để kích hoạt mô hình PRG.
- **Câu 20: Đáp án C**
  - *Căn cứ tài liệu*: Kết hợp `th:if="${errorMessage != null}"` và `th:text="${errorMessage}"`.

---

#### PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI
- **Câu 21:**
  - a: **ĐÚNG** (Trang 184).
  - b: **ĐÚNG**.
  - c: **ĐÚNG** (Có thể thêm nhiều thuộc tính vào Model).
  - d: **ĐÚNG** (Thymeleaf truy xuất qua getter `user.name`).
- **Câu 22:**
  - a: **ĐÚNG** (Trang 188).
  - b: **ĐÚNG** (Trang 188: Nhờ tính năng lưu parameter names của compiler).
  - c: **ĐÚNG** (Cơ chế Type Conversion tự động của Spring).
  - d: **SAI** (Spring sẽ ném ngoại lệ `MethodArgumentTypeMismatchException` và trả về mã lỗi 400 Bad Request).
- **Câu 23:**
  - a: **ĐÚNG** (Trang 190).
  - b: **ĐÚNG** (Hỗ trợ nhiều biến đường dẫn lồng nhau).
  - c: **SAI** (Biến đường dẫn có thể nằm ở bất kỳ phân đoạn nào của URL).
  - d: **ĐÚNG** (Hoàn toàn có thể kết hợp cả hai cơ chế).
- **Câu 24:**
  - a: **ĐÚNG** (Trang 192).
  - b: **ĐÚNG** (Trang 197).
  - c: **SAI** (Trong HTML form, thuộc tính `method` nếu không có JavaScript chỉ hỗ trợ GET và POST).
  - d: **ĐÚNG** (Nguyên tắc thiết kế ứng dụng web an toàn).
- **Câu 25:**
  - a: **ĐÚNG** (Trang 200).
  - b: **SAI** (Redirect gửi mã HTTP 302 về để trình duyệt thực hiện một cuộc gọi mạng mới).
  - c: **ĐÚNG** (Trang 201).
  - d: **SAI** (Vì là một request HTTP mới hoàn toàn, `Model` cũ sẽ không được giữ lại; nếu muốn truyền dữ liệu qua redirect cần dùng `RedirectAttributes` hoặc Session).

---

#### PHẦN III: TRẢ LỜI NGẮN
- **Câu 26:** `@RequestParam` (Trang 188).
- **Câu 27:** `@PathVariable` (Trang 190).
- **Câu 28:** `th:each` (Trang 196).
- **Câu 29:** `400` (hoặc `400 Bad Request`) (Trang 189).
- **Câu 30:** `redirect:` (hoặc `redirect:/products`) (Trang 200).
- **Câu 31:** `defaultValue` (Trang 189).

</details>
