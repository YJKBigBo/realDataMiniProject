package mini.shoppingb.service.members.wish;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.all.AuthInfoDTO;
import mini.shoppingb.domain.members.WishDTO;
import mini.shoppingb.domain.members.WishGoodsDTO;
import mini.shoppingb.mapper.WishMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WishMyHomeService {

    @Autowired
    WishMapper wishMapper;

    public List<WishGoodsDTO> execute(HttpSession session){
        AuthInfoDTO auth = (AuthInfoDTO) session.getAttribute("auth");
        String memberNum = auth.getUserNum();
        List<WishGoodsDTO> dto = wishMapper.wishHome(memberNum);
        return dto;
    }
}
