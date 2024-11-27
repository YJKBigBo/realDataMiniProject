package mini.shoppingb.mapper;

import mini.shoppingb.domain.employees.GoodsDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface GoodsMapper {
    public void goodsRegist(GoodsDTO dto);
    public List<GoodsDTO> goodsList();
    public GoodsDTO goodsDetail(int goodsNum);
    public void goodsUpdate(GoodsDTO dto);
    public List<GoodsDTO> search(String name);
    public List<GoodsDTO> searchAll();
}
