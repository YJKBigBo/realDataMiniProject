package mini.shoppingb.service.employees.employees;

import mini.shoppingb.command.employees.EmployeeCommand;
import mini.shoppingb.domain.employees.EmployeeDTO;
import mini.shoppingb.mapper.AutoNumMapper;
import mini.shoppingb.mapper.EmployeesMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeesRegisterService {
    @Autowired
    EmployeesMapper employeesMapper;

    @Autowired
    AutoNumMapper autoNumMapper;

    public void execute(EmployeeCommand command) {
        EmployeeDTO dto = new EmployeeDTO();
        dto.setEmpId(command.getEmpId());
        dto.setEmpName(command.getEmpName());
        dto.setEmpAddr(command.getEmpAddr());
        dto.setEmpAddrDetail(command.getEmpAddrDetail());
        dto.setEmpPost(command.getEmpPost());
        dto.setEmpPhone(command.getEmpPhone());
        dto.setEmpEmail(command.getEmpEmail());
        dto.setEmpJumin(command.getEmpJumin());
        dto.setEmpDepartment(command.getEmpDepartment());
        dto.setEmpHireDate(command.getEmpHireDate());
        String empNum = autoNumMapper.autoNum("emp_num", "employees");
        dto.setEmpNum(empNum);
        dto.setEmpPw(command.getEmpPw());
        employeesMapper.regist(dto);
    }
}
