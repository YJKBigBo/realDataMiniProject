package mini.shoppingb.domain.members;

import lombok.Data;
import org.apache.ibatis.type.Alias;

import java.util.Date;

@Data
@Alias("delivery")
public class DeliveryDTO {
    String purchaseNum;
    String deliveryNum;
    Date deliveryDate;
    String deliveryStatus;
}
