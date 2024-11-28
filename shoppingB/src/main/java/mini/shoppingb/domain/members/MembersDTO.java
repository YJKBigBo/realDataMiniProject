package mini.shoppingb.domain.members;

import lombok.Data;
import org.apache.ibatis.type.Alias;

import java.util.Date;

@Data
@Alias("member")
public class MembersDTO {
    String memberNum;
    String memberName;
    String memberId;
    String memberPw;
    String memberAddr;
    String memberAddrDetail;
    Integer memberPost;
    Date memberRegist;
    String gender;
    String memberPhone1;
    String memberPhone2;
    String memberEmail;
    String memberBirth;
    Integer memberPoint;
    String memberEmailConf;
}
