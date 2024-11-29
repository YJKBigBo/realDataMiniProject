package mini.shoppingb.service.members.goods;

import mini.shoppingb.domain.employees.GoodsDTO;
import mini.shoppingb.mapper.GoodsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GoodsDetailServiceCSR {

    @Autowired
    GoodsMapper goodsMapper;

    public GoodsDTO execute(String goodsNum){
        GoodsDTO dto = goodsMapper.goodsDetail(Integer.parseInt(goodsNum));
        return dto;
    }
}
