package mini.shoppingb.service.employees.goods;

import mini.shoppingb.domain.employees.GoodsIpgoDTO;
import mini.shoppingb.mapper.GoodsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

@Service
public class GoodsIpgoDetailService {
    @Autowired
    GoodsMapper goodsMapper;

    public void execute(Model model, String ipgoNum){
        GoodsIpgoDTO dto = goodsMapper.goodsIpgoDetail(ipgoNum);
        model.addAttribute("dto", dto);
    }
}
