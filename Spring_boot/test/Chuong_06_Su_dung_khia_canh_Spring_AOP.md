# 🎯 BỘ ĐỀ LUYỆN TẬP TOÀN DIỆN: CHƯƠNG 6 - SỬ DỤNG CÁC KHÍA CẠNH VỚI SPRING AOP
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

**Câu 1 [Nhận biết]:** Lập trình hướng khía cạnh (Aspect-Oriented Programming - AOP) là mô thức lập trình được thiết kế nhằm mục đích chính nào?

A. Thay thế hoàn toàn mô hình lập trình hướng đối tượng (OOP) truyền thống trong Java  
B. Tách rời các mối quan tâm xuyên suốt (cross-cutting concerns) ra khỏi logic nghiệp vụ  
C. Tự động chuyển đổi mã nguồn Java sang ngôn ngữ máy trực tiếp của hệ điều hành  
D. Giảm thiểu kích thước dung lượng của tệp tin lưu trữ cấu hình triển khai ứng dụng  

**Câu 2 [Nhận biết]:** Trong thuật ngữ của Spring AOP, khái niệm nào định nghĩa **"tập hợp các phương thức cần bị đánh chặn"** dựa trên một biểu thức quy tắc cụ thể?

A. Aspect (Lớp chứa toàn bộ mã nguồn xử lý khía cạnh xuyên suốt của hệ thống)  
B. Advice (Thời điểm và khối lệnh hành động can thiệp vào luồng thực thi hàm)  
C. Pointcut (Biểu thức định nghĩa tập hợp các điểm nối cần áp dụng khía cạnh)  
D. Join point (Điểm thực thi cụ thể trong chương trình có thể bị đánh chặn)  

**Câu 3 [Nhận biết]:** Thuật ngữ nào trong AOP đại diện cho **"thời điểm và hành động can thiệp"** (chẳng hạn: chạy trước, chạy sau, hoặc bao bọc phương thức)?

A. Target (Đối tượng thực thể nghiệp vụ chứa các phương thức mục tiêu cần can thiệp)  
B. Proxy (Đối tượng đại diện bọc ngoài do framework tự động sinh ra lúc vận hành)  
C. Weaving (Quá trình liên kết khía cạnh với các đối tượng mục tiêu trong hệ thống)  
D. Advice (Hành động và thời điểm can thiệp do một khía cạnh cụ thể thực hiện)  

**Câu 4 [Nhận biết]:** Trong phạm vi triển khai của Spring AOP tiêu chuẩn, một Điểm nối (Join point) luôn luôn đại diện cho sự kiện nào sau đây?

A. Sự kiện một trường dữ liệu nội bộ của đối tượng bị thay đổi giá trị bất ngờ  
B. Sự kiện một lời gọi phương thức (method execution) diễn ra trên một bean  
C. Sự kiện một luồng mới được tạo ra và bắt đầu thực thi bởi máy ảo Java  
D. Sự kiện cơ sở dữ liệu quan hệ bị ngắt kết nối vật lý trong quá trình chạy  

**Câu 5 [Nhận biết]:** Chú thích nào bắt buộc phải được gắn trên lớp cấu hình `@Configuration` để kích hoạt tính năng hỗ trợ AOP và tạo Proxy tự động trong Spring?

A. `@EnableAspectJAutoProxy` (Kích hoạt cơ chế tự động tạo proxy cho các Aspect)  
B. `@EnableAOP` (Chú thích tùy biến chỉ có trong các phiên bản Spring cổ điển)  
C. `@AspectAutoConfiguration` (Tự động cấu hình các lớp phụ thuộc nội bộ)  
D. `@EnableProxying` (Bật tính năng tạo đại diện động cho các giao diện Java)  

**Câu 6 [Nhận biết]:** Kiểu đối tượng nào bắt buộc phải được khai báo làm tham số đầu tiên trong phương thức sử dụng Advice `@Around` để điều khiển quá trình thực thi tiếp diễn của phương thức mục tiêu?

