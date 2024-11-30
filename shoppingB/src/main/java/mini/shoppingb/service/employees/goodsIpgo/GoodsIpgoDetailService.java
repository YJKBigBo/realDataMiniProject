package mini.shoppingb.service.employees.goodsIpgo;

import mini.shoppingb.domain.employees.GoodsIpgoDTO;
import mini.shoppingb.mapper.GoodsIpgoMapper;
import mini.shoppingb.mapper.GoodsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

@Service
public class GoodsIpgoDetailService {
    @Autowired
    GoodsIpgoMapper goodsIpgoMapper;

    public void execute(Model model, String ipgoNum){
        GoodsIpgoDTO dto = goodsIpgoMapper.goodsIpgoDetail(ipgoNum);
        model.addAttribute("dto", dto);
    }
}
