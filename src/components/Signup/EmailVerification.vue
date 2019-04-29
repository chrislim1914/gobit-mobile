<template>
  <!-- signup verification -->
  <div class="app-signup-verification">
    <div id="signup-verification-fields" class="container-fluid px-0 py-0 d-none">
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
    <div id="signup-verification-message" class="container-fluid px-0 py-0">
      <div id="signup-verification-row" class="row">
        <div class="col-12">
          <h6 id="signup-title">
            회원가입
          </h6>
        </div>
        <div class="col-12">
          <h6 id="signup-email">
            soonsill2@gmail.com
          </h6>
        </div>
        <div id="signup-message-column" class="col-12">
          <h6 id="signup-message-1">
            인증 메일이 발송 되었습니다
          </h6>
          <h6 id="signup-message-2">
            (인증 유효 시간은 30분 입니다)
          </h6>
          <h6 id="signup-message-3">
            입력하신 이메일에서 [이메일 인증하기] 링크를 클릭하여<br/>회원가입을 진행 해 주세요
          </h6>
          <h6 id="signup-message-4">
            인증메일이 도착하지않을 경우 스팸메일함을 확인하시거나,<br/>다시시도를 해주세요
          </h6>
          <h6 id="signup-message-5">
            인증 메일 수신이 되지 않는 다면<br/>
            <a href="mailto:gobit@gobit.me">Gobit@gobit.me로</a> 문의해 주시기 바랍니다.
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
