package mini.shoppingb.service.employees.goods;

import mini.shoppingb.command.searchCommand;
import mini.shoppingb.domain.employees.GoodsDTO;
import mini.shoppingb.mapper.GoodsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.util.ArrayList;
import java.util.List;

@Service
public class GoodsSearchService {

    @Autowired
    GoodsMapper goodsMapper;

    public void execute(Model model, searchCommand command) {
        String name = command.getName();

        List<GoodsDTO> dto = new ArrayList<>();
        if(name == null || name.isEmpty()){
            dto = goodsMapper.searchAll();
        } else{
            dto = goodsMapper.search(name);
        }
        model.addAttribute("findGoods", dto);
    }
}
