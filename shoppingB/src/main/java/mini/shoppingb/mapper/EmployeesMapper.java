package mini.shoppingb.mapper;

import mini.shoppingb.domain.employees.EmployeeDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface EmployeesMapper {
    public EmployeeDTO login(@Param("empId") String empId, @Param("empPw") String empPw);
    public void regist(EmployeeDTO employeeDTO);
}
