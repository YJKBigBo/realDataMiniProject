package mini.shoppingb.domain.employees;

import lombok.Data;
import org.apache.ibatis.type.Alias;

@Data
@Alias("orderList")
public class OrderListDTO {
    String purchaseNum;
    Integer totalItems;
    Integer totalAmount;
    String purchaseStatus;
}
