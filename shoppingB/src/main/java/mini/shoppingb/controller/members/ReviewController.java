package mini.shoppingb.controller.members;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.members.ReviewDTO;
import mini.shoppingb.service.members.reivew.ReviewDataService;
import mini.shoppingb.service.members.reivew.ReviewDeleteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReviewController {

    @Autowired
    ReviewDataService reviewDataService;

    @Autowired
    ReviewDeleteService reviewDeleteService;

    @PostMapping("/members/goods/review/regist")
    public void reviewData(@RequestBody ReviewDTO reviewDTO, HttpSession session) {
        reviewDataService.execute(reviewDTO, session);
    }

    @PostMapping("/members/goods/review/delete")
    public void reviewDelete(@RequestBody ReviewDTO reviewDTO) {
        reviewDeleteService.execute(reviewDTO);
    }

}
