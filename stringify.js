function stringify (element) {
  var type = typeof element;
  if ((type === 'number') || (type === 'boolean')) {
    return element;
  }
  else if (type === 'string') {
    return ('"' + element + '"');
  }
  else if ((type === 'function') || (type === 'undefined')) {
    return '';
  }
  else {
    if (element == null) {
      return element;
    }
    else if (element instanceof Array) {
      for (var a = 0; a < element.length; a++) {
        element[a] = stringify(element[a]);
      }
      return ('[' + element + ']');
    }
    else {
      var answer = [];
      for (var i in element) {
        var str = '';
        var change = stringify(element[i]);
        if (change !== '') {
          str = str + '"' + i + '":' + change;
          answer.push(str);
        }
      }
      return ('{' + answer.join() + '}');
    }
  }
}

var obj = {
  name: 'Madhu',
  rollNo: 25,
  graduate: true,
  age: null,
  marks: [83, 89, 86],
  college: undefined,
  nestedObj: {
    name: 'Madhu',
    rollNo: 25,
    graduate: true,
    age: null,
    marks: [83, 89, 86]
  },
  students: function () {}
};

console.log(stringify(obj));

console.log(JSON.stringify(obj)); // for checking
