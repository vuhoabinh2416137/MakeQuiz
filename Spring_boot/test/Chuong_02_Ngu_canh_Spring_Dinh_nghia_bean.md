# 🎯 BỘ ĐỀ LUYỆN TẬP TOÀN DIỆN: CHƯƠNG 2 - NGỮ CẢNH SPRING: ĐỊNH NGHĨA CÁC BEAN
*(Tài liệu: Spring Start Here - Laurentiu Spilca)*

> **Cấu trúc bộ đề**:  
> - **Phần I**: 20 câu Trắc nghiệm 4 lựa chọn (Đồng nhất độ dài các phương án, phân bổ ngẫu nhiên A-B-C-D, triệt tiêu bẫy câu dài nhất).  
> - **Phần II**: 5 câu Trắc nghiệm Đúng/Sai (mỗi câu gồm 4 ý nhỏ a, b, c, d = 20 mệnh đề).  
> - **Phần III**: 6 câu Trắc nghiệm Trả lời ngắn.  
> **Ma trận phân bổ**: 40% Nhận biết – 30% Thông hiểu – 30% Vận dụng.  
> **Thời gian làm bài khuyến nghị**: 50 phút.  

---

## PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN (20 CÂU)
*Chọn duy nhất 01 đáp án đúng trong các phương án A, B, C, D.*

**Câu 1 [Nhận biết]:** Trong kiến trúc Spring Framework, thuật ngữ "Bean" được định nghĩa chính xác là gì?

A. Một tệp tin cấu hình định dạng XML chứa toàn bộ các thuộc tính kết nối cơ sở dữ liệu  
B. Một thể hiện đối tượng (instance) do Spring Context nhận biết và trực tiếp quản lý vòng đời  
C. Một giao diện (interface) trừu tượng dùng để quy định các quy tắc bảo mật cho ứng dụng  
D. Một phương thức đặc biệt trong lớp cấu hình luôn trả về các giá trị kiểu dữ liệu nguyên thủy  

**Câu 2 [Nhận biết]:** Lớp nào trong Spring Framework thường được sử dụng để khởi tạo Spring Context dựa trên các lớp cấu hình Java bằng chú thích (annotations)?

A. `FileSystemXmlApplicationContext`  
B. `ClassPathXmlApplicationContext`  
C. `AnnotationConfigApplicationContext`  
D. `XmlWebApplicationContext`  

**Câu 3 [Nhận biết]:** Chú thích nào được đặt trên một lớp Java để thông báo cho Spring biết rằng lớp này chứa các phương thức định nghĩa và thiết lập cấu hình bean?

A. `@Configuration`  
B. `@Component`  
C. `@Service`  
D. `@Controller`  

**Câu 4 [Nhận biết]:** Chú thích nào được đánh dấu trên phương thức bên trong lớp cấu hình để chỉ định rằng giá trị trả về của nó sẽ được đưa vào Spring Context?

A. `@Inject`  
B. `@Produce`  
C. `@Instance`  
D. `@Bean`  

**Câu 5 [Nhận biết]:** Trong tệp `pom.xml` của một dự án Maven tiêu chuẩn, bộ ba tọa độ định danh bắt buộc để xác định một thư viện phụ thuộc gồm những thành phần nào?

A. `groupId`, `artifactId` và `version`  
B. `packageName`, `className` và `methodName`  
C. `projectName`, `compilerVersion` và `encoding`  
D. `sourcePath`, `outputPath` và `buildNumber`  

**Câu 6 [Nhận biết]:** Chú thích nào được đặt trực tiếp trên một lớp trong dự án để Spring tự động nhận diện và tạo bean thông qua cơ chế quét thành phần (Component Scanning)?

A. `@Entity`  
B. `@Component`  
C. `@Autowired`  
D. `@Scope`  

**Câu 7 [Nhận biết]:** Chú thích nào được sử dụng trên lớp cấu hình để chỉ thị cho Spring phạm vi các gói (packages) cần quét để tìm kiếm các lớp có `@Component`?

A. `@EnableAutoConfiguration`  
B. `@PackageScan`  
C. `@ComponentScan`  
D. `@ScanComponents`  

**Câu 8 [Nhận biết]:** Chú thích `@PostConstruct` được sử dụng để đánh dấu một phương thức có đặc tính thực thi như thế nào trong vòng đời của bean?

