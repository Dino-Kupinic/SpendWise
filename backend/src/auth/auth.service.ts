import {Injectable, UnauthorizedException} from "@nestjs/common"
import {UserService} from "../user/user.service"
import * as crypto from "crypto"
import {User} from "@prisma/client"
import {JwtService} from "@nestjs/jwt"

@Injectable()
export class AuthService {
  constructor(
      private userService: UserService,
      private jwtService: JwtService,
  ) {
  }

  async signIn(username: string, password: string) {
    const user: User = await this.userService.getUser(username)
    const hash: string = crypto.createHash("sha256").update(password).digest("hex")
    if (user?.password !== hash) {
      throw new UnauthorizedException()
    }
    const payload: object = {
      sub: user.id,
      username: user.username,
    }
    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }
}
