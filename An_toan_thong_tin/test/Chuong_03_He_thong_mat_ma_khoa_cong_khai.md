# 🎯 BỘ ĐỀ LUYỆN TẬP TOÀN DIỆN: CHƯƠNG 3 - HỆ THỐNG MẬT MÃ KHÓA CÔNG KHAI
*(Tài liệu: Giáo trình Cơ sở An toàn Thông tin - PGS. TS. Nguyễn Khanh Văn, HUST)*

> **Cấu trúc bộ đề**:  
> - **Phần I**: 20 câu Trắc nghiệm 4 lựa chọn (Đồng nhất độ dài các phương án, phân bổ ngẫu nhiên A-B-C-D, triệt tiêu bẫy câu dài nhất).  
> - **Phần II**: 5 câu Trắc nghiệm Đúng/Sai (mỗi câu gồm 4 ý nhỏ a, b, c, d = 20 mệnh đề).  
> - **Phần III**: 6 câu Trắc nghiệm Trả lời ngắn.  
> **Ma trận phân bổ**: 40% Nhận biết - 30% Thông hiểu - 30% Vận dụng.  
> **Thời gian làm bài khuyến nghị**: 50 phút.  

---

## PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN (20 CÂU)
*Chọn duy nhất 01 đáp án đúng trong các phương án A, B, C, D.*

**Câu 1 [Nhận biết]:** Bài báo khoa học lịch sử "New Directions in Cryptography" của Whitfield Diffie và Martin Hellman khai sinh ra trường phái Mật mã khóa công khai (PKC) được công bố vào năm nào?

A. Năm 1976  
B. Năm 1949  
C. Năm 1982  
D. Năm 1991  

**Câu 2 [Nhận biết]:** Trong một mạng truyền thông gồm n người sử dụng, tổng số lượng khóa mật mã cần phải tạo lập và quản lý khi áp dụng hệ thống mật mã khóa công khai (PKC) là bao nhiêu?

A. n(n - 1)/2 khóa bí mật  
B. n² khóa công khai  
C. n khóa dùng chung  
D. 2n khóa bất đối xứng  

**Câu 3 [Nhận biết]:** Điều kiện toán học bắt buộc để một dãy số nguyên dương S = (s₁, s₂, ..., sₙ) được định nghĩa là một vector siêu tăng (Superincreasing Sequence) là gì?

A. Mỗi phần tử luôn lớn hơn trung bình cộng của toàn bộ các phần tử đứng trước nó  
B. Mỗi phần tử luôn lớn hơn tổng của tất cả các phần tử đứng phía trước nó  
C. Mỗi phần tử luôn bằng tích của phần tử đứng liền trước với một hằng số nguyên dương  
D. Mỗi phần tử luôn là một số nguyên tố phân biệt có giá trị lớn hơn phần tử đứng trước  

**Câu 4 [Nhận biết]:** Khi xây dựng hệ mật mã Merkle-Hellman Trapdoor Knapsack, giá trị của mô-đun đồng dư m bắt buộc phải thỏa mãn ràng buộc toán học nào sau đây?

A. Phải là một số nguyên chẵn có giá trị nhỏ hơn phần tử s₁  
B. Phải nhỏ hơn giá trị của phần tử siêu tăng lớn nhất sₙ  
C. Phải là ước số chung lớn nhất của tất cả các phần tử trong vector  
D. Phải lớn hơn tổng giá trị của toàn bộ các phần tử trong vector siêu tăng  

**Câu 5 [Nhận biết]:** Nền tảng an toàn toán học của hệ thống mật mã khóa công khai kinh điển RSA (Rivest-Shamir-Adleman) dựa trên độ khó của bài toán nào?

A. Bài toán phân tích một số nguyên dương hợp số cực lớn thành tích các thừa số nguyên tố  
B. Bài toán tìm đường đi Euler và chu trình Hamilton trong lý thuyết đồ thị mở rộng  
C. Bài toán giải hệ phương trình nghiệm nguyên Diophantus bậc ba trên trường số hữu tỉ  
D. Bài toán tính logarit rời rạc trên trường số nguyên hữu hạn modulo một số nguyên tố  

**Câu 6 [Nhận biết]:** Thuật toán kiểm tra tính nguyên tố xác suất chuẩn công nghiệp được sử dụng phổ biến nhất để sinh các số nguyên tố lớn trong RSA là thuật toán nào?

