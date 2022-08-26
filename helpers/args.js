const getArgs = (args) => {
  const res = {};
  const [executer, file, ...rest] = args;

  rest.forEach((element, index, array) => {
    if (element[0] === '-') {
      if (index === array.length - 1) {
        res[element.substring(1)] = true;
      } else if (array[index + 1][0] !== '-') {
        res[element.substring(1)] = array[index + 1];
      } else {
        res[element.substring(1)] = true;
      }
    }
  });

  return res;
};

export { getArgs };
