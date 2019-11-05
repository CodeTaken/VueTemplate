<template>
    <div class="loadMore">
        <div class="loadImgContent"><img class="img_auto" src="./images/loading.gif" alt=""></div>
        <p class="loadTitle">{{title}}</p>
    </div>
</template>

<script>
    export default {
        props:{
            title:{
              type:String,
              default:'正在载入...'
            }
        },
        data () {
            return {}
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
  @import "../../assets/stylus/variable.styl";
  .loadMore
    text-align: center
    .loadImgContent
      max-width:30px
      margin: 10px auto
    .loadTitle
      font-size:$font-size-medium
      color: $color-dialog-background

</style>
