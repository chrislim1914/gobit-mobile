<template>
  <!-- custmer service -->
  <div class="app-customerservice">
    <div class="container-fluid">
      <div id="customer-service-header-row" class="row border-bottom">
        <div class="col-12">
          <h1 id="customer-service-header" class="font-weight-bold pt-3">
            고객센터
          </h1>
        </div>
      </div>
      <div id="customer-service-link-row" class="row text-center">
        <div class="col-3 border-right">
          <h1 class="customer-service-link-text font-weight-bold">
            <img src="~img/call.png" class="pb-2 customer-service-link-img" alt="Gobit download"><br/>
            1544-0000
          </h1>
        </div>
        <div class="col-3 border-right">
          <h1 class="customer-service-link-text font-weight-bold">
            <img src="~img/message.png" class="pb-2 customer-service-link-img" alt="Gobit download"><br/>
            카톡 상담
          </h1>
        </div>
        <div class="col-3 border-right">
          <h1 class="customer-service-link-text font-weight-bold">
            <img src="~img/download.png" class="pb-2 customer-service-link-img" alt="Gobit download"><br/>
            App 다운
          </h1>
        </div>
        <div class="col-3">
          <h1 class="customer-service-link-text font-weight-bold">
            <img src="~img/notice32x32.png" class="pb-2 customer-service-link-img" alt="Gobit notice"><br/>
            공지사항
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalCustomerService'
}
</script>

<style lang='scss' scoped>
  @import '~scss/customerservice/base.scss';
</style>
