# 🎯 BỘ ĐỀ LUYỆN TẬP TOÀN DIỆN: CHƯƠNG 15 - KIỂM THỬ ỨNG DỤNG SPRING
*(Tài liệu: Spring Start Here - Laurentiu Spilca)*

> **Cấu trúc bộ đề**:  
> - **Phần I**: 20 câu Trắc nghiệm 4 lựa chọn (Phân tách rõ ràng giữa câu hỏi và các phương án).  
> - **Phần II**: 5 câu Trắc nghiệm Đúng/Sai (mỗi câu gồm 4 ý nhỏ a, b, c, d = 20 mệnh đề).  
> - **Phần III**: 6 câu Trắc nghiệm Trả lời ngắn.  
> **Ma trận phân bổ**: 40% Nhận biết – 30% Thông hiểu – 30% Vận dụng.  
> **Thời gian làm bài khuyến nghị**: 50 phút.  

---

## PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN (20 CÂU)
*Chọn duy nhất 01 đáp án đúng trong các phương án A, B, C, D.*

**Câu 1 [Nhận biết]:** Thuật ngữ nào đại diện cho loại kiểm thử được thực hiện định kỳ nhằm đảm bảo rằng các tính năng cũ đã xây dựng không bị gãy đổ khi lập trình viên cập nhật mã nguồn mới hoặc vá lỗi?

A. Unit Testing (Kiểm thử đơn vị đánh giá từng hàm độc lập)  
B. Regression Testing (Kiểm thử hồi quy bảo vệ tính năng cũ)  
C. Stress Testing (Kiểm thử chịu tải tối đa trong điều kiện nghẽn)  
D. Penetration Testing (Kiểm thử xâm nhập an ninh và lỗ hổng mạng)  

**Câu 2 [Nhận biết]:** Trong cấu trúc dự án Maven tiêu chuẩn, toàn bộ các lớp mã nguồn kiểm thử (Test classes) được quy ước tổ chức đặt trong thư mục nào?

A. `src/main/resources/test/` (Thư mục tài nguyên phụ trợ cho ứng dụng)  
B. `src/main/java/testing/` (Thư mục chứa mã nguồn chạy trong môi trường production)  
C. `src/test/resources/config/` (Thư mục cấu hình dữ liệu và file phụ trợ kiểm thử)  
D. `src/test/java/` (Thư mục chuẩn chứa các lớp kiểm thử tự động của dự án)  

**Câu 3 [Nhận biết]:** Chú thích nào của Spring Boot Test được sử dụng để nạp toàn bộ vùng chứa `ApplicationContext` phục vụ cho việc thực thi các bài kiểm thử tích hợp (Integration Tests)?

A. `@ContextConfiguration` (Chỉ định tệp XML hoặc lớp cấu hình nạp context)  
B. `@SpringBootTest` (Nạp toàn bộ ngữ cảnh ứng dụng cho kiểm thử tích hợp)  
C. `@WebMvcTest` (Chỉ nạp các thành phần tầng Web Controller phục vụ test)  
D. `@DataJpaTest` (Chỉ nạp các thành phần kho lưu trữ cơ sở dữ liệu quan hệ)  

**Câu 4 [Nhận biết]:** Chú thích nào được sử dụng trong kiểm thử Spring Boot để tạo ra một đối tượng giả lập (Mock object) bằng Mockito và tự động thay thế (override) bean tương ứng đang nằm bên trong Spring Context?

A. `@Mock` (Tạo mock object trong khuôn khổ thư viện Mockito thuần túy)  
B. `@Spy` (Tạo đối tượng gián điệp bao bọc trên thể hiện thực tế của lớp)  
C. `@MockBean` (Tạo mock object và thay thế bean tương ứng trong Spring context)  
D. `@Primary` (Chỉ định bean ưu tiên được tiêm khi xảy ra tranh chấp phụ thuộc)  

**Câu 5 [Nhận biết]:** Chú thích nào của thư viện Mockito được đặt trên đối tượng cần kiểm thử thực tế để Mockito tự động tiêm các đối tượng giả lập (đánh dấu `@Mock`) vào nó?

