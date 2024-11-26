package mini.shoppingb.service.employees.goods;

import mini.shoppingb.command.employees.GoodsCommand;
import mini.shoppingb.domain.employees.GoodsDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

@Service
public class GoodsUpdateService {

    @Autowired
    GoodsDetailService goodsDetailService;

    public void execute(GoodsCommand command, Model model) {
        GoodsDTO dto = goodsDetailService.execute(Integer.parseInt(command.getGoodsNum()), model);
        if (command.getGoodsMainImage().isEmpty()) {
            //command.setGoodsMainImage(dto.getGoodsMainImage());
        }
        if (command.getGoodsDetailImage().length == 0) {
            //command.setGoodsDetailImage(existingDetailImages);
        }
    }
}
