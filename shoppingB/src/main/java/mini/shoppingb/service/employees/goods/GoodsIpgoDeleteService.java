package mini.shoppingb.service.employees.goods;

import mini.shoppingb.mapper.GoodsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GoodsIpgoDeleteService {
    @Autowired
    GoodsMapper goodsMapper;

    public void execute(String ipgoNum){
        goodsMapper.goodsIpgoDelete(ipgoNum);
    }
}
