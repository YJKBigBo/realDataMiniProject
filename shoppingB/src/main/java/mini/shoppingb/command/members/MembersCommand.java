package mini.shoppingb.command.members;

import lombok.Data;

import java.util.Date;

@Data
public class MembersCommand {
    String memberName;
    String memberId;
    String memberPw;
    String memberAddr;
    String memberAddrDetail;
    Integer memberPost;
    String gender;
    String memberPhone1;
    String memberPhone2;
    String memberEmail;
    String memberBirth;
}
