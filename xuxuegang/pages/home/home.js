Page({
  data: {
    arr: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    alp:['h', 'i', 'j' , 'k' , 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'],
    arrIsFull: false,
    alpIsFull: true
  },
  add: function(e) {
    if(this.data.arr.length < 26){
      var alpha = this.data.alp.shift()
      this.data.arr.push(alpha)
      this.setData({
        alpIsFull: false
      })
    }
    else this.setData({
      arrIsFull: true
    })

  },
  remove: function(e) {
    if(this.data.arr.length > 7){
      var alpha = this.data.arr.pop()
      this.data.alp.unshift(alpha)
      this.setData({
        arrIsFull: false
      })
    }
    else this.setData({
      alpIsFull: true
    })
  }
})
