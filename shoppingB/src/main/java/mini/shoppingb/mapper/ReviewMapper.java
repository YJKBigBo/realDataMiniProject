package mini.shoppingb.mapper;

import mini.shoppingb.domain.members.ReviewDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface ReviewMapper {
    public void reviewRegist(ReviewDTO reviewDTO);
}