A. Thuật toán sàng lọc số nguyên tố kinh điển Eratosthenes  
B. Thuật toán kiểm tra tính nguyên tố xác suất Miller-Rabin  
C. Thuật toán nhân ma trận nhanh với độ phức tạp giảm Strassen  
D. Thuật toán tìm kiếm theo chiều sâu đồ thị kết hợp quay lui  

**Câu 7 [Nhận biết]:** Hệ mật mã khóa công khai Rabin sở hữu ưu điểm vượt trội nào sau đây so với hệ RSA về mặt cơ sở lý thuyết toán học?

A. Không yêu cầu sử dụng bất kỳ số nguyên tố nào trong quá trình khởi tạo tham số  
B. Tốc độ thực hiện phép giải mã nhanh gấp hàng nghìn lần so với mọi hệ mật mã đối xứng  
C. Độ an toàn được chứng minh là tương đương hoàn toàn với bài toán phân tích thừa số nguyên tố  
D. Bản mã sinh ra luôn có dung lượng nhỏ hơn một nửa so với dung lượng của bản rõ gốc  

**Câu 8 [Nhận biết]:** Trong hệ mật mã khóa công khai ElGamal, bản mã C được truyền đi trên mạng có đặc điểm cấu trúc và dung lượng như thế nào so với bản rõ M?

A. Là một số nguyên duy nhất có kích thước nhỏ hơn bản rõ gốc  
B. Là một cặp giá trị (a, b) và có dung lượng nở ra gấp đôi bản rõ  
C. Là một chuỗi nhị phân có cùng kích thước bit chính xác với bản rõ  
D. Là một ma trận vuông bậc hai chứa các hệ số nguyên tố cùng nhau  

**Câu 9 [Thông hiểu]:** Bản chất then chốt giúp người nhận có thể giải mã bản tin đóng thùng trong hệ Merkle-Hellman với thời gian tuyến tính O(n) là gì?

A. Dùng nghịch đảo modular của nhân tử để biến bài toán đóng thùng ngụy trang về bài toán siêu tăng dễ giải  
B. Sử dụng thuật toán vét cạn phân tán trên siêu máy tính để thử toàn bộ 2ⁿ tổ hợp nhị phân có thể có  
C. Áp dụng phép khai triển chuỗi Taylor để xấp xỉ tuyến tính các bit nhị phân trong thông điệp gốc ban đầu  
D. Tận dụng định lý phần dư Trung Hoa để phân tách vector công khai thành các số dư nguyên tố độc lập  

**Câu 10 [Thông hiểu]:** Trong hệ RSA, nếu kẻ thù chặn được bản rõ M và bản mã C = Mᵉ mod n, tại sao hắn vẫn không thể suy ra ngay được khóa bí mật d?

A. Vì hệ thống RSA tự động vô hiệu hóa khóa giải mã d ngay sau khi thực hiện xong phiên truyền tin  
B. Vì khóa bí mật d không có bất kỳ mối quan hệ số học đồng dư nào đối với số mũ công khai e  
C. Vì số mũ giải mã d luôn bị che giấu bởi một khóa phiên đối xứng ngẫu nhiên độc lập trong phần cứng  
D. Vì việc tìm d từ C đòi hỏi phải giải bài toán logarit rời rạc d = log_C(M) mod n trên vành hợp số vô cùng khó khăn  

**Câu 11 [Thông hiểu]:** Mục đích căn bản của việc ứng dụng Định lý phần dư Trung Hoa (CRT) trong pha giải mã RSA tại phía người nhận là gì?

A. Giúp che giấu hoàn toàn các số nguyên tố bí mật p và q trước các cuộc tấn công kênh kề phần cứng  
B. Tăng kích thước bản rõ lên gấp đôi nhằm nâng cao khả năng chống lại các phân tích thám mã thống kê  
C. Tăng tốc độ giải mã lên khoảng 4 lần nhờ thực hiện phép lũy thừa trên các mô-đun nhỏ p và q thay vì n  
D. Cho phép người gửi mã hóa thông điệp mà không cần phải nắm giữ mô-đun công khai n của người nhận  

**Câu 12 [Thông hiểu]:** Cuộc tấn công mô-đun chung (Common Modulus Attack) vào hệ RSA có thể diễn ra thành công trong điều kiện cụ thể nào sau đây?

A. Khi cùng một bản rõ được gửi tới hai người dùng có chung modulo n nhưng các số mũ e₁, e₂ nguyên tố cùng nhau  
B. Khi hai người dùng vô tình lựa chọn hai số nguyên tố p và q có độ dài bit chênh lệch nhau trên 1000 bit  
C. Khi kẻ tấn công sở hữu máy tính lượng tử có khả năng thực thi thuật toán phân tích số Shor trong thời gian thực  
D. Khi số mũ giải mã bí mật d được lựa chọn có giá trị cực lớn vượt quá giới hạn bình phương của mô-đun n  

