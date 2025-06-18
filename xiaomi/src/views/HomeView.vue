<template>
  <div class="home">
    <el-container style="flex-direction: column">
      <HeaderTop></HeaderTop>
      <NavTop></NavTop>
      <FooterBottom></FooterBottom>
    </el-container>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop';
import NavTop from '@/components/NavTop';
import FooterBottom from '@/components/FooterBottom.vue';
export default {
  components: {
    HeaderTop,
    NavTop,
    FooterBottom,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

.auto {
  width: 1226px;
  margin-left: auto;
  margin-right: auto;
}
</style>
