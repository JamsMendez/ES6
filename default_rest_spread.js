function fn (a=0, b=0) {
  var res = a + b;
  console.log(res);
}

// Values for Default
fn(5, 6);
fn(5);
fn();

// Arguments
function args (x, ...y) {
  console.log(x);
  console.log(y.length, y);
}

args('Hola', 56, true, [1, 2]);


function arg (x, y, z) {
  console.log(x, y, z);
}

arg(4, 10, 3);
arg(...[4, 10, 3]);
arg(4, ...[10, 3]);
arg([4, 10, 3]);