**Câu 13 [Thông hiểu]:** Hạn chế lớn nhất của hệ mật mã Rabin khiến nó ít khi được lựa chọn cho việc mã hóa dữ liệu trực tiếp trong thực tế là gì?

A. Khâu thiết lập tham số ban đầu đòi hỏi phải tìm kiếm đồng thời ít nhất bốn số nguyên tố cực lớn  
B. Bản mã sau khi xử lý luôn có kích thước nở rộng gấp bốn lần so với kích thước của văn bản rõ ban đầu  
C. Quá trình giải mã là bài toán khai căn bậc hai đồng dư cho ra 4 nghiệm phân biệt gây ra sự nhập nhằng  
D. Thuật toán có cấu trúc hoàn toàn đối xứng nên không thể hỗ trợ chức năng tạo lập chữ ký điện tử  

**Câu 14 [Thông hiểu]:** Đặc tính "Mã hóa xác suất" (Probabilistic Encryption) của hệ mật mã ElGamal mang lại ưu thế bảo mật vượt trội nào sau đây?

A. Cho phép khôi phục chính xác toàn vẹn văn bản rõ ngay cả khi một nửa bản mã bị sai hỏng khi truyền tải  
B. Giúp thuật toán đạt tốc độ xử lý nhanh hơn hệ mã RSA gấp nhiều lần trên các thiết bị nhúng hạn chế tài nguyên  
C. Tự động loại bỏ hoàn toàn nhu cầu sử dụng hàm băm mật mã khi kết hợp tạo lập chữ ký điện tử số hóa  
D. Cùng một bản rõ nếu mã hóa nhiều lần với các số ngẫu nhiên k khác nhau sẽ tạo ra các bản mã hoàn toàn khác nhau  

**Câu 15 [Vận dụng]:** Cho hai số nguyên tố p = 5 và q = 11 trong hệ mật mã RSA. Số mũ giải mã bí mật d tương ứng với số mũ công khai e = 3 có giá trị bằng bao nhiêu?

A. d = 7  
B. d = 27  
C. d = 13  
D. d = 37  

**Câu 16 [Vận dụng]:** Cho hệ mật Merkle-Hellman với vector siêu tăng S = (1, 3, 7, 15), mô-đun m = 31, nhân tử ω = 7 và ω⁻¹ = 9 (mod 31). Khi người nhận thu được bản mã C = 54, tổng đích C' sau khi lột bỏ lớp ngụy trang là bao nhiêu?

A. C' = 12  
B. C' = 21  
C. C' = 25  
D. C' = 17  

**Câu 17 [Vận dụng]:** Trong hệ RSA với n = 55 (p = 5, q = 11), số lượng các bản rõ bị "phơi mặt" (điểm cố định không bị thay đổi sau khi mã hóa thỏa mãn Mᵉ ≡ M mod n) tối thiểu luôn tồn tại với mọi khóa là bao nhiêu?

A. 9 bản rõ  
B. 1 bản rõ  
C. 4 bản rõ  
D. 16 bản rõ  

**Câu 18 [Vận dụng]:** Cho hệ mật mã RSA với các tham số n = 33 và số mũ mã hóa e = 3. Bản rõ có giá trị M = 4 sẽ được mã hóa thành bản mã C có giá trị bằng bao nhiêu?

A. C = 16  
B. C = 25  
C. C = 31  
D. C = 19  

**Câu 19 [Vận dụng]:** Kẻ tấn công chặn được hai bản mã C₁ = 8 và C₂ = 22 của cùng bản rõ M gửi cho hai khóa RSA có cùng n = 35, số mũ e₁ = 3, e₂ = 5. Biết 2 × 3 + (-1) × 5 = 1. Giá trị của C₂⁻¹ mod 35 cần tìm là bao nhiêu?

A. 13  
B. 17  
C. 23  
D. 8  

**Câu 20 [Vận dụng]:** Trong hệ ElGamal với số nguyên tố p = 11, phần tử sinh g = 2, khóa bí mật của Alice là x = 3. Giá trị khóa công khai y của Alice được tính toán bằng bao nhiêu?

A. y = 6  
B. y = 7  
C. y = 8  
D. y = 9  

---

## PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI (5 CÂU - 20 MỆNH ĐỀ)
*Đọc từng đoạn ngữ cảnh sau và xác định tính ĐÚNG hoặc SAI của từng mệnh đề a, b, c, d.*

