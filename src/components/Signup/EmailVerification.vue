<template>
  <!-- signup verification -->
  <div class="app-signup-verification">
    <div id="app-signup-form-field-row">
      <h6 id="signup-title" class="font-weight-bold mb-0">
        회원가입
      </h6>
      <h6 id="signup-subheader" class="font-weight-bold mb-0">
        이메일 인증을 진행 해주세요
      </h6>
      <input type="email" id="signup-email-field" class="form-control font-weight-bold mb-0"  placeholder="이메일을 입력해 주세요">
      <button id="signup-button" type="submit" class="btn font-weight-bold mb-0">
        인증메일 전송
      </button>
      <h6 id="signup-link" class="font-weight-bold">
        계정이 있으신가요?
        <a href="#" id="signup-signin-link">
          로그인 하기
        </a>
      </h6>
    </div>
    <div id="app-signup-message-row" class="d-none">
      <h6 id="signup-title" class="font-weight-bold mb-0">
        회원가입
      </h6>
      <h6 id="signup-email" class="font-weight-bold mb-0">
        soonsill2@gmail.com
      </h6>
      <h6 id="signup-message-1" class="mb-0">
        인증메일이 발송되었습니다
      </h6>
      <h6 id="signup-message-2" class="mb-0">
        (인증 유효 시간은 30분 입니다)
      </h6>
      <h6 id="signup-message-3" class="mb-0">
        입력하신 이메일에서 [이메일 인증하기] 링크를 클릭하여<br/>회원가입을 진행 해 주세요.
      </h6>
      <h6 id="signup-message-4" class="mb-0">
        인증메일이 도착하지않을 경우 스팸메일함을 확인하시거나,<br/>다시시도를 해주세요.
      </h6>
      <h6 id="signup-message-5" class="mb-0">
        인증 메일 수신이 되지 않는 다면<br/>
        <a href="mailto:gobit@gobit.me">Gobit@gobit.me</a> 문의해 주시기 바랍니다.
      </h6>
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
