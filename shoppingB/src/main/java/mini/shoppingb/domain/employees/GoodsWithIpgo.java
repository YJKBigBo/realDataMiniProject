package mini.shoppingb.domain.employees;

import lombok.Data;
import org.apache.ibatis.type.Alias;

import java.util.Date;

@Data
@Alias("goodsWithIpgo")
public class GoodsWithIpgo {
    String goodsNum;
    String goodsName;
    Integer goodsPrice;
    String goodsContents;
    Integer visitCount;
    String goodsMainImage;
    String goodsMainStoreImage;
    String goodsDetailImage;
    String goodsDetailStoreImage;
    String empNum;
    Date goodsRegist;
    String updateEmpNum;
    Date goodsUpdateDate;


    Integer totalQty;
    String ipgoNum;
    Integer ipgoQty;
    String ipgoDate;
    String madeDate;
    Integer ipgoPrice;
}