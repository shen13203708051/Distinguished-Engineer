var extraLine = [];
Page({
    data: {
        array: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        extraArray: ['h', 'i', 'j', 'k', 'l', 'm', 'n',
            'o', 'p', 'q', 'r', 's', 't',
            'u', 'v', 'w', 'x', 'y', 'z'
        ],
    },
    add: function(e) {   
         if (this.data.array.length < 26){
            let  newArray=this.data.array   
            let  newExtraArray=this.data.extraArray   
            let  N =newExtraArray.shift ()     
            newArray.push(N)    
              this.setData({     
                 array: newArray,   
                extraArray: newExtraArray    
              })    
           }    
        }
})   


//         this.setData({
//           array :
//       
//     })
// }
//   },
//   minus: function(e) {
//     if (array.length > 0) {
//       array.pop()
//       this.setData({
//        
//       })
//     }