**Câu 21:** Về bản chất lý thuyết và nguyên lý vận hành của Mật mã khóa công khai (PKC):
- **a)** [Nhận biết] Trường phái PKC ra đời năm 1976 bởi Whitfield Diffie và Martin Hellman nhằm giải quyết căn cơ bài toán phân phối khóa bí mật và thiết lập chữ ký số chống chối bỏ.  
- **b)** [Thông hiểu] Trong hệ PKC chuẩn mực, khóa bí mật dùng để giải mã có thể dễ dàng suy ra từ khóa công khai bằng các thuật toán biến đổi tuyến tính đơn giản.  
- **c)** [Thông hiểu] Hàm một chiều có cửa bẫy (Trapdoor One-Way Function) là nền tảng của PKC: phép tính xuôi luôn dễ dàng, nhưng phép tính ngược bất khả thi nếu thiếu thông tin bí mật cửa bẫy.  
- **d)** [Vận dụng] Trong các giao thức thực tế như TLS/HTTPS, người ta thường dùng PKC để mã hóa trực tiếp toàn bộ dữ liệu đa phương tiện dung lượng lớn thay cho các hệ mật mã đối xứng.  

**Câu 22:** Về hệ mật mã Merkle-Hellman Trapdoor Knapsack và cơ chế toán học liên quan:
- **a)** [Nhận biết] Bài toán xếp ba lô tổng con tổng quát (Subset Sum Problem) được chứng minh là bài toán thuộc lớp NP-đầy đủ (NP-Complete).  
- **b)** [Thông hiểu] Khi vector mang là một dãy siêu tăng, bài toán xếp ba lô trở nên dễ giải trong thời gian tuyến tính O(n) nhờ áp dụng giải thuật tham lam (Greedy algorithm).  
- **c)** [Thông hiểu] Phép ngụy trang vector siêu tăng S thành vector công khai A được thực hiện thông qua phép nhân modulo: aᵢ = (ω × sᵢ) mod m với m > ∑ sᵢ và gcd(ω, m) = 1.  
- **d)** [Vận dụng] Cho đến nay, hệ Merkle-Hellman Knapsack vẫn được xem là hệ mật mã tuyệt đối an toàn và chưa từng có bất kỳ phương pháp thám mã thực tế nào bẻ gãy được.  

**Câu 23:** Về hệ thống mật mã RSA, nguyên lý toán học và tính đúng đắn:
- **a)** [Nhận biết] Độ an toàn của RSA dựa trực tiếp trên độ khó tính toán của bài toán phân tích một số nguyên dương hợp số cực lớn thành tích của hai số nguyên tố.  
- **b)** [Thông hiểu] Số mũ mã hóa công khai e trong RSA có thể chọn tùy ý một số nguyên bất kỳ mà không cần phải thỏa mãn điều kiện nguyên tố cùng nhau với giá trị φ(n).  
- **c)** [Thông hiểu] Thuật toán giải mã RSA luôn đảm bảo (Mᵉ)ᵈ ≡ M (mod n) đúng đắn với mọi bản rõ M thuộc vành Zₙ, kể cả trong trường hợp bản rõ không nguyên tố cùng nhau với n (gcd(M, n) ≠ 1).  
- **d)** [Vận dụng] Khi sử dụng RSA để tạo lập chữ ký điện tử, người gửi sẽ mã hóa thông điệp bằng khóa công khai của mình, và người nhận sẽ xác minh bằng khóa bí mật của người gửi.  

**Câu 24:** Về các điểm yếu tiềm ẩn, phương thức thám mã và cơ chế gia cố an toàn cho RSA:
- **a)** [Nhận biết] Với mọi cặp khóa RSA bất kỳ, luôn tồn tại ít nhất 9 bản rõ bị "phơi mặt" (điểm cố định) thỏa mãn đẳng thức mã hóa giữ nguyên giá trị: Mᵉ ≡ M (mod n).  
- **b)** [Thông hiểu] Việc cho phép nhiều người dùng trong cùng một tổ chức dùng chung một mô-đun n nhưng cấp các số mũ khác nhau sẽ tạo ra lỗ hổng trước tấn công mô-đun chung (Common Modulus Attack).  
- **c)** [Thông hiểu] Tấn công Wiener chứng minh rằng nếu số mũ giải mã d được chọn quá nhỏ (d < (1/3) × n^(1/4)), khóa bí mật d có thể bị kẻ thù tìm ra nhanh chóng thông qua liên phân số.  
- **d)** [Vận dụng] Để triệt tiêu tính chất đồng cấu nhân nguy hiểm của RSA nguyên thủy và chống lại tấn công bản mã được chọn (CCA), người ta bắt buộc phải áp dụng cơ chế đệm chuẩn OAEP.  

