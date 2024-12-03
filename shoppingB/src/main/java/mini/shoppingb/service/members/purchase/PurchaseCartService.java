package mini.shoppingb.service.members.purchase;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.AuthInfoDTO;
import mini.shoppingb.domain.employees.GoodsDTO;
import mini.shoppingb.domain.members.*;
import mini.shoppingb.mapper.PurchaseMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class PurchaseCartService {
    @Autowired
    PurchaseMapper purchaseMapper;

    public void execute(PurchaseCartDTO purchaseCartDTO, HttpSession session){
        AuthInfoDTO auth = (AuthInfoDTO) session.getAttribute("auth");
        List<GoodsDTO> goodsDTOList  = new ArrayList<>();
        List<CartDTO> cartDTOList = new ArrayList<>();
        List<GoodsCartDTO> goodsCartDTO = purchaseCartDTO.getGoodsCartDTO();
        PurchaseDTO purchaseDTO = purchaseCartDTO.getPurchaseDTO();


        for(GoodsCartDTO GCdto : goodsCartDTO){
            goodsDTOList.add(GCdto.getGoodsDTO());
            cartDTOList.add(GCdto.getCartDTO());
        }
        int i = 0;

        int purchasePrice = 0;
        String memberNum = auth.getUserNum();
        String purchaseNum = UUID.randomUUID().toString();
        for(GoodsDTO dto : goodsDTOList){
            purchasePrice += dto.getGoodsPrice();
        }

        String deliveryAddr = purchaseDTO.getDeliveryAddr();
        String deliveryAddrDetail = purchaseDTO.getDeliveryAddrDetail();
        Integer deliveryPost = Integer.valueOf(purchaseDTO.getDeliveryPost());
        String deliveryPhone = purchaseDTO.getDeliveryPhone();
        String message = purchaseDTO.getMessage();

        purchaseMapper.purchaseCart(purchaseNum, purchasePrice, memberNum,
                deliveryAddr, deliveryAddrDetail, deliveryPost, deliveryPhone, message);

        for(CartDTO cartDTO : cartDTOList){
            PurchaseListDTO purchaseListDTO = new PurchaseListDTO();
            purchaseListDTO.setGoodsNum(cartDTO.getGoodsNum());
            purchaseListDTO.setGoodsUnitPrice(goodsDTOList.get(i).getGoodsPrice());
            purchaseListDTO.setPurchaseQty(cartDTO.getCartQty());
            purchaseListDTO.setPurchaseNum(purchaseNum);
            purchaseMapper.purchaseListInsert(purchaseListDTO);
            purchaseMapper.purchaseGoodsIpgoUpdate(purchaseListDTO);
            purchaseMapper.purchaseCartDelete(memberNum, cartDTO.getGoodsNum());
            i++;
        }
    }
}