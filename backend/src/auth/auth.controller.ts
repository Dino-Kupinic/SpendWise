import {Body, Controller, Get, HttpCode, HttpStatus, Post, Req} from "@nestjs/common"
import {AuthService} from "./auth.service"
import {LoginUser} from "../model/user.dto"

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @HttpCode(HttpStatus.OK)
  @Post("login")
  signIn(@Body() loginUser: LoginUser): Promise<{ access_token: string }> {
    return this.authService.signIn(loginUser.username, loginUser.password)
  }

  @Get("profile")
  async getProfile(@Req() req) {
    const token = req.headers.access_token
    if (!token) {
      throw new Error("JWT token is missing in headers")
    }
    const username: string = await this.authService.getUserFromToken(token)

    return username
  }
}
