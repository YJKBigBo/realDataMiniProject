package mini.shoppingb.mapper;

import mini.shoppingb.domain.EmployeeDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RegisterMapper {
    public void regist(EmployeeDTO employeeDTO);
}
