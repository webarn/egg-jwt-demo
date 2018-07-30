'use strict';

const Controller = require('egg').Controller;

class UsersController extends Controller {
  async login() {
    const { ctx } = this;
    const info = ctx.request.body;
    if (info.username === 'admin' && info.password === '123456') {
      // 生成token
      const token = await this.service.actionToken.apply(info);
      // ctx.cookies.set('jwt', token, {
      //   signed: false,
      //   maxAge: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
      //   httpOnly: false,
      // });
      ctx.body = {
        code: 0,
        data: {
          name: info.username,
          token,
        },
        msg: 'success',
      };
      return;
    }
    ctx.body = {
      code: -1,
      msg: 'error',
    };
  }
}
module.exports = UsersController;
