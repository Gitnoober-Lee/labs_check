package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

/**
 * @Description:
 * @ClassName: UserController
 * @Package: com.example.demo
 * @Author: Junpeng Li
 * @CreateTime: 11/19/23 12:03 AM
 */
@RestController
public class UserController {

    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/checkLogin")
    @ResponseBody
    @CrossOrigin(origins = "*")
    public boolean checkUserLogin(@RequestBody User user) {
        if (user == null) {
            return false;
        }
        User u = this.userRepository.findByUserId(user.getUserId());
        return user.equals(u);
    }

    @PostMapping("/signUp")
    @ResponseBody
    @CrossOrigin(origins = "*")
    public String signUp(@RequestBody User user) {
        if (user == null) {
            return "Failed, user = null";
        }
        User u = this.userRepository.findByUserId(user.getUserId());
        if (u != null) {
            return "Failed, user = " + user.userId + " already exist.";
        }
        this.userRepository.save(user);
        return "Success";
    }

    @GetMapping("/findAllUsers")
    @ResponseBody
    @CrossOrigin(origins = "*")
    public List<User> findAllUsers() {
        Iterable<User> users = userRepository.findAll();
        List<User> userList = new ArrayList<>();
        users.forEach(userList::add);
        return userList;
    }
}