A. `@Autowired` (Yêu cầu Spring Container tìm kiếm và tiêm bean phụ thuộc)  
B. `@InjectMocks` (Khởi tạo đối tượng cần test và tiêm các mock object vào)  
C. `@MockTarget` (Đánh dấu đối tượng mục tiêu nhận các giả lập phụ trợ bên ngoài)  
D. `@RealSubject` (Khai báo thể hiện thực tế dùng cho việc giám sát hành vi gọi)  

**Câu 6 [Nhận biết]:** Đối tượng tiện ích nào trong Spring MVC Test cho phép lập trình viên giả lập các yêu cầu HTTP gửi đến Controller và xác thực phản hồi mà không cần khởi chạy máy chủ nhúng trên cổng mạng thật?

A. `RestTemplate` (Client gọi HTTP đồng bộ tới dịch vụ Web từ xa)  
B. `WebClient` (Client gọi HTTP bất đồng bộ hỗ trợ luồng phản ứng)  
C. `TestRestTemplate` (Client gửi request kiểm thử tới máy chủ HTTP thật)  
D. `MockMvc` (Tiện ích giả lập toàn bộ luồng xử lý Controller in-memory)  

**Câu 7 [Thông hiểu]:** Điểm khác biệt căn bản về mặt tài nguyên và thời gian thực thi giữa Kiểm thử đơn vị (Unit Test) và Kiểm thử tích hợp (Integration Test) trong Spring là gì?

A. Unit Test kiểm tra lớp cô lập trong RAM không nạp context nên chạy siêu tốc; Integration Test nạp toàn bộ cấu hình Spring nên tốn nhiều thời gian và tài nguyên hơn  
B. Unit Test bắt buộc phải thiết lập kết nối cơ sở dữ liệu và nạp ngữ cảnh mạng; Integration Test chỉ chạy trong bộ nhớ tạm thời nên tốc độ luôn nhanh hơn đáng kể  
C. Unit Test kiểm thử luồng giao tiếp giữa nhiều dịch vụ vi mô qua giao thức HTTP; Integration Test chỉ kiểm tra từng hàm toán học độc lập không dùng framework  
D. Unit Test chỉ được thực thi trên môi trường máy chủ đám mây ảo hóa phân tán; Integration Test được chạy tự động trên máy trạm của lập trình viên bằng Mockito  

**Câu 8 [Thông hiểu]:** Vai trò cốt lõi của việc sử dụng các đối tượng giả lập (Mock objects) trong các bài kiểm thử đơn vị là gì?

A. Thay thế hoàn toàn mã nguồn nghiệp vụ của dự án thật trong môi trường triển khai thực tế  
B. Tăng dung lượng bộ nhớ heap của máy ảo JVM nhằm tăng tốc độ nạp ngữ cảnh ứng dụng Spring  
C. Cô lập lớp cần kiểm thử khỏi các phụ thuộc bên ngoài và mô phỏng chính xác hành vi nghiệp vụ giả định  
D. Tự động kiểm tra cú pháp và sửa các lỗi logic nghiệp vụ phát sinh trong quá trình biên dịch mã  

**Câu 9 [Thông hiểu]:** Trong thư viện Mockito, hành vi "Dàn dựng kịch bản" (Stubbing) bằng cú pháp `when(mockObject.method()).thenReturn(value)` mang ý nghĩa kỹ thuật nào sau đây?

A. Định nghĩa trước giá trị mà đối tượng giả lập sẽ hoàn trả mỗi khi phương thức đó được gọi trong quá trình chạy bài test  
B. Xác thực số lần phương thức của đối tượng giả lập đã được thực thi thực tế trong suốt vòng đời của ca kiểm thử tự động  
C. Chuyển tiếp toàn bộ lệnh gọi hàm tới đối tượng thực tế đang chạy trên môi trường máy chủ ứng dụng mà không giả lập  
D. Vô hiệu hóa hoàn toàn phương thức được gọi và tự động ném ra ngoại lệ NullPointerException để kiểm tra lỗi hệ thống  

**Câu 10 [Thông hiểu]:** Phương thức `verify()` của thư viện Mockito được sử dụng nhằm mục đích chính nào trong các bài kiểm thử phần mềm?

