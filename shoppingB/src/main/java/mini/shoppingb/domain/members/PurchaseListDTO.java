package mini.shoppingb.domain.members;

import lombok.Data;
import org.apache.ibatis.type.Alias;

@Data
@Alias("purchaseList")
public class PurchaseListDTO {
    String goodsNum;
    String purchaseNum;
    Integer purchaseQty;
    Integer goodsUnitPrice;
}
