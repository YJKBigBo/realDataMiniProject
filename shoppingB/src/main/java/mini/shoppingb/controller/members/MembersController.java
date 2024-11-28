package mini.shoppingb.controller.members;

import jakarta.servlet.http.HttpSession;
import mini.shoppingb.command.members.MembersCommand;
import mini.shoppingb.domain.members.MembersDTO;
import mini.shoppingb.service.members.MemberLoginService;
import mini.shoppingb.service.members.MemberRegistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MembersController {
    @Autowired
    MemberRegistService memberRegistService;

    @Autowired
    MemberLoginService memberLoginService;

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
}