A. Kiểm tra xem một đối tượng có mang giá trị null hoặc rỗng hay không trước khi thực thi các câu lệnh khẳng định  
B. Đo lường chính xác thời gian đáp ứng và hiệu năng tiêu thụ tài nguyên phần cứng của phương thức vừa được gọi  
C. Dàn dựng kịch bản trả về các giá trị giả lập mong muốn tương tự như cơ chế hoạt động của mệnh đề when-thenReturn  
D. Xác thực hành vi xem một phương thức của đối tượng mock có được gọi hay không, số lần gọi và đối số truyền vào  

**Câu 11 [Thông hiểu]:** Tại sao các chuyên gia kiến trúc Spring luôn khuyến nghị sử dụng Constructor Injection thay vì Field Injection dưới góc nhìn của người viết kiểm thử (Testability)?

A. Constructor Injection cho phép nạp mã nguồn kiểm thử trực tiếp vào bộ nhớ JVM mà không cần cài đặt thư viện JUnit  
B. Field Injection làm cho các bài kiểm thử đơn vị bị từ chối biên dịch bởi trình biên dịch javac trong mọi trường hợp  
C. Constructor Injection cho phép khởi tạo đối tượng bằng toán tử `new` và truyền trực tiếp các mock object mà không cần Spring Context  
D. Field Injection bắt buộc lập trình viên phải chạy bài test trên môi trường Docker container mới có thể tiêm đối tượng giả lập  

**Câu 12 [Thông hiểu]:** Chú thích `@AutoConfigureMockMvc` khi được đặt trên lớp kiểm thử `@SpringBootTest` mang lại lợi ích kỹ thuật gì?

A. Tự động cấu hình kết nối mạng an toàn SSL/TLS cho máy chủ nhúng Tomcat trước khi chạy bài kiểm thử tích hợp  
B. Tự động cấu hình và tiêm thể hiện `MockMvc` vào lớp kiểm thử, sẵn sàng gửi các yêu cầu giả lập tới các endpoint  
C. Tự động sinh mã nguồn kiểm thử đơn vị cho toàn bộ các Controller và Service có mặt trong dự án phần mềm  
D. Vô hiệu hóa toàn bộ cơ chế bảo mật phân quyền của Spring Security để tất cả request đều được chấp thuận ngay  

**Câu 13 [Thông hiểu]:** Trong JUnit 5, phương thức khẳng định `assertThrows(ExpectedException.class, executable)` được sử dụng trong tình huống kiểm thử nào?

A. Khi bạn muốn kiểm chứng rằng đoạn mã nghiệp vụ phải ném ra đúng loại ngoại lệ mong muốn khi gặp dữ liệu không hợp lệ  
B. Khi bạn muốn bắt và triệt tiêu toàn bộ ngoại lệ để bài kiểm thử luôn luôn vượt qua thành công dù mã có bị lỗi  
C. Khi bạn muốn đo đạc thời gian tối đa mà một khối lệnh được phép thực thi trước khi bị ngắt bởi bộ đếm thời gian  
D. Khi bạn muốn so sánh giá trị trả về của hai đối tượng thực thể xem chúng có bằng nhau về mặt dữ liệu hay không  

**Câu 14 [Thông hiểu]:** Khi nào lập trình viên nên chọn sử dụng chú thích `@Mock` (của Mockito thuần túy) thay vì `@MockBean` (của Spring Boot Test)?

A. Khi đang kiểm thử tích hợp toàn diện luồng nghiệp vụ đi từ Controller xuống tận cơ sở dữ liệu quan hệ  
B. Khi cần thay thế một bean trong Spring Context để các bean khác trong cùng ngữ cảnh nhận được đối tượng mock  
C. Khi đang viết bài kiểm thử đơn vị độc lập, không cần nạp Spring Context nhằm tối ưu hóa thời gian chạy siêu tốc  
D. Khi ứng dụng yêu cầu kết nối tới các dịch vụ nhắn tin bất đồng bộ Kafka trong môi trường kiểm thử thực tế  

**Câu 15 [Thông hiểu]:** Mô hình "Kim tự tháp kiểm thử" (Testing Pyramid) khuyến nghị tỷ lệ phân bổ các loại bài kiểm thử trong một dự án phần mềm chuyên nghiệp như thế nào?

