package mini.shoppingb.domain.employees;

import lombok.Data;
import org.apache.ibatis.type.Alias;

import java.util.Date;

@Data
@Alias("goods")
public class GoodsDTO {
    String goodsNum;
    String goodsName;
    Integer goodsPrice;
    String goodsContents;
    String empNum;
    Integer visitCount;
    Date goodsRegist;
    String updateEmpNum;
    Date goodsUpdateDate;
    String goodsMainImage;
    String goodsMainStoreImage;
    String goodsDetailImage;
    String goodsDetailStoreImage;
}