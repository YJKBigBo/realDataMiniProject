package mini.shoppingb.service.members.reivew;

import mini.shoppingb.domain.members.ReviewDTO;
import mini.shoppingb.mapper.ReviewMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReviewListService {

    @Autowired
    ReviewMapper reviewMapper;

    public List<ReviewDTO> execute(String goodsNum){
        List<ReviewDTO> reviewDTOList = reviewMapper.reviewList(goodsNum);
        return reviewDTOList;
    }
}
