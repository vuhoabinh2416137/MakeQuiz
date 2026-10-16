# 🎯 BỘ ĐỀ LUYỆN TẬP TOÀN DIỆN: CHƯƠNG 5 - NGỮ CẢNH SPRING: PHẠM VI VÀ VÒNG ĐỜI CỦA BEAN
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

**Câu 1 [Nhận biết]:** Phạm vi bean mặc định (default scope) của mọi bean được định nghĩa và quản lý bên trong Spring Framework là gì?

A. Prototype (Tạo một thể hiện mới hoàn toàn cho mỗi lần được yêu cầu)  
B. Singleton (Chỉ duy nhất một thể hiện tồn tại cho mỗi định danh bean)  
C. Request (Tạo một thể hiện tương ứng cho từng yêu cầu HTTP riêng biệt)  
D. Session (Duy trì một thể hiện duy nhất trong suốt phiên của người dùng)  

**Câu 2 [Nhận biết]:** Chú thích nào được sử dụng để thiết lập phạm vi vòng đời cho một bean (ví dụ Singleton hay Prototype) trong Spring?

A. `@BeanScope` (Chỉ định phạm vi hoạt động trong các module mở rộng)  
B. `@Lifecycle` (Quản lý các sự kiện kích hoạt và kết thúc của đối tượng)  
C. `@Scope` (Thiết lập phạm vi khởi tạo và chia sẻ bean của container)  
D. `@InstanceType` (Định nghĩa kiểu khởi tạo cho các thành phần hệ thống)  

**Câu 3 [Nhận biết]:** Chú thích nào được sử dụng để yêu cầu Spring trì hoãn việc khởi tạo một Singleton bean cho tới khi có yêu cầu sử dụng đầu tiên?

A. `@Delay` (Thiết lập khoảng thời gian chờ cố định trước khi tạo đối tượng)  
B. `@Postpone` (Đẩy lùi quá trình khởi tạo xuống sau khi ứng dụng sẵn sàng)  
C. `@Async` (Thực thi quá trình khởi tạo bean bất đồng bộ trong luồng nền)  
D. `@Lazy` (Trì hoãn việc tạo bean cho đến khi có lời gọi đầu tiên trong mã)  

**Câu 4 [Nhận biết]:** Hằng số chuỗi nào trong giao diện `BeanDefinition` đại diện cho phạm vi Prototype chuẩn mực của Spring?

A. `SCOPE_PROTOTYPE` (Đại diện cho phạm vi tạo thể hiện mới mỗi lần gọi)  
B. `SCOPE_SINGLETON` (Đại diện cho phạm vi chỉ duy nhất một thể hiện chung)  
C. `SCOPE_TRANSIENT` (Đại diện cho phạm vi tạm thời không lưu vào bộ nhớ)  
D. `SCOPE_DYNAMIC` (Đại diện cho phạm vi tự động biến đổi theo ngữ cảnh)  

**Câu 5 [Nhận biết]:** Chú thích nào được sử dụng để đánh dấu phương thức giải phóng tài nguyên (như đóng kết nối tệp tin, dọn dẹp bộ nhớ) ngay trước khi Spring Context tiêu hủy một Singleton bean?

A. `@CleanUp` (Kích hoạt quá trình dọn rác tự động của máy ảo Java khi chạy)  
B. `@BeforeClose` (Chỉ định hành động diễn ra ngay trước khi đóng tệp tin)  
C. `@PreDestroy` (Được thực thi ngay trước khi container tiêu hủy bean đó)  
D. `@PostDestroy` (Được kích hoạt sau khi bean đã hoàn toàn bị xóa khỏi RAM)  

**Câu 6 [Thông hiểu]:** Điểm khác biệt bản chất giữa mẫu thiết kế Singleton kinh điển (Gang of Four - GoF) và khái niệm Singleton trong Spring Framework là gì?

