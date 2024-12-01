package mini.shoppingb.domain.members;

import lombok.Data;
import org.apache.ibatis.type.Alias;

import java.util.Date;

@Data
@Alias("cart")
public class CartDTO {
    String memberNum;
    String goodsNum;
    Date cartDate;
    Integer cartQty;

}
