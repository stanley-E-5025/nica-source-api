import { Controller, Get } from "@nestjs/common";
import { users } from "src/ enity/users.enity";
import { UsersService } from "./users.service";

@Controller()
export class UserController {
    constructor(private UserService: UsersService) {}

    @Get() 
    getAllUsers(): Promise <users[]>{
        return  this.UserService.getAllUsers();
    }
}