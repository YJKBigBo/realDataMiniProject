package mini.shoppingb.service.employees.order;

import mini.shoppingb.domain.employees.OrderCountDTO;
import mini.shoppingb.mapper.OrderMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderCountService {

    @Autowired
    OrderMapper orderMapper;

    public List<OrderCountDTO> execute(){
        List<OrderCountDTO> dto = orderMapper.orderCount();
        return dto;
    }
}
