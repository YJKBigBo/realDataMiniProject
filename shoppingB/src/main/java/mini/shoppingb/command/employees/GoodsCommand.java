package mini.shoppingb.command.employees;

import lombok.Data;

import org.springframework.web.multipart.MultipartFile;
import java.util.Date;

@Data
public class GoodsCommand {
    String goodsNum;
    String goodsName;
    Integer goodsPrice;
    Integer visitCount;
    String goodsContents;
    String empNum;
    Date goodsRegist;
    String updateEmpNum;
    Date goodsUpdateDate;

    MultipartFile goodsMainImage;
    MultipartFile goodsDetailImage[];
}