**Câu 25:** Về các hệ thống mật mã khóa công khai Rabin và ElGamal:
- **a)** [Nhận biết] Hệ mật mã Rabin có hàm mã hóa cực kỳ gọn nhẹ và tốc độ cao thông qua phép tính bình phương modular duy nhất: C = M² (mod n).  
- **b)** [Thông hiểu] Quá trình giải mã của hệ Rabin luôn trả về duy nhất một bản rõ duy nhất nên không đòi hỏi người gửi phải đính kèm thêm dấu vết nhận dạng vào dữ liệu gốc.  
- **c)** [Thông hiểu] Hệ mật mã ElGamal được xây dựng dựa trên nền tảng độ khó toán học của bài toán Logarit rời rạc (DLP) trên nhóm số học hữu hạn.  
- **d)** [Vận dụng] Trong hệ ElGamal, số ngẫu nhiên tạm thời k (ephemeral key) có thể được lưu trữ và tái sử dụng cho nhiều bản tin khác nhau mà không làm suy giảm tính an toàn của hệ thống.  

---

## PHẦN III: TRẢ LỜI NGẮN (6 CÂU)
*Điền câu trả lời ngắn gọn, chính xác vào chỗ trống theo yêu cầu của từng câu.*

**Câu 26 [Nhận biết]:** Thuật ngữ chỉ lớp hàm toán học có đặc tính tính xuôi dễ dàng trong thời gian đa thức, nhưng bất khả thi khi tính ngược nếu không nắm giữ một thông tin bí mật đặc biệt có tên là gì?  
*(Quy định: Điền thuật ngữ tiếng Việt hoặc tiếng Anh gồm 3 đến 8 từ)*  
👉 **Trả lời:** ............................................................

**Câu 27 [Nhận biết]:** Tên thuật toán số học đồng dư được sử dụng để giải phương trình đồng dư a × x ≡ 1 (mod m) nhằm tìm phần tử nghịch đảo modular trong pha sinh khóa RSA và Merkle-Hellman là gì?  
*(Quy định: Điền tên thuật toán tiếng Việt hoặc tiếng Anh)*  
👉 **Trả lời:** ............................................................

**Câu 28 [Nhận biết]:** Tên của hệ mật mã khóa công khai có độ an toàn được chứng minh là tương đương hoàn toàn với bài toán phân tích thừa số nguyên tố nhưng phép giải mã lại sinh ra 4 nghiệm phân biệt là gì?  
*(Quy định: Điền tên nhà khoa học hoặc tên hệ mật)*  
👉 **Trả lời:** ............................................................

**Câu 29 [Thông hiểu]:** Thuật ngữ chỉ đặc tính mã hóa của hệ ElGamal khi cùng một bản rõ nhưng mỗi lần mã hóa với các số ngẫu nhiên tạm thời khác nhau lại cho ra các bản mã hoàn toàn khác nhau là gì?  
*(Quy định: Điền thuật ngữ gồm 2 đến 4 từ)*  
👉 **Trả lời:** ............................................................

**Câu 30 [Thông hiểu]:** Cơ chế đệm ngẫu nhiên chuẩn an toàn bắt buộc phải áp dụng vào bản rõ trước khi đưa vào hàm RSA để chống tấn công bản mã được chọn (CCA) và triệt tiêu tính đồng cấu nhân có tên viết tắt là gì?  
*(Quy định: Điền từ viết tắt chuẩn gồm 4 chữ cái in hoa)*  
👉 **Trả lời:** ............................................................

**Câu 31 [Vận dụng]:** Cho hai số nguyên tố p = 7 và q = 11 trong hệ mật mã RSA với mô-đun n = 77. Giá trị của hàm số Euler φ(n) trong trường hợp này bằng bao nhiêu?  
*(Quy định: Điền một số nguyên duy nhất)*  
👉 **Trả lời:** ............................................................

---

## 🔍 BẢNG ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT

<details>
<summary><b>BẤM VÀO ĐÂY ĐỂ XEM ĐÁP ÁN VÀ LỜI GIẢI CHI TIẾT</b></summary>

### BẢNG ĐÁP ÁN NHANH PHẦN I (MCQ)
*Tỷ lệ phân bổ đáp án: 5 A (25%) – 5 B (25%) – 5 C (25%) – 5 D (25%)*

