import { Inject, Provide, Config } from '@midwayjs/decorator';
import { Context } from 'egg';
import { AuthLogin } from './index.d';
@Provide()
export class LoginService {
  @Inject()
  ctx: Context;
  @Config()
  basicHttpUrl;
  async login(params: AuthLogin) {
    return this.ctx.http.post(`${this.basicHttpUrl}/auth/login`, params);
  }
}
