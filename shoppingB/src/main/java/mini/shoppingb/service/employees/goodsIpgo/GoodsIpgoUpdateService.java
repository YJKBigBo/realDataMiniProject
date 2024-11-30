package mini.shoppingb.service.employees.goodsIpgo;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.command.employees.GoodsCommand;
import mini.shoppingb.domain.AuthInfoDTO;
import mini.shoppingb.domain.employees.GoodsIpgoDTO;
import mini.shoppingb.mapper.GoodsIpgoMapper;
import mini.shoppingb.mapper.GoodsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

@Service
public class GoodsIpgoUpdateService {
    @Autowired
    GoodsIpgoMapper goodsIpgoMapper;

    public void execute(GoodsCommand command, Model model, HttpSession session) {
        GoodsIpgoDTO dto = new GoodsIpgoDTO();
        dto.setIpgoNum(command.getIpgoNum());
        dto.setGoodsNum(command.getGoodsNum());
        dto.setIpgoQty(command.getIpgoQty());
        dto.setIpgoDate(command.getIpgoDate());
        dto.setIpgoPrice(command.getIpgoPrice());
        AuthInfoDTO auth = (AuthInfoDTO) session.getAttribute("auth");
        String empNum = auth.getUserNum();
        dto.setEmpNum(empNum);
        dto.setMadeDate(command.getMadeDate());
        goodsIpgoMapper.goodsIpgoUpdate(dto);
    }

}
