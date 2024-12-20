package mini.shoppingb.mapper;

import mini.shoppingb.domain.members.GoodsCartDTO;
import mini.shoppingb.domain.members.PurchaseDTO;
import mini.shoppingb.domain.members.PurchaseListDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface PurchaseMapper {

    // 기존 메서드
    public void purchaseInsert(PurchaseDTO purchaseDTO);
    public void purchaseListInsert(PurchaseListDTO purchaseListDTO);
    public void purchaseGoodsIpgoUpdate(PurchaseListDTO purchaseListDTO);

    public void purchaseCart(@Param("purchaseNum") String purchaseNum,
                             @Param("purchasePrice") Integer purchasePrice,
                             @Param("memberNum") String memberNum,
                             @Param("deliveryAddr") String deliveryAddr,
                             @Param("deliveryAddrDetail") String deliveryAddrDetail,
                             @Param("deliveryPost") Integer deliveryPost,
                             @Param("deliveryPhone") String deliveryPhone,
                             @Param("message") String message);

    public void purchaseCartDelete(@Param("memberNum") String memberNum, @Param("goodsNum") String goodsNum);

    public Integer checkMemberPoint(@Param("memberNum") String memberNum);
    public void updateMemberPoint(@Param("memberNum") String memberNum, @Param("purchasePrice") Integer purchasePrice);
}
