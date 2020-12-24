import { EggPlugin } from 'egg';
export default {
  static: false, // default is true
  http: {
    enable: true,
    package: 'egg-axios',
  },
} as EggPlugin;
