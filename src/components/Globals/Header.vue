<template>
  <!-- header -->
  <div class="app-header">
    <div class="holder-container">
      <div class="img-holder">
        <img src="~img/gobit-logo.png" alt="gobit logo">
      </div>
      <div class="text-holder">
        <ul class="list-inline group-header mb-0">
          <li id="language-list" class="list-inline-item menu mx-0 my-0">
            <a href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle px-0 py-0">
              <span class="text-uppercase">
                <img src="~img/south-korea.png" alt="gobit logo" class="img-fluid"> KOR
              </span>
            </a>
            <div aria-labelledby="navbarDropdown" class="dropdown-menu">
              <a href="#" class="dropdown-item">
                <img src="~img/united-states.png" alt="gobit logo" class="img-fluid"> US
                </a>
              <a href="#" class="dropdown-item">
                <img src="~img/china.png" alt="gobit logo" class="img-fluid"> CHN
                </a>
            </div>
          </li>
          <li class="list-inline-item menu">
            <a href="#" class="font-weight-bold">
              로그인
            </a>
          </li>
          <li class="list-inline-item menu">
            <a href="#" class="font-weight-bold">
              회원가입
            </a>
          </li>
          <li class="list-inline-item menu">
            <a href="#" v-on:click="toggleSidebar">
              <img src="~img/menu.png" data-effect="sidebar" alt="gobit logo" class="img-fluid">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <sidebar v-show="!showSidebar"></sidebar>
  </div>
</template>

<script>
import Sidebar from './Sidebar'
export default {
  name: 'GlobalHeader',
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
  @import '~scss/header/base.scss';
</style>
