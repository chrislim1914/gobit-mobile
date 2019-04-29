<template>
  <!-- signup verification -->
  <div class="app-signup-verification">
    <div class="container-fluid px-0 py-0">
      <div id="signup-verification-row" class="row">
        <div class="col-12">
          <h6 id="signup-title">
            회원가입
          </h6>
        </div>
        <div class="col-12">
          <h6 id="signup-subheader">
            이메일 인증을 진행 해주세요
          </h6>
        </div>
        <div class="col-12">
          <input type="email" id="signup-email-field" class="form-control"  placeholder="이메일을 입력해 주세요">
        </div>
        <div class="col-12">
          <button id="signup-button" type="submit" class="btn">
            인증메일 전송
          </button>
        </div>
        <div id="signup-link-row" class="col-12">
          <h6 id="signup-link">
            계정이 있으신가요?
            <a href="#" id="signup-signin-link">
              로그인 하기
            </a>
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupVerification'
}
</script>

<style lang='scss' scoped>
  @import '~scss/signup/verification.scss';
</style>
