# 🎯 BỘ ĐỀ LUYỆN TẬP TOÀN DIỆN: CHƯƠNG 3 - NGỮ CẢNH SPRING: NỐI DÂY CÁC BEAN
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

**Câu 1 [Nhận biết]:** Trong thuật ngữ chuyên ngành của Spring Framework, hành động thiết lập mối quan hệ hoặc liên kết tham chiếu giữa các bean với nhau được gọi là gì?

A. Compiling (Biên dịch mã nguồn thành bytecode độc lập)  
B. Wiring (Nối dây các thành phần bean trong ngữ cảnh)  
C. Polling (Thăm dò trạng thái vòng đời của tiến trình)  
D. Scanning (Quét các gói để tìm kiếm chú thích hợp lệ)  

**Câu 2 [Nhận biết]:** Chú thích nào được sử dụng phổ biến nhất để yêu cầu Spring tự động tiêm (inject) một bean từ ngữ cảnh vào một trường dữ liệu, hàm khởi tạo hoặc phương thức setter?

A. `@InjectBean` (Được cung cấp bởi gói tiện ích mở rộng)  
B. `@Reference` (Được dùng trong các kiến trúc dịch vụ phân tán)  
C. `@ResourceBean` (Định nghĩa nguồn tài nguyên cấu hình tĩnh)  
D. `@Autowired` (Kích hoạt cơ chế tiêm phụ thuộc của Spring)  

**Câu 3 [Nhận biết]:** Trong 3 phương pháp tiêm phụ thuộc bằng `@Autowired`, phương pháp nào được cộng đồng kiến trúc sư Spring khuyến nghị mạnh mẽ nhất như một thực hành tốt nhất (Best Practice)?

A. Tiêm thông qua hàm khởi tạo (Constructor Injection)  
B. Tiêm trực tiếp vào trường dữ liệu nội bộ (Field Injection)  
C. Tiêm thông qua phương thức gán thuộc tính (Setter Injection)  
D. Tiêm thông qua khối khởi tạo tĩnh của lớp (Static Initializer)  

**Câu 4 [Nhận biết]:** Từ phiên bản Spring Framework 4.3 trở đi, điều kiện nào cho phép lập trình viên bỏ qua việc viết tường minh chú thích `@Autowired` trên hàm khởi tạo?

A. Lớp bắt buộc phải được đánh dấu bằng chú thích đặc biệt `@Service`  
B. Lớp bắt buộc phải triển khai một giao diện đánh dấu (marker interface)  
C. Lớp đó chỉ có duy nhất một hàm khởi tạo (Single Constructor)  
D. Tất cả các trường dữ liệu bên trong lớp đều phải là kiểu nguyên thủy  

**Câu 5 [Nhận biết]:** Khi có nhiều bean cùng một kiểu dữ liệu trong Spring Context, chú thích nào được sử dụng tại điểm tiêm phụ thuộc để chỉ định chính xác tên định danh của bean cần tiêm?

A. `@Qualifier` (Chỉ định chính xác tên bean cần tiêm)  
B. `@Primary` (Xác lập quyền ưu tiên mặc định cho bean)  
C. `@NamedBean` (Gán nhãn định danh cho thể hiện hiện tại)  
D. `@Target` (Xác định phạm vi tác động của chú thích tùy biến)  

**Câu 6 [Nhận biết]:** Mối quan hệ giữa hai đối tượng `Person` (Người) và `Parrot` (Vẹt), trong đó một người sở hữu tham chiếu đến một chú vẹt, được gọi là loại quan hệ hướng đối tượng nào?

A. Quan hệ IS-A (Kế thừa các thuộc tính và phương thức từ lớp cha)  
B. Quan hệ HAS-A (Chứa chấp hoặc hợp thành tham chiếu đối tượng)  
C. Quan hệ DEPENDS-ON (Định nghĩa thứ tự khởi tạo bean độc lập)  
D. Quan hệ IMPLEMENTS (Hiện thực hóa các hành vi trong interface)  

**Câu 7 [Thông hiểu]:** Hãy xem xét đoạn mã cấu hình sau:
```java
@Configuration
public class ProjectConfig {
    @Bean
    public Parrot parrot() {
        var p = new Parrot();
        p.setName("Koko");
        return p;
    }

    @Bean
    public Person person() {
        var p = new Person();
        p.setName("Ella");
        p.setParrot(parrot());
        return p;
    }
}
```
Tại sao phương thức `person()` gọi trực tiếp phương thức `parrot()` nhưng lại không tạo ra một đối tượng `Parrot` thứ hai trong bộ nhớ?

