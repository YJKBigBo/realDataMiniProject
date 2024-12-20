package mini.shoppingb.domain.all;

import lombok.Data;
import org.apache.ibatis.type.Alias;

@Data
@Alias("auth")
public class AuthInfoDTO {
    String userNum;
    String userId;
    String userPw;
    String userName;
    String userEmail;
    String grade;
    String department;
}