A. Tỷ lệ bài kiểm thử tích hợp chiếm đa số ở phần đáy; Unit Test chỉ chiếm số lượng rất nhỏ ở phần đỉnh của kim tự tháp  
B. Tỷ lệ các bài kiểm thử giao diện thủ công chiếm 80% thời gian; các bài kiểm thử tự động chỉ dùng khi có sự cố hệ thống  
C. Toàn bộ dự án chỉ nên tập trung viết kiểm thử End-to-End vì loại kiểm thử này phản ánh chính xác nhất trải nghiệm người dùng  
D. Phần đáy là số lượng lớn Unit Tests chạy siêu nhanh; phần giữa là số lượng vừa phải Integration Tests; trên đỉnh là số ít End-to-End Tests  

**Câu 16 [Vận dụng]:** Bạn đang viết Unit Test cho phương thức `transferMoney()` của `TransferService`. Bạn muốn kiểm chứng rằng: khi tài khoản người nhận không tồn tại, phương thức sẽ ném ngoại lệ và tuyệt đối **KHÔNG ĐƯỢC PHÉP** gọi phương thức cập nhật tiền `changeAmount()` trên `AccountRepository`. Cú pháp Mockito nào sau đây dùng để xác nhận điều đó?

A. `verify(accountRepository, never()).changeAmount(anyLong(), any());`  
B. `verify(accountRepository, times(1)).changeAmount(anyLong(), any());`  
C. `when(accountRepository.changeAmount(anyLong(), any())).thenReturn(null);`  
D. `assertThrows(Exception.class, () -> accountRepository.changeAmount(1L, null));`  

**Câu 17 [Vận dụng]:** Khai báo một lớp kiểm thử đơn vị sử dụng Mockito Extension chuẩn xác trong JUnit 5 là:

A.
```java
@ExtendWith(MockitoExtension.class)
class TransferServiceUnitTests {
    @Mock
    private AccountRepository accountRepository;
    @InjectMocks
    private TransferService transferService;
}
```
B.
```java
@SpringBootTest
class TransferServiceUnitTests {
    @Autowired
    private TransferService transferService;
    @MockBean
    private AccountRepository accountRepository;
}
```
C.
```java
@ExtendWith(SpringExtension.class)
class TransferServiceUnitTests {
    private TransferService transferService = new TransferService();
    private AccountRepository accountRepository = null;
}
```
D.
```java
class TransferServiceUnitTests implements Mockito {
    private TransferService transferService;
    private AccountRepository accountRepository;
}
```

**Câu 18 [Vận dụng]:** Đoạn mã nào sau đây sử dụng `MockMvc` để gửi yêu cầu GET tới `/accounts` và xác thực mã trạng thái phản hồi là `200 OK` cùng phần tử đầu tiên có tên `"Helen"`?

A.
```java
mockMvc.send(get("/accounts"))
       .assertResult("Helen")
       .andCheck(HttpStatus.OK);
```
B.
```java
mockMvc.execute("/accounts")
       .verifyStatus(200)
       .verifyJson("$[0].name", "Helen");
```
C.
```java
mockMvc.perform(get("/accounts"))
       .andExpect(status().isOk())
       .andExpect(jsonPath("$[0].name").value("Helen"));
```
D.
```java
mockMvc.get("/accounts")
       .expectStatus(200)
       .expectBody("$[0].name", "Helen");
```

**Câu 19 [Vận dụng]:** Trong Mockito, nếu một phương thức có kiểu trả về là `void` (ví dụ: `accountRepository.deleteById(1L)`) và bạn muốn dàn dựng để phương thức này ném ra ngoại lệ `RuntimeException`, cú pháp dàn dựng nào sau đây là chuẩn xác?

A. `when(accountRepository.deleteById(1L)).thenThrow(new RuntimeException());`  
B. `doThrow(new RuntimeException()).when(accountRepository).deleteById(1L);`  
C. `assertThrows(RuntimeException.class, () -> accountRepository.deleteById(1L));`  
D. `whenCalling(accountRepository.deleteById(1L)).throwException(new RuntimeException());`  

**Câu 20 [Vận dụng]:** Trong một bài kiểm thử tích hợp sử dụng `@SpringBootTest`, bạn muốn giữ nguyên toàn bộ các bean thật của ứng dụng, NGOẠI TRỪ bean `PaymentGatewayProxy` gọi API ra ngân hàng thật (để tránh bị trừ tiền thật khi chạy test). Giải pháp nào sau đây là chính xác nhất?

