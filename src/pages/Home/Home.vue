<template>
    <div class="HomePage" style="color:#f80000;font-size:36px;">
      <h3>watch 的监听</h3>
      <p>{{obj.a}}</p>
      <input type="text"  v-model="obj.a">
      <button @click="changeObj">changeObj</button>
      <LoadMore ></LoadMore>
    </div>
</template>

<script>
  import LoadMore from '../../components/LoadMore/LoadMore'
    export default {
      name: "Home",
      components:{
        LoadMore
      },
      data(){
        return {
          obj:{
            a:'123'
          }
        }
      },
      watch:{
        obj(newValue,oldValue){
          console.log('newValue : '+newValue);
        }
        // obj:{
        //   handler (newValue,oldValue){
        //     console.log(newValue);
        //   },
        //   deep:true,
        // }
      },
      computed:{

      },
      methods:{
        changeObj(){
         this.obj.a='我是改变的 A'
          console.log(this);
        }
      },
      beforeCreate(){
          console.log('父组件的 beforeCreate');
      },
      created(){
        console.log('父组件的 created');
      },
      mounted(){
        console.log('父组件的 mounted');
      },
      beforeUpdate() {
        console.log('父组件的 beforeUpdate');
      },
      updated() {
        console.log('父组件的 updated');
      },
      beforeDestroy() {
        const time = (new Date()).getTime()
        console.log('updated父级', time)
        console.group('beforeDestroy父级 实例销毁前', time)
      },
      destroyed() {
        const time = (new Date()).getTime()
        console.log('destroyed父级 实例销毁完成', time)
      },


    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/variable.styl";
  .HomePage
    min-height:100vh

</style>
