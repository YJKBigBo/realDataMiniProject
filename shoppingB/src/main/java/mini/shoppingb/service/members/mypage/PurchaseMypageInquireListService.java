package mini.shoppingb.service.members.mypage;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.AuthInfoDTO;
import mini.shoppingb.domain.InquireDTO;
import mini.shoppingb.domain.InquireGoodsDTO;
import mini.shoppingb.mapper.AutoNumMapper;
import mini.shoppingb.mapper.PurchaseMypageMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PurchaseMypageInquireListService {

    @Autowired
    PurchaseMypageMapper purchaseMypageMapper;

    public List<InquireGoodsDTO> execute(HttpSession session){
        AuthInfoDTO auth = (AuthInfoDTO) session.getAttribute("auth");
        String memberNum = auth.getUserNum();
        List<InquireGoodsDTO> dto = purchaseMypageMapper.purchaseMypageInquireInfo(memberNum);
        return dto;
    }
}
