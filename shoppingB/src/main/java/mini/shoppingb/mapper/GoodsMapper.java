package mini.shoppingb.mapper;

import mini.shoppingb.domain.employees.GoodsDTO;
import mini.shoppingb.domain.employees.GoodsWithIpgoDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface GoodsMapper {
    public void goodsRegist(GoodsDTO dto);
    public List<GoodsDTO> goodsList();
    public GoodsDTO goodsDetail(int goodsNum);
    public void updateGoods(GoodsWithIpgoDTO dto);
    public List<GoodsDTO> search(String name);
    public List<GoodsDTO> searchAll();

    public GoodsWithIpgoDTO GoodsWithQty(String goodsNum);
    public List<GoodsWithIpgoDTO> GoodsWithQtyList();

    public void insertGoodsIpgo(GoodsWithIpgoDTO dto);

    public List<GoodsDTO> goodsCount();
}
