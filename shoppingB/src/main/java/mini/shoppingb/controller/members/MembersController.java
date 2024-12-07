package mini.shoppingb.controller.members;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.command.members.MembersCommand;
import mini.shoppingb.domain.members.MembersDTO;
import mini.shoppingb.service.members.members.MemberLoginService;
import mini.shoppingb.service.members.members.MemberRegistService;
import mini.shoppingb.service.members.members.MemberSessionCheckService;
import mini.shoppingb.service.members.members.MemberUpdateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class MembersController {
    @Autowired
    MemberRegistService memberRegistService;

    @Autowired
    MemberLoginService memberLoginService;

    @Autowired
    MemberSessionCheckService memberSessionCheckService;

    @Autowired
    MemberUpdateService memberUpdateService;

    @PostMapping("/members/regist")
    public int memberRegist(@RequestBody MembersCommand membersCommand) {
        int i = memberRegistService.execute(membersCommand);
        return i;
    }

    @PostMapping("/members/login")
    public int memberLogin(@RequestBody MembersCommand membersCommand, HttpSession session) {
        int i = memberLoginService.execute(membersCommand, session);
        return i;
    }

    @GetMapping("/members/sessionCheck")
    public boolean memberSessionCheck(HttpSession session) {
        boolean check = memberSessionCheckService.execute(session);
        return check;
    }

    @RequestMapping("/members/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }

    @RequestMapping("/members/update/info")
    public void updateInfo(@RequestBody MembersDTO membersDTO, HttpSession session){
        memberUpdateService.execute(membersDTO, session);
    }
}
