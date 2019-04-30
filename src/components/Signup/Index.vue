<template>
  <!-- signup -->
  <div class="app-signup">
    <!-- signup header -->
    <signup-header></signup-header>
    <!-- -->
    <hr id="signup-header-bottom-border" class="mx-0 my-0">
    <!-- -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '../Globals/Header.vue'
export default {
  name: 'Signup',
  components: {
    'signup-header': Header
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/signup/base.scss';
</style>