A. Phương thức được kích hoạt lặp đi lặp lại theo chu kỳ định sẵn sau khi ứng dụng hoàn tất khởi động  
B. Phương thức được thực thi ngay trước thời điểm hàm khởi tạo (constructor) của lớp bắt đầu chạy  
C. Phương thức chỉ được thực thi một lần duy nhất khi máy chủ ứng dụng nhận được tín hiệu dừng hoạt động  
D. Phương thức được tự động thực thi ngay sau khi hàm khởi tạo hoàn tất và các phụ thuộc đã được nạp xong  

**Câu 9 [Thông hiểu]:** Theo mặc định, tên định danh của một bean được tạo ra bởi phương thức có chú thích `@Bean` trong lớp cấu hình sẽ lấy theo giá trị nào?

A. Tên của chính phương thức khai báo `@Bean` đó  
B. Tên đầy đủ kèm package của lớp trả về kiểu dữ liệu  
C. Tên của lớp cấu hình `@Configuration` bao bọc bên ngoài  
D. Một chuỗi số ngẫu nhiên do máy ảo JVM tự động phát sinh  

**Câu 10 [Thông hiểu]:** Nếu trong Spring Context có 3 bean cùng thuộc kiểu `Parrot` và lập trình viên gọi lệnh `context.getBean(Parrot.class)`, hiện tượng gì sẽ xảy ra?

A. Spring tự động lấy thể hiện được khởi tạo sau cùng trong bộ nhớ  
B. Spring tự động gom cả ba thể hiện đó vào một mảng đối tượng `Parrot[]`  
C. Spring ném ngoại lệ `NoUniqueBeanDefinitionException` vì không thể tự quyết định bean cần lấy  
D. Spring trả về giá trị `null` và ghi nhận một cảnh báo (warning) vào tệp log  

**Câu 11 [Thông hiểu]:** Vai trò cốt lõi của chú thích `@Primary` khi được gắn lên một phương thức `@Bean` hoặc một lớp `@Component` là gì?

A. Ngăn cấm không cho bất kỳ lớp nào khác trong dự án được phép kế thừa hay can thiệp vào bean này  
B. Yêu cầu Spring ưu tiên cấp phát vùng nhớ riêng trên CPU cho bean nhằm tăng tốc độ truy xuất dữ liệu  
C. Ra lệnh cho Spring tự động loại bỏ tất cả các bean khác có cùng kiểu dữ liệu ra khỏi ngữ cảnh  
D. Đánh dấu bean là lựa chọn ưu tiên mặc định khi giải quyết phụ thuộc theo kiểu dữ liệu mà không có tên định danh  

**Câu 12 [Thông hiểu]:** Khi không chỉ định thuộc tính `basePackages`, chú thích `@ComponentScan` sẽ tự động tìm kiếm các thành phần `@Component` ở phạm vi nào?

A. Tìm kiếm trong toàn bộ các tệp `.jar` của các thư viện bên thứ ba nằm trong classpath  
B. Tìm kiếm trong gói chứa lớp cấu hình đó và tất cả các gói con cấp dưới của nó  
C. Tìm kiếm trong toàn bộ các thư mục tài nguyên tĩnh `src/main/resources` của dự án  
D. Tìm kiếm ở cấp thư mục gốc của hệ điều hành nơi ứng dụng đang được khởi chạy  

**Câu 13 [Thông hiểu]:** Quy ước đặt tên bean mặc định của Spring đối với một lớp có chú thích `@Component` (ví dụ lớp `ParrotService`) khi không chỉ định tên tường minh là gì?

A. Giữ nguyên tên gốc của lớp: `"ParrotService"`  
B. Chuyển toàn bộ các chữ cái thành viết hoa: `"PARROTSERVICE"`  
C. Chuyển ký tự đầu tiên thành chữ thường theo quy tắc camelCase: `"parrotService"`  
D. Thêm tiền tố định danh của framework vào phía trước: `"bean_ParrotService"`  

**Câu 14 [Thông hiểu]:** Tại sao trong các dự án thực tế, lập trình viên thường sử dụng chú thích `@Bean` thay vì `@Component` khi muốn đưa các đối tượng từ thư viện bên ngoài vào Spring Context?

