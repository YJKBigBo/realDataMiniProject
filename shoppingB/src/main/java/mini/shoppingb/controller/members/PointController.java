package mini.shoppingb.controller.members;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import mini.shoppingb.domain.all.AuthInfoDTO;
import mini.shoppingb.domain.members.IniDTO;
import mini.shoppingb.domain.members.MembersDTO;
import mini.shoppingb.mapper.PointMapper;
import mini.shoppingb.service.members.point.INIstdpayPcReturn;
import mini.shoppingb.service.members.point.IniPayReqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@Controller
public class PointController {

    @Autowired
    IniPayReqService iniPayReqService;

    @Autowired
    INIstdpayPcReturn iNIstdpayPcReturn;

    @Autowired
    PointMapper pointMapper;


    @GetMapping("/members/point/charge")
    public String pointCharge(@RequestParam("memberPoint") Integer point, Model model) {
        String pointNum = UUID.randomUUID().toString();
        try {
            iniPayReqService.execute(model, pointNum);
            model.addAttribute("price", point);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return "thymeleaf/payment/payment";
    }

    @RequestMapping("/point/INIstdpay_pc_return")
    public String payReturn(HttpServletRequest request){
        iNIstdpayPcReturn.execute(request);
        return "redirect:/";
    }

    @PostMapping("/point")
    @ResponseBody
    public void point(@RequestBody Map<String, Integer> requestData, HttpSession session) {
        Integer point = requestData.get("memberPoint");
        System.out.println(point);
        AuthInfoDTO auth = (AuthInfoDTO) session.getAttribute("auth");
        String memberNum = auth.getUserNum();
        pointMapper.pointUpdate(memberNum, point);
    }

}
