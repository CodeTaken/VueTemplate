<template>
    <div>
      <label v-if="label">{{label}}</label>
      <div>
         <slot></slot>
      </div>
    </div>
</template>

<script>
    export default {
        props:{
          label:{
              type:String,
              default:''
          },
          prop:{
            type:String,
            default:''
          }
        },
        data () {
            return {
              inputValue:this.value
            }
        },
      methods:{
        inputHandle(e){
            console.log(e.target.value);
            // 通知父组件
          this.$emit('kinput',e.target.value)
        },
        validate (val){
          console.log('校验值',val);
          // async-validate
        }

      },
      beforeCreate(){
        console.log('子组件的 beforeCreate');
      },
      created(){
        console.log('子组件的 created');
        this.$on('validate',this.validate)
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
