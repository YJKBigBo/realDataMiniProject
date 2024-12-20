package mini.shoppingb.command.employees;

import jakarta.validation.constraints.*;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;

@Data
public class EmployeeCommand {
    String empNum;
    @NotEmpty(message = "아이디를 입력해주세요. ")
    @Size(min = 8, max = 12)
    String empId;
//    @Pattern(regexp = "^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-+]).{8,}$",
//            message = "영문자와 숫자 그리고 특수문자가 포함된 8글자 이상")
    String empPw;
    @NotBlank(message = "이름을 입력하여 주세요.")
    String empName;
    @NotBlank(message = "주소를 입력하여 주세요.")
    String empAddr;
    String empAddrDetail;
    Integer empPost;
    @NotBlank(message = "연락처을 입력하여 주세요.")
    String empPhone;
    @Email(message = "형식에 맞지 않습니다.")
    @NotEmpty(message = "이메일을 입력하여 주세요.")
    String empEmail;
    @NotEmpty(message = "주민번호를 입력하여 주세요.")
    String empJumin;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    Date empHireDate;
    String empDepartment;
    MultipartFile empImage;
}