A. `JoinPoint` (Đối tượng chỉ cung cấp thông tin mô tả về phương thức mục tiêu)  
B. `MethodInvocation` (Đối tượng chứa thông tin phản chiếu của lời gọi hàm)  
C. `ProceedingJoinPoint` (Cung cấp phương thức proceed để tiếp tục thực thi)  
D. `ExecutionContext` (Đối tượng lưu trữ ngữ cảnh luồng hiện tại của ứng dụng)  

**Câu 7 [Nhận biết]:** Chú thích nào được sử dụng để thiết lập thứ tự ưu tiên thực thi giữa nhiều khía cạnh (Aspects) cùng can thiệp vào một phương thức mục tiêu?

A. `@Priority` (Quy định mức độ quan trọng của các tiến trình xử lý nền)  
B. `@Sequence` (Định nghĩa chuỗi các bước tuần tự trong quy trình nghiệp vụ)  
C. `@Rank` (Xếp hạng hiệu năng của các thuật toán xử lý dữ liệu lớn)  
D. `@Order` (Thiết lập số thứ tự ưu tiên thực thi giữa các khía cạnh Aspect)  

**Câu 8 [Thông hiểu]:** Cơ chế kỹ thuật nền tảng nào cho phép Spring AOP đánh chặn được các lời gọi phương thức mà không cần sửa đổi mã nguồn gốc của lớp mục tiêu?

A. Tạo đối tượng Proxy bọc quanh bean để đánh chặn lời gọi trước khi tới đối tượng thực  
B. Can thiệp trực tiếp vào mã máy của hệ điều hành để định tuyến lại lời gọi hàm  
C. Thay đổi toàn bộ các phương thức mục tiêu thành các phương thức tĩnh (`static`)  
D. Khởi động lại toàn bộ máy ảo Java (JVM) trước mỗi lần phương thức được thực thi  

**Câu 9 [Thông hiểu]:** Điểm khác biệt mấu chốt giữa đối tượng `JoinPoint` và đối tượng `ProceedingJoinPoint` trong Spring AOP là gì?

A. `JoinPoint` chỉ dùng cho ứng dụng web, còn `ProceedingJoinPoint` dùng cho ứng dụng console  
B. `ProceedingJoinPoint` không thể truy xuất được chữ ký phương thức cũng như tham số truyền vào  
C. `JoinPoint` chỉ hỗ trợ can thiệp vào các phương thức có kiểu dữ liệu trả về là kiểu nguyên thủy  
D. `ProceedingJoinPoint` kế thừa `JoinPoint` và bổ sung hàm `proceed()` để điều khiển tiếp diễn  

**Câu 10 [Thông hiểu]:** Điều gì sẽ xảy ra nếu bên trong một phương thức Advice có chú thích `@Around`, lập trình viên **KHÔNG GỌI** phương thức `joinPoint.proceed()`?

A. Phương thức mục tiêu (nghiệp vụ thật) sẽ hoàn toàn không bao giờ được thực thi  
B. Spring Framework sẽ tự động ném ra ngoại lệ cú pháp ngay trong quá trình biên dịch  
C. Phương thức mục tiêu vẫn tự động được thực thi ngầm trên một luồng xử lý riêng biệt  
D. Toàn bộ các bản ghi trong cơ sở dữ liệu quan hệ sẽ bị hệ thống tự động xóa sạch  

**Câu 11 [Thông hiểu]:** Sự khác biệt cốt lõi giữa hai chú thích `@AfterReturning` và `@After` (hoặc `@AfterThrowing`) là gì?

A. Chú thích `@AfterReturning` chỉ hoạt động đối với các phương thức có kiểu trả về là `void`  
B. Chú thích `@AfterReturning` luôn chạy trước khi phương thức mục tiêu bắt đầu được gọi  
C. `@AfterReturning` chỉ chạy khi phương thức thành công; `@After` luôn chạy dù có lỗi hay không  
D. Hai chú thích này hoàn toàn tương đương nhau và có thể thay thế cho nhau trong mọi trường hợp  

**Câu 12 [Thông hiểu]:** Biểu thức điểm cắt sau đây có ý nghĩa cụ thể như thế nào trong cấu hình Spring AOP?
```java
@Pointcut("execution(* com.example.services.*.*(..))")
```

