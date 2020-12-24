import { Inject, Provide, Config } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';
import { Context } from 'egg';
@Provide()
export class UserService {
  @Inject()
  ctx: Context;

  @Config()
  basicHttpUrl;
  async getUser(options: IUserOptions) {
    console.log(this.ctx);

    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }

  async getUsers() {
    return this.ctx.http.post(`${this.basicHttpUrl}/auth/login`, {
      code: '',
      password:
        'X3fYdInCATohf7UMSpnxYWwWxyCq1TQRduUyRxEBEXJPtKvy+nfSOFQaEYdNVCTxzuRh5CdAPBRGVbcOD0wV3FmxLAyG5l/aPcbqftGhZn9MSu08Iibw0UxNY5Zf1As4A4wJPF4cW7d2I+Cvtu5nNsiXrNYw9kpk4CfpFkGASdg=',
      username: 'admin',
    });
  }
}
