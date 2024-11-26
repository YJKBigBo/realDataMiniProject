package mini.shoppingb.mapper;

import mini.shoppingb.domain.employees.GoodsDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface GoodsMapper {
    public void goodsRegist(GoodsDTO dto);
}
