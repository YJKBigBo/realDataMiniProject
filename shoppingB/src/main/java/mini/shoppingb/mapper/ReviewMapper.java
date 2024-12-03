package mini.shoppingb.mapper;

import mini.shoppingb.domain.members.ReviewDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface ReviewMapper {
    public void reviewRegist(ReviewDTO reviewDTO);

    public ReviewDTO reviewData(ReviewDTO reviewDTO);

    public void reviewDelete(ReviewDTO reviewDTO);
}
