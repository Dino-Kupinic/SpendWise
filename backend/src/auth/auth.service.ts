import {Injectable, UnauthorizedException} from "@nestjs/common"
import {UserService} from "../user/user.service"
import * as crypto from "crypto"
import {User} from "@prisma/client"

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {
  }

  async signIn(username: string, password: string) {
    const user: User = await this.userService.getUser(username)
    const hash: string = crypto.createHash("sha256").update(password).digest("hex")
    if (user?.password !== hash) {
      throw new UnauthorizedException()
    }


  }
}
