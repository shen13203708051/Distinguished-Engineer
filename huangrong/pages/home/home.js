Page({
  data: {
    canAdd: true,
    canSub:false,
    Array: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    ArrayBuff: ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  },
  add: function (e) {
    const length = this.data.Array.length
    this.data.Array.push(this.data.ArrayBuff[length - 7])
    this.setData({
      Array: this.data.Array,
      canAdd: length < 25,
      canSub: length > 5
    })
  },
  sub: function (e) {
    const length = this.data.Array.length
    this.data.Array.pop()
    this.setData({
      Array: this.data.Array,
      canAdd: length < 25,
      canSub: length > 8
    })
  }
})