A. Xóa bỏ interface `PaymentGatewayProxy` khỏi mã nguồn của dự án trước mỗi lần chạy kiểm thử tự động  
B. Ngắt kết nối mạng Internet của máy chủ kiểm thử để ngăn chặn mã nguồn thực hiện các cuộc gọi ra ngân hàng  
C. Khai báo thuộc tính `test.mock=true` trong tệp cấu hình `application.properties` để framework tự động ngắt kết nối  
D. Khai báo trường `PaymentGatewayProxy` trong lớp test với chú thích `@MockBean` để thay thế bean thật trong context  

---

## PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI (5 CÂU - 20 MỆNH ĐỀ)
*Đọc từng đoạn ngữ cảnh sau và xác định tính ĐÚNG hoặc SAI của từng mệnh đề a, b, c, d.*

**Câu 21:** Về các nguyên lý nền tảng của kiểm thử phần mềm tự động:
- **a)** [Nhận biết] Kiểm thử tự động giúp phát hiện sớm các lỗi phát sinh (Early feedback) và bảo vệ hệ thống trước lỗi hồi quy (Regression bugs).  
- **b)** [Thông hiểu] Các bài kiểm thử tự động đóng vai trò như một bộ tài liệu đặc tả kỹ thuật sống động giúp thành viên mới hiểu rõ cách vận hành của hệ thống.  
- **c)** [Thông hiểu] Trong quy trình CI (Continuous Integration), công cụ tự động (như GitHub Actions, Jenkins) sẽ tự động chạy toàn bộ các bài kiểm thử mỗi khi có mã nguồn mới được đẩy lên.  
- **d)** [Vận dụng] Một hệ thống có 100% độ bao phủ mã (Code Coverage) đảm bảo tuyệt đối rằng phần mềm không thể chứa bất kỳ lỗi nào.  

**Câu 22:** Về kỹ thuật kiểm thử đơn vị (Unit Tests) với Mockito:
- **a)** [Nhận biết] Chú thích `@Mock` được sử dụng để tạo ra một đối tượng giả lập các hành vi của một phụ thuộc.  
- **b)** [Thông hiểu] Khi một phương thức trên đối tượng mock được gọi mà chưa được cấu hình kịch bản (stubbing), Mockito sẽ ném ngoại lệ `NullPointerException` ngay lập tức.  
- **c)** [Thông hiểu] Phương thức `verify(mock, times(2)).someMethod()` kiểm tra xem phương thức `someMethod` có được gọi chính xác 2 lần trong ca kiểm thử hay không.  
- **d)** [Vận dụng] Để thực thi các bài Unit Test thuần túy bằng Mockito và JUnit 5, máy tính bắt buộc phải kết nối Internet để nạp các bean từ Spring Context.  

**Câu 23:** Về kiểm thử tích hợp với `@SpringBootTest` và `@MockBean`:
- **a)** [Nhận biết] Chú thích `@SpringBootTest` nạp toàn bộ Spring ApplicationContext tương tự như khi ứng dụng khởi chạy thật.  
- **b)** [Thông hiểu] Chú thích `@MockBean` là một tính năng của Spring Boot Test, không phải của thư viện Mockito gốc.  
- **c)** [Thông hiểu] Khi sử dụng `@MockBean`, đối tượng mock được đưa vào Spring Context và tự động được tiêm vào các bean khác cần phụ thuộc này.  
- **d)** [Vận dụng] Thời gian thực thi của một lớp kiểm thử `@SpringBootTest` thường nhanh hơn đáng kể so với một lớp kiểm thử đơn vị sử dụng `@ExtendWith(MockitoExtension.class)`.  

**Câu 24:** Về kiểm thử tầng Web bằng `MockMvc`:
- **a)** [Nhận biết] `MockMvc` là công cụ chính của Spring để kiểm thử các Controller mà không cần mở socket mạng thực tế.  
- **b)** [Thông hiểu] `MockMvc` cho phép xác thực mã trạng thái HTTP, các tiêu đề headers và dữ liệu JSON trong thân phản hồi thông qua `jsonPath()`.  
- **c)** [Thông hiểu] Các yêu cầu giả lập gửi qua `MockMvc` vẫn đi qua toàn bộ chu trình xử lý của `DispatcherServlet` và các bộ chuyển đổi `HttpMessageConverter`.  
- **d)** [Vận dụng] Để sử dụng `MockMvc`, ta bắt buộc phải cấu hình thuộc tính `webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT` trong `@SpringBootTest`.  

