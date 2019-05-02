<template>
  <!-- service topbar -->
  <div class="app-servicetopbar">
    <div id="service-topbar-content" class="list-inline">
      <a href="#" class="list-inline-item mr-0">
        <img src="~img/back-arrow32x32.png" id="service-topbar-back" alt="Gobit back arrow" class="img-fluid">
      </a>
      <h6 id="service-topbar-title" class="list-inline-item font-weight-bold mb-0">
        고객센터
      </h6>
      <a href="#" class="list-inline-item mr-0">
        <img src="~img/home32x32.png" id="service-topbar-home" alt="gobit logo" class="img-fluid">
      </a>
      <a href="#" class="list-inline-item">
        <img src="~img/menu.png" id="service-topbar-menu" alt="gobit logo" class="img-fluid">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceTopbar'
}
</script>

<style lang='scss' scoped>
  @import '~scss/service/topbar.scss';
</style>
