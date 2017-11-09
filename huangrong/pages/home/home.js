Page({
  data: {
    canAdd: true,
    canSub:false,
    Array: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    ArrayBuff: ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  },
  add: function (e) {
    let newArray = this.data.Array
    newArray.push(this.data.ArrayBuff[newArray.length - 7])
    this.setData({
      Array: newArray,
      canAdd: newArray.length < 26,
      canSub: newArray.length > 7
    })
  },
  sub: function (e) {
    let newArray = this.data.Array
    newArray.pop()
    this.setData({
      Array: newArray,
      canAdd: newArray.length < 26,
      canSub: newArray.length > 7
    })
  }
})
