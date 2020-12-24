import {
  Controller,
  Provide,
  Inject,
  Post,
  Body,
  ALL,
} from '@midwayjs/decorator';
import { LoginService } from '../../service/login/index';
@Provide()
@Controller('/api')
export class LoginController {
  @Inject()
  loginService: LoginService;

  @Post('/auth/login')
  async login(@Body(ALL) login) {
    console.log(1111);

    console.log(login);

    const res = this.loginService.login(login);
    return {
      success: true,
      data: res,
    };
  }
}
