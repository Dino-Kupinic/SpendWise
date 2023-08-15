import {Body, Controller, Get, Injectable, Param, Post} from "@nestjs/common"
import {UserService} from "./user.service"
import {User as UserModel} from "@prisma/client"

@Controller("users")
@Injectable()
export class UserController {
  constructor(private userService: UserService) {
  }

  /**
   * Retrieves a user by username.
   *
   * @param {string} username - The username of the user to retrieve.
   * @return {Promise<UserModel | undefined>} A promise that resolves to the user model if found or undefined if not
   * found.
   */
  @Get(":username")
  async getUser(@Param("username") username: string): Promise<UserModel | undefined> {
    return this.userService.getUser(username)
  }

  /**
   * Retrieves the list of users.
   *
   * @return {Promise<UserModel[] | undefined>} A promise that resolves to an array of user models or undefined if
   * no users are found.
   */
  @Get()
  async getUsers(): Promise<UserModel[] | undefined> {
    return this.userService.getUsers()
  }

  /**
   * Creates a new user.
   *
   * @param {Object} user - The user object.
   * @param {string} user.username - The username of the user.
   * @param {string} user.password - The password of the user.
   * @param {string} user.email - The email address of the user.
   * @param {boolean} user.terms - Indicates if the user has accepted the terms.
   * @returns {Promise<UserModel>} A promise that resolves to the created user object.
   */
  @Post()
  async createUser(
      @Body() user: { username: string, password: string, email: string, terms: boolean },
  ): Promise<UserModel> {
    return this.userService.createUser(user)
  }
}
