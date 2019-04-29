<template>
  <!-- login -->
  <div class="app-login">
    <!-- login header -->
    <login-header id="login-header"></login-header>
    <!-- -->
    <hr id="login-header-bottom-border">
    <!-- -->
    <div id="login-container" class="container-fluid">
      <div id="login-title-row" class="row">
        <div class="col-12">
          <h6 id="login-title">
            로그인
          </h6>
        </div>
      </div>
      <div id="login-fields-row" class="row">
        <div class="col-12">
          <input type="email" id="login-email-field" class="form-control"  placeholder="이메일을 입력해 주세요">
        </div>
        <div class="col-12">
          <input type="password" id="login-password-field" class="form-control"  placeholder="비밀번호를 입력해 주세요">
        </div>
        <div class="col-12">
          <button type="submit" id="login-button" class="btn">
            로그인
          </button>
        </div>
      </div>
      <div id="login-links-row" class="row text-center">
        <div class="col-5">
          <a href="#" id="login-link-1">
            회원가입
          </a>
        </div>
        <div class="col-1">
          <h6>|</h6>
        </div>
        <div class="col-5">
          <a href="#" id="login-link-2">
            비밀번호 찾기
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../Globals/Header.vue'
export default {
  name: 'Login',
  components: {
    'login-header': Header
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/login/base.scss';
</style>
