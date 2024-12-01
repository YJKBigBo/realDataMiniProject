package mini.shoppingb.service.members.cart;

import mini.shoppingb.mapper.CartMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartUpdateService {
    @Autowired
    CartMapper cartMapper;

    public void execute(String goodsNum, String memberNum, Integer newQty){
        cartMapper.cartUpdate(goodsNum, memberNum, newQty);
    }

}
