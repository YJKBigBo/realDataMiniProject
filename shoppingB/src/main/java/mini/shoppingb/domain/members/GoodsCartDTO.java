package mini.shoppingb.domain.members;

import lombok.Data;
import mini.shoppingb.domain.employees.GoodsDTO;
import org.apache.ibatis.type.Alias;

@Data
@Alias("goodsCart")
public class GoodsCartDTO {
    private GoodsDTO goodsDTO;
    private CartDTO cartDTO;
}