| Câu | Đáp án | Mức độ | Câu | Đáp án | Mức độ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | **A** | Nhận biết | 11 | **C** | Thông hiểu |
| 2 | **D** | Nhận biết | 12 | **A** | Thông hiểu |
| 3 | **B** | Nhận biết | 13 | **C** | Thông hiểu |
| 4 | **D** | Nhận biết | 14 | **D** | Thông hiểu |
| 5 | **A** | Nhận biết | 15 | **B** | Vận dụng |
| 6 | **B** | Nhận biết | 16 | **B** | Vận dụng |
| 7 | **C** | Nhận biết | 17 | **A** | Vận dụng |
| 8 | **B** | Nhận biết | 18 | **C** | Vận dụng |
| 9 | **A** | Thông hiểu | 19 | **D** | Vận dụng |
| 10 | **D** | Thông hiểu | 20 | **C** | Vận dụng |

---

### BẢNG ĐÁP ÁN NHANH PHẦN II (ĐÚNG / SAI)
- **Câu 21:** a: **ĐÚNG** | b: **SAI** | c: **ĐÚNG** | d: **SAI**
- **Câu 22:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **SAI**
- **Câu 23:** a: **ĐÚNG** | b: **SAI** | c: **ĐÚNG** | d: **SAI**
- **Câu 24:** a: **ĐÚNG** | b: **ĐÚNG** | c: **ĐÚNG** | d: **ĐÚNG**
- **Câu 25:** a: **ĐÚNG** | b: **SAI** | c: **ĐÚNG** | d: **SAI**

---

### BẢNG ĐÁP ÁN NHANH PHẦN III (TRẢ LỜI NGẮN)
- **Câu 26:** `Hàm một chiều có cửa bẫy` (hoặc `Trapdoor One-Way Function`, `TOWF`)
- **Câu 27:** `Thuật toán Euclid mở rộng` (hoặc `Extended Euclidean Algorithm`, `GCD mở rộng`)
- **Câu 28:** `Rabin` (hoặc `Hệ mật mã Rabin`, `Rabin cryptosystem`)
- **Câu 29:** `Mã hóa xác suất` (hoặc `Probabilistic Encryption`)
- **Câu 30:** `OAEP` (hoặc `Optimal Asymmetric Encryption Padding`, `PKCS#1 v2.1 OAEP`)
- **Câu 31:** `60`

---

### HƯỚNG DẪN GIẢI CHI TIẾT

#### PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN
- **Câu 1: Đáp án A**
  - *Căn cứ tài liệu*: Giáo trình Cơ sở ATTT, Trang 71 mục 3.1. Bài báo lịch sử "New Directions in Cryptography" của Diffie và Hellman ra đời năm 1976 đánh dấu sự xuất hiện của hệ mật mã khóa công khai.
  - *Phân tích bẫy*: Năm 1949 là mốc Claude Shannon xuất bản lý thuyết hệ thống bí mật; năm 1982 là mốc Adi Shamir phá vỡ hệ Knapsack.
- **Câu 2: Đáp án D**
  - *Căn cứ tài liệu*: Trang 71-72. Trong hệ mật mã khóa công khai, mỗi người chỉ cần duy trì một cặp khóa (1 công khai + 1 bí mật), do đó với n người dùng toàn mạng chỉ cần 2n khóa, giảm vượt trội so với n(n - 1)/2 khóa của hệ mật đối xứng.
- **Câu 3: Đáp án B**
  - *Căn cứ tài liệu*: Trang 74 mục 3.2.1. Vector siêu tăng là vector mà mỗi phần tử đều thỏa mãn điều kiện lớn hơn tổng của tất cả các phần tử đứng trước nó: sᵢ > ∑_{j=1}^{i-1} sⱼ.
- **Câu 4: Đáp án D**
  - *Căn cứ tài liệu*: Trang 76 mục 3.2.2. Alice phải chọn modulo đồng dư m thỏa mãn m > ∑ a'ᵢ, nhằm đảm bảo khi nhân ngược với ω⁻¹, tổng các phần tử không bị tràn modulo m.
- **Câu 5: Đáp án A**
  - *Căn cứ tài liệu*: Trang 79 mục 3.3.1. Độ an toàn của RSA dựa trực tiếp trên bài toán phân tích thừa số nguyên tố lớn (n = p × q). Phép nhân hai số nguyên tố rất dễ, nhưng phân tích ngược lại cực kỳ khó.
- **Câu 6: Đáp án B**
  - *Căn cứ tài liệu*: Trang 83-84 mục "Vấn đề sinh số nguyên tố lớn". Thuật toán Miller-Rabin là thuật toán kiểm tra xác suất tiêu chuẩn công nghiệp với xác suất lỗi giảm theo cấp số nhân ≤ (1/4)ᵏ.