A. Vì mã nguồn thư viện nằm trong tệp JAR đã biên dịch, lập trình viên không thể mở mã nguồn để thêm chú thích `@Component`  
B. Vì chú thích `@Component` bị vô hiệu hóa hoàn toàn đối với các lớp không do lập trình viên tự tạo trong dự án  
C. Vì phương thức `@Bean` có tốc độ nạp vào bộ nhớ nhanh hơn gấp 10 lần so với việc dùng cơ chế quét `@Component`  
D. Vì các thư viện bên thứ ba bắt buộc phải có chú thích `@Bean` thì máy ảo JVM mới có thể nạp được bytecode  

**Câu 15 [Thông hiểu]:** Phương thức `registerBean()` của lớp `AnnotationConfigApplicationContext` mang lại ưu thế nổi bật nào so với cách dùng `@Bean` hay `@Component` truyền thống?

A. Cho phép mã hóa toàn bộ dữ liệu của bean trong bộ nhớ heap để chống lại các cuộc tấn công bộ nhớ  
B. Cho phép tự động chuyển đổi các bean thành dịch vụ web RESTful mà không cần cấu hình thêm controller  
C. Cho phép đăng ký bean hoàn toàn bằng mã lệnh (programmatic approach) tại runtime dựa trên các điều kiện logic linh hoạt  
D. Cho phép ứng dụng nạp bean mà không cần sự hỗ trợ của bộ thông dịch bytecode trên máy ảo JVM  

**Câu 16 [Vận dụng]:** Bạn có một lớp cấu hình với 2 phương thức `@Bean` trả về kiểu `Parrot`:
```java
@Configuration
public class ProjectConfig {
    @Bean("koko")
    Parrot parrot1() {
        var p = new Parrot();
        p.setName("Koko");
        return p;
    }

    @Bean("miki")
    @Primary
    Parrot parrot2() {
        var p = new Parrot();
        p.setName("Miki");
        return p;
    }
}
```
Lệnh nào sau đây sẽ lấy ra được chú vẹt có tên là `"Koko"`?

A. `context.getBean(Parrot.class);`  
B. `context.getBean("koko", Parrot.class);`  
C. `context.getBean("parrot1", Parrot.class);`  
D. `context.getBean("miki", Parrot.class);`  

**Câu 17 [Vận dụng]:** Lớp `Car` gắn `@Component` nằm trong gói `com.example.beans`. Lớp cấu hình `ProjectConfig` đặt trong gói `com.example.config`. Khi gọi `context.getBean(Car.class)`, Spring ném ngoại lệ `NoSuchBeanDefinitionException`. Nguyên nhân và giải pháp chuẩn xác là gì?

A. Lớp `Car` chưa có hàm khởi tạo không tham số $\rightarrow$ Khai báo thêm một constructor rỗng không đối số cho lớp `Car`  
B. Thiếu chú thích `@Primary` trên lớp `Car` $\rightarrow$ Đặt thêm `@Primary` lên trên `@Component` của lớp `Car`  
C. Tên lớp `Car` không tuân theo quy tắc đặt tên bean $\rightarrow$ Đổi tên lớp `Car` thành `CarBean` để Spring nhận diện  
D. `ProjectConfig` không quét tới gói `com.example.beans` $\rightarrow$ Thêm `@ComponentScan(basePackages = "com.example")` lên `ProjectConfig`  

**Câu 18 [Vận dụng]:** Trong một ứng dụng đa môi trường, bạn chỉ muốn đăng ký bean `MockPaymentService` khi biến cờ `isProduction == false`, còn nếu `isProduction == true` thì đăng ký `RealPaymentService`. Giải pháp nào trong Chương 2 giải quyết trực tiếp và sạch sẽ nhất bài toán logic động này?

A. Sử dụng phương thức `context.registerBean(...)` kết hợp cấu trúc điều kiện `if-else` trong mã Java lúc nạp ứng dụng  
B. Đặt đồng thời cả hai chú thích `@Component` và `@Primary` lên cả hai lớp để Spring tự động phân giải lúc chạy  
C. Khai báo hai tệp cấu hình `pom.xml` độc lập cho từng môi trường để Maven biên dịch riêng từng lớp tương ứng  
D. Tạo hai phương thức `@Bean` trong cùng một lớp cấu hình và dùng chú thích `@Scope("prototype")` để hoán đổi  