A. Do máy ảo Java (JVM) có cơ chế bộ nhớ đệm tự động gộp các đối tượng có cùng thuộc tính  
B. Do Spring sử dụng CGLIB Proxy bọc lớp cấu hình để đánh chặn lời gọi và tái sử dụng bean  
C. Do từ khóa `var` tự động ánh xạ tham chiếu đến biến đã khai báo trước đó trong bộ nhớ Heap  
D. Do phương thức `setParrot()` tự động hủy bỏ thể hiện vừa tạo mới để gán lại đối tượng gốc  

**Câu 8 [Thông hiểu]:** Nhược điểm lớn nhất của kỹ thuật tiêm phụ thuộc trực tiếp vào trường (Field Injection) khi thực hiện kiểm thử đơn vị (Unit Test) là gì?

A. Bắt buộc lớp kiểm thử phải kế thừa trực tiếp từ lớp trừu tượng `SpringTestCase` của framework  
B. Làm giảm tốc độ biên dịch mã nguồn và khiến kích thước file `.class` tăng lên gấp hai lần  
C. Không thể khởi tạo đối tượng bằng `new` trong Unit test vì trường `private` sẽ mang giá trị null  
D. Trình biên dịch Java sẽ phát sinh lỗi cảnh báo cú pháp nghiêm trọng và từ chối đóng gói ứng dụng  

**Câu 9 [Thông hiểu]:** Lợi ích cốt lõi của việc sử dụng Constructor Injection kết hợp với việc khai báo các trường phụ thuộc là `final` là gì?

A. Tự động chuyển đổi các đối tượng phụ thuộc thành định dạng JSON để truyền qua mạng Internet  
B. Giúp trình thu gom rác Garbage Collector giải phóng bộ nhớ của các bean nhanh chóng hơn  
C. Cho phép Spring nạp đè các phương thức khởi tạo của thư viện bên thứ ba mà không cần mã nguồn  
D. Đảm bảo tính bất biến (immutability), an toàn luồng và ngăn ngừa việc thiếu phụ thuộc bắt buộc  

**Câu 10 [Thông hiểu]:** Hãy quan sát đoạn mã định nghĩa bean sau:
```java
@Configuration
public class ProjectConfig {
    @Bean
    public Parrot parrot() {
        var p = new Parrot();
        p.setName("Koko");
        return p;
    }

    @Bean
    public Person person(Parrot parrot) {
        var p = new Person();
        p.setName("Ella");
        p.setParrot(parrot);
        return p;
    }
}
```
Cơ chế nào được Spring sử dụng để cung cấp giá trị cho tham số `Parrot parrot` trong phương thức `person(Parrot parrot)`?

A. Spring tự động tìm kiếm bean kiểu `Parrot` trong context và truyền vào làm đối số của phương thức  
B. Spring tạo ra một thể hiện giả lập (dummy proxy) với toàn bộ các trường dữ liệu mang giá trị null  
C. Spring buộc phải quét toàn bộ hệ thống file để đọc định nghĩa XML tương ứng của bean đó  
D. Trình biên dịch Java tự động gọi hàm khởi tạo mặc định của lớp `Parrot` để gán vào tham số  

**Câu 11 [Thông hiểu]:** Khi cả hai chú thích `@Primary` (trên bean định nghĩa) và `@Qualifier` (tại điểm tiêm) cùng xuất hiện liên quan đến việc giải quyết phụ thuộc của cùng một kiểu dữ liệu, quy tắc giải quyết xung đột của Spring là gì?

A. Chú thích `@Primary` luôn luôn chiếm ưu thế tuyệt đối và bean có `@Primary` sẽ được chọn tiêm  
B. Spring sẽ ném ra ngoại lệ `ConflictingBeanDefinitionException` vì hai cơ chế này triệt tiêu lẫn nhau  
C. Chú thích `@Qualifier` có độ ưu tiên cao hơn và bean chỉ định qua `@Qualifier` sẽ được tiêm  
D. Spring sẽ ngẫu nhiên chọn một trong hai bean tại mỗi lần khởi động lại ngữ cảnh ứng dụng  

**Câu 12 [Thông hiểu]:** Hiện tượng Phụ thuộc vòng (Circular Dependency) trong Spring Framework được hiểu chính xác là gì?