- **Câu 7: Đáp án C**
  - *Căn cứ tài liệu*: Trang 88 mục 3.4.1. Hệ Rabin có ưu điểm là độ an toàn được chứng minh hoàn toàn tương đương với bài toán phân tích thừa số nguyên tố (Provable Security), trong khi RSA chưa được chứng minh tương đương toán học tuyệt đối.
- **Câu 8: Đáp án B**
  - *Căn cứ tài liệu*: Trang 88-89 mục 3.4.2. Bản mã ElGamal gồm cặp Y = (a, b) với a = gᵏ mod p và b = (yᵏ × X) mod p, do đó kích thước bản mã nở ra gấp đôi bản rõ gốc.
- **Câu 9: Đáp án A**
  - *Căn cứ tài liệu*: Trang 76 mục "Giải mã Merkle-Hellman". Phép nhân bản mã với ω⁻¹ mod m lột bỏ lớp ngụy trang và đưa bài toán về bài toán đóng thùng siêu tăng, giải được cực nhanh bằng thuật toán tham lam.
- **Câu 10: Đáp án D**
  - *Căn cứ tài liệu*: Trang 86 mục 3.3.6 "Đánh giá về an toàn của RSA". Kẻ thù biết M và C, để tìm d phải giải phương trình M ≡ Cᵈ mod n, tức là tính logarit rời rạc d = log_C(M) trên vành modulo hợp số lớn n, bài toán này không có thuật toán giải nhanh.
- **Câu 11: Đáp án C**
  - *Căn cứ tài liệu*: Trang 85 mục 3.3.4. Áp dụng CRT giúp thực hiện phép tính lũy thừa trên các mô-đun p và q có độ dài bit chỉ bằng 1/2 của n, giúp giảm khối lượng tính toán và tăng tốc độ giải mã lên khoảng 4 lần.
- **Câu 12: Đáp án A**
  - *Căn cứ tài liệu*: Trang 86-87 mục 1 "Common modulus attack". Nếu hai người dùng có chung modulo n mà các số mũ e₁, e₂ nguyên tố cùng nhau (gcd(e₁, e₂) = 1), kẻ thù chặn được 2 bản mã của cùng một bản rõ sẽ dùng thuật toán Euclid mở rộng tính a × e₁ + b × e₂ = 1 để khôi phục trực tiếp bản rõ M.
- **Câu 13: Đáp án C**
  - *Căn cứ tài liệu*: Trang 88 mục 3.4.1. Phép giải mã của Rabin là bài toán khai căn bậc hai modulo hợp số n, sinh ra đúng 4 nghiệm phân biệt, gây ra sự nhập nhằng trong việc xác định đâu là văn bản rõ ban đầu.
- **Câu 14: Đáp án D**
  - *Căn cứ tài liệu*: Trang 88-89 mục 3.4.2. Do mỗi lần mã hóa, người gửi chọn một số ngẫu nhiên k mới, cùng một thông điệp M sẽ cho ra các cặp bản mã (a, b) hoàn toàn khác nhau, chống lại các cuộc tấn công kiểm tra bản rõ đã biết.
- **Câu 15: Đáp án B**
  - *Căn cứ tài liệu*: Trang 80 mục 3.3.2. Ta có φ(n) = (5-1)(11-1) = 4 × 10 = 40. Tìm d sao cho 3 × d ≡ 1 (mod 40). Vì 3 × 27 = 81 = 2 × 40 + 1 ≡ 1 (mod 40), nên d = 27.
- **Câu 16: Đáp án B**
  - *Căn cứ tài liệu*: Trang 76 mục 3.2.2. Tính C' = (C × ω⁻¹) mod m = (54 × 9) mod 31 = 486 mod 31. Ta có 486 = 15 × 31 + 21 suy ra C' = 21.
- **Câu 17: Đáp án A**
  - *Căn cứ tài liệu*: Trang 85 mục 3.3.5. Đối với bất kỳ khóa RSA nào, luôn tồn tại tối thiểu 9 bản rõ bị "phơi mặt" (không đổi sau khi mã hóa), ví dụ M = 0, 1, n-1.
- **Câu 18: Đáp án C**
  - *Căn cứ tài liệu*: Trang 80 mục 3.3.2. Mã hóa: C = Mᵉ mod n = 4³ mod 33 = 64 mod 33 = 31.
