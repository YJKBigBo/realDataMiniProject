package mini.shoppingb.service.members.mypage;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.AuthInfoDTO;
import mini.shoppingb.domain.members.PurchaseMypageDTO;
import mini.shoppingb.mapper.PurchaseMypageMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PurchaseMypageInfoService {

    @Autowired
    PurchaseMypageMapper purchaseMypageMapper;

    public List<PurchaseMypageDTO> execute(HttpSession session){
        AuthInfoDTO auth = (AuthInfoDTO) session.getAttribute("auth");
        String memberNum = auth.getUserNum();
        List<PurchaseMypageDTO> dto = purchaseMypageMapper.purchaseMypageInfo(memberNum);
        System.out.println(dto);
        return dto;
    }
}
