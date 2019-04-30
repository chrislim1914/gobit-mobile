<template>
  <!-- header -->
  <div class="app-header">
    <div id="header-row">
      <div class="px-0">
        <div class="logo">
          <img src="~img/gobit-logo.png" alt="gobit logo">
        </div>
      </div>
      <div class="px-0">
        <ul class="list-inline group-header mb-0">
          <li id="language-list" class="list-inline-item menu mx-0 my-0">
            <a href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle px-0 py-0">
              <span class="text-uppercase">
                <img src="~img/south-korea.png" alt="gobit logo" class="img-fluid"> KOR
              </span>
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </a>
            <div aria-labelledby="navbarDropdown" class="dropdown-menu">
              <a href="#" class="dropdown-item text-uppercase text-left">
                <img src="~img/united-states.png" alt="gobit logo" class="img-fluid"> US
                </a>
              <a href="#" class="dropdown-item text-uppercase text-left">
                <img src="~img/china.png" alt="gobit logo" class="img-fluid"> CHN
                </a>
            </div>
          </li>
          <li class="list-inline-item mx-0 my-0">
            <a href="#" class="font-weight-bold">
              로그인
            </a>
          </li>
          <li class="list-inline-item mx-0 my-0">
            <a href="#" class="font-weight-bold">
              회원가입
            </a>
          </li>
          <li class="list-inline-item menu">
            <a href="#">
              <img src="~img/menu.png" data-effect="sidebar" alt="gobit logo" class="img-fluid">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalHeader'
}
</script>

<style lang='scss' scoped>
  @import '~scss/header/base.scss';
</style>