A. Mẫu GoF chỉ áp dụng cho ngôn ngữ C++, còn Spring áp dụng độc quyền cho Java  
B. Spring Singleton chỉ có thể tồn tại trong vòng 10 phút sau đó sẽ tự động bị tiêu hủy  
C. Mẫu GoF cấm hoàn toàn việc khai báo hàm khởi tạo công khai trong toàn bộ dự án  
D. GoF là duy nhất trên ClassLoader, còn Spring là duy nhất trên mỗi định danh trong context  

**Câu 7 [Thông hiểu]:** Tại sao trong môi trường ứng dụng đa luồng (như ứng dụng Web), các Singleton bean được khuyến cáo mạnh mẽ là **KHÔNG NÊN** chứa trạng thái có thể biến đổi (mutable state)?

A. Vì máy ảo Java sẽ lập tức dừng toàn bộ tiến trình khi phát hiện biến thay đổi  
B. Vì các luồng cùng chia sẻ một bean, dẫn tới tranh chấp dữ liệu (Race Condition)  
C. Vì bộ nhớ RAM của máy chủ sẽ bị tràn khi có nhiều hơn hai người dùng truy cập  
D. Vì Spring sẽ tự động khóa toàn bộ các kết nối mạng tới ứng dụng để phòng ngừa  

**Câu 8 [Thông hiểu]:** Cơ chế khởi tạo tức thì (Eager Instantiation) mặc định của Spring đối với các Singleton bean mang lại lợi ích kỹ thuật quan trọng nào?

A. Giúp phát hiện lỗi cấu hình và phụ thuộc ngay lúc khởi động (nguyên lý Fail-Fast)  
B. Tiết kiệm 100% tài nguyên bộ nhớ RAM trong suốt toàn bộ thời gian chạy ứng dụng  
C. Tự động mã hóa toàn bộ dữ liệu nghiệp vụ trước khi ghi xuống cơ sở dữ liệu  
D. Giúp tăng gấp hai lần băng thông mạng giữa máy khách và máy chủ triển khai  

**Câu 9 [Thông hiểu]:** Trong trường hợp thực tế nào thì việc áp dụng chú thích `@Lazy` cho một Singleton bean là một quyết định thiết kế hợp lý?

A. Áp dụng cho toàn bộ tất cả các bean trong dự án để tăng tốc độ phản hồi web  
B. Áp dụng cho các bean thực hiện logic xác thực và phân quyền người dùng ứng dụng  
C. Dùng cho các bean tiêu tốn nhiều tài nguyên khởi tạo nhưng rất hiếm khi được dùng  
D. Dùng cho các bean kết nối cơ sở dữ liệu chính để trì hoãn việc kiểm tra mật khẩu  

**Câu 10 [Thông hiểu]:** Mỗi khi có một yêu cầu tiêm phụ thuộc hoặc một lời gọi `context.getBean()` tới một bean có phạm vi Prototype, Spring sẽ làm gì?

A. Ném ra ngoại lệ `UnsupportedOperationException` vì Prototype không cho gọi trực tiếp  
B. Luôn luôn trả về tham chiếu đến cùng một thể hiện đã được tạo ra từ lúc nạp context  
C. Tạm thời ngừng toàn bộ các tiến trình khác để giải phóng bộ nhớ cho bean hiện tại  
D. Tạo mới và trả về một thể hiện đối tượng hoàn toàn mới trong bộ nhớ heap của JVM  

**Câu 11 [Thông hiểu]:** Vòng đời của một Prototype bean khác biệt gì so với một Singleton bean sau khi đối tượng được tạo ra?

A. Prototype bean không được phép sử dụng Constructor Injection để tiêm phụ thuộc  
B. Spring tạo và giao bean cho client, sau đó không quản lý vòng đời tiêu hủy của nó  
C. Prototype bean hoàn toàn không thể bị thu gom bởi trình dọn rác Garbage Collector  
D. Prototype bean không có quyền gọi các phương thức nghiệp vụ thông thường trong lớp  

