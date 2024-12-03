package mini.shoppingb.service.members.goods;

import mini.shoppingb.domain.employees.GoodsWithIpgoDTO;
import mini.shoppingb.mapper.GoodsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GoodsListServiceCSR {
    @Autowired
    GoodsMapper goodsMapper;

    public List<GoodsWithIpgoDTO> execute(){
        List<GoodsWithIpgoDTO> dto = goodsMapper.GoodsWithQtyList();
        return dto;
    }
}
