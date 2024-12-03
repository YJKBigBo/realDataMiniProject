package mini.shoppingb.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface WishMapper {
    public Integer wishData(@Param("goodsNum") String goodsNum, @Param("memberNum") String memberNum);
}
