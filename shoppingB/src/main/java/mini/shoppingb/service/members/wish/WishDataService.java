package mini.shoppingb.service.members.wish;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.all.AuthInfoDTO;
import mini.shoppingb.mapper.WishMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WishDataService {

    @Autowired
    WishMapper wishMapper;

    public Integer execute(String goodsNum, HttpSession session) {
        AuthInfoDTO auth = (AuthInfoDTO) session.getAttribute("auth");
        String memberNum = auth.getUserNum();
        Integer returnNum = wishMapper.wishData(goodsNum, memberNum);
        return returnNum;
    }
}
