// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    strs: ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z'],
    text: '',
    canAdd: true,
    canRemove: false
  },
  extraLine: [],
  add: function (e) {
    const len = this.data.arr.length;
    this.data.arr.push(this.data.strs[len - 7])
    this.setData({
      arr:this.data.arr,
      canAdd: this.data.arr.length < 26,
      canRemove: this.data.arr.length > 7
    })
  },
  delete: function (e) {
    if (this.data.arr.length > 0) {
      this.data.arr.pop()
      this.setData({
        arr:this.data.arr,
        canAdd: this.data.arr.length < 26,
        canRemove: this.data.arr.length > 7
      })
    }
  }
})
