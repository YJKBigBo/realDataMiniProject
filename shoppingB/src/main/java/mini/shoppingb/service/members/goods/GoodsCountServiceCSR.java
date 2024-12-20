package mini.shoppingb.service.members.goods;

import mini.shoppingb.domain.employees.GoodsDTO;
import mini.shoppingb.mapper.GoodsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GoodsCountServiceCSR {

    @Autowired
    GoodsMapper goodsMapper;

    public List<GoodsDTO> execute(){
        List<GoodsDTO> dto = goodsMapper.goodsCount();
        return dto;
    }
}