**Câu 12 [Thông hiểu]:** Cạm bẫy thiết kế nghiêm trọng nào xảy ra khi bạn tiêm một Prototype bean vào một Singleton bean thông qua Constructor hoặc Field Injection thông thường?

A. Trình biên dịch Java sẽ báo lỗi cú pháp và từ chối đóng gói mã nguồn ứng dụng  
B. Prototype bean sẽ liên tục tự nhân bản hàng triệu bản sao gây cạn kiệt bộ nhớ  
C. Prototype bean bị khởi tạo duy nhất một lần và bị "khóa cứng" như một Singleton  
D. Singleton bean chứa nó sẽ tự động bị giáng cấp thành một đối tượng thông thường  

**Câu 13 [Thông hiểu]:** Tác dụng phụ tiêu cực của việc lạm dụng chú thích `@Lazy` trên diện rộng trong toàn bộ dự án là gì?

A. Che giấu các lỗi nghiêm trọng cho tới khi có request và gây tăng độ trễ ở lần gọi đầu  
B. Khiến ứng dụng hoàn toàn mất khả năng kết nối tới mạng Internet và dịch vụ ngoài  
C. Làm vô hiệu hóa toàn bộ các tính năng bảo mật tích hợp sẵn của Spring Security  
D. Khiến các câu lệnh truy vấn dữ liệu SQL luôn trả về kết quả rỗng dù có bản ghi  

**Câu 14 [Thông hiểu]:** Nhóm chức năng nào sau đây là ứng viên phù hợp nhất để thiết kế dưới dạng Prototype Bean thay vì Singleton Bean?

A. Một lớp dịch vụ `UserService` dùng để xử lý xác thực và mã hóa mật khẩu người dùng  
B. Một lớp kho lưu trữ `OrderRepository` kết nối với cơ sở dữ liệu quan hệ doanh nghiệp  
C. Một lớp cấu hình `@Configuration` định nghĩa các thông số kỹ thuật cho hệ thống  
D. Một tác vụ nền (Task Worker) mang trạng thái biến đổi riêng biệt cho từng tệp dữ liệu  

**Câu 15 [Thông hiểu]:** Trong cùng một Spring Context, ta có thể định nghĩa bao nhiêu Singleton bean cùng thuộc kiểu dữ liệu `Parrot`?

A. Bao nhiêu cũng được, miễn là mỗi bean có một tên định danh (bean name) duy nhất  
B. Chỉ duy nhất 1 bean, nếu định nghĩa bean thứ hai Spring sẽ từ chối khởi chạy  
C. Tối đa 2 bean nếu kết hợp sử dụng chú thích `@Primary` trên một trong hai bean đó  
D. Không thể định nghĩa Singleton bean cho các lớp do lập trình viên tự xây dựng  

**Câu 16 [Vận dụng]:** Bạn có một Singleton Service `OrderProcessingService` cần sử dụng một Prototype bean `OrderReportProcessor` mới tinh cho mỗi lần phương thức `processOrder()` được gọi. Giải pháp kỹ thuật nào sau đây giải quyết triệt để vấn đề "khóa cứng" Prototype trong Singleton?

A. Khai báo thuộc tính `OrderReportProcessor` với từ khóa `static` bên trong lớp dịch vụ  
B. Tiêm `ApplicationContext` vào Service và gọi `getBean(OrderReportProcessor.class)` trong hàm  
C. Đổi kiểu dữ liệu của `OrderProcessingService` thành một biến kiểu dữ liệu nguyên thủy  
D. Thêm từ khóa `synchronized` vào tất cả các phương thức của lớp `OrderReportProcessor`  

