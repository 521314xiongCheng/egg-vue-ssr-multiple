module.exports = app => {

  return class DemoSpaController extends app.Controller {
    async index() {
      const { ctx, service } = this;
      const url = ctx.url.replace(/\/demoSpa/, '');
      // let data = await service.demoSpa.getList()
      await this.ctx.render('demoSpa/index.js', { ctx, url });
    }

    async listItem() {
      const { ctx, service } = this;
      let data = await service.demoSpa.getListItem()
      // await ctx.render('demoSpa/index.js', data);
      ctx.body = data
    }

    async list() {
      const { ctx, service } = this;
      let data = await service.demoSpa.getList()
      // ctx.body = data
      const url = ctx.url.replace(/\/demoSpa/, '');
      await ctx.render('demoSpa/index.js', { ctx, url });
    }
  };
};