package mini.shoppingb.domain.members;

import lombok.Data;
import mini.shoppingb.domain.employees.GoodsDTO;
import org.apache.ibatis.type.Alias;

@Data
@Alias("purchaseMypage")
public class PurchaseMypageDTO {
    PurchaseDTO purchaseDTO;
    PurchaseListDTO purchaseListDTO;
    GoodsDTO goodsDTO;
}