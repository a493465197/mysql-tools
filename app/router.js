'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/init', controller.home.init);

 
  router.post('/api/upload', controller.api.upload);
  router.post('/api/runSql', controller.api.runSql);

  router.post('/common/upload', controller.common.upload);


};
