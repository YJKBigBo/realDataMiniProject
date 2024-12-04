package mini.shoppingb.controller.members;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.members.ReviewDTO;
import mini.shoppingb.service.members.reivew.ReviewDataService;
import mini.shoppingb.service.members.reivew.ReviewDeleteService;
import mini.shoppingb.service.members.reivew.ReviewListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class ReviewController {

    @Autowired
    ReviewDataService reviewDataService;

    @Autowired
    ReviewDeleteService reviewDeleteService;

    @Autowired
    ReviewListService reviewListService;

    @PostMapping("/members/goods/review/regist")
    public void reviewData(@RequestBody ReviewDTO reviewDTO, HttpSession session) {
        reviewDataService.execute(reviewDTO, session);
    }

    @PostMapping("/members/goods/review/delete")
    public void reviewDelete(@RequestBody ReviewDTO reviewDTO) {
        reviewDeleteService.execute(reviewDTO);
    }

    @PostMapping("/members/goods/review/list")
    public ResponseEntity<List<ReviewDTO>> getReviewList(@RequestBody Map<String, Object> data) {
        String goodsNum = (String) data.get("goodsNum");
        List<ReviewDTO> dto = reviewListService.execute(goodsNum);
        return ResponseEntity.ok(dto);
    }

}
