<template>
  <!-- forgot password -->
  <div class="app-forgotpassword">
    <!-- forgot password header -->
    <forgotpassword-header></forgotpassword-header>
    <!-- -->
    <hr id="forgotpassword-header-bottom-border" class="mx-0 my-0">
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
