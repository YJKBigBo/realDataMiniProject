package mini.shoppingb.service.employees.order;

import mini.shoppingb.domain.employees.OrderDTO;
import mini.shoppingb.mapper.OrderMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.util.List;

@Service
public class OrderDetailService {

    @Autowired
    OrderMapper orderMapper;

    public void execute(String purchaseNum, Model model){
        List<OrderDTO> orderDTO = orderMapper.orderDetail(purchaseNum);
        model.addAttribute("order", orderDTO);
        model.addAttribute("purchaseNum", purchaseNum);
        model.addAttribute("purchaseStatus", orderDTO.get(0).getPurchaseDTO().getPurchaseStatus());
    }
}
