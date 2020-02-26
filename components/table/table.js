// components/table/table.js
Component({
  /**
   * 组件的属性列表
   */
  relations: {
    '../table-column/table-column': {
      type: 'child', // 关联的目标节点应为子节点
      linked: function (target) {
        // console.log(target)
        // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
      },
      linkChanged: function (target) {
        // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
      },
      unlinked: function (target) {
        // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
      }
    },
    
  },

  properties: {
    tableData:{
      type: Array,
      value: [],
      observer: function (newVal, oldVal) { 
        this.makeSort(null)
      }
    },
    expend: {
      type: String,
      value: 'hide'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    thead: [],
    tbody: []
  },

  ready() {
    // const one = this.selectOwnerComponent()
    // 获取所有x-table-column组件
    this.getAllCol()
    // 初始化排序
    this.makeSort(null)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    makeSort(e) {
      let sort = ''
      let prop = ''
      const thead = this.data.thead
      if(e) {
        sort = e.currentTarget.dataset.sortflag.sort
        prop = e.currentTarget.dataset.sortflag.colProp
        thead.forEach(el => {
          if (el.colProp === prop) {
            if (el.sort === 'asc' && sort === 'asc') {
              el.sort = 'desc'
            } else if (el.sort === 'desc' && sort === 'desc') {
              el.sort = 'asc'
            }
          }
        })
        this.setData({
          thead
        })
      } else {
        // 页面初始化sort
        this.data.thead.forEach(el => {
          if (el.sort) {
            if (el.sort === 'asc' ) {
              sort = 'desc'
            } else if (el.sort === 'desc') {
              sort = 'asc'
            }
            prop = el.colProp
          }
        })
      }
      const tableData = this.data.tableData
      if (sort === 'asc') {
        tableData.sort((a, b) => b[prop] - a[prop])
      } else if (sort === 'desc') {
        tableData.sort((a, b) => a[prop] - b[prop])
      }
      this.setData({
        tableData
      })
    },
    showExpend(e) {
      if (this.properties.expend !== 'show') {
        return
      }
      const id = e.currentTarget.id
      const tableData = this.data.tableData
      tableData.forEach((el,k) => {
        if (k === +id) {
          el.show = !el.show
        } else {
          el.show = false
        }
      })
      this.setData({
        tableData
      })
    },
    getAllCol() {
      // 获取slot子节点
      const wnodes = this.getRelationNodes('../table-column/table-column')
      const thead = []
      wnodes.forEach(el => {
        thead.push({
          colLabel: el.properties.colLabel,
          colProp: el.properties.colProp,
          sort: el.properties.sort,
          css: el.properties.css
        })
      })
      this.setData({
        thead
      })
      // console.log(wnodes)
    }
  }
})
