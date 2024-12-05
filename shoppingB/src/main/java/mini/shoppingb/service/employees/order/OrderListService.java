package mini.shoppingb.service.employees.order;

import mini.shoppingb.domain.employees.OrderDTO;
import mini.shoppingb.domain.employees.OrderListDTO;
import mini.shoppingb.mapper.OrderMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.util.List;

@Service
public class OrderListService {

    @Autowired
    OrderMapper orderMapper;

    public void execute(Model model) {
        List<OrderListDTO> dto = orderMapper.orderList();
        model.addAttribute("orderList", dto);
    }
}
