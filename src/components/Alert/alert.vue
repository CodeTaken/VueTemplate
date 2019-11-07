<template>
  <div class="alert">
      <div>{{content}}</div>
  </div>

</template>

<script>
    export default {
        props:{
          content:{
            type:String,
            required:true
          }
        },
        data () {
            return {
              content:''
            }
        },
      methods:{

      },

      created(){

      },
      mounted(){

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
