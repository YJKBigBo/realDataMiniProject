package mini.shoppingb.service.members.purchase;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.command.members.PurchaseCommand;
import mini.shoppingb.domain.all.AuthInfoDTO;
import mini.shoppingb.domain.members.PurchaseDTO;
import mini.shoppingb.domain.members.PurchaseListDTO;
import mini.shoppingb.mapper.PurchaseMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.UUID;

@Service
public class PurchaseDeliveryService {

    @Autowired
    PurchaseMapper purchaseMapper;

    public String execute(PurchaseCommand purchaseCommand, HttpSession session){
        AuthInfoDTO auth = (AuthInfoDTO) session.getAttribute("auth");
        String memberNum = auth.getUserNum();
        String purchaseNum = UUID.randomUUID().toString();

        PurchaseDTO purchaseDTO = new PurchaseDTO();
        purchaseDTO.setMemberNum(memberNum);
        purchaseDTO.setPurchaseNum(purchaseNum);
        purchaseDTO.setDeliveryAddr(purchaseCommand.getDeliveryAddr());
        purchaseDTO.setPurchasePrice(purchaseCommand.getPurchasePrice());
        purchaseDTO.setDeliveryAddrDetail(purchaseCommand.getDeliveryAddrDetail());
        purchaseDTO.setDeliveryPost(purchaseCommand.getDeliveryPost());
        purchaseDTO.setDeliveryPhone(purchaseCommand.getDeliveryPhone());
        purchaseDTO.setMessage(purchaseCommand.getMessage());

        PurchaseListDTO purchaseListDTO = new PurchaseListDTO();
        purchaseListDTO.setGoodsNum(purchaseCommand.getGoodsNum());
        purchaseListDTO.setPurchaseNum(purchaseNum);
        purchaseListDTO.setPurchaseQty(purchaseCommand.getPurchaseQty());
        purchaseListDTO.setGoodsUnitPrice(purchaseCommand.getGoodsUnitPrice());

        int currentPoint = purchaseMapper.checkMemberPoint(purchaseDTO.getMemberNum());
        if (currentPoint < purchaseDTO.getPurchasePrice()) {
            String re = "포인트가 부족하여 구매가 불가능합니다.";
            return re;
        } else{
            purchaseMapper.purchaseInsert(purchaseDTO);
            purchaseMapper.purchaseListInsert(purchaseListDTO);
            purchaseMapper.purchaseGoodsIpgoUpdate(purchaseListDTO);
            purchaseMapper.updateMemberPoint(purchaseDTO.getMemberNum(), purchaseCommand.getPurchasePrice());
            String re = "구매를 완료 했습니다.";
            return re;
        }
    }
}
