<template>
  <!-- forgot password -->
  <div class="app-forgotpassword">
    <!-- forgot password header -->
    <forgotpassword-header id="forgotpassword-header"></forgotpassword-header>
    <!-- -->
    <hr id="forgotpassword-header-bottom-border">
    <!-- -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '../Globals/Header.vue'
export default {
  name: 'ForgotPassword',
  components: {
    'forgotpassword-header': Header
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/forgotpassword/base.scss';
</style>
