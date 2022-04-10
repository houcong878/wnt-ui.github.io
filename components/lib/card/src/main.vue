<template>
  <div class="m-card" :style="width? {widht:width +'px'}:{}">
     <div class="m-card-img" :style="imgHeight? {heihgt:imgHeight +'px'}:{}">
        <img :src="imgSrc" alt="img" >
     </div>
     <div class="m-card-summary" v-if="summary">
       {{summary}}
     </div>
     <div v-else>
        <slot></slot>
     </div>
     <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name:'m-card',
  props:{
    width:{
      type:Number,
      default:0
    },
    imgSrc:{
      type:String,
      default:'',
    },
    imgHeight:{
      type:Number,
      default:0
    },
    summary:{
      type:String,
      default:''
    }
  },

  components: {},
  mounted(){
   console.log("哈哈哈",this.width);
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
</style>