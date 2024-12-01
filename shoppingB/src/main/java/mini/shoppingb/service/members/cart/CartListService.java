package mini.shoppingb.service.members.cart;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.AuthInfoDTO;
import mini.shoppingb.domain.members.GoodsCartDTO;
import mini.shoppingb.mapper.CartMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartListService {

    @Autowired
    CartMapper cartMapper;

    public List<GoodsCartDTO> execute(HttpSession session){
        AuthInfoDTO auth = (AuthInfoDTO) session.getAttribute("auth");
        String memberNum = auth.getUserNum();
        List<GoodsCartDTO> dto = cartMapper.cartList(memberNum);
        return  dto;
    }
}
