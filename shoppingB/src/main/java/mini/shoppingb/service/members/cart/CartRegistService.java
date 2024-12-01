package mini.shoppingb.service.members.cart;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.AuthInfoDTO;
import mini.shoppingb.mapper.CartMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartRegistService {

    @Autowired
    CartMapper cartMapper;

    public void execute(String goodsNum, HttpSession session){
        AuthInfoDTO auth = (AuthInfoDTO) session.getAttribute("auth");
        String memberNum = auth.getUserNum();
        cartMapper.cartInsert(goodsNum, memberNum);
    }
}
