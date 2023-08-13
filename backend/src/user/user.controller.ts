import {Body, Controller, Injectable, Post} from "@nestjs/common"
import {UserService} from "./user.service"
import {User as UserModel} from "@prisma/client"

@Controller("users")
@Injectable()
export class UserController {
  constructor(private userService: UserService) {
  }

  @Post()
  async createUser(
      @Body() user: { username: string, password: string, email: string }
  ): Promise<UserModel> {
    return this.userService.createUser(user)
  }


}