**Câu 25:** Về mối quan hệ giữa thiết kế kiến trúc và tính dễ kiểm thử (Testability):
- **a)** [Nhận biết] Mã nguồn được thiết kế phân tầng rõ ràng (Controller $\rightarrow$ Service $\rightarrow$ Repository) sẽ dễ viết kiểm thử hơn mã nguồn bị dồn cục.  
- **b)** [Thông hiểu] Sử dụng Interface cho các phụ thuộc giúp việc tạo đối tượng mock trong Unit Test trở nên vô cùng thuận tiện.  
- **c)** [Thông hiểu] Một ứng dụng có mã nguồn dễ viết bài kiểm thử luôn đi kèm với một cấu trúc thiết kế hướng đối tượng tốt và khớp nối lỏng (Loose Coupling).  
- **d)** [Vận dụng] Việc phụ thuộc cứng (Hard-coded dependency) vào các đối tượng cụ thể bằng toán tử `new` bên trong lớp làm cho lớp đó gần như không thể viết Unit Test độc lập.  

---

## PHẦN III: TRẢ LỜI NGẮN (6 CÂU)
*Điền câu trả lời ngắn gọn, chính xác vào chỗ trống theo yêu cầu của từng câu.*

**Câu 26 [Nhận biết]:** Chú thích nào của Spring Boot Test được đặt trên lớp kiểm thử để nạp toàn bộ vùng chứa Spring ApplicationContext cho kiểm thử tích hợp?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 27 [Nhận biết]:** Chú thích nào của Spring Boot Test được sử dụng để tạo một mock object và tự động thay thế bean tương ứng bên trong Spring Context?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 28 [Nhận biết]:** Trong dự án Maven chuẩn, toàn bộ các lớp mã kiểm thử (Test classes) được đặt trong thư mục đường dẫn nào?  
*(Quy định: Điền đường dẫn thư mục chuẩn, ví dụ: src/test/java)*  
👉 **Trả lời:** ............................................................

**Câu 29 [Thông hiểu]:** Phương thức nào của thư viện Mockito được sử dụng để kiểm chứng (verify) xem một phương thức của đối tượng mock có được gọi hay không?  
*(Quy định: Điền tên phương thức kèm cặp ngoặc tròn, ví dụ: check())*  
👉 **Trả lời:** ............................................................

**Câu 30 [Thông hiểu]:** Đối tượng tiện ích nào trong Spring MVC Test cho phép giả lập gửi các yêu cầu HTTP (GET, POST...) tới Controller mà không cần khởi chạy máy chủ thật trên cổng mạng?  
*(Quy định: Điền tên lớp Java)*  
👉 **Trả lời:** ............................................................

**Câu 31 [Vận dụng]:** Viết câu lệnh phương thức của Mockito để thiết lập xác nhận rằng phương thức `changeAmount()` của đối tượng mock `accountRepository` **CHƯA TỪNG ĐƯỢC GỌI** bất kỳ lần nào trong suốt ca kiểm thử.  
*(Quy định: Điền phương thức verify kết hợp với phương thức never(), ví dụ: verify(accountRepository, never()).changeAmount(anyLong(), any()))*  
👉 **Trả lời:** ............................................................

---

## 🔍 BẢNG ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT

<details>
<summary><b>BẤM VÀO ĐÂY ĐỂ XEM ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT</b></summary>

### BẢNG ĐÁP ÁN NHANH PHẦN I (MCQ)
| Câu | Đáp án | Mức độ | Câu | Đáp án | Mức độ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | **B** | Nhận biết | 11 | **C** | Thông hiểu |
| 2 | **D** | Nhận biết | 12 | **B** | Thông hiểu |
| 3 | **B** | Nhận biết | 13 | **A** | Thông hiểu |
| 4 | **C** | Nhận biết | 14 | **C** | Thông hiểu |
| 5 | **B** | Nhận biết | 15 | **D** | Thông hiểu |
| 6 | **D** | Nhận biết | 16 | **A** | Vận dụng |
| 7 | **A** | Thông hiểu | 17 | **A** | Vận dụng |
| 8 | **C** | Thông hiểu | 18 | **C** | Vận dụng |
| 9 | **A** | Thông hiểu | 19 | **B** | Vận dụng |
| 10 | **D** | Thông hiểu | 20 | **D** | Vận dụng |

