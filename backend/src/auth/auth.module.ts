import {Module} from "@nestjs/common"
import {AuthController} from "./auth.controller"
import {AuthService} from "./auth.service"
import {UserModule} from "../user/user.module"
import {JwtModule, JwtService} from "@nestjs/jwt"
import {jwtConstants} from "./constants"

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      //secret: jwtConstants.secret,
      // TODO: fix
      secret: "asAgfJJ12ks!asSSQk§§asdj122asaAAvdPPo2918kLL@!2&&sja231AJSIIAJSIKAKAJAJ",
      signOptions: {
        expiresIn: "60s",
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtService],
  exports: [AuthService]
})
export class AuthModule {
}
