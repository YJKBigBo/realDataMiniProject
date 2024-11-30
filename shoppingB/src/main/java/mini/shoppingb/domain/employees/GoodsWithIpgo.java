package mini.shoppingb.domain.employees;

import lombok.Data;
import org.apache.ibatis.type.Alias;

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
    String goodsRegist;
    String updateEmpNum;
    String goodsUpdateDate;
    Integer totalQty;
}