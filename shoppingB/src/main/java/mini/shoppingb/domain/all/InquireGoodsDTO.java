package mini.shoppingb.domain.all;

import lombok.Data;
import mini.shoppingb.domain.employees.GoodsDTO;
import org.apache.ibatis.type.Alias;

@Data
@Alias("inquireGoods")
public class InquireGoodsDTO {
    InquireDTO inquireDTO;
    GoodsDTO goodsDTO;
}
