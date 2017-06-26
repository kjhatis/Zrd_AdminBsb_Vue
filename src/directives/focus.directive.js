import Vue from 'vue'

Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    console.log('进入自定义指令')
    // 聚焦元素
    el.focus()
  }
})