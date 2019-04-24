<template>
  <!-- header -->
  <div class="app-header">
      <div class="logo">
        <img src="~img/gobit-logo.png" alt="gobit logo">
      </div>
      <div class="group-header">
        <ul class="inline">
          <li id="language-list" class="list-inline-item">
            <a href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">
              <span class="text-uppercase">
                <img src="~img/south-korea.png" alt=""> KOR
              </span>
            </a>
            <div aria-labelledby="navbarDropdown" class="dropdown-menu">
              <a href="#" class="dropdown-item text-uppercase">
                <img src="~img/united-states.png" alt=""> US
              </a>
              <a href="#" class="dropdown-item text-uppercase">
                <img src="~img/china.png" alt=""> CHINA
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
          <li class="list-inline-item">
            <a href="#">
              <i class="fa fa-bars menu"></i>
            </a>
          </li>
        </ul>
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
