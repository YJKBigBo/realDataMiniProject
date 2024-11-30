package mini.shoppingb.service.employees.goodsIpgo;

import mini.shoppingb.domain.employees.GoodsIpgoDTO;
import mini.shoppingb.mapper.GoodsIpgoMapper;
import mini.shoppingb.mapper.GoodsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.util.List;

@Service
public class GoodsIpgoListService {
    @Autowired
    GoodsIpgoMapper goodsIpgoMapper;

    public void execute(Model model){
        List<GoodsIpgoDTO> dto = goodsIpgoMapper.goodsIpgoList();
        model.addAttribute("dto", dto);
    }

}
