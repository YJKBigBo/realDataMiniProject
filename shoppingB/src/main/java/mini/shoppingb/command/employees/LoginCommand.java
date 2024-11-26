package mini.shoppingb.command.employees;

import lombok.Data;

@Data
public class LoginCommand {
    String userId;
    String userPw;
}
