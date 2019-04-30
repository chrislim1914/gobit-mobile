<template>
  <!-- signup -->
  <div class="app-signup">
    <!-- signup header -->
    <signup-header id="signup-header"></signup-header>
    <!-- -->
    <hr id="signup-header-bottom-border">
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
