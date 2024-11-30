package mini.shoppingb.service.employees.goodsIpgo;

import mini.shoppingb.mapper.GoodsIpgoMapper;
import mini.shoppingb.mapper.GoodsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GoodsIpgoDeleteService {
    @Autowired
    GoodsIpgoMapper goodsIpgoMapper;

    public void execute(String ipgoNum){
        goodsIpgoMapper.goodsIpgoDelete(ipgoNum);
    }
}
