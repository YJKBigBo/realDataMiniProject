package mini.shoppingb.service.members;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.AuthInfoDTO;
import org.springframework.stereotype.Service;

@Service
public class MemberSessionCheckService {

    public boolean execute(HttpSession session){
        AuthInfoDTO auth = (AuthInfoDTO) session.getAttribute("auth");
        String memNum = auth.getUserNum();
        if(memNum != null && !memNum.isEmpty()){
            return true;
        } else{
            return false;
        }
    }
}
