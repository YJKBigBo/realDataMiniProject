package mini.shoppingb.mapper;

import mini.shoppingb.domain.employees.EmployeeDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface EmployeesMapper {
    public EmployeeDTO login(@Param("empId") String empId, @Param("empPw") String empPw);
    public void regist(EmployeeDTO employeeDTO);
    public EmployeeDTO detail(String empNum);
    public void update(EmployeeDTO employeeDTO);
    public List<EmployeeDTO> list();
}
