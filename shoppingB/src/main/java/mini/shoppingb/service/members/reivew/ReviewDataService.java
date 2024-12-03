package mini.shoppingb.service.members.reivew;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.AuthInfoDTO;
import mini.shoppingb.domain.members.ReviewDTO;
import mini.shoppingb.mapper.AutoNumMapper;
import mini.shoppingb.mapper.ReviewMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewDataService {

    @Autowired
    ReviewMapper reviewMapper;

    @Autowired
    AutoNumMapper autoNumMapper;

    public void execute(ReviewDTO reviewDTO, HttpSession session) {
        AuthInfoDTO auth = (AuthInfoDTO) session.getAttribute("auth");
        String memberId = auth.getUserId();
        String reviewNum;
        ReviewDTO dto = reviewMapper.reviewData(reviewDTO);
        if (dto != null
                && dto.getPurchaseNum() != null
                && dto.getPurchaseNum().equals(reviewDTO.getPurchaseNum())
                && dto.getGoodsNum() != null
                && dto.getGoodsNum().equals(reviewDTO.getGoodsNum())) {
            reviewNum = dto.getReviewNum();
        } else {
            reviewNum = autoNumMapper.autoNum("review_num", "reviews");
        }
        reviewDTO.setReviewNum(reviewNum);
        reviewDTO.setMemberId(memberId);
        reviewMapper.reviewRegist(reviewDTO);
    }

}
