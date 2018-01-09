requirejs.config({
  baseUrl: '.',
  paths:{
  },
});
require(['calculator/add'], function(add) {
  console.log(add(1, 2));
});