---

### BẢNG ĐÁP ÁN NHANH PHẦN II (ĐÚNG / SAI)
- **Câu 21:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **SAI**
- **Câu 22:** a: **ĐÚNG** | b: **SAI** | c: **ĐÚNG** | d: **SAI**
- **Câu 23:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **SAI**
- **Câu 24:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **SAI**
- **Câu 25:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **ĐÚNG**

---

### BẢNG ĐÁP ÁN NHANH PHẦN III (TRẢ LỜI NGẮN)
- **Câu 26:** `@SpringBootTest`
- **Câu 27:** `@MockBean`
- **Câu 28:** `src/test/java`
- **Câu 29:** `verify()`
- **Câu 30:** `MockMvc`
- **Câu 31:** `verify(accountRepository, never()).changeAmount(anyLong(), any())` (hoặc `verify(accountRepository, never()).changeAmount(...)`)

---

### HƯỚNG DẪN GIẢI CHI TIẾT

#### PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN
- **Câu 1: Đáp án B**
  - *Căn cứ tài liệu*: Trang 311. Kiểm thử hồi quy (Regression testing) đảm bảo các tính năng cũ không bị ảnh hưởng tiêu cực khi thêm mã mới hoặc sửa lỗi.
- **Câu 2: Đáp án D**
  - *Căn cứ tài liệu*: Trang 312 Hình 15.2. Trong dự án Maven, toàn bộ mã nguồn test được quy chuẩn đặt trong `src/test/java/`.
- **Câu 3: Đáp án B**
  - *Căn cứ tài liệu*: Trang 322 mục "Integration tests in Spring Boot". Chú thích `@SpringBootTest` nạp toàn bộ ApplicationContext cho kiểm thử tích hợp.
- **Câu 4: Đáp án C**
  - *Căn cứ tài liệu*: Trang 323 mục "Using @MockBean". `@MockBean` thay thế một bean trong Spring Context bằng một đối tượng mock.
- **Câu 5: Đáp án B**
  - *Căn cứ tài liệu*: Trang 316. Chú thích `@InjectMocks` của Mockito tạo thực thể của lớp cần test và tiêm các đối tượng mock vào.
- **Câu 6: Đáp án D**
  - *Căn cứ tài liệu*: Trang 324 mục "Testing with MockMvc". `MockMvc` giả lập toàn bộ môi trường Spring MVC và DispatcherServlet mà không cần bật cổng HTTP thật.
- **Câu 7: Đáp án A**
  - *Căn cứ tài liệu*: Trang 310. Unit Test chạy cực nhanh vì cô lập trong RAM không có Spring context; Integration Test cần nạp toàn bộ bean và cấu hình nên tốn tài nguyên và thời gian hơn.
- **Câu 8: Đáp án C**
  - *Căn cứ tài liệu*: Trang 314-315. Mock object giúp cô lập logic của phương thức cần kiểm tra khỏi các thành phần bên ngoài.
- **Câu 9: Đáp án A**
  - *Căn cứ tài liệu*: Trang 317. Cú pháp `when(...).thenReturn(...)` dàn dựng sẵn kết quả trả về của đối tượng giả lập.
- **Câu 10: Đáp án D**
  - *Căn cứ tài liệu*: Trang 318. `verify()` dùng để xác thực hành vi: kiểm tra phương thức có được gọi hay không, số lần gọi và tham số.
- **Câu 11: Đáp án C**
  - *Căn cứ tài liệu*: Trang 69 và 315. Constructor Injection cho phép truyền thẳng mock object vào constructor bằng toán tử `new` trong Unit Test thuần túy.
- **Câu 12: Đáp án B**
  - *Căn cứ tài liệu*: Trang 324. `@AutoConfigureMockMvc` tự động cấu hình và tiêm đối tượng `MockMvc` vào bài test.
