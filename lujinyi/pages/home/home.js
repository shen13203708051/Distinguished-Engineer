// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  arraynow:['a', 'b', 'c', 'd', 'e' , 'f'],
  arrayTemp:['a', 'b', 'c', 'd', 'e' , 'f' , 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  data: {
    array:['a', 'b', 'c', 'd', 'e' , 'f', 'g'],
    disabled1: true,
    disabled2:false
  },

add: function(e){

},
minus: function(e){
this.arraynow.pop()
this.setData({
array:this.arraynow
})
}
})
