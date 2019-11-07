<template>
    <div class="HomePage" style="color:#f80000;font-size:36px;">
      <h3>watch 的监听</h3>
      <p>{{obj.a}}</p>
      <input type="text"  v-model="obj.a">
      <button @click="changeObj">changeObj</button>
      <LoadMore ></LoadMore>
      <router-link to="/other">跳转</router-link>


      <Elinput v-model="someValue"></Elinput>
      <p> {{someValue}}</p>

      <ElinputItem label="用户名" prop="name">
         <Elinput v-model="form.userName"></Elinput>
      </ElinputItem>
      <ElinputItem label="密码" prop="password">
        <Elinput v-model="form.pwd" type="password"></Elinput>
      </ElinputItem>
      <p>{{form}}</p>


      <ElForm :model="form2" :rule="rules">
        <ElinputItem label="用户名" prop="name">
          <Elinput v-model="form2.userName"></Elinput>
        </ElinputItem>
        <ElinputItem label="密码" prop="password">
          <Elinput v-model="form2.pwd" type="password"></Elinput>
        </ElinputItem>

      </ElForm>


    </div>
</template>

///v-model是一个语法糖，等于:value+@input

<script>
  import LoadMore from '../../components/LoadMore/LoadMore'
  import Elinput from '../../components/Input/Input'
  import ElinputItem from '../../components/InputItem/InputItem'
  import ElForm from '../../components/Form/Form'

    export default {
      name: "Home",
      provide(){
        return{
          Pvalue:'父元素的 provide'
        }
      },
      components:{
        LoadMore,
        Elinput,
        ElinputItem,
        ElForm
      },
      data(){
        return {
          obj:{
            a:'123'
          },
          someValue:'',
          form:{
            userName:'',
            pwd:''
          },
          form2:{
            userName:'',
            pwd:''
          },
          rules:{
            name:[
              {required:true,message:"请输入名称"},
              {min:6,max:10,message:"请输入6到10位"}
            ],
            pwd:[{required:true,message:"请输入密码"}]
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
        },
        handleInput(value){
          this.someValue = value
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
      beforeRouteEnter(to,from,next){
        console.log('beforeRouteEnter');
        console.log(to);
        console.log(from);
        next()
      },
      beforeRouteLeave(to,from,next){
        console.log('beforeRouteLeave');
        console.log(to);
        console.log(from);
        next()
      },
      beforeRouteUpdate(to,from,next){
        // 路由参数变化时触发，例如：/pages/detail/123  /pages/detail/125  watch $router
        console.log('beforeRouteUpdate');
        console.log(to);
        console.log(from);
        next()
      }



    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/variable.styl";
  .HomePage
    min-height:100vh

</style>