A. Chỉ đánh chặn các phương thức trả về số nguyên nằm trong gói thư viện gốc của dự án  
B. Chỉ đánh chặn các hàm khởi tạo (constructors) thuộc các lớp trong gói `com.example.services`  
C. Đánh chặn tất cả các thuộc tính dữ liệu tĩnh được khai báo trong gói `com.example.services`  
D. Đánh chặn mọi phương thức, mọi kiểu trả về, trong mọi lớp của gói `com.example.services`  

**Câu 13 [Thông hiểu]:** Tại sao kỹ thuật đánh chặn dựa trên chú thích tự tạo (Custom Annotation, ví dụ `@ToLog`) lại được ưa chuộng hơn việc viết biểu thức điểm cắt dựa trên tên gói/tên lớp (`execution(...)`)?

A. Vì cú pháp biểu thức AspectJ chạy rất chậm và tiêu hao nhiều bộ nhớ RAM lúc vận hành  
B. Vì tính tường minh cao, linh hoạt và không bị phá vỡ khi thay đổi cấu trúc package  
C. Vì Spring Boot cấm hoàn toàn việc sử dụng biểu thức `execution(...)` trong môi trường thực  
D. Vì các chú thích tự tạo không cần phải đăng ký bean trong Spring Context khi khởi động  

**Câu 14 [Thông hiểu]:** Khi có 2 Aspect cùng can thiệp vào một phương thức: `SecurityAspect` có `@Order(1)` và `LoggingAspect` có `@Order(2)`. Chuỗi thực thi Advice kiểu `@Around` sẽ diễn ra theo mô hình nào?

A. `LoggingAspect` chạy hoàn tất từ đầu đến cuối, sau đó mới tới lượt `SecurityAspect` bắt đầu  
B. Cả hai aspect cùng chạy song song đồng thời trên hai luồng xử lý khác nhau của hệ thống  
C. Mô hình củ hành: mã trước proceed của Order(1) chạy trước, nhưng mã sau proceed lại chạy sau cùng  
D. Thứ tự thực thi của các aspect là hoàn toàn ngẫu nhiên tại mỗi lần phương thức được triệu gọi  

**Câu 15 [Thông hiểu]:** Hiện tượng "Self-Invocation" (Tự gọi nội bộ) trong Spring AOP là gì và tại sao Aspect lại không hoạt động trong tình huống này?

A. Do gọi trực tiếp qua `this` diễn ra bên trong instance thực, không đi qua Proxy nên Aspect bị bỏ qua  
B. Do hai bean tự động gọi chéo lẫn nhau tạo nên một chu trình đệ quy vô hạn làm tràn bộ nhớ Stack  
C. Do proxy tự động gọi lại chính các phương thức của nó khiến cho máy chủ bị treo hoàn toàn  
D. Do Spring Context tự động khởi động lại toàn bộ ứng dụng mỗi khi phát hiện một phương thức nội bộ  

**Câu 16 [Vận dụng]:** Bạn cần đo chính xác thời gian thực thi (tính bằng mili-giây) của tất cả các phương thức trong tầng Service để tìm điểm nghẽn hiệu năng. Loại Advice nào sau đây là giải pháp duy nhất và tối ưu nhất?

A. Chỉ sử dụng một Advice đơn lẻ `@Before` kết hợp với biến đếm thời gian toàn cục của hệ thống  
B. Kết hợp một Advice `@Before` và một `@AfterReturning` rồi lưu trữ mốc thời gian vào biến tĩnh  
C. Dùng `@Around`: lấy thời gian trước proceed, gọi proceed(), và tính khoảng chênh lệch thời gian  
D. Chỉ sử dụng Advice `@AfterThrowing` để ghi nhận thời gian khi có ngoại lệ phát sinh trong hàm  

