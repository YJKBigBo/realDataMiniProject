package mini.shoppingb.mapper;

import mini.shoppingb.domain.members.PurchaseMypageDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PurchaseMypageMapper {

    public List<PurchaseMypageDTO> purchaseMypageInfo(String memberNum);
}