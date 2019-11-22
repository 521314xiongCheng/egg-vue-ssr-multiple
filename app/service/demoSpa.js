const Service = require('egg').Service;

class DemoSpaService extends Service {
  async getList() {
    const { config } = this;
    // config.url是接口的公共地址，推荐在app/config/config.default.js配置
    const re = await this.ctx.curl(`${config.baseUrl}/mock/272/staff/list`)
    const res = JSON.parse(re.data)  // 这里根据实际返回的数据进行格式化处理，最后返回一个对象
    return res;
  }

  async getListItem() {
    const { config } =this
    const re = await this.ctx.curl(`${config.baseUrl}/mock/272/staff/detail`)
    const res = JSON.parse(re.data)  // 这里根据实际返回的数据进行格式化处理，最后返回一个对象
    return res;
  }
}

module.exports = DemoSpaService;