package mini.shoppingb.controller.members;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.command.members.MembersCommand;
import mini.shoppingb.service.members.members.MemberLoginService;
import mini.shoppingb.service.members.members.MemberRegistService;
import mini.shoppingb.service.members.members.MemberSessionCheckService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MembersController {
    @Autowired
    MemberRegistService memberRegistService;

    @Autowired
    MemberLoginService memberLoginService;

    @Autowired
    MemberSessionCheckService memberSessionCheckService;

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
}
