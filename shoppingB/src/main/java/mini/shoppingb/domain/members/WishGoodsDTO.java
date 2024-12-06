package mini.shoppingb.domain.members;

import lombok.Data;
import mini.shoppingb.domain.employees.GoodsDTO;
import org.apache.ibatis.type.Alias;

@Data
@Alias("wishGoods")
public class WishGoodsDTO {
    GoodsDTO goodsDTO;
    WishDTO wishDTO;
}
