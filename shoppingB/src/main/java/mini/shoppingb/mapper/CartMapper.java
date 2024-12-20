package mini.shoppingb.mapper;

import mini.shoppingb.domain.members.CartDTO;
import mini.shoppingb.domain.members.GoodsCartDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface CartMapper {
    public void cartInsert(@Param("goodsNum") String goodsNum, @Param("memberNum") String memberNum);
    public List<GoodsCartDTO> cartList(String memberNum);
    public void cartUpdate(@Param("goodsNum") String goodsNum, @Param("memberNum") String memberNum, @Param("newQty") Integer newQty);
    public void cartDelete(@Param("goodsNum") String goodsNum, @Param("memberNum") String memberNum);
}
