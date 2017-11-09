// pages/home/home.js
var texts = [
  "8 'h'",
  "9 'i'",
  "10 'j'",
  "11 'k'",
  "12 'l'",
  "13 'm'",
  "14 'n'",
  "15 'o'",
  "16 'p'",
  "17 'q'",
  "18 'r'",
  "19 's'",
  "20 't'",
  "21 'u'",
  "22 'v'",
  "23 'w'",
  "24 'x'",
  "25 'y'",
  "26 'z'"
];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    text: '',
    canAdd: true,
    canRemove: false
  },
  extraLine: [],
  add: function (e) {
    this.extraLine.push(texts[this.extraLine.length % 19])
    this.setData({
      text: this.extraLine.join('\n'),
      canAdd: this.extraLine.length < 19,
      canRemove: this.extraLine.length > 0
    })
  },
  delete: function (e) {
    if (this.extraLine.length > 0) {
      this.extraLine.pop()
      this.setData({
        text: this.extraLine.join('\n'),
        canAdd: this.extraLine.length < 19,
        canRemove: this.extraLine.length > 0
      })
    }
  }
})
