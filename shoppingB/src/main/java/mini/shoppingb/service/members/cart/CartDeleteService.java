package mini.shoppingb.service.members.cart;

import mini.shoppingb.domain.members.GoodsCartDTO;
import mini.shoppingb.mapper.CartMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartDeleteService {

    @Autowired
    CartMapper cartMapper;

    public void execute(List<GoodsCartDTO> goodsCartDTO) {
        for(GoodsCartDTO goodsCart : goodsCartDTO){
            String goodsNum = goodsCart.getCartDTO().getGoodsNum();
            String memberNum = goodsCart.getCartDTO().getMemberNum();
            cartMapper.cartDelete(goodsNum, memberNum);
        }
    }
}
