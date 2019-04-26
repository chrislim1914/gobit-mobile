<template>
  <!-- header -->
  <div class="app-header">
    <div class="container-fluid">
      <div id="header-row" class="row">
        <div class="col-4">
          <div class="logo">
            <img src="~img/gobit-logo.png" alt="gobit logo" class="img-fluid">
          </div>
        </div>
        <div class="col-8 text-right">
          <ul class="list-inline group-header">
            <li id="language-list" class="list-inline-item menu">
              <a href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">
                <span class="text-uppercase">
                  <img src="~img/south-korea.png" alt="gobit logo"> KOR
                </span>
              </a>
              <div aria-labelledby="navbarDropdown" class="dropdown-menu">
                <a href="#" class="dropdown-item text-uppercase text-left">
                  <img src="~img/united-states.png" alt="gobit logo"> US
                  </a>
                <a href="#" class="dropdown-item text-uppercase text-left">
                  <img src="~img/china.png" alt="gobit logo"> CHN
                  </a>
              </div>
            </li>
            <li class="list-inline-item">
              <a href="#">
                로그인
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
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
