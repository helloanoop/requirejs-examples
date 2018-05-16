requirejs.config({
  baseUrl: '.',
  paths:{
  },
});

require(['calculator/add', 'calculator/square'], function(add, square) {
  console.log(add(1, 2));
  console.log("Hello");
  console.log(square(5));
});