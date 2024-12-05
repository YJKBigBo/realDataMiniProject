package mini.shoppingb.domain.employees;

import lombok.Data;
import org.apache.ibatis.type.Alias;

@Data
@Alias("goodsIpgoCount")
public class GoodsIpgoCountDTO {
    String ipgoDay;
    Integer ipgoQty;
}
