<template>
  <div class="app-topbar">
    <div class="topbar-container">
      <div class="back">
        <img src="~img/back-arrow32x32.png" alt="back icon">
      </div>
      <div class="title text-align">
        <span v-if="$route.path === '/security'">
          보안 인증
        </span>
        <span v-if="$route.path === '/security/otpauth'">
          OTP 설정
        </span>
        <span v-if="$route.path === '/security/accountauth'">
          계좌번호 인증
        </span>
        <span v-if="$route.path === '/security/mobile_authorize'">
          휴대폰 재인증
        </span>
      </div>
      <div class="home-icon">
        <img src="~img/home32x32.png" alt="back icon">
      </div>
      <div class="menu-icon">
        <img src="~img/menu.png" alt="back icon">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar'
}
</script>

<style lang='scss' scoped>
  @import 'scss/security/topbar.scss';
</style>
