<template>
  <div class="app-security">
    <topbar></topbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from './Topbar'
import SecurityAuthentication from './SecurityAuthentication'
// import Accountauth from './Accountauth'
export default {
  name: 'Security',
  components: {
    'topbar': Topbar,
    'securityAuthentication': SecurityAuthentication
    // 'accountauth': Accountauth
  }
}
</script>

<style lang='scss' scoped>
  @import 'scss/security/base.scss';
</style>
