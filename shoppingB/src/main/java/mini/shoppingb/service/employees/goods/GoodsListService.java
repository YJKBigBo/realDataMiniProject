package mini.shoppingb.service.employees.goods;

import mini.shoppingb.domain.employees.GoodsDTO;
import mini.shoppingb.mapper.GoodsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.util.List;

@Service
public class GoodsListService {

    @Autowired
    GoodsMapper goodsMapper;

    public void execute(Model model) {
        List<GoodsDTO> dto = goodsMapper.goodsList();
        model.addAttribute("dto", dto);

    }
}
