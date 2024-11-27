package mini.shoppingb.service.employees.employees;

import mini.shoppingb.command.searchCommand;
import mini.shoppingb.domain.employees.EmployeeDTO;
import mini.shoppingb.mapper.EmployeesMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeesSearchService {
    @Autowired
    EmployeesMapper employeesMapper;

    public void execute(searchCommand command, Model model) {
        String name = command.getName();
        List<EmployeeDTO> dto = new ArrayList<>();
        if(name == null || name.isEmpty()) {
            dto = employeesMapper.searchAll();
        } else{
            dto = employeesMapper.search(name);
        }
        model.addAttribute("findEmployees", dto);
    }
}