**Câu 17 [Vận dụng]:** Bạn muốn viết một Aspect kiểm tra quyền hạn của người dùng trước khi thực thi phương thức xóa dữ liệu:
```java
@Around("@annotation(RequiresAdmin)")
public Object checkPermission(ProceedingJoinPoint joinPoint) throws Throwable {
    // Logic kiểm tra
}
```
Nếu người dùng hiện tại không có quyền Admin, đoạn mã trong Aspect cần làm gì để ngăn chặn hoàn toàn phương thức xóa dữ liệu thực thi?

A. Tiếp tục gọi lệnh `joinPoint.proceed()` như bình thường và ghi thông báo cảnh báo vào tệp nhật ký  
B. Thay đổi tên của phương thức mục tiêu thành một chuỗi rỗng `""` trước khi chuyển tiếp cho proxy  
C. Tắt ngay lập tức tiến trình máy chủ ứng dụng để ngăn ngừa việc rò rỉ dữ liệu nguy hiểm ra ngoài  
D. Chủ động ném ngoại lệ kiểm soát quyền (AccessDeniedException) và KHÔNG gọi `joinPoint.proceed()`  

**Câu 18 [Vận dụng]:** Trong một Advice `@Around`, bạn muốn can thiệp để chuẩn hóa (trim/lowercase) chuỗi ký tự tham số đầu vào trước khi phương thức mục tiêu xử lý. Phương thức nào của `ProceedingJoinPoint` cho phép bạn truyền vào danh sách tham số mới?

A. Sử dụng phương thức `joinPoint.setArgs(newArgs)` để ghi đè trực tiếp mảng tham số của lời gọi  
B. Sử dụng phương thức `joinPoint.proceed(new Object[]{ modifiedParam })` với mảng tham số đã sửa  
C. Sử dụng phương thức `joinPoint.updateExecution(newArgs)` để cập nhật lại cấu trúc của điểm nối  
D. Sử dụng phương thức `joinPoint.override(modifiedParam)` trước khi triệu gọi phương thức tiếp diễn  

**Câu 19 [Vận dụng]:** Một phương thức tính toán nặng tiêu tốn 5 giây để truy vấn:
```java
@ToCache
public List<Product> getFeaturedProducts() { ... }
```
Lập trình viên thiết kế một Aspect `@Around("@annotation(ToCache)")` để lưu bộ nhớ đệm (Cache). Khi có lời gọi hàm, Aspect kiểm tra nếu kết quả đã có trong bộ đệm thì trả về ngay lập tức kết quả đó từ cache mà không gọi `joinPoint.proceed()`. Giải pháp này:

A. Hoàn toàn khả thi và là nguyên lý hoạt động chuẩn mực của giải pháp Caching bằng Spring AOP  
B. Bị lỗi biên dịch nghiêm trọng vì Spring bắt buộc phải gọi `proceed()` trong mọi trường hợp Advice  
C. Khiến phương thức mục tiêu bị xóa bỏ vĩnh viễn khỏi tệp bytecode đã biên dịch của ứng dụng  
D. Làm cho toàn bộ Spring ApplicationContext bị sập và ném ra ngoại lệ lỗi phân giải bộ nhớ đệm  

**Câu 20 [Vận dụng]:** Bạn tạo một lớp Aspect:
```java
@Aspect
public class LoggingAspect {
    @Around("execution(* com.example.service.*.*(..))")
    public Object log(ProceedingJoinPoint joinPoint) throws Throwable {
        System.out.println("Method intercepted");
        return joinPoint.proceed();
    }
}
```
Ứng dụng đã có chú thích `@EnableAspectJAutoProxy` trên lớp cấu hình, nhưng khi chạy, thông báo `"Method intercepted"` hoàn toàn không xuất hiện khi gọi các service. Nguyên nhân thiếu sót chính xác là gì?

A. Do thiếu từ khóa an toàn luồng `synchronized` trên phương thức xử lý log của lớp Aspect  
B. Do lớp `LoggingAspect` chưa được đăng ký làm bean trong Spring Context (`@Component` hoặc `@Bean`)  
C. Do tên phương thức `log` trùng khớp với từ khóa dành riêng trong ngôn ngữ lập trình Java  
D. Do biểu thức điểm cắt execution bắt buộc phải được viết hoàn toàn bằng các ký tự in hoa  