**Câu 19 [Vận dụng]:** Quan sát lớp `Parrot`:
```java
@Component
public class Parrot {
    public Parrot() {
        System.out.println("1. Constructor called");
    }

    @PostConstruct
    public void init() {
        System.out.println("2. PostConstruct called");
    }
}
```
Khi khởi tạo Spring Context có quét lớp này, thứ tự in ra console sẽ là gì?

A. Chỉ có dòng chữ `"2. PostConstruct called"` xuất hiện trên console  
B. `"2. PostConstruct called"` in trước, sau đó đến `"1. Constructor called"`  
C. Không có dòng chữ nào in ra cho đến khi gọi phương thức nghiệp vụ đầu tiên  
D. `"1. Constructor called"` in trước, sau đó đến `"2. PostConstruct called"`  

**Câu 20 [Vận dụng]:** Khi đăng ký một bean bằng phương thức `registerBean()` và muốn thiết lập bean này là `@Primary` hoàn toàn bằng mã lệnh (programmatic), cú pháp nào sau đây là chuẩn mực?

A. `context.registerBean("p", Parrot.class, () -> p).makePrimary();`  
B. `context.registerBean("p", Parrot.class, () -> p, bc -> bc.setPrimary(true));`  
C. `context.setPrimaryBean("p", Parrot.class);`  
D. `context.registerPrimaryBean("p", Parrot.class, () -> p);`  

---

## PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI (5 CÂU - 20 MỆNH ĐỀ)
*Đọc từng đoạn ngữ cảnh sau và xác định tính ĐÚNG hoặc SAI của từng mệnh đề a, b, c, d.*

**Câu 21:** Về cơ chế hoạt động của Spring Context và việc định nghĩa Bean:
- **a)** [Nhận biết] Theo mặc định, Spring tự động nhận biết và quản lý tất cả các lớp Java tồn tại trong dự án của bạn mà không cần bất kỳ cấu hình hay chú thích nào.  
- **b)** [Nhận biết] Một phương thức có chú thích `@Bean` bắt buộc phải nằm bên trong một lớp được đánh dấu bằng chú thích `@Configuration`.  
- **c)** [Thông hiểu] Spring Context thực chất là một vùng không gian trong bộ nhớ ứng dụng nơi lưu giữ và quản lý các thể hiện đối tượng được cấp phát.  
- **d)** [Vận dụng] Một ứng dụng có thể cùng lúc chứa nhiều thể hiện của cùng một lớp (ví dụ lớp `Parrot`) trong Spring Context miễn là chúng có tên định danh khác nhau.  

**Câu 22:** Về việc sử dụng chú thích `@Bean` và xử lý xung đột tên:
- **a)** [Nhận biết] Ta có thể đặt nhiều tên định danh khác nhau cho cùng một bean bằng cách truyền một mảng các chuỗi vào thuộc tính `name` của chú thích `@Bean` (ví dụ: `@Bean(name = {"parrot1", "koko"})`).  
- **b)** [Thông hiểu] Khi gọi `context.getBean(Parrot.class)` trên một context có 2 bean cùng kiểu `Parrot` mà không bean nào có `@Primary`, Spring sẽ trả về giá trị `null` thay vì ném ngoại lệ.  
- **c)** [Thông hiểu] Khi chỉ định tường minh cả tên và kiểu dữ liệu: `context.getBean("koko", Parrot.class)`, Spring sẽ lấy chính xác bean có tên `"koko"` bất kể có bean khác được đánh dấu `@Primary`.  
- **d)** [Vận dụng] Nếu gắn chú thích `@Primary` trên cả hai phương thức `@Bean` khác nhau cùng trả về kiểu `Parrot`, ứng dụng sẽ ưu tiên bean được viết ở dòng mã phía trên.  

**Câu 23:** Về cơ chế quét thành phần (Component Scanning) và Chú thích định hình:
- **a)** [Nhận biết] Chú thích `@Component` biến một lớp thông thường thành một Spring Bean được quản lý vòng đời tự động.  
- **b)** [Nhận biết] Chú thích `@ComponentScan` phải luôn luôn được đặt trên cùng một lớp với `@Configuration` để kích hoạt việc quét gói.  
- **c)** [Thông hiểu] Nếu một lớp có chú thích `@Component` nằm ngoài gói được chỉ định trong `@ComponentScan`, Spring Context sẽ bỏ qua không tạo bean cho lớp đó.  
- **d)** [Vận dụng] Sử dụng `@Component` kết hợp `@ComponentScan` giúp giảm thiểu số lượng dòng mã cấu hình thủ công hơn so với cách dùng `@Bean`.  