- **Câu 13: Đáp án A**
  - *Căn cứ tài liệu*: Trang 319. `assertThrows()` trong JUnit 5 kiểm tra xem đoạn mã có ném ra đúng loại ngoại lệ mong muốn hay không.
- **Câu 14: Đáp án C**
  - *Căn cứ tài liệu*: Dùng `@Mock` cho Unit Test thuần túy không cần Spring, dùng `@MockBean` khi cần thay thế bean trong context của `@SpringBootTest`.
- **Câu 15: Đáp án D**
  - *Căn cứ tài liệu*: Mô hình Kim tự tháp kiểm thử chuẩn: nhiều Unit Test ở đáy, số lượng vừa phải Integration Test ở giữa, và ít End-to-End Test ở đỉnh.
- **Câu 16: Đáp án A**
  - *Căn cứ tài liệu*: Trang 318-319. Cú pháp `verify(mock, never()).method(...)` xác nhận phương thức tuyệt đối không được gọi.
- **Câu 17: Đáp án A**
  - *Căn cứ tài liệu*: Trang 316 Listing 15.2. Cấu hình chuẩn JUnit 5: `@ExtendWith(MockitoExtension.class)`.
- **Câu 18: Đáp án C**
  - *Căn cứ tài liệu*: Trang 325 Listing 15.6. Cú pháp chuẩn của `MockMvc` kết hợp với `jsonPath`.
- **Câu 19: Đáp án B**
  - *Căn cứ tài liệu*: Với phương thức trả về `void`, cú pháp Mockito là `doThrow(...).when(mock).method(...)`.
- **Câu 20: Đáp án D**
  - *Căn cứ tài liệu*: Trang 323. Gắn `@MockBean` lên `PaymentGatewayProxy` để cô lập việc gọi ra bên ngoài mà vẫn nạp được toàn bộ các bean khác.

---

#### PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI
- **Câu 21:**
  - a: **ĐÚNG** (Trang 311).
  - b: **ĐÚNG** (Trang 311).
  - c: **ĐÚNG** (Trang 311-312 Hình 15.1: Tích hợp liên tục CI).
  - d: **SAI** (Coverage 100% chỉ có nghĩa là mọi dòng mã đều được chạy qua, không đảm bảo đã bao quát hết các ca biên logic hoặc lỗi nghiệp vụ).
- **Câu 22:**
  - a: **ĐÚNG** (Trang 315).
  - b: **SAI** (Mặc định Mockito trả về giá trị mặc định: null, 0, false, empty collection chứ không ném NPE).
  - c: **ĐÚNG** (Trang 318).
  - d: **SAI** (Unit test bằng Mockito chạy hoàn toàn offline trong JVM, không cần Spring và không cần mạng).
- **Câu 23:**
  - a: **ĐÚNG** (Trang 322).
  - b: **ĐÚNG** (Trang 323).
  - c: **ĐÚNG** (Trang 323).
  - d: **SAI** (Integration test nạp Spring context nên chạy chậm hơn Unit test gấp nhiều lần).
- **Câu 24:**
  - a: **ĐÚNG** (Trang 324).
  - b: **ĐÚNG** (Trang 325).
  - c: **ĐÚNG** (Đi qua DispatcherServlet và các converters đầy đủ).
  - d: **SAI** (`MockMvc` hoạt động in-memory, không cần mở cổng mạng thực tế).
- **Câu 25:**
  - a: **ĐÚNG** (Trang 312-313).
  - b: **ĐÚNG** (Dễ dàng mock interface).
  - c: **ĐÚNG** (Code dễ kiểm thử luôn là code có thiết kế tốt).
  - d: **ĐÚNG** (Hard-coded dependency với toán tử `new` là kẻ thù số một của kiểm thử đơn vị).

---

#### PHẦN III: TRẢ LỜI NGẮN
- **Câu 26:** `@SpringBootTest` (Trang 322).
- **Câu 27:** `@MockBean` (Trang 323).
- **Câu 28:** `src/test/java` (Trang 312).
- **Câu 29:** `verify()` (Trang 318).
- **Câu 30:** `MockMvc` (Trang 324).
- **Câu 31:** `verify(accountRepository, never()).changeAmount(anyLong(), any())` (Trang 318-319).

</details>
