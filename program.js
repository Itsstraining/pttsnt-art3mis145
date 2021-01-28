function pttsnt(inp) {
  let i = 2;
  let result = [];
  while (inp > 1) {
    if (inp % i == 0) {
      result.push(i);
      inp = inp / i;
    } else {
      i++;
    }
  }
  return result;
}

function main(input) {
  let inp = parseInt(input);
  if (inp == 0) {
    return console.log(inp);
  } else {
    console.log(pttsnt(inp).join(" "));
  }
}

module.exports = main;
