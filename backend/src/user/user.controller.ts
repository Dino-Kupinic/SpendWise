import {Body, Controller, Get, Injectable, Post} from "@nestjs/common"
import {UserService} from "./user.service"
import {User as UserModel} from "@prisma/client"

@Controller("users")
@Injectable()
export class UserController {
  constructor(private userService: UserService) {
  }

  /**
   * Retrieves a list of user models.
   *
   * @returns {Promise<UserModel[]>} A promise that resolves to an array of user models.
   */
  @Get()
  async getUsers(): Promise<UserModel[]> {
    return this.userService.getUsers()
  }

  /**
   * Creates a new user.
   *
   * @param {Object} user - The user object.
   * @param {string} user.username - The username of the user.
   * @param {string} user.password - The password of the user.
   * @param {string} user.email - The email of the user.
   * @return {Promise<UserModel>} A promise that resolves to the created user model.
   */
  @Post()
  async createUser(
      @Body() user: { username: string, password: string, email: string, terms: boolean },
  ): Promise<UserModel> {
    return this.userService.createUser(user)
  }


}