**Câu 17 [Vận dụng]:** Lớp `UserPreferencesService` được đánh dấu là `@Service` (mặc định là Singleton). Một lập trình viên khai báo:
```java
@Service
public class UserPreferencesService {
    private String currentTheme = "DARK";

    public void setTheme(String theme) {
        this.currentTheme = theme;
    }
    public String getTheme() {
        return this.currentTheme;
    }
}
```
Khi người dùng A gọi `setTheme("LIGHT")`, người dùng B gọi `getTheme()` ngay sau đó sẽ nhận được giá trị gì và tại sao?

A. Nhận được `"DARK"` vì Spring tự động phân tách thể hiện riêng biệt cho mỗi IP mạng  
B. Nhận giá trị `null` vì dữ liệu của người dùng A đã bị xóa ngay khi phương thức kết thúc  
C. Ném ra ngoại lệ `AccessDeniedException` do vi phạm quyền riêng tư của người dùng trước  
D. Nhận được `"LIGHT"` vì cả hai người dùng đều dùng chung một thể hiện Singleton duy nhất  

**Câu 18 [Vận dụng]:** Để khắc phục triệt để vấn đề xung đột trạng thái dữ liệu người dùng ở Câu 17 mà vẫn giữ `UserPreferencesService` là Singleton Service không trạng thái (Stateless), giải pháp chuẩn kiến trúc nhất là gì?

A. Đổi kiểu dữ liệu của biến `currentTheme` từ `String` sang lớp an toàn luồng `StringBuffer`  
B. Chuyển biến thành viên `currentTheme` thành biến `volatile` để đồng bộ bộ nhớ đệm CPU  
C. Loại bỏ biến thành viên; truyền thông tin chủ đề qua tham số phương thức và lưu vào CSDL  
D. Khởi động lại toàn bộ máy chủ ứng dụng mỗi khi có một người dùng thực hiện đổi giao diện  

**Câu 19 [Vận dụng]:** Để định nghĩa một bean kiểu `CommentProcessor` có phạm vi Prototype bằng chú thích `@Bean` trong lớp cấu hình, cú pháp nào sau đây là chuẩn mực nhất?

A.
```java
@Bean
@Scope(BeanDefinition.SCOPE_PROTOTYPE)
public CommentProcessor commentProcessor() {
    return new CommentProcessor();
}
```
B.
```java
@Bean
@Prototype
public CommentProcessor commentProcessor() {
    return new CommentProcessor();
}
```
C.
```java
@Bean(scope = "prototype_instance")
public CommentProcessor commentProcessor() {
    return new CommentProcessor();
}
```
D.
```java
@Bean
@Scope("multiple_instances_allowed")
public CommentProcessor commentProcessor() {
    return new CommentProcessor();
}
```

**Câu 20 [Vận dụng]:** Giả sử bạn có `BeanA` được cấu hình là `@Lazy` Singleton, và `BeanB` là một Eager Singleton (khởi tạo mặc định). Trong `BeanB`, bạn tiêm `BeanA` qua constructor:
```java
@Component
public class BeanB {
    public BeanB(BeanA beanA) {
        System.out.println("Init BeanB");
    }
}
```
Khi Spring Context khởi động, thứ tự khởi tạo nào sẽ diễn ra?

A. Không bean nào được tạo vì `BeanA` là Lazy nên ngăn cản toàn bộ quá trình nạp context  
B. `BeanA` bị buộc khởi tạo sớm để tiêm vào `BeanB`, sau đó `BeanB` hoàn tất việc khởi tạo  
C. `BeanB` được tạo trước và tham số `BeanA` bên trong constructor sẽ nhận giá trị null  
D. Spring sẽ ném ra ngoại lệ `IllegalStateException` vì không cho phép Eager phụ thuộc vào Lazy  

---

## PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI (5 CÂU - 20 MỆNH ĐỀ)
*Đọc từng đoạn ngữ cảnh sau và xác định tính ĐÚNG hoặc SAI của từng mệnh đề a, b, c, d.*

