package mini.shoppingb.service.employees.employees;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.command.employees.EmployeeCommand;
import mini.shoppingb.domain.AuthInfoDTO;
import mini.shoppingb.domain.employees.EmployeeDTO;
import mini.shoppingb.mapper.EmployeesMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.net.URL;
import java.util.UUID;

@Service
public class EmployeesUpdateService {
    @Autowired
    EmployeesMapper employeesMapper;

    public void execute(HttpSession session, EmployeeCommand command) {
        AuthInfoDTO auth = (AuthInfoDTO) session.getAttribute("auth");
        String empNum = auth.getUserNum();
        EmployeeDTO dto = employeesMapper.detail(empNum);
        String empPw = dto.getEmpPw();

        if(command.getEmpPw().equals(empPw)) {
            dto.setEmpName(command.getEmpName());
            System.out.println(command.getEmpAddr());
            dto.setEmpAddr(command.getEmpAddr());
            dto.setEmpAddrDetail(command.getEmpAddrDetail());
            dto.setEmpPost(command.getEmpPost());
            dto.setEmpPhone(command.getEmpPhone());
            dto.setEmpEmail(command.getEmpEmail());
            dto.setEmpJumin(command.getEmpJumin());
            if(auth.getDepartment().equals("manage")) {
                dto.setEmpDepartment(command.getEmpDepartment());
                dto.setEmpHireDate(command.getEmpHireDate());
            }

            URL resource = getClass().getClassLoader().getResource("static/upload");
            String filrDir = resource.getFile();
            MultipartFile mf = command.getEmpImage();
            String originalFile = mf.getOriginalFilename();
            String extension = originalFile.substring(originalFile.lastIndexOf("."));
            String storeName = UUID.randomUUID().toString().replace("-", "");
            String storeFileName = storeName + extension;

            File file = new File(filrDir + "/" + storeFileName);
            try {
                mf.transferTo(file);
            } catch (Exception e) {
                e.printStackTrace();
            }
            dto.setEmpImage(storeFileName);
        }
        employeesMapper.update(dto);
    }
}
