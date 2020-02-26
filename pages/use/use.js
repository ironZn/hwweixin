// pages/use/use.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  previewImage(e) {
    const current = e.target.dataset.src;
    wx.previewImage({
      current: current,  
      urls: [current]
    })
  }

})