**Câu 21:** Về các đặc tính của Singleton Bean trong Spring:
- **a)** [Nhận biết] Singleton là phạm vi mặc định áp dụng cho mọi bean trừ khi có chú thích phạm vi khác.  
- **b)** [Thông hiểu] Trong một Spring Context chỉ có thể tồn tại duy nhất một đối tượng đối với mỗi kiểu dữ liệu (Class Type).  
- **c)** [Thông hiểu] Nếu hai lớp khác nhau cùng tiêm một Singleton bean, cả hai lớp đó đều nhận được cùng một tham chiếu ô nhớ đến thể hiện duy nhất đó.  
- **d)** [Vận dụng] Để an toàn trong môi trường đa luồng, các Singleton bean nên được thiết kế dưới dạng không trạng thái (Stateless).  

**Câu 22:** Về cơ chế khởi tạo trễ (Lazy Instantiation) với chú thích `@Lazy`:
- **a)** [Nhận biết] Chú thích `@Lazy` có thể đặt trên phương thức `@Bean` hoặc trên lớp có gắn chú thích `@Component`.  
- **b)** [Thông hiểu] Mặc định các Singleton bean được tạo theo cơ chế Eager để hỗ trợ nguyên lý Fail-Fast lúc khởi động.  
- **c)** [Thông hiểu] Nếu đặt chú thích `@Lazy` lên trên lớp `@Configuration`, tất cả các phương thức `@Bean` bên trong lớp đó sẽ mặc định trở thành Lazy.  
- **d)** [Vận dụng] Việc biến tất cả các bean thành `@Lazy` là một Best Practice giúp cải thiện hiệu năng toàn diện của ứng dụng trong thực tế.  

**Câu 23:** Về các đặc tính của Prototype Bean trong Spring:
- **a)** [Nhận biết] Để thiết lập phạm vi Prototype, ta dùng chú thích `@Scope(BeanDefinition.SCOPE_PROTOTYPE)`.  
- **b)** [Thông hiểu] Mỗi lần một Prototype bean được tiêm hoặc được gọi qua `context.getBean()`, Spring sẽ tạo ra một thể hiện mới hoàn toàn.  
- **c)** [Thông hiểu] Phương thức có gắn chú thích `@PreDestroy` trong một Prototype bean sẽ được Spring tự động gọi khi đối tượng đó không còn được sử dụng.  
- **d)** [Vận dụng] Hai lời gọi `context.getBean(PrototypeBean.class)` liên tiếp sẽ trả về hai đối tượng khác nhau (toán tử so sánh `bean1 == bean2` sẽ cho kết quả `false`).  

**Câu 24:** Về sự tương tác giữa Singleton Bean và Prototype Bean:
- **a)** [Nhận biết] Một Singleton bean hoàn toàn có thể phụ thuộc và tiêm một Prototype bean thông qua hàm khởi tạo.  
- **b)** [Thông hiểu] Khi tiêm một Prototype bean vào một Singleton bean, Prototype bean đó sẽ vô tình bị "khóa cứng" và hành xử giống hệt như một Singleton trong suốt vòng đời của Singleton bean chứa nó.  
- **c)** [Thông hiểu] Hiện tượng "khóa cứng" này xảy ra do Singleton bean chỉ được khởi tạo một lần duy nhất lúc nạp context.  
- **d)** [Vận dụng] Để mỗi lần gọi phương thức trong Singleton bean đều có một thể hiện Prototype bean mới, ta có thể tiêm `ApplicationContext` để gọi `getBean()` động hoặc sử dụng `ObjectFactory<T>`.  

**Câu 25:** Về các phương thức vòng đời của Bean (Bean Lifecycle):
- **a)** [Nhận biết] Phương thức `@PostConstruct` được thực thi sau khi constructor chạy xong và các phụ thuộc đã được tiêm đầy đủ.  
- **b)** [Thông hiểu] Phương thức `@PreDestroy` được dùng cho các tác vụ dọn dẹp trước khi Spring Context đóng lại (đóng socket, ngắt kết nối DB pool).  
- **c)** [Thông hiểu] Cả hai phương thức `@PostConstruct` và `@PreDestroy` đều có thể nhận nhiều tham số đầu vào để tùy biến logic.  
- **d)** [Vận dụng] Nếu một ngoại lệ xảy ra trong phương thức `@PostConstruct`, quá trình khởi tạo ứng dụng Spring sẽ bị hủy bỏ ngay lập tức và ném lỗi khởi động.  

---

## PHẦN III: TRẢ LỜI NGẮN (6 CÂU)
*Điền câu trả lời ngắn gọn, chính xác vào chỗ trống theo yêu cầu của từng câu.*

**Câu 26 [Nhận biết]:** Tên của phạm vi mặc định (default scope) cho tất cả các bean được định nghĩa trong Spring Framework là gì?  
*(Quy định: Điền 1 từ tiếng Anh chỉ tên phạm vi)*  
👉 **Trả lời:** ............................................................

**Câu 27 [Nhận biết]:** Chú thích nào được sử dụng để chuyển đổi cơ chế khởi tạo của một Singleton bean từ Eager sang Lazy?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 28 [Thông hiểu]:** Chú thích nào được đặt trên một phương thức không đối số để phương thức đó tự động thực thi ngay sau khi đối tượng được tạo và tiêm đầy đủ phụ thuộc?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 29 [Thông hiểu]:** Nếu một Prototype bean được tiêm vào một Singleton bean qua Constructor Injection, thì trong toàn bộ vòng đời của ứng dụng, có bao nhiêu thể hiện của Prototype bean đó được tạo ra?  
*(Quy định: Điền một con số cụ thể)*  
👉 **Trả lời:** ............................................................

**Câu 30 [Vận dụng]:** Phương thức có gắn chú thích `@PreDestroy` bên trong một Prototype bean có được Spring tự động gọi khi đối tượng đó không còn được dùng nữa hay không?  
*(Quy định: Trả lời "Có" hoặc "Không")*  
👉 **Trả lời:** ............................................................

**Câu 31 [Vận dụng]:** Để thiết lập một bean có phạm vi Prototype theo chuẩn quy ước sử dụng hằng số của interface `BeanDefinition`, giá trị đầy đủ của chú thích `@Scope` được viết như thế nào?  
*(Quy định: Điền toàn bộ biểu thức chú thích kèm tham số)*  
👉 **Trả lời:** ............................................................

---

## 🔍 BẢNG ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT

<details>
<summary><b>BẤM VÀO ĐÂY ĐỂ XEM ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT</b></summary>

### BẢNG ĐÁP ÁN NHANH PHẦN I (MCQ)
| Câu | Đáp án | Mức độ | Câu | Đáp án | Mức độ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | **B** | Nhận biết | 11 | **B** | Thông hiểu |
| 2 | **C** | Nhận biết | 12 | **C** | Thông hiểu |
| 3 | **D** | Nhận biết | 13 | **A** | Thông hiểu |
| 4 | **A** | Nhận biết | 14 | **D** | Thông hiểu |
| 5 | **C** | Nhận biết | 15 | **A** | Thông hiểu |
| 6 | **D** | Thông hiểu | 16 | **B** | Vận dụng |
| 7 | **B** | Thông hiểu | 17 | **D** | Vận dụng |
| 8 | **A** | Thông hiểu | 18 | **C** | Vận dụng |
| 9 | **C** | Thông hiểu | 19 | **A** | Vận dụng |
| 10 | **D** | Thông hiểu | 20 | **B** | Vận dụng |

---

### BẢNG ĐÁP ÁN NHANH PHẦN II (ĐÚNG / SAI)
- **Câu 21:** a: **ĐÚNG** | b: **SAI** | c: **ĐÚNG** | d: **ĐÚNG**
- **Câu 22:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **SAI**
- **Câu 23:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**
- **Câu 24:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **ĐÚNG**
- **Câu 25:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**

---

### BẢNG ĐÁP ÁN NHANH PHẦN III (TRẢ LỜI NGẮN)
- **Câu 26:** `Singleton`
- **Câu 27:** `@Lazy`
- **Câu 28:** `@PostConstruct`
- **Câu 29:** `1` (hoặc 1 lần)
- **Câu 30:** `Không`
- **Câu 31:** `@Scope(BeanDefinition.SCOPE_PROTOTYPE)`

---

### HƯỚNG DẪN GIẢI CHI TIẾT

#### PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN
- **Câu 1: Đáp án B**
  - *Căn cứ tài liệu*: Trang 105 mục "Using the singleton bean scope". Singleton là phạm vi mặc định của mọi bean trong Spring Context.
- **Câu 2: Đáp án C**
  - *Căn cứ tài liệu*: Trang 119 mục "Using prototype bean scope". Chú thích `@Scope` định nghĩa phạm vi cho bean.
- **Câu 3: Đáp án D**
  - *Căn cứ tài liệu*: Trang 113 mục "Eager vs. lazy bean instantiation". Chú thích `@Lazy` trì hoãn việc tạo bean cho đến khi có lời gọi đầu tiên.
- **Câu 4: Đáp án A**
  - *Căn cứ tài liệu*: Trang 120. Hằng số `BeanDefinition.SCOPE_PROTOTYPE`.
- **Câu 5: Đáp án C**
  - *Căn cứ tài liệu*: Chú thích `@PreDestroy` đánh dấu phương thức dọn dẹp tài nguyên trước khi Spring Context tiêu hủy bean.
- **Câu 6: Đáp án D**
  - *Căn cứ tài liệu*: Trang 106-107. GoF Singleton là duy nhất trên phạm vi toàn ClassLoader, còn Spring Singleton là duy nhất trên mỗi tên định danh trong ApplicationContext.
- **Câu 7: Đáp án B**
  - *Căn cứ tài liệu*: Trang 110-112. Trong ứng dụng đa luồng, biến mutable trong Singleton bean sẽ bị tranh chấp dữ liệu (Race condition).
- **Câu 8: Đáp án A**
  - *Căn cứ tài liệu*: Trang 114. Khởi tạo Eager giúp phát hiện lỗi cấu hình ngay lúc khởi động (Fail-fast principle).
- **Câu 9: Đáp án C**
  - *Căn cứ tài liệu*: Trang 115. Chỉ nên dùng `@Lazy` cho các bean nặng tiêu tốn tài nguyên nhưng rất hiếm khi sử dụng.
- **Câu 10: Đáp án D**
  - *Căn cứ tài liệu*: Trang 119. Prototype tạo một thể hiện mới hoàn toàn mỗi khi được yêu cầu tiêm hoặc lookup.
- **Câu 11: Đáp án B**
  - *Căn cứ tài liệu*: Trang 120. Với prototype bean, Spring không quản lý vòng đời tiêu hủy, `@PreDestroy` không được gọi bởi Spring.
- **Câu 12: Đáp án C**
  - *Căn cứ tài liệu*: Trang 123-125. Cạm bẫy tiêm Prototype vào Singleton: Singleton chỉ tạo 1 lần nên Prototype cũng chỉ được tiêm 1 lần duy nhất lúc khởi tạo.
- **Câu 13: Đáp án A**
  - *Căn cứ tài liệu*: Lạm dụng `@Lazy` che giấu lỗi cấu hình và làm tăng thời gian phản hồi (latency spike) ở request đầu tiên.
- **Câu 14: Đáp án D**
  - *Căn cứ tài liệu*: Prototype phù hợp cho các đối tượng có trạng thái (Stateful) cần phân tách độc lập giữa các tác vụ.
- **Câu 15: Đáp án A**
  - *Căn cứ tài liệu*: Trang 106. Có thể có nhiều Singleton bean cùng kiểu dữ liệu nếu chúng có tên định danh khác nhau.
- **Câu 16: Đáp án B**
  - *Căn cứ tài liệu*: Trang 126-128. Tiêm `ApplicationContext` và gọi `getBean(Prototype.class)` động bên trong phương thức nghiệp vụ để lấy instance mới.
- **Câu 17: Đáp án D**
  - *Căn cứ tài liệu*: Biến thành viên mutable trong Singleton gây ra lỗi chia sẻ dữ liệu sai lệch giữa các người dùng khác nhau (Trang 111).
- **Câu 18: Đáp án C**
  - *Căn cứ tài liệu*: Chuyển thành tham số phương thức hoặc lưu trữ vào Session/Database để đảm bảo Singleton Service hoàn toàn Stateless (Trang 112).
- **Câu 19: Đáp án A**
  - *Căn cứ tài liệu*: Cú pháp chuẩn mực sử dụng hằng số giao diện: `@Scope(BeanDefinition.SCOPE_PROTOTYPE)` (Trang 120).
- **Câu 20: Đáp án B**
  - *Căn cứ tài liệu*: Khi một bean Eager phụ thuộc vào một bean Lazy, bean Lazy đó buộc phải khởi tạo ngay lúc nạp context để cung cấp phụ thuộc.

---

#### PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI
- **Câu 21:**
  - a: **ĐÚNG** (Trang 105).
  - b: **SAI** (Spring cho phép nhiều bean cùng kiểu nếu khác tên - Trang 106).
  - c: **ĐÚNG** (Cùng tham chiếu một ô nhớ trong heap).
  - d: **ĐÚNG** (Trang 112: Stateless bean là chuẩn mực an toàn trong môi trường đa luồng).
- **Câu 22:**
  - a: **ĐÚNG** (Trang 113).
  - b: **ĐÚNG** (Nguyên lý Fail-fast lúc khởi động).
  - c: **ĐÚNG** (Áp dụng trễ cho toàn bộ các phương thức `@Bean` trong lớp cấu hình).
  - d: **SAI** (Gây chậm trễ cho truy vấn đầu tiên và che giấu lỗi runtime).
- **Câu 23:**
  - a: **ĐÚNG** (Trang 120).
  - b: **ĐÚNG** (Mỗi lần tiêm là một thể hiện mới hoàn toàn).
  - c: **SAI** (Spring không quản lý việc tiêu hủy prototype bean nên không gọi `@PreDestroy`).
  - d: **ĐÚNG** (`bean1 != bean2` vì là hai đối tượng độc lập trong heap).
- **Câu 24:**
  - a: **ĐÚNG**.
  - b: **ĐÚNG** (Trang 123-125: Bị khóa cứng trong Singleton).
  - c: **ĐÚNG** (Do constructor của Singleton chỉ chạy đúng 1 lần).
  - d: **ĐÚNG** (Trang 126: Dùng context lookup hoặc `ObjectFactory<T>`).
- **Câu 25:**
  - a: **ĐÚNG** (Trang 53).
  - b: **ĐÚNG** (Dọn dẹp tài nguyên trước khi tắt container).
  - c: **SAI** (Cả hai phương thức này bắt buộc phải là `void` và không có tham số).
  - d: **ĐÚNG** (Làm hỏng quá trình tạo bean và ném ngoại lệ khởi động).

---

#### PHẦN III: TRẢ LỜI NGẮN
- **Câu 26:** `Singleton` (Trang 105).
- **Câu 27:** `@Lazy` (Trang 113).
- **Câu 28:** `@PostConstruct` (Trang 53).
- **Câu 29:** `1` (hoặc 1 lần) (Trang 123-125).
- **Câu 30:** `Không` (Trang 120).
- **Câu 31:** `@Scope(BeanDefinition.SCOPE_PROTOTYPE)` (Trang 120).

</details>
