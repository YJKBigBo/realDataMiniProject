package mini.shoppingb.service.employees.goods;

import mini.shoppingb.domain.employees.GoodsDTO;
import mini.shoppingb.domain.employees.GoodsWithIpgo;
import mini.shoppingb.mapper.GoodsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.util.Arrays;
import java.util.List;

@Service
public class GoodsDetailService {

    @Autowired
    GoodsMapper goodsMapper;

    public GoodsWithIpgo execute(String goodsNum, Model model) {
        GoodsWithIpgo dto = goodsMapper.GoodsWithQty(goodsNum);
        if(dto == null){
            return null;
        } else{
            List<String> images = Arrays.asList(dto.getGoodsDetailStoreImage().split("/"));
            model.addAttribute("images", images);
            model.addAttribute("dto", dto);
            return dto;
        }
    }
}
