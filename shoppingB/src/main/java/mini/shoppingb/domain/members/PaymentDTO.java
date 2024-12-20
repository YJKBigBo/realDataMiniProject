package mini.shoppingb.domain.members;

import lombok.Data;
import org.apache.ibatis.type.Alias;

@Data
@Alias("payment")
public class PaymentDTO {
    String purchaseNum;
    String confirmnumber;
    String cardnum;
    String tid;
    String totalprice;
    String resultmassage;
    String paymathod;
    String appldate;
    String appltime;
}