package mini.shoppingb.mapper;

import mini.shoppingb.domain.employees.GoodsDTO;
import mini.shoppingb.domain.employees.GoodsIpgoDTO;
import mini.shoppingb.domain.employees.GoodsWithIpgo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface GoodsMapper {
    public void goodsRegist(GoodsDTO dto);
    public List<GoodsDTO> goodsList();
    public GoodsDTO goodsDetail(int goodsNum);
    public void updateGoods(GoodsWithIpgo dto);
    public void insertGoodsIpgo(GoodsWithIpgo dto);
    public List<GoodsDTO> search(String name);
    public List<GoodsDTO> searchAll();
    public GoodsWithIpgo GoodsWithQty(String goodsNum);

    public List<GoodsIpgoDTO> goodsIpgoList();
    public GoodsIpgoDTO goodsIpgoDetail(String ipgoNum);
}
