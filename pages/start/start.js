// pages/start/start.js
const wxCharts = require('../../utils/wxChart.js');
const tableData = require('../../data/data.js').default
let columnChart = null;
const chartData = {
  main: {
    suppllierData: [],
    serviceCenterData: [],
    categories: []
  },
  sub: []
}
tableData.forEach((el, k) => {
  chartData.main.title = '总览'
  chartData.main.suppllierData.push(el.supplier)
  chartData.main.serviceCenterData.push(el.serviceCenter)
  chartData.main.categories.push(el.regionName)
  let itemTemp = {
    title: '',
    suppllierData: [],
    serviceCenterData: [],
    categories: []
  }
  el.children.forEach(elm => {
    itemTemp.title = el.regionName
    itemTemp.suppllierData.push(elm.supplier)
    itemTemp.serviceCenterData.push(elm.serviceCenter)
    itemTemp.categories.push(elm.regionName)
  })
  chartData.sub[k] = itemTemp
})

const chartDataTemp = {
  categories: chartData.main.categories,
  series: [
    {
      name: '供应商',
      data: chartData.main.suppllierData,
    },
    {
      name: '服务中心',
      data: chartData.main.serviceCenterData
    }
  ]
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chartTitle: '总览',
    isMainChartDisplay: true,
    tableData: tableData
  },
  jumpPage(url) {
    wx.navigateTo({
      url
    })
  },
  // 使用说明
  useIntro() {
    this.jumpPage('../use/use')
  },
  // 设计说明
  designIntro() {
    this.jumpPage('../design/design')
  },
  // 彩蛋
  keng() {
    this.jumpPage('../keng/keng')
  },
  // 返回上一级
  backToMainChart() {
    this.setData({
      chartTitle: chartData.main.title,
      isMainChartDisplay: true
    });
    columnChart.updateData(chartDataTemp);
    this.setData({
      tableData: tableData
    })
  },
  // 点击图标栏目
  touchHandler(e) {
    const index = columnChart.getCurrentDataIndex(e);
    if (index > -1 && index < chartData.sub.length && this.data.isMainChartDisplay) {
      this.setData({
        chartTitle: chartData.sub[index].title,
        isMainChartDisplay: false
      });
      columnChart.updateData({
        categories: chartData.sub[index].categories,
        series: [
          {
            name: '供应商',
            data: chartData.sub[index].suppllierData,
          },
          {
            name: '服务中心',
            data: chartData.sub[index].serviceCenterData,
          }
        ]
      });
      this.drillDownTable(index)
    }
  },
  // 下钻
  drillDownTable(index){
    let drillData = []
    tableData.forEach((el,k) => {
      if (k === index) {
        drillData = el.children
      }
    },[])
    this.setData({
      tableData: drillData
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady(e) {
    columnChart = new wxCharts({
      canvasId: 'columnCanvas',
      type: 'column',
      animation: true,
      ...chartDataTemp,
      yAxis: {
        // title: '数量',
        min: 0
      },
      xAxis: {
        disableGrid: false,
        type: 'calibration'
      },
      extra: {
        column: {
          width: 20
        }
      },
      width: 360,
      height: 200,
    });
  }
})