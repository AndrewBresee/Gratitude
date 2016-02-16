var postController = require('../Post/postController.js');
var userController = require('../Users/usersController.js');

module.exports = function (app, express) {

   app.get('/api/post', postController.allPosts);
   app.post('/api/post', postController.newPost);

  // app.get('/:code', linksController.navToLink);
  // app.post('/api/signin', userController.signin);
  app.post('/api/signup', userController.signup);


  // authentication middleware used to decode token and made available on the request
  // app.use('/api/links', helpers.decode);
 
  // app.post('/api/post', postController.newLink);

};