- **Câu 19: Đáp án D**
  - *Căn cứ tài liệu*: Trang 87 mục "Common modulus attack". Tìm x sao cho 22 × x ≡ 1 (mod 35). Ta có 22 × 8 = 176 = 5 × 35 + 1 ≡ 1 (mod 35), do đó C₂⁻¹ = 8.
- **Câu 20: Đáp án C**
  - *Căn cứ tài liệu*: Trang 88 mục 3.4.2. Khóa công khai y = gˣ mod p = 2³ mod 11 = 8 mod 11 = 8.

---

#### PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI
- **Câu 21:**
  - a: **ĐÚNG** (Trang 71: Diffie & Hellman đề xuất năm 1976).
  - b: **SAI** (Khóa bí mật không thể suy ra từ khóa công khai trong thời gian thực, đây là nguyên lý an toàn cốt tử của PKC).
  - c: **ĐÚNG** (Trang 73: Định nghĩa hàm một chiều có cửa bẫy).
  - d: **SAI** (PKC xử lý rất chậm, chỉ dùng để trao đổi khóa phiên đối xứng và xác thực chữ ký; dữ liệu lớn được mã hóa bằng thuật toán đối xứng như AES).
- **Câu 22:**
  - a: **ĐÚNG** (Trang 74: Subset Sum là bài toán NP-đầy đủ).
  - b: **ĐÚNG** (Trang 74-75: Dãy siêu tăng giải được trong O(n) bằng thuật toán tham lam).
  - c: **ĐÚNG** (Trang 76: Công thức ngụy trang của Merkle-Hellman).
  - d: **SAI** (Trang 77 mục 3.2.3: Hệ Knapsack đã bị Shamir và Brickell phá vỡ vào năm 1982-1984 bằng thuật toán mạng lưới LLL).
- **Câu 23:**
  - a: **ĐÚNG** (Trang 79: Dựa trên bài toán phân tích thừa số nguyên tố lớn).
  - b: **SAI** (Trang 80: Bắt buộc gcd(e, φ(n)) = 1 để tồn tại phần tử nghịch đảo d).
  - c: **ĐÚNG** (Trang 91 Bài tập 7: RSA luôn đúng với mọi M thuộc Zₙ kể cả khi gcd(M, n) ≠ 1).
  - d: **SAI** (Tạo chữ ký phải dùng khóa BÍ MẬT của người gửi, kiểm tra chữ ký dùng khóa CÔNG KHAI của người gửi).
- **Câu 24:**
  - a: **ĐÚNG** (Trang 85: Luôn tồn tại ít nhất 9 điểm cố định không che giấu được).
  - b: **ĐÚNG** (Trang 86-87: Lỗ hổng Common Modulus Attack).
  - c: **ĐÚNG** (Trang 87 mục 3: Định lý Wiener về tấn công số mũ giải mã nhỏ d < (1/3) × n^(1/4)).
  - d: **ĐÚNG** (Chuẩn đệm OAEP bắt buộc để chống CCA và triệt tiêu tính chất đồng cấu nhân của RSA).
- **Câu 25:**
  - a: **ĐÚNG** (Trang 87 mục 3.4.1: Mã hóa Rabin chỉ là phép tính C = M² mod n).
  - b: **SAI** (Trang 88: Phép giải mã cho 4 nghiệm phân biệt, bắt buộc phải nối thêm dấu vết vào bản rõ để nhận dạng).
  - c: **ĐÚNG** (Trang 88 mục 3.4.2: Dựa trên bài toán Logarit rời rạc).
  - d: **SAI** (Tái sử dụng k cho hai thông điệp khác nhau sẽ làm lộ bản rõ ngay lập tức qua phép chia modular).

---

#### PHẦN III: TRẢ LỜI NGẮN
- **Câu 26:** `Hàm một chiều có cửa bẫy` (hoặc `Trapdoor One-Way Function`, `TOWF`) (Trang 73).
- **Câu 27:** `Thuật toán Euclid mở rộng` (hoặc `Extended Euclidean Algorithm`, `GCD mở rộng`) (Trang 77-78).
- **Câu 28:** `Rabin` (hoặc `Hệ mật mã Rabin`, `Rabin cryptosystem`) (Trang 87-88).
- **Câu 29:** `Mã hóa xác suất` (hoặc `Probabilistic Encryption`) (Trang 88-89).
- **Câu 30:** `OAEP` (hoặc `Optimal Asymmetric Encryption Padding`, `PKCS#1 v2.1 OAEP`) (Trang 86).
- **Câu 31:** `60` (Vì φ(77) = (7-1)(11-1) = 6 × 10 = 60).

</details>
