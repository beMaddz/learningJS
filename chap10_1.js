var monthName = (function () {
  var months = ['January', 'February']
  return {
    name: function (num) {
      return months[num]
    },
    number: function (nam) {
      return months.indexOf(nam)
    }
  }
})()
console.log(monthName.name(0))
