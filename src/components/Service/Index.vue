<template>
  <!-- service -->
  <div class="app-service">
    <!-- service header -->
    <service-header></service-header>
    <!-- -->
    <hr id="service-header-bottom-border" class="mx-0 my-0">
    <!-- -->
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from './Topbar'
export default {
  name: 'Service',
  components: {
    'service-header': Topbar
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/service/base.scss';
</style>
