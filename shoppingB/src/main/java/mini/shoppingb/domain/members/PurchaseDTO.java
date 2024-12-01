package mini.shoppingb.domain.members;

import lombok.Data;
import org.apache.ibatis.type.Alias;

import java.util.Date;

@Data
@Alias("purchase")
public class PurchaseDTO {
    String purchaseNum;
    Date purchaseDate;
    Integer purchasePrice;
    String deliveryAddr;
    String deliveryAddrDetail;
    String deliveryPost;
    String deliveryPhone;
    String message;
    String purchaseStatus;
    String memberNum;
}