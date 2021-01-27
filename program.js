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
  console.log(pttsnt(inp).join(" "));
}

module.exports = main;