A. Hiện tượng một bean tự gọi lại chính phương thức của nó theo cơ chế đệ quy vô hạn gây tràn Stack  
B. Hiện tượng hai luồng xử lý cùng lúc truy cập vào một bean Singleton gây xung đột khóa dữ liệu  
C. Hiện tượng các bảng trong cơ sở dữ liệu có khóa ngoại tham chiếu chéo lẫn nhau không thể xóa  
D. Hiện tượng Bean A phụ thuộc vào Bean B, và Bean B lại trực tiếp hoặc gián tiếp phụ thuộc vào Bean A  

**Câu 13 [Thông hiểu]:** Nếu hai bean đánh dấu `@Component` phụ thuộc lẫn nhau thông qua Constructor Injection (ví dụ: `ClassA` cần `ClassB` trong constructor, và `ClassB` cần `ClassA` trong constructor), Spring Context sẽ phản ứng như thế nào khi khởi động?

A. Ném ra ngoại lệ `BeanCurrentlyInCreationException` và quá trình khởi động ứng dụng bị dừng lại hoàn toàn  
B. Tự động khởi tạo một đối tượng ảo (mock) cho một bên để hoàn tất chu trình nạp ngữ cảnh mà không báo lỗi  
C. Tự động chuyển đổi một trong hai bean sang phạm vi Prototype để phá vỡ chu trình bế tắc khởi tạo  
D. Tự động gán trường phụ thuộc của một trong hai đối tượng về giá trị `null` và hiển thị cảnh báo  

**Câu 14 [Thông hiểu]:** Cơ chế "Đối sánh theo tên tham số" (Matching by parameter name) của Spring hoạt động như thế nào khi tiêm phụ thuộc nếu không có `@Qualifier`?

A. Spring sẽ sắp xếp tên các bean theo thứ tự bảng chữ cái và chọn bean có tên ngắn nhất trong ngữ cảnh  
B. Nếu có nhiều bean cùng kiểu và tên tham số trùng với tên bean, Spring sẽ tự động chọn bean trùng tên đó  
C. Tên tham số chỉ có giá trị tài liệu hóa, Spring hoàn toàn bỏ qua và luôn chọn bean được khai báo đầu tiên  
D. Spring chỉ áp dụng cơ chế đối sánh tên đối với các trường dữ liệu có kiểu nguyên thủy hoặc chuỗi ký tự  

**Câu 15 [Thông hiểu]:** Trong trường hợp nào thì Setter Injection là lựa chọn thiết kế hợp lý hơn Constructor Injection?

A. Khi phụ thuộc đó là bắt buộc và tối quan trọng đối với sự sống còn của đối tượng nghiệp vụ  
B. Khi đối tượng cần đảm bảo tính bất biến tuyệt đối (immutable) và an toàn trong môi trường đa luồng  
C. Khi phụ thuộc đó là tùy chọn (optional), đối tượng vẫn có thể vận hành ổn định nếu thiếu phụ thuộc này  
D. Khi ứng dụng yêu cầu hiệu năng cực cao và cần giảm thiểu tối đa số lượng đối số truyền vào phương thức  

**Câu 16 [Vận dụng]:** Trong một ứng dụng nuôi thú cưng, bạn có 2 bean kiểu `Parrot` được đăng ký trong context: bean `"koko"` và bean `"riki"`. Bạn có một lớp `Person` sử dụng Constructor Injection:
```java
@Component
public class Person {
    private final Parrot parrot;

    public Person(Parrot parrot) {
        this.parrot = parrot;
    }
}
```
Để Spring chắc chắn tiêm bean `"riki"` vào `Person` mà không thay đổi mã nguồn của 2 bean `Parrot`, giải pháp chuẩn xác nhất là:

A. Đổi tên trường `private final Parrot parrot` thành `private final Parrot koko` trong thân lớp  
B. Xóa bỏ từ khóa `final` của trường dữ liệu và cung cấp thêm một phương thức setter công khai  
C. Thay đổi kiểu dữ liệu của thuộc tính `parrot` từ lớp `Parrot` sang kiểu tổng quát `Object`  
D. Thêm chú thích `@Qualifier("riki")` ngay trước tham số `Parrot parrot` trong constructor của `Person`  

**Câu 17 [Vận dụng]:** Xét đoạn mã Spring Context sau:
```java
@Configuration
public class AppConfig {
    @Bean
    public String greeting() {
        return "Xin chào";
    }

    @Bean
    public String farewell() {
        return "Tạm biệt";
    }

    @Bean
    public MessageService messageService(String greeting) {
        return new MessageService(greeting);
    }
}
```
Dựa trên cơ chế đối sánh tên tham số của Spring, chuỗi ký tự nào sẽ được tiêm vào `MessageService`?

