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
        <div class="col-4 border-right">
          <h1 class="customer-service-link-text">
            <i class="fa-2x fa fa-phone pb-2"></i><br/>
            1544-0000
          </h1>
        </div>
        <div class="col-4 border-right">
          <h1 class="customer-service-link-text">
            <i class="fa-2x fa fa-comment pb-2"></i><br/>
            카톡 상담
          </h1>
        </div>
        <div class="col-4">
          <h1 class="customer-service-link-text">
            <i class="fa-2x fa fa-download pb-2"></i><br/>
            App 다운
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
