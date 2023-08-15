import {Injectable} from "@nestjs/common"
import {PrismaService} from "../prisma/prisma.service"
import {Prisma, User} from "@prisma/client"
import * as crypto from "crypto"


@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {
  }

  /**
   * Retrieves a list of all users.
   *
   * @async
   * @returns {Promise<User[] | undefined>} A Promise that resolves to an array of user objects.
   */
  async getUsers(): Promise<User[] | undefined> {
    return this.prisma.user.findMany()
  }

  /**
   * Creates a new user.
   *
   * @param {Prisma.UserCreateInput} data - The data required to create a new user.
   * @return {Promise<User>} - A promise that resolves to the created user.
   */
  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    const hash: string = crypto.createHash("sha256").update(data.password).digest("hex")
    return this.prisma.user.create({
      data: {
        ...data,
        password: hash,
      },
    })
  }
}