A. Chuỗi `"Xin chào"` vì tên tham số `greeting` trùng khớp chính xác với tên bean của phương thức `greeting()`  
B. Chuỗi `"Tạm biệt"` vì phương thức `farewell()` được khai báo ngay liền kề trước điểm tiêm phụ thuộc  
C. Không chuỗi nào được tiêm vì Spring sẽ ném ngoại lệ `NoUniqueBeanDefinitionException` do thiếu `@Primary`  
D. Một chuỗi rỗng `""` vì Spring chỉ hỗ trợ tiêm đối tượng phức hợp chứ không hỗ trợ tiêm kiểu dữ liệu chuỗi  

**Câu 18 [Vận dụng]:** Lớp `OrderService` cần sử dụng `PaymentService`. Trong bài kiểm thử đơn vị độc lập (Unit Test thuần túy bằng JUnit mà không nạp Spring Context), nếu `OrderService` được thiết kế bằng Constructor Injection, lập trình viên sẽ truyền đối tượng giả lập (Mock) vào như thế nào?

A. Bắt buộc phải khởi tạo một Spring Test Context hoàn chỉnh với chú thích cấu hình `@SpringBootTest`  
B. Chỉ cần khởi tạo trực tiếp bằng toán tử `new OrderService(mockPaymentService)` trong mã kiểm thử  
C. Phải thay đổi phạm vi truy cập của trường `paymentService` từ `private` thành `public` để gán giá trị  
D. Phải sử dụng kỹ thuật can thiệp bytecode hoặc Reflection phức tạp để truy cập vào các trường ẩn  

**Câu 19 [Vận dụng]:** Giả sử trong một lớp cấu hình, bạn có phương thức sau:
```java
@Bean
public Person person(Parrot parrot) {
    var p = new Person();
    p.setParrot(parrot);
    return p;
}
```
Nếu trong context hoàn toàn **KHÔNG TỒN TẠI** bất kỳ bean nào thuộc kiểu `Parrot`, điều gì sẽ xảy ra khi nạp Spring Context?

A. Phương thức vẫn thực thi bình thường và thuộc tính `parrot` của đối tượng `Person` sẽ mang giá trị null  
B. Spring sẽ tự động tạo một thể hiện mặc định mới của lớp `Parrot` bằng constructor không đối số  
C. Spring ném ra ngoại lệ `NoSuchBeanDefinitionException` vì không tìm thấy bean phù hợp cho tham số bắt buộc  
D. Spring sẽ tự động bỏ qua phương thức này và không tiến hành đăng ký bean `person` vào trong ngữ cảnh  

**Câu 20 [Vận dụng]:** Bạn phát hiện một lỗi nghiêm trọng: Lớp `AuthorService` tiêm `BookService` qua constructor, và lớp `BookService` lại tiêm `AuthorService` qua constructor. Cách xử lý thiết kế chuẩn mực nhất theo nguyên lý phân tách trách nhiệm (SRP) là gì?

A. Đổi cả hai lớp sang sử dụng Field Injection để tạm thời che giấu lỗi trong quá trình biên dịch mã  
B. Gộp chung hai lớp `AuthorService` và `BookService` thành một lớp dịch vụ đơn lẻ có kích thước cực lớn  
C. Bổ sung chú thích `@Lazy` trên cả hai constructor để trì hoãn việc kiểm tra phụ thuộc vô hạn định  
D. Tái cấu trúc tách logic chung sang một service thứ ba hoặc ứng dụng kiến trúc hướng sự kiện (Event-driven)  

---

## PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI (5 CÂU - 20 MỆNH ĐỀ)
*Đọc từng đoạn ngữ cảnh sau và xác định tính ĐÚNG hoặc SAI của từng mệnh đề a, b, c, d.*

**Câu 21:** Về cơ chế nối dây trực tiếp thông qua gọi phương thức `@Bean`:
- **a)** [Nhận biết] Nối dây trực tiếp bằng cách gọi hàm (ví dụ: `p.setParrot(parrot())`) chỉ có thể thực hiện bên trong các lớp có chú thích `@Configuration`.  
- **b)** [Thông hiểu] Proxy CGLIB do Spring tạo ra sẽ kiểm tra bộ nhớ đệm của context trước khi thực thi phương thức `@Bean` được gọi trực tiếp.  
- **c)** [Thông hiểu] Nếu ta xóa chú thích `@Configuration` khỏi lớp cấu hình (chỉ để lớp thông thường), phương thức `parrot()` khi được gọi trực tiếp sẽ trả về một đối tượng mới hoàn toàn trong mỗi lần gọi.  
- **d)** [Vận dụng] Nối dây trực tiếp qua lời gọi hàm được khuyến khích sử dụng cho các lớp mà bạn tự viết mã nguồn trong dự án thay vì dùng `@Autowired`.  

**Câu 22:** Về các đặc tính của Tiêm phụ thuộc qua trường dữ liệu (Field Injection):
- **a)** [Nhận biết] Cú pháp của Field Injection rất ngắn gọn: chỉ cần đặt chú thích `@Autowired` ngay phía trên khai báo của trường dữ liệu.  
- **b)** [Thông hiểu] Field Injection cho phép lập trình viên khai báo trường dữ liệu với từ khóa `final` để đảm bảo tính bất biến.  
- **c)** [Thông hiểu] Khi sử dụng Field Injection, nếu cố gắng khởi tạo lớp đó trong một Unit test bằng toán tử `new`, trường có `@Autowired` sẽ mang giá trị `null` dẫn đến lỗi `NullPointerException` nếu không can thiệp bằng Reflection.  
- **d)** [Vận dụng] Hầu hết các tài liệu và chuyên gia kiến trúc phần mềm hiện nay đều coi Field Injection là một phản mẫu (anti-pattern) và khuyên nên tránh dùng trong các dự án chuyên nghiệp.  

**Câu 23:** Về các đặc tính của Tiêm phụ thuộc qua hàm khởi tạo (Constructor Injection):
- **a)** [Nhận biết] Khi một lớp chỉ có duy nhất một constructor, ta không cần phải viết chú thích `@Autowired` trên constructor đó (từ Spring 4.3 trở lên).  
- **b)** [Thông hiểu] Constructor Injection đảm bảo rằng một đối tượng không bao giờ được tạo ra trong trạng thái thiếu hụt các phụ thuộc thiết yếu.  
- **c)** [Thông hiểu] Nếu một lớp có từ 2 constructor trở lên, Spring sẽ tự động chọn constructor có nhiều tham số nhất mà không cần bất kỳ chú thích nào.  
- **d)** [Vận dụng] Constructor Injection giúp việc kiểm thử đơn vị (Unit Test) trở nên vô cùng dễ dàng vì lập trình viên có thể truyền trực tiếp các đối tượng mock vào hàm khởi tạo.  

**Câu 24:** Về việc xử lý nhiều bean cùng kiểu và phân giải phụ thuộc với `@Qualifier`:
- **a)** [Nhận biết] Chú thích `@Qualifier` có thể được đặt trước tham số của constructor, tham số của phương thức setter hoặc trực tiếp trên trường dữ liệu.  
- **b)** [Thông hiểu] Giá trị truyền vào `@Qualifier("tenBean")` là tên định danh duy nhất của bean trong Spring Context.  
- **c)** [Thông hiểu] `@Qualifier` có mức độ ưu tiên cao hơn `@Primary`, cho phép lập trình viên chọn chính xác một bean cụ thể kể cả khi có một bean khác đang được đánh dấu là ưu tiên mặc định.  
- **d)** [Vận dụng] Nếu trong context có bean `"parrot1"` mang `@Primary` và bean `"parrot2"`, việc khai báo tiêm `@Autowired Parrot parrot` (không có `@Qualifier`) sẽ luôn tiêm bean `"parrot1"`.  

**Câu 25:** Về hiện tượng phụ thuộc vòng (Circular Dependencies):
- **a)** [Nhận biết] Phụ thuộc vòng xảy ra khi Bean A phụ thuộc vào Bean B, và đồng thời Bean B lại phụ thuộc ngược lại vào Bean A.  
- **b)** [Thông hiểu] Spring luôn luôn tự động giải quyết được mọi trường hợp phụ thuộc vòng mà không bao giờ ném ra lỗi lúc khởi động.  
- **c)** [Thông hiểu] Phụ thuộc vòng thường là dấu hiệu cảnh báo của một thiết kế lớp tồi (Bad Design), vi phạm nguyên lý đơn nhiệm (Single Responsibility Principle).  
- **d)** [Vận dụng] Khi gặp lỗi phụ thuộc vòng giữa hai bean dùng Constructor Injection, một trong những giải pháp kỹ thuật tạm thời (dù không khuyến khích) là gắn chú thích `@Lazy` tại điểm tiêm phụ thuộc của một trong hai bean.  

---

## PHẦN III: TRẢ LỜI NGẮN (6 CÂU)
*Điền câu trả lời ngắn gọn, chính xác vào chỗ trống theo yêu cầu của từng câu.*

