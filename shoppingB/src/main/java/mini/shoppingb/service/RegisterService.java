package mini.shoppingb.service;

import mini.shoppingb.command.EmployeeCommand;
import mini.shoppingb.domain.EmployeeDTO;
import mini.shoppingb.mapper.AutoNumMapper;
import mini.shoppingb.mapper.RegisterMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {
    @Autowired
    RegisterMapper registerMapper;

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
        registerMapper.regist(dto);
    }
}
