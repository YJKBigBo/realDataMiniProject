package mini.shoppingb.command.employees;

import lombok.Data;

import org.springframework.web.multipart.MultipartFile;
import java.util.Date;

@Data
public class GoodsCommand {
    String goodsNum;
    String goodsName;
    Integer goodsPrice;
    String goodsContents;
    Integer visitCount;
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

    MultipartFile goodsMainImage;
    MultipartFile goodsDetailImage[];
}
