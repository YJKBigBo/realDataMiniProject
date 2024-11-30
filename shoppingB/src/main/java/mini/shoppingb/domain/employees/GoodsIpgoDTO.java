package mini.shoppingb.domain.employees;

import lombok.Data;
import org.apache.ibatis.type.Alias;

@Data
@Alias("goodsIpgo")
public class GoodsIpgoDTO {
    String goodsNum;
    String ipgoNum;
    Integer ipgoQty;
    String ipgoDate;
    String madeDate;
    Integer ipgoPrice;
    String empNum;
}