**Câu 24:** Về vòng đời khởi tạo bean và chú thích `@PostConstruct`:
- **a)** [Nhận biết] Chú thích `@PostConstruct` thuộc tiêu chuẩn Java EE/Jakarta EE và được Spring hỗ trợ đầy đủ.  
- **b)** [Thông hiểu] Phương thức có gắn chú thích `@PostConstruct` được thực thi sau khi hàm khởi tạo đã chạy xong và đối tượng đã được tiêm các phụ thuộc.  
- **c)** [Thông hiểu] Phương thức mang chú thích `@PostConstruct` có thể nhận các tham số đầu vào do người dùng truyền vào lúc chạy.  
- **d)** [Vận dụng] `@PostConstruct` rất hữu ích khi cần thực hiện các thiết lập khởi tạo giá trị ban đầu cho đối tượng ngay sau khi nó được đưa vào context.  

**Câu 25:** Về phương pháp đăng ký bean bằng mã lệnh `registerBean()`:
- **a)** [Nhận biết] Phương thức `registerBean()` thuộc về lớp `GenericApplicationContext` (lớp cha của `AnnotationConfigApplicationContext`).  
- **b)** [Thông hiểu] `registerBean()` yêu cầu một hàm cung cấp (Supplier lambda) để chỉ định cách thức khởi tạo thể hiện của đối tượng.  
- **c)** [Thông hiểu] Phương pháp `registerBean()` chỉ có thể đăng ký các bean có sẵn trong mã nguồn, không thể đăng ký các bean được tạo động từ luồng dữ liệu bên ngoài.  
- **d)** [Vận dụng] Ta có thể truyền một tham số kiểu `BeanDefinitionCustomizer` vào `registerBean()` để thiết lập các đặc tính nâng cao cho bean (như đánh dấu `@Primary`).  

---

## PHẦN III: TRẢ LỜI NGẮN (6 CÂU)
*Điền câu trả lời ngắn gọn, chính xác vào chỗ trống theo yêu cầu của từng câu.*

**Câu 26 [Nhận biết]:** Lớp cài đặt cụ thể nào của `ApplicationContext` trong Spring thường được sử dụng để khởi tạo ngữ cảnh dựa trên các lớp cấu hình Java bằng annotation?  
*(Quy định: Điền tên lớp Java chính xác)*  
👉 **Trả lời:** ............................................................

**Câu 27 [Nhận biết]:** Chú thích nào được đặt trên phương thức bên trong lớp cấu hình để báo cho Spring biết giá trị trả về của phương thức đó cần được đưa vào context?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 28 [Nhận biết]:** Chú thích nào được đặt trên một bean để chỉ định nó là lựa chọn ưu tiên mặc định khi Spring tìm kiếm theo kiểu dữ liệu mà có nhiều bean trùng kiểu?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 29 [Thông hiểu]:** Ngoại lệ cụ thể nào (runtime exception) được Spring ném ra khi lập trình viên gọi `context.getBean(Type.class)` nhưng trong context lại có nhiều hơn 1 bean cùng thỏa mãn kiểu dữ liệu đó mà không có bean nào mang `@Primary`?  
*(Quy định: Điền tên đầy đủ của lớp ngoại lệ trong Spring Framework)*  
👉 **Trả lời:** ............................................................

**Câu 30 [Thông hiểu]:** Chú thích nào được đánh dấu trên một phương thức không đối số của bean để yêu cầu Spring tự động gọi thực thi ngay sau khi hàm khởi tạo hoàn tất?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 31 [Vận dụng]:** Phương thức nào trên đối tượng `AnnotationConfigApplicationContext` cho phép lập trình viên đăng ký một bean vào context hoàn toàn bằng mã lệnh (programmatic approach) tại runtime?  
*(Quy định: Điền tên phương thức kèm cặp ngoặc tròn, ví dụ: execute())*  
👉 **Trả lời:** ............................................................

---

## 🔍 BẢNG ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT

<details>
<summary><b>BẤM VÀO ĐÂY ĐỂ XEM ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT</b></summary>

### BẢNG ĐÁP ÁN NHANH PHẦN I (MCQ)
*Tỷ lệ phân bổ đáp án: 5 A (25%) – 5 B (25%) – 6 C (30%) – 4 D (20%)*

| Câu | Đáp án | Mức độ | Câu | Đáp án | Mức độ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | **B** | Nhận biết | 11 | **D** | Thông hiểu |
| 2 | **C** | Nhận biết | 12 | **B** | Thông hiểu |
| 3 | **A** | Nhận biết | 13 | **C** | Thông hiểu |
| 4 | **D** | Nhận biết | 14 | **A** | Thông hiểu |
| 5 | **A** | Nhận biết | 15 | **C** | Thông hiểu |
| 6 | **B** | Nhận biết | 16 | **B** | Vận dụng |
| 7 | **C** | Nhận biết | 17 | **D** | Vận dụng |
| 8 | **D** | Nhận biết | 18 | **A** | Vận dụng |
| 9 | **A** | Thông hiểu | 19 | **D** | Vận dụng |
| 10 | **C** | Thông hiểu | 20 | **B** | Vận dụng |

---

### BẢNG ĐÁP ÁN NHANH PHẦN II (ĐÚNG / SAI)
- **Câu 21:** a: **SAI** | b: **ĐÚNG** | c: **ĐÚNG** | d: **ĐÚNG**
- **Câu 22:** a: **ĐÚNG** | b: **SAI** | c: **ĐÚNG** | d: **SAI**
- **Câu 23:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **ĐÚNG**
- **Câu 24:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**
- **Câu 25:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**

---

### BẢNG ĐÁP ÁN NHANH PHẦN III (TRẢ LỜI NGẮN)
- **Câu 26:** `AnnotationConfigApplicationContext`
- **Câu 27:** `@Bean`
- **Câu 28:** `@Primary`
- **Câu 29:** `NoUniqueBeanDefinitionException`
- **Câu 30:** `@PostConstruct`
- **Câu 31:** `registerBean()`

---

### HƯỚNG DẪN GIẢI CHI TIẾT

#### PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN
- **Câu 1: Đáp án B**
  - *Căn cứ tài liệu*: Trang 24 mục "What is a Spring Bean?". Bean là một thể hiện đối tượng được Spring Context nhận biết và trực tiếp quản lý vòng đời.
- **Câu 2: Đáp án C**
  - *Căn cứ tài liệu*: Trang 25. `AnnotationConfigApplicationContext` là lớp hiện thực dùng để khởi tạo context từ các lớp cấu hình Java Annotation.
- **Câu 3: Đáp án A**
  - *Căn cứ tài liệu*: Trang 25. Chú thích `@Configuration` đánh dấu lớp chứa các định nghĩa bean.
- **Câu 4: Đáp án D**
  - *Căn cứ tài liệu*: Trang 26. `@Bean` đặt trên phương thức để đưa giá trị trả về của nó vào Spring Context.
- **Câu 5: Đáp án A**
  - *Căn cứ tài liệu*: Trang 23. Bộ ba tọa độ Maven: Group ID, Artifact ID và Version.
- **Câu 6: Đáp án B**
  - *Căn cứ tài liệu*: Trang 43. Chú thích `@Component` đánh dấu lớp để Spring tự động quét và tạo bean.
- **Câu 7: Đáp án C**
  - *Căn cứ tài liệu*: Trang 44. `@ComponentScan` hướng dẫn Spring vị trí các gói cần quét để tìm `@Component`.
- **Câu 8: Đáp án D**
  - *Căn cứ tài liệu*: Trang 52-53. `@PostConstruct` đánh dấu phương thức chạy ngay sau khi constructor thực thi xong.
- **Câu 9: Đáp án A**
  - *Căn cứ tài liệu*: Trang 31. Mặc định tên bean lấy theo tên của phương thức định nghĩa nó.
- **Câu 10: Đáp án C**
  - *Căn cứ tài liệu*: Trang 34-35. Khi có nhiều bean cùng kiểu mà không chỉ định tên, Spring ném ngoại lệ `NoUniqueBeanDefinitionException`.
- **Câu 11: Đáp án D**
  - *Căn cứ tài liệu*: Trang 38. Chú thích `@Primary` xác định bean ưu tiên mặc định khi có xung đột kiểu.
