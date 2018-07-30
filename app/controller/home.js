'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.redirect('/public/index-1.html');
    // ctx.body = await ctx.service.home.index(ctx.request.query);
  }
  async list() {
    const { ctx } = this;
    const data = [
      {
        time: '2018-07-01',
      },
      {
        time: '2018-07-02',
      },
      {
        time: '2018-07-03',
      },
      {
        time: '2018-07-04',
      },
      {
        time: '2018-07-05',
      },
    ];
    // const tk = ctx.headers.authorization.split(' ')[1];
    // const i = ctx.app.jwt.verify(tk, ctx.app.config.jwt.secret);
    // console.log(i.data.info.username);
    // console.log(tk);
    // if(i.data.info.username)
    ctx.body = {
      status: 200,
      data,
      msg: 'success',
    };
  }
}

module.exports = HomeController;
