//index.js
//获取应用实例
const app = getApp()

Page({

  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    name:"home",
    students:[{id:10,name:"张三",age:25},
      { id: 11, name: "李四", age:26 },
      { id: 12, name: "王五", age:27 }],
    counter:0

  },
  handleBtenClick(){
    //错误的 界面不会刷新
    // this.data.counter +=1,

    this.setData({
counter:this.data.counter+1
    })
  },
  handleSubtraction(){

    this.setData({
      
      counter: this.data.counter - 1
    })
  },
  onLoad: function () {
   
  },
  
})
