<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo/>
    <!-- <m-card 
      imgSrc="java.jpg"
      summary="没那开始了江东父老开始地方安德森飞撒地方阿斯顿发"
    /> -->
    <!-- <m-card 
      imgSrc="java.jpg"
      summary="没那开始了江sdfsdfsdf东父老开始地方安德森飞撒地方阿斯顿发"
    >
     <template v-slot:footer>
       <div class="level">终极.牛逼</div>
       <div class="price">¥299.00</div>
     </template>
    </m-card> -->
    <m-card 
      imgSrc="java.jpg"
      summary="没那开始了江sdfsdfsdf东父老开始地方安德森飞撒地方阿斯顿发"
      :width="1000"
      :imgHeight="100"
    >
    </m-card>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