**Câu 26 [Nhận biết]:** Chú thích nào trong Spring được đặt trên trường dữ liệu, setter hoặc constructor để kích hoạt cơ chế tự động tiêm bean từ Spring Context?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 27 [Nhận biết]:** Khi có nhiều bean cùng kiểu dữ liệu trong context, chú thích nào được sử dụng để chỉ định rõ ràng tên định danh của bean cần tiêm vào?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 28 [Thông hiểu]:** Ngoại lệ cụ thể nào (runtime exception) được Spring ném ra khi phát hiện hiện tượng phụ thuộc vòng (Circular Dependency) giữa các bean sử dụng Constructor Injection?  
*(Quy định: Điền tên đầy đủ của lớp ngoại lệ trong Spring Framework)*  
👉 **Trả lời:** ............................................................

**Câu 29 [Thông hiểu]:** Kỹ thuật tiêm phụ thuộc nào (trong số Field, Setter, Constructor) là kỹ thuật duy nhất cho phép lập trình viên khai báo các trường phụ thuộc với từ khóa `final` để đảm bảo tính bất biến (immutability)?  
*(Quy định: Điền tên kỹ thuật bằng tiếng Anh hoặc tiếng Việt)*  
👉 **Trả lời:** ............................................................

**Câu 30 [Vận dụng]:** Trong một lớp cấu hình `@Configuration`, phương thức `@Bean public Person person(Parrot parrot)` nhận tham số kiểu `Parrot`. Nếu trong context có 2 bean `Parrot` mang tên `"parrot1"` và `"parrot2"`, và không có bean nào mang chú thích `@Primary`, lập trình viên phải đặt chú thích gì cùng giá trị bên trong ngoặc đơn ngay trước tham số `Parrot parrot` để tiêm đúng `"parrot2"`?  
*(Quy định: Ghi rõ toàn bộ chú thích kèm giá trị tham số trong ngoặc kép)*  
👉 **Trả lời:** ............................................................

**Câu 31 [Vận dụng]:** Xem xét lớp sau:
```java
@Component
public class Car {
    private final Engine engine;

    public Car(Engine engine) {
        this.engine = engine;
    }
}
```
Từ phiên bản Spring Framework bao nhiêu trở đi, lớp `Car` trên KHÔNG cần phải đặt chú thích `@Autowired` lên constructor duy nhất này mà Spring vẫn tự động tiêm bean `Engine`?  
*(Quy định: Điền số phiên bản Spring, ví dụ: 3.0, 4.3,...)*  
👉 **Trả lời:** ............................................................

---

## 🔍 BẢNG ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT

<details>
<summary><b>BẤM VÀO ĐÂY ĐỂ XEM ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT</b></summary>

### BẢNG ĐÁP ÁN NHANH PHẦN I (MCQ)
| Câu | Đáp án | Mức độ | Câu | Đáp án | Mức độ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | **B** | Nhận biết | 11 | **C** | Thông hiểu |
| 2 | **D** | Nhận biết | 12 | **D** | Thông hiểu |
| 3 | **A** | Nhận biết | 13 | **A** | Thông hiểu |
| 4 | **C** | Nhận biết | 14 | **B** | Thông hiểu |
| 5 | **A** | Nhận biết | 15 | **C** | Thông hiểu |
| 6 | **B** | Nhận biết | 16 | **D** | Vận dụng |
| 7 | **B** | Thông hiểu | 17 | **A** | Vận dụng |
| 8 | **C** | Thông hiểu | 18 | **B** | Vận dụng |
| 9 | **D** | Thông hiểu | 19 | **C** | Vận dụng |
| 10 | **A** | Thông hiểu | 20 | **D** | Vận dụng |

---

### BẢNG ĐÁP ÁN NHANH PHẦN II (ĐÚNG / SAI)
- **Câu 21:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **SAI**
- **Câu 22:** a: **ĐÚNG** | b: **SAI** | c: **ĐÚNG** | d: **ĐÚNG**
- **Câu 23:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**
- **Câu 24:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **ĐÚNG**
- **Câu 25:** a: **ĐÚNG** | b: **SAI** | c: **ĐÚNG** | d: **ĐÚNG**

---

### BẢNG ĐÁP ÁN NHANH PHẦN III (TRẢ LỜI NGẮN)
- **Câu 26:** `@Autowired`
- **Câu 27:** `@Qualifier`
- **Câu 28:** `BeanCurrentlyInCreationException`
- **Câu 29:** Constructor Injection (Tiêm qua hàm khởi tạo)
- **Câu 30:** `@Qualifier("parrot2")`
- **Câu 31:** `4.3` (hoặc Spring 4.3)

---

### HƯỚNG DẪN GIẢI CHI TIẾT

#### PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN
- **Câu 1: Đáp án B**
  - *Căn cứ tài liệu*: Trang 57-58 mục "Wiring beans". Nối dây (wiring) là hành động thiết lập mối liên kết giữa các bean trong Spring Context.
  - *Phân tích bẫy*: Các thuật ngữ compiling, polling, scanning thuộc các khâu khác, không dùng để chỉ việc liên kết tham chiếu giữa các bean.
- **Câu 2: Đáp án D**
  - *Căn cứ tài liệu*: Trang 66 mục "Using the @Autowired annotation". Chú thích `@Autowired` kích hoạt cơ chế tiêm phụ thuộc tự động.
  - *Phân tích bẫy*: `@InjectBean` hay `@ResourceBean` không phải là chú thích chuẩn của Spring Framework.
- **Câu 3: Đáp án A**
  - *Căn cứ tài liệu*: Trang 69 mục "Using constructor injection". Constructor Injection là cách tiếp cận chuẩn mực và được khuyến nghị nhiều nhất vì đảm bảo tính bất biến (`final`) và dễ kiểm thử độc lập.
- **Câu 4: Đáp án C**
  - *Căn cứ tài liệu*: Trang 68. Kể từ Spring 4.3, nếu lớp chỉ có duy nhất 1 constructor thì Spring tự động hiểu và tiêm phụ thuộc mà không bắt buộc phải viết `@Autowired`.
- **Câu 5: Đáp án A**
  - *Căn cứ tài liệu*: Trang 71 mục "Using @Qualifier". `@Qualifier` dùng để chỉ định chính xác tên bean cần tiêm khi có nhiều lựa chọn cùng kiểu.
- **Câu 6: Đáp án B**
  - *Căn cứ tài liệu*: Trang 59. Quan hệ "HAS-A" (Người sở hữu một chú vẹt - Person has a Parrot) là quan hệ hợp thành / sở hữu tham chiếu đối tượng.
- **Câu 7: Đáp án B**
  - *Căn cứ tài liệu*: Trang 62 mục "Wiring beans using direct method calls". Proxy CGLIB bọc ngoài lớp `@Configuration` đánh chặn mọi lời gọi phương thức `@Bean` để kiểm tra context trước, đảm bảo mỗi bean chỉ khởi tạo một lần (Singleton).
- **Câu 8: Đáp án C**
  - *Căn cứ tài liệu*: Trang 67 mục "Using field injection". Với Field Injection, các trường `private` không được khởi tạo nếu dùng `new` thông thường trong Unit Test, dẫn đến `NullPointerException` nếu không khởi chạy Spring test runner hoặc can thiệp bằng Reflection.
- **Câu 9: Đáp án D**
  - *Căn cứ tài liệu*: Trang 68-69. Khai báo `final` ngăn chặn việc gán đè phụ thuộc sau khi khởi tạo, giúp mã nguồn an toàn trong môi trường đa luồng và đảm bảo tính bất biến.
- **Câu 10: Đáp án A**
  - *Căn cứ tài liệu*: Trang 63-64. Spring hỗ trợ tự động tìm kiếm và truyền bean vào tham số của bất kỳ phương thức `@Bean` nào trong cấu hình.
- **Câu 11: Đáp án C**
  - *Căn cứ tài liệu*: Trang 72. `@Qualifier` mang tính cụ thể cao nhất, do đó luôn ghi đè lên thiết lập mặc định của `@Primary`.
- **Câu 12: Đáp án D**
  - *Căn cứ tài liệu*: Trang 75 mục "Circular dependencies". Định nghĩa phụ thuộc vòng là hai hay nhiều bean cùng cần nhau để khởi tạo, tạo thành chu trình khép kín.
- **Câu 13: Đáp án A**
  - *Căn cứ tài liệu*: Trang 76. Spring không thể giải quyết thứ tự tạo đối tượng khi hai bean cùng yêu cầu nhau trong constructor, dẫn tới ngoại lệ `BeanCurrentlyInCreationException`.
- **Câu 14: Đáp án B**
  - *Căn cứ tài liệu*: Trang 73. Khi không có `@Qualifier`, Spring dùng tên định danh tham số (parameter name) làm tiêu chí phụ để đối sánh với tên bean.
