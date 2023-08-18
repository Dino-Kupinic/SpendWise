import {Body, Controller, HttpCode, HttpStatus, Post} from "@nestjs/common"
import {AuthService} from "./auth.service"
import {LoginUser} from "../model/user"

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @HttpCode(HttpStatus.OK)
  @Post("login")
  signIn(@Body() loginUser: LoginUser): Promise<{access_token: string}> {
    return this.authService.signIn(loginUser.username, loginUser.password)
  }


}
