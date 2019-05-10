<template>
  <div id="security-topbar">
    <div id="security-topbar-holder">
      <div id="security-topbar-content">
        <ul>
          <li>
            <img src="~img/back-arrow32x32.png" alt="Gobit security topbar back icon" class="img-fluid">
          </li>
          <li>
            <h6 v-if="$route.path === '/security'">
              보안 인증
            </h6>
            <h6 v-if="$route.path === '/security/otpauth'">
              OTP 설정
            </h6>
            <h6 v-if="$route.path === '/security/accountauth'">
              계좌번호 인증
            </h6>
            <h6 v-if="$route.path === '/security/mobile_authorize'">
              휴대폰 재인증
            </h6>
          </li>
          <li>
            <img src="~img/home32x32.png" class="img-fluid" alt="Gobit security topbar home icon">
          </li>
          <li>
            <img src="~img/menu.png" class="img-fluid" alt="Gobit security topbar menu icon">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecurityTopbar'
}
</script>

<style lang='scss' scoped>
  @import 'scss/security/topbar.scss';
</style>
