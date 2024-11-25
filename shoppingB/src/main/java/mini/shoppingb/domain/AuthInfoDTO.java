package mini.shoppingb.domain;

import lombok.Data;
import org.apache.ibatis.type.Alias;

@Data
@Alias("auth")
public class AuthInfoDTO {
    String userId;
    String userPw;
    String userName;
    String userEmail;
    String grade;
    String department;
}