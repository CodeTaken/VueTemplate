import Alert from '../components/Alert/alert'
import Vue from 'vue'
// 给你 notice 添加 一个创建组件实例的方法，可以自动编辑并挂载
Alert.getInstance = props =>{
  // 创建 vue 实力
  const instance = new Vue({
    render(h){
      return h(Alert,props)
    }
  }).$mount(); // 挂载   ?$mout('body')
  // 手动插入文档中
  document.body.appendChild(instance.$el)
  // 获取 alert 实例
  const alert = instance.$children[0]
  return alert
}
// 全局创建 一个 实例
let msgInstance = null;
function getInstance(){
  msgInstance = msgInstance || Alert.getInstance()
  return msgInstance
}


//
export default {
  info({}){
    getInstance()
  }
}
