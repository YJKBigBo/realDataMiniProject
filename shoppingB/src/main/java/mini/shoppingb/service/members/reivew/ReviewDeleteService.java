package mini.shoppingb.service.members.reivew;

import mini.shoppingb.domain.members.ReviewDTO;
import mini.shoppingb.mapper.ReviewMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewDeleteService {

    @Autowired
    ReviewMapper reviewMapper;

    public void execute(ReviewDTO reviewDTO){
        reviewMapper.reviewDelete(reviewDTO);
    }
}
