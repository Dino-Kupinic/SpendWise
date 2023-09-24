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

  async decodeToken(token: string): Promise<JwtPayload> {
    try {
      return this.jwtService.decode(token) as Promise<JwtPayload>
    } catch (error) {
      throw new Error("invalid JWT token")
    }
  }

  async getUserFromToken(token: string) {
    const decodedToken = await this.decodeToken(token)
    const username = decodedToken.username
    if (!username) {
      throw new Error("username not found in JWT payload.")
    }

    return username
  }
}
