package mini.shoppingb.service.members.purchase;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.AuthInfoDTO;
import mini.shoppingb.domain.members.PurchaseDTO;
import mini.shoppingb.mapper.AutoNumMapper;
import mini.shoppingb.mapper.PurchaseMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class PurchaseDeliveryService {

    @Autowired
    PurchaseMapper purchaseMapper;

    public void execute(PurchaseDTO purchaseDTO, HttpSession session){
        AuthInfoDTO auth = (AuthInfoDTO) session.getAttribute("auth");
        String memberNum = auth.getUserNum();
        purchaseDTO.setMemberNum(memberNum);
        purchaseDTO.setPurchaseNum(UUID.randomUUID().toString());
        purchaseMapper.purchaseInsert(purchaseDTO);
    }
}
