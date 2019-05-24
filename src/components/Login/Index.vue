<template>
  <!-- login -->
  <div class="app-login">
    <!-- login header -->
    <login-header></login-header>
    <!-- -->
    <hr id="login-header-bottom-border" class="my-0 mx-0">
    <!-- -->
    <div id="login-container" class="container-fluid">
      <div id="login-title-row" class="row">
        <div class="col-12">
          <h6 id="login-title" class="font-weight-bold">
            로그인
          </h6>
        </div>
      </div>
      <div id="login-fields-row" class="row">
        <div class="col-12">
          <input type="email" id="login-email-field" class="form-control font-weight-bold"  placeholder="이메일을 입력해 주세요">
        </div>
        <div class="col-12">
          <input type="password" id="login-password-field" class="form-control font-weight-bold"  placeholder="비밀번호를 입력해 주세요">
        </div>
        <div class="col-12">
          <button type="submit" id="login-button" class="btn font-weight-bold">
            로그인
          </button>
        </div>
      </div>
      <div id="login-links-row" class="row font-weight-bold">
        <div class="col-4 text-right">
          <a href="#" id="login-link-1">
            회원가입
          </a>
        </div>
        <div class="col-0 text-center mx-0 px-0">
          <h6 id="login-link-line">|</h6>
        </div>
        <div class="col-4 text-left">
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
