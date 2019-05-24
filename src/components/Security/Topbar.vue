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
            <h6 v-if="$route.path === '/security/deactivate_account'">
              계좌 인증
            </h6>
          </li>
          <li>
            <router-link to="/main">
              <img src="~img/home32x32.png" class="img-fluid" alt="Gobit security topbar home icon">
            </router-link>
          </li>
          <li>
            <img  v-on:click="toggleSidebar" src="~img/menu.png" class="img-fluid" alt="Gobit security topbar menu icon">
          </li>
        </ul>
      </div>
    </div>
    <sidebar v-show="!showSidebar"></sidebar>
  </div>
</template>

<script>
import Sidebar from '../Globals/Sidebar'
export default {
  name: 'SecurityTopbar',
  components: {
    'sidebar': Sidebar
  },
  data () {
    return {
      showSidebar: true
    }
  },
  methods: {
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    }
  }
}
</script>

<style lang='scss' scoped>
  @import 'scss/security/topbar.scss';
</style>
