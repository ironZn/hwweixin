// components/table-column/table-column.js
Component({
  /**
   * 组件的属性列表
   */
  relations: {
    '../table/table': {
      type: 'parent', // 关联的目标节点应为子节点
      linked: function (target) {
        // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
        // console.log('[custom-ul] a child is linked: ', target)
      },
      linkChanged: function (target) {
        // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
      },
      unlinked: function (target) {
        // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
      }
    }
  },
  properties: {
    colProp: {
      type: String
    },
    colLabel: {
      type: String
    },
    sort: {
      type: String
    },
    css: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    row: {
      
    }
  },

  ready() {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
