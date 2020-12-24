import { EggAppConfig, PowerPartial } from 'egg';
export type DefaultConfig = PowerPartial<EggAppConfig>;
export default () => {
  const config = {} as EggAppConfig;
  config.basicHttpUrl = 'http://dev.do.xmfunny.com/api/v1';
  return config;
};
