function fn () {
  var i = 6;
  var res = 0;
  for (let i = 0; i < 10; i++) {
    res = res + i;
  }
  console.log('Value of res: ', res);
  console.log('Value of i (var): ', i);
}

fn();

function fnOther (input) {
  var res = 0;
  const porc = 100;
  if(input){
    let res = input * porc;
    console.log('Value res (let): ', res);
  }else{
    // Error
    // porc = false;
  }
  console.log('Value input (param): ', res, porc);
}

fnOther(5);
