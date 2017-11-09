Page({
  data: {
    arr: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    alp:['h', 'i', 'j' , 'k' , 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'],
  },
  add: function(e) {
    let newArr = this.data.arr;
    let newAlp = this.data.alp;
    let alpha = newAlp.shift();
    newArr.push(alpha)
    this.setData({
      arr: newArr,
      alp: newAlp
    })
  },
  remove: function(e) {
    let newArr = this.data.arr;
    let newAlp = this.data.alp;
    let alpha = newArr.pop()
    newAlp.unshift(alpha)
    this.setData({
      arr: newArr,
      alp: newAlp
    })
  }
})
