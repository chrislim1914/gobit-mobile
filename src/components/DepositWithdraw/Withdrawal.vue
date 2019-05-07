<template>
  <!-- depositwithdraw withdrawal -->
  <div class="app-withdrawal">
    <!-- start topbar -->
      <div class="topbar-container">
        <div class="back">
          <img src="~img/back-arrow32x32.png" alt="back icon">
        </div>
        <div class="title generic-title">
          NEO 입금하기
        </div>
        <div class="home-icon">
          <img src="~img/home32x32.png" alt="back icon">
        </div>
        <div class="menu-icon">
          <img src="~img/menu.png" alt="back icon">
        </div>
      </div>
      <!-- end topbar -->
      <!-- withdraw-header -->
      <div class="w-header-holder debugger">
        <div class="w-head-up debugger">
          <div class="w-head-left">출금 방식 <img src="~img/info32x32.png" alt="info32x32"></div>
          <div class="w-head-right">
            <label>
              <input type="radio" class="option-input radio" name="example" checked />
              일반 출금
            </label>
            <label>
              <input type="radio" class="option-input radio" name="example" />
              바로 출금
            </label>
          </div>
        </div>
        <div class="w-head-up debugger">
          <div class="w-head-left">출금 가능</div>
          <div class="w-head-right">
            0 <span>ETH</span>
          </div>
        </div>
        <div class="w-head-up">
          <form>
            <input type="text" class="debugger" name="" placeholder="출금수량 (최소 0.02)"><label for="name">Name</label>
            <input type="submit" name="name" value="최대">
          </form>
        </div>
      </div>
      <!-- withdraw-header -->
  </div>
</template>

<script>
export default {
  name: 'Withdrawal'
}
</script>

<style lang='scss' scoped>
  @import '~scss/deposit/withdrawal.scss';
</style>
