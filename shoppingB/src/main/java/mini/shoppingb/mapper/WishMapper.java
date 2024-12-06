package mini.shoppingb.mapper;

import mini.shoppingb.domain.members.WishDTO;
import mini.shoppingb.domain.members.WishGoodsDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface WishMapper {
    public Integer wishData(@Param("goodsNum") String goodsNum, @Param("memberNum") String memberNum);

    public void wishRegist(@Param("goodsNum") String goodsNum, @Param("memberNum") String memberNum);

    public void wishDelete(@Param("goodsNum") String goodsNum, @Param("memberNum") String memberNum);

    public List<WishGoodsDTO> wishHome(String memberNum);
}
