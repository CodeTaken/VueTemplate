<template>
  <div>
    <input :type="type" :value="inputValue" @input="inputHandle">
    <!--<p>{{Pvalue}}</p>-->
  </div>

</template>

<script>
    export default {
        props:{
            value:{
              type:String,
              default:''
            },
            type:{
              type:String,
              default:'text'
            }
        },
      inject:['Pvalue'],
        data () {
            return {
              inputValue:this.value
            }
        },
      methods:{
        inputHandle(e){
          this.inputValue = e.target.value
            //console.log(e.target.value);
            // 通知父组件
          this.$emit('input',this.inputValue)
        }
      },
      beforeCreate(){
        console.log('子组件的 beforeCreate');
      },
      created(){
        console.log('子组件的 created');
      },
      mounted(){
        console.log('子组件的 mounted');
      },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
 input
    background:#ddd;
    display block
    bordr:1px solid #666;

</style>