- **Câu 12: Đáp án B**
  - *Căn cứ tài liệu*: Trang 45. Nếu không chỉ định `basePackages`, `@ComponentScan` mặc định quét gói chứa lớp cấu hình và các gói con.
- **Câu 13: Đáp án C**
  - *Căn cứ tài liệu*: Trang 46. Tên mặc định của `@Component` tuân theo chuẩn camelCase (ví dụ: `ParrotService` $\rightarrow$ `parrotService`).
- **Câu 14: Đáp án A**
  - *Căn cứ tài liệu*: Trang 49-50. Thư viện bên ngoài nằm trong tệp JAR đã đóng gói, không thể can thiệp mã nguồn để thêm `@Component`, do đó bắt buộc phải dùng phương thức `@Bean`.
- **Câu 15: Đáp án C**
  - *Căn cứ tài liệu*: Trang 53-54. `registerBean()` hỗ trợ đăng ký bean linh hoạt bằng mã lệnh dựa trên điều kiện logic động lúc runtime.
- **Câu 16: Đáp án B**
  - *Căn cứ tài liệu*: Trang 39. Chỉ định rõ ràng định danh `"koko"` sẽ lấy chính xác bean `parrot1` dù `parrot2` có `@Primary`.
- **Câu 17: Đáp án D**
  - *Căn cứ tài liệu*: Trang 44-45. Khác gói mà không cấu hình `basePackages` sẽ khiến `@ComponentScan` bỏ sót lớp `Car`.
- **Câu 18: Đáp án A**
  - *Căn cứ tài liệu*: Trang 53-55. Dùng `context.registerBean(...)` kết hợp điều kiện `if-else` là giải pháp trực tiếp và gọn gàng nhất.
- **Câu 19: Đáp án D**
  - *Căn cứ tài liệu*: Trang 52-53. Hàm khởi tạo luôn chạy trước để tạo thể hiện, sau đó `@PostConstruct` mới được gọi.
- **Câu 20: Đáp án B**
  - *Căn cứ tài liệu*: Trang 55 Listing 2.24. Cú pháp truyền `BeanDefinitionCustomizer`: `bc -> bc.setPrimary(true)`.

---

#### PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI
- **Câu 21:**
  - a: **SAI** (Spring chỉ quản lý các lớp được đánh dấu hoặc khai báo tường minh).
  - b: **ĐÚNG** (Trang 25).
  - c: **ĐÚNG** (Trang 24).
  - d: **ĐÚNG** (Trang 31: Nhiều bean cùng kiểu nếu khác tên).
- **Câu 22:**
  - a: **ĐÚNG** (Trang 33).
  - b: **SAI** (Ném ra `NoUniqueBeanDefinitionException`).
  - c: **ĐÚNG** (Trang 39).
  - d: **SAI** (Hai `@Primary` cùng kiểu sẽ gây lỗi xung đột `NoUniqueBeanDefinitionException`).
- **Câu 23:**
  - a: **ĐÚNG** (Trang 43).
  - b: **ĐÚNG** (Trang 44).
  - c: **ĐÚNG** (Trang 45).
  - d: **ĐÚNG** (Trang 46).
- **Câu 24:**
  - a: **ĐÚNG** (Trang 52).
  - b: **ĐÚNG** (Trang 52-53).
  - c: **SAI** (Phương thức `@PostConstruct` bắt buộc không được nhận tham số).
  - d: **ĐÚNG** (Trang 53).
- **Câu 25:**
  - a: **ĐÚNG** (Trang 53).
  - b: **ĐÚNG** (Trang 54).
  - c: **SAI** (Có thể nhận đối tượng tạo động từ bất kỳ nguồn nào).
  - d: **ĐÚNG** (Trang 55).

---

#### PHẦN III: TRẢ LỜI NGẮN
- **Câu 26:** `AnnotationConfigApplicationContext` (Trang 25).
- **Câu 27:** `@Bean` (Trang 26).
- **Câu 28:** `@Primary` (Trang 38).
- **Câu 29:** `NoUniqueBeanDefinitionException` (Trang 35).
- **Câu 30:** `@PostConstruct` (Trang 52).
- **Câu 31:** `registerBean()` (Trang 53).

</details>
