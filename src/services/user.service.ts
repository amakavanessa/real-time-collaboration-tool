import { genSalt, hash } from "bcrypt";
import { User } from "../db/models/user.model";
import jwt from "jsonwebtoken";

class UserService {
  public findUserByEmail = async (email: string): Promise<User | null> => {
    const user = await User.findOne({ where: { email } });

    return user;
  };

  public createUser = async (email: string, password: string) => {
    const salt = await genSalt();
    const hashedPassword = await hash(password, salt);
    const verificationToken = jwt.sign({ email }, "verify_secret");
    const user = await User.create({
      email: email,
      password: hashedPassword,
      verificationToken: verificationToken,
    });

    ////call method to send verification email
  };
}

const userService = new UserService();

export { userService };
