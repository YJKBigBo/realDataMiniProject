package mini.shoppingb.mapper;

import mini.shoppingb.domain.members.PaymentDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface PointMapper {

    void paymentInsert(PaymentDTO paymentDTO);

    void pointUpdate(@Param("memberNum") String memberNum, @Param("point") Integer point);

}
