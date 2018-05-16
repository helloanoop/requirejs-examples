define(['calculator/multiply'], (mul) => {
  return function(x){
    return mul(x, x); 
  };
});