package mini.shoppingb.mapper;

import mini.shoppingb.domain.employees.GoodsIpgoDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface GoodsIpgoMapper {
    public List<GoodsIpgoDTO> goodsIpgoList();
    public GoodsIpgoDTO goodsIpgoDetail(String ipgoNum);
    public void goodsIpgoUpdate(GoodsIpgoDTO dto);
    public void goodsIpgoDelete(String ipgoNum);
}