- **Câu 15: Đáp án C**
  - *Căn cứ tài liệu*: Trang 70. Setter Injection phù hợp cho các phụ thuộc tùy chọn (optional dependencies), có thể thay đổi hoặc bổ sung sau khi đối tượng đã tồn tại.
- **Câu 16: Đáp án D**
  - *Căn cứ tài liệu*: Đặt `@Qualifier("riki")` trực tiếp trước tham số `Parrot parrot` chỉ thị cho Spring lấy đúng bean có tên `"riki"`.
- **Câu 17: Đáp án A**
  - *Căn cứ tài liệu*: Tham số có tên `greeting` khớp chính xác với tên của phương thức định nghĩa bean `greeting()`, nên Spring sẽ tiêm chuỗi `"Xin chào"`.
- **Câu 18: Đáp án B**
  - *Căn cứ tài liệu*: Trang 69. Nhờ có constructor nhận phụ thuộc, trong bài test ta chỉ cần truyền thẳng mock object vào `new OrderService(mockPaymentService)` mà không cần Spring context.
- **Câu 19: Đáp án C**
  - *Căn cứ tài liệu*: Khi một tham số bắt buộc không tìm thấy bean tương ứng trong context, Spring ném ngoại lệ `NoSuchBeanDefinitionException`.
- **Câu 20: Đáp án D**
  - *Căn cứ tài liệu*: Trang 77. Giải pháp kiến trúc bền vững nhất là tái cấu trúc lại trách nhiệm của các lớp (Single Responsibility Principle) hoặc tách một service trung gian.

---

#### PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI
- **Câu 21:**
  - a: **ĐÚNG** (Cơ chế proxy CGLIB chỉ hoạt động khi lớp được gắn chú thích `@Configuration` - Trang 58).
  - b: **ĐÚNG** (CGLIB proxy đánh chặn để đảm bảo tính singleton - Trang 62).
  - c: **ĐÚNG** (Nếu không có `@Configuration`, proxy không được tạo, lời gọi hàm sẽ chạy như hàm Java thuần và sinh ra thể hiện mới).
  - d: **SAI** (Với các lớp tự viết trong dự án, nên dùng `@Component` kết hợp `@Autowired` thay vì nối dây thủ công trong configuration).
- **Câu 22:**
  - a: **ĐÚNG** (Trang 66).
  - b: **SAI** (Java không cho phép gán trường `final` sau khi constructor đã hoàn thành, nên Field Injection không dùng được với `final`).
  - c: **ĐÚNG** (Trang 67).
  - d: **ĐÚNG** (Field Injection che giấu phụ thuộc và gây khó khăn khi viết unit test).
- **Câu 23:**
  - a: **ĐÚNG** (Trang 68).
  - b: **ĐÚNG** (Không thể tạo đối tượng nếu thiếu các đối số constructor bắt buộc).
  - c: **SAI** (Nếu có từ 2 constructor trở lên, Spring sẽ báo lỗi trừ khi có một constructor được chỉ định rõ ràng bằng `@Autowired`).
  - d: **ĐÚNG** (Rất dễ dàng mock phụ thuộc trong Unit Test).
- **Câu 24:**
  - a: **ĐÚNG** (Trang 71-72).
  - b: **ĐÚNG** (Giá trị là identifier duy nhất của bean).
  - c: **ĐÚNG** (Trang 72).
  - d: **ĐÚNG** (Khi không có `@Qualifier`, bean có `@Primary` được ưu tiên chọn).
- **Câu 25:**
  - a: **ĐÚNG**.
  - b: **SAI** (Constructor injection với phụ thuộc vòng sẽ làm sập ứng dụng lúc khởi động với `BeanCurrentlyInCreationException`).
  - c: **ĐÚNG** (Vi phạm SRP, các lớp phụ thuộc lẫn nhau quá chặt chẽ).
  - d: **ĐÚNG** (`@Lazy` trì hoãn việc nạp một bean, phá vỡ bế tắc khởi tạo lúc khởi động).

---

#### PHẦN III: TRẢ LỜI NGẮN
- **Câu 26:** `@Autowired` (Trang 66).
- **Câu 27:** `@Qualifier` (Trang 71).
- **Câu 28:** `BeanCurrentlyInCreationException` (Trang 76).
- **Câu 29:** Constructor Injection (Tiêm qua hàm khởi tạo)
- **Câu 30:** `@Qualifier("parrot2")` (Trang 71).
- **Câu 31:** `4.3` (Trang 68: từ Spring 4.3 trở đi, single constructor tự động được tiêm không cần `@Autowired`).

</details>
