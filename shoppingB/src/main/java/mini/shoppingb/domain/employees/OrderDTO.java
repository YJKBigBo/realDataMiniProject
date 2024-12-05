package mini.shoppingb.domain.employees;

import lombok.Data;
import mini.shoppingb.domain.members.PurchaseDTO;
import mini.shoppingb.domain.members.PurchaseListDTO;
import org.apache.ibatis.type.Alias;

@Data
@Alias("order")
public class OrderDTO {
    PurchaseDTO purchaseDTO;
    PurchaseListDTO purchaseListDTO;
    GoodsDTO goodsDTO;
}
