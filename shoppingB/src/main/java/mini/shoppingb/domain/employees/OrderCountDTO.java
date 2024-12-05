package mini.shoppingb.domain.employees;

import lombok.Data;
import org.apache.ibatis.type.Alias;

import java.util.Date;

@Data
@Alias("orderCount")
public class OrderCountDTO {
    String orderDay;
    Integer orderCount;
}
