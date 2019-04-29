<template>
  <!-- header login -->
  <div class="login-header">
    <nav>
      <a class="navbar-brand" href="#">
        <img src="~img/gobit-logo.png" alt="Gobit logo" class="img-fluid">
      </a>
      <ul class="list-inline mr-auto">
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
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'LoginHeader'
}
</script>

<style lang='scss' scoped>
  @import '~scss/login/header.scss';
</style>