---

## PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI (5 CÂU - 20 MỆNH ĐỀ)
*Đọc từng đoạn ngữ cảnh sau và xác định tính ĐÚNG hoặc SAI của từng mệnh đề a, b, c, d.*

**Câu 21:** Về các nguyên lý cốt lõi của Lập trình hướng khía cạnh (AOP):
- **a)** [Nhận biết] AOP bổ trợ cho OOP bằng cách tách biệt các mối quan tâm xuyên suốt (cross-cutting concerns) ra khỏi các lớp nghiệp vụ.  
- **b)** [Thông hiểu] Trong Spring AOP, mọi đối tượng Java thông thường (không phải là Spring Bean) đều có thể được áp dụng Aspect một cách tự động.  
- **c)** [Thông hiểu] Spring AOP sử dụng cơ chế Dynamic Proxy để bọc quanh bean mục tiêu và chặn các lời gọi phương thức từ bên ngoài.  
- **d)** [Vận dụng] Lạm dụng Aspect cho cả những logic nghiệp vụ thông thường sẽ làm cho luồng chạy của chương trình trở nên khó đoán định và khó gỡ lỗi (debug).  

**Câu 22:** Về các loại Advice trong Spring AOP:
- **a)** [Nhận biết] Spring AOP hỗ trợ 5 loại advice cơ bản: `@Before`, `@After`, `@AfterReturning`, `@AfterThrowing`, và `@Around`.  
- **b)** [Thông hiểu] Advice `@AfterThrowing` có thể bắt được ngoại lệ và ngăn không cho ngoại lệ đó văng lên phía client gọi hàm.  
- **c)** [Thông hiểu] Advice `@Around` là loại advice mạnh mẽ nhất vì nó bao bọc toàn bộ chu trình thực thi của phương thức mục tiêu.  
- **d)** [Vận dụng] Trong Advice `@Around`, ta hoàn toàn có thể thay đổi giá trị trả về thực tế của phương thức mục tiêu trước khi chuyển tiếp cho client.  

**Câu 23:** Về việc định nghĩa Điểm cắt (Pointcut) với chú thích tự tạo (Custom Annotation):
- **a)** [Nhận biết] Cú pháp `@annotation(tenAnnotation)` cho phép xác định điểm cắt dựa trên các phương thức được đánh dấu bằng chú thích chỉ định.  
- **b)** [Thông hiểu] Cách tiếp cận bằng chú thích giúp mã nguồn ít bị vỡ khi có sự thay đổi về cấu trúc package hoặc tái cấu trúc tên lớp.  
- **c)** [Thông hiểu] Một phương thức có thể bị đánh chặn bởi nhiều khía cạnh cùng một lúc nếu nó thỏa mãn điều kiện của nhiều pointcut khác nhau.  
- **d)** [Vận dụng] Chú thích tự tạo dùng làm điểm cắt AOP bắt buộc phải có `@Retention(RetentionPolicy.RUNTIME)` để có thể nhận biết được lúc chạy.  

**Câu 24:** Về thứ tự thực thi của các Aspect với chú thích `@Order`:
- **a)** [Nhận biết] Chú thích `@Order` nhận tham số là một số nguyên (integer) đại diện cho thứ tự ưu tiên của aspect.  
- **b)** [Thông hiểu] Aspect nào có giá trị trong `@Order` nhỏ hơn thì phần mã tiền xử lý (trước khi vào phương thức mục tiêu) sẽ được thực thi trước.  
- **c)** [Thông hiểu] Aspect nào có giá trị trong `@Order` nhỏ hơn thì phần mã hậu xử lý (sau khi phương thức mục tiêu trả về) cũng sẽ chạy trước aspect có Order lớn hơn.  
- **d)** [Vận dụng] Nếu không chỉ định chú thích `@Order`, thứ tự thực thi giữa các aspect can thiệp vào cùng một phương thức là không thể dự đoán trước.  

