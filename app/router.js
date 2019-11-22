
module.exports = app => {
  app.get('/', app.controller.home.index);
  app.get('/client', app.controller.home.client);
  app.get('/pager', app.controller.home.pager);
  app.get('/demoSpa/list', app.controller.demoSpa.demoSpa.list);
  app.get('/demoSpa/api/detail', app.controller.demoSpa.demoSpa.listItem);
  // app.get('/demoSpa(/.+)?', app.controller.demoSpa.demoSpa.index);
};
