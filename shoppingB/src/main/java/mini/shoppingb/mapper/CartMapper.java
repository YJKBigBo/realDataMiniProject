package mini.shoppingb.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface CartMapper {
    public void cartInsert(@Param("goodsNum") String goodsNum, @Param("memberNum") String memberNum);
}