**Câu 25:** Về các hạn chế và cạm bẫy kỹ thuật trong Spring AOP:
- **a)** [Nhận biết] Mặc định trong Spring AOP, chỉ các phương thức có phạm vi truy cập `public` mới có thể được đánh chặn thông qua proxy.  
- **b)** [Thông hiểu] Hiện tượng "Self-invocation" (gọi nội bộ giữa hai phương thức trong cùng một bean) không kích hoạt được Aspect vì lời gọi không đi qua Proxy.  
- **c)** [Thông hiểu] Một lớp bean được đánh dấu từ khóa `final` hoặc phương thức mục tiêu là `final` có thể gây lỗi khi Spring sử dụng CGLIB proxy để tạo lớp con kế thừa.  
- **d)** [Vận dụng] Để giải quyết triệt để vấn đề Self-invocation mà không cần đổi kiến trúc, lập trình viên có thể chuyển từ Spring AOP dạng proxy sang sử dụng AspectJ đầy đủ (AspectJ byte-code weaving).  

---

## PHẦN III: TRẢ LỜI NGẮN (6 CÂU)
*Điền câu trả lời ngắn gọn, chính xác vào chỗ trống theo yêu cầu của từng câu.*

**Câu 26 [Nhận biết]:** Chú thích nào được đặt trên một lớp để chỉ báo cho Spring biết rằng lớp này đại diện cho một Khía cạnh (Aspect) trong ứng dụng?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 27 [Nhận biết]:** Chú thích nào bắt buộc phải đặt trên lớp cấu hình `@Configuration` để kích hoạt cơ chế tự động tạo Dynamic Proxy cho Spring AOP?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 28 [Nhận biết]:** Trong số các loại Advice của Spring AOP (`@Before`, `@After`, `@AfterReturning`, `@AfterThrowing`, `@Around`), loại Advice nào là mạnh mẽ nhất, cho phép chặn đứng, thay đổi tham số hoặc thay đổi giá trị trả về của phương thức mục tiêu?  
*(Quy định: Điền tên chú thích của loại advice đó bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 29 [Thông hiểu]:** Trong phương thức sử dụng Advice `@Around`, phương thức nào của đối tượng `ProceedingJoinPoint` bắt buộc phải được gọi để chuyển tiếp việc thực thi sang phương thức mục tiêu thực sự?  
*(Quy định: Điền tên phương thức kèm cặp ngoặc tròn, ví dụ: execute())*  
👉 **Trả lời:** ............................................................

**Câu 30 [Thông hiểu]:** Chú thích nào được sử dụng để thiết lập thứ tự ưu tiên thực thi giữa các Aspect can thiệp vào cùng một phương thức (giá trị số nguyên càng nhỏ thì độ ưu tiên chạy trước càng cao)?  
*(Quy định: Điền tên chú thích bắt đầu bằng ký tự `@`)*  
👉 **Trả lời:** ............................................................

**Câu 31 [Vận dụng]:** Để đánh chặn tất cả các phương thức được đánh dấu bằng chú thích `@ToLog`, cú pháp của biểu thức điểm cắt trong chú thích Advice `@Around` được viết như thế nào?  
*(Quy định: Điền biểu thức chuỗi bên trong ngoặc kép, ví dụ: "@annotation(...)")*  
👉 **Trả lời:** ............................................................

---

## 🔍 BẢNG ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT

<details>
<summary><b>BẤM VÀO ĐÂY ĐỂ XEM ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT</b></summary>

### BẢNG ĐÁP ÁN NHANH PHẦN I (MCQ)
| Câu | Đáp án | Mức độ | Câu | Đáp án | Mức độ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | **B** | Nhận biết | 11 | **C** | Thông hiểu |
| 2 | **C** | Nhận biết | 12 | **D** | Thông hiểu |
| 3 | **D** | Nhận biết | 13 | **B** | Thông hiểu |
| 4 | **B** | Nhận biết | 14 | **C** | Thông hiểu |
| 5 | **A** | Nhận biết | 15 | **A** | Thông hiểu |
| 6 | **C** | Nhận biết | 16 | **C** | Vận dụng |
| 7 | **D** | Nhận biết | 17 | **D** | Vận dụng |
| 8 | **A** | Thông hiểu | 18 | **B** | Vận dụng |
| 9 | **D** | Thông hiểu | 19 | **A** | Vận dụng |
| 10 | **A** | Thông hiểu | 20 | **B** | Vận dụng |

---

### BẢNG ĐÁP ÁN NHANH PHẦN II (ĐÚNG / SAI)
- **Câu 21:** a: **ĐÚNG** | b: **SAI** | c: **ĐÚNG** | d: **ĐÚNG**
- **Câu 22:** a: **ĐÚNG** | b: **SAI** | c: **ĐÚNG** | d: **ĐÚNG**
- **Câu 23:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **ĐÚNG**
- **Câu 24:** a: **ĐÚNG** | b: **ĐÚNG** | c: **SAI** | d: **ĐÚNG**
- **Câu 25:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **ĐÚNG**

---

### BẢNG ĐÁP ÁN NHANH PHẦN III (TRẢ LỜI NGẮN)
- **Câu 26:** `@Aspect`
- **Câu 27:** `@EnableAspectJAutoProxy`
- **Câu 28:** `@Around`
- **Câu 29:** `proceed()`
- **Câu 30:** `@Order`
- **Câu 31:** `@annotation(com.example.annotation.ToLog)`

---

### HƯỚNG DẪN GIẢI CHI TIẾT

#### PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN
- **Câu 1: Đáp án B**
  - *Căn cứ tài liệu*: Trang 131 mục "What is an aspect". AOP tách rời các mối quan tâm xuyên suốt (logging, security, caching, transactions) ra khỏi logic nghiệp vụ cốt lõi.
- **Câu 2: Đáp án C**
  - *Căn cứ tài liệu*: Trang 133 mục "Aspect concepts". Pointcut là biểu thức định nghĩa những phương thức nào sẽ bị đánh chặn.
- **Câu 3: Đáp án D**
  - *Căn cứ tài liệu*: Trang 133 mục "Aspect concepts". Advice đại diện cho thời điểm và hành động cụ thể cần thực hiện khi đánh chặn.
- **Câu 4: Đáp án B**
  - *Căn cứ tài liệu*: Trang 133. Trong Spring AOP (sử dụng dynamic proxy), Join point luôn luôn là sự kiện thực thi một phương thức.
- **Câu 5: Đáp án A**
  - *Căn cứ tài liệu*: Trang 137. `@EnableAspectJAutoProxy` kích hoạt việc tạo proxy tự động cho các aspect.
- **Câu 6: Đáp án C**
  - *Căn cứ tài liệu*: Trang 138. `ProceedingJoinPoint` cho phép điều khiển tiếp diễn phương thức trong Advice `@Around`.
- **Câu 7: Đáp án D**
  - *Căn cứ tài liệu*: Trang 154 mục "Aspect execution chain". Chú thích `@Order` quy định thứ tự ưu tiên của chuỗi aspect.
- **Câu 8: Đáp án A**
  - *Căn cứ tài liệu*: Trang 134-135. Cơ chế Dynamic Proxy bao bọc bean mục tiêu để đánh chặn các cuộc gọi từ bên ngoài.
- **Câu 9: Đáp án D**
  - *Căn cứ tài liệu*: `ProceedingJoinPoint` kế thừa từ `JoinPoint` và bổ sung phương thức `proceed()`.
- **Câu 10: Đáp án A**
  - *Căn cứ tài liệu*: Trang 141-143. Không gọi `proceed()` đồng nghĩa với việc chặn đứng phương thức mục tiêu không cho chạy.
- **Câu 11: Đáp án C**
  - *Căn cứ tài liệu*: `@AfterReturning` chỉ chạy khi phương thức trả về thành công không có ngoại lệ; `@After` tương đương khối `finally`.
- **Câu 12: Đáp án D**
  - *Căn cứ tài liệu*: Trang 139. Biểu thức AspectJ bao quát mọi phương thức trong mọi lớp thuộc gói được chỉ định.
- **Câu 13: Đáp án B**
  - *Căn cứ tài liệu*: Trang 149-150. Đánh chặn dựa trên annotation tùy chỉnh gắn trên phương thức giúp mã nguồn rõ ràng và linh hoạt.
- **Câu 14: Đáp án C**
  - *Căn cứ tài liệu*: Trang 154-157. Mô hình củ hành (onion model): Aspect có Order nhỏ hơn bọc ở ngoài cùng, vào trước ra sau.
- **Câu 15: Đáp án A**
  - *Căn cứ tài liệu*: Trang 135. Gọi nội bộ qua `this` diễn ra bên trong instance thực, không đi qua Proxy nên không bị đánh chặn.
- **Câu 16: Đáp án C**
  - *Căn cứ tài liệu*: `@Around` là loại advice duy nhất có thể đo thời gian cả trước và sau khi thực thi phương thức mục tiêu.
- **Câu 17: Đáp án D**
  - *Căn cứ tài liệu*: Trang 144-145. Ném trực tiếp ngoại lệ kiểm soát quyền mà không gọi `joinPoint.proceed()`.
- **Câu 18: Đáp án B**
  - *Căn cứ tài liệu*: Trang 145-146. Truyền mảng đối số mới vào `joinPoint.proceed(Object[] args)`.
- **Câu 19: Đáp án A**
  - *Căn cứ tài liệu*: Đây là mẫu triển khai Caching kinh điển bằng AOP, giảm tải cho cơ sở dữ liệu.
- **Câu 20: Đáp án B**
  - *Căn cứ tài liệu*: Trang 136. Lớp Aspect bắt buộc phải là một bean trong Spring Context (`@Component`).

---

#### PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI
- **Câu 21:**
  - a: **ĐÚNG** (Trang 131).
  - b: **SAI** (Spring AOP chỉ áp dụng được trên các bean do Spring quản lý - Trang 133).
  - c: **ĐÚNG** (Trang 134-135).
  - d: **ĐÚNG** (Trang 132: Lạm dụng AOP gây rối rắm luồng nghiệp vụ).
- **Câu 22:**
  - a: **ĐÚNG** (Trang 133).
  - b: **SAI** (`@AfterThrowing` chỉ nhận biết khi có ngoại lệ ném ra chứ không nuốt/ngăn chặn được ngoại lệ; chỉ có `@Around` mới bắt và triệt tiêu được ngoại lệ bằng khối try-catch).
  - c: **ĐÚNG** (Trang 138).
  - d: **ĐÚNG** (Aspect có thể ghi đè kết quả trả về của hàm gốc).
- **Câu 23:**
  - a: **ĐÚNG** (Trang 149).
  - b: **ĐÚNG** (Rõ ràng, không phụ thuộc vào đường dẫn gói).
  - c: **ĐÚNG** (Một phương thức có thể thỏa mãn nhiều pointcut).
  - d: **ĐÚNG** (Retention RUNTIME là bắt buộc để reflection và proxy đọc được lúc chạy).
- **Câu 24:**
  - a: **ĐÚNG** (Trang 154).
  - b: **ĐÚNG** (Order nhỏ hơn chạy trước khi gọi vào).
  - c: **SAI** (Mô hình củ hành: Order nhỏ hơn bọc ngoài nên hoàn tất sau cùng khi trả ra - Trang 157).
  - d: **ĐÚNG** (Trang 154).
- **Câu 25:**
  - a: **ĐÚNG** (Trang 135).
  - b: **ĐÚNG** (Self-invocation bypass proxy).
  - c: **ĐÚNG** (CGLIB tạo lớp con nên không thể kế thừa lớp/hàm `final`).
  - d: **ĐÚNG** (AspectJ can thiệp trực tiếp bytecode lúc compile/load time không dùng proxy).

---

#### PHẦN III: TRẢ LỜI NGẮN
- **Câu 26:** `@Aspect` (Trang 136).
- **Câu 27:** `@EnableAspectJAutoProxy` (Trang 137).
- **Câu 28:** `@Around` (Trang 138).
- **Câu 29:** `proceed()` (Trang 138).
- **Câu 30:** `@Order` (Trang 154).
- **Câu 31:** `@annotation(com.example.annotation.ToLog)` (Trang 149-150).

</details>
