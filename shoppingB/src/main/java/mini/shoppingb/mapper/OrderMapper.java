package mini.shoppingb.mapper;

import mini.shoppingb.domain.employees.OrderDTO;
import mini.shoppingb.domain.employees.OrderListDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrderMapper {
    List<OrderListDTO> orderList();

    List<OrderDTO> orderDetail(String purchaseNum);

    int orderConfirm(String purchaseNum);
}
