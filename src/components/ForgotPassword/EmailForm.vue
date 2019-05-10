<template>
  <div id="app-forgotpassword-email">
    <div id="forgotpassword-email-holder">
      <div id="forgotpassword-email-content">
        <span id="forgotpassword-form" class="d-none">
          <div id="forgotpassword-email-title-section">
            <h6 id="forgotpassword-email-title" class="font-weight-bold mb-0">
              비밀번호 찾기
            </h6>
          </div>
          <div id="forgotpassword-email-field-section">
            <input type="email" placeholder="가입하신 이메일 주소를 입력해 주세요">
          </div>
          <div id="forgotpassword-email-button-section">
            <button type="submit" id="forgotpassword-email-submit-button" class="btn">
              인증메일 보내기
            </button>
          </div>
        </span>
        <span id="forgotpassword-message">
          <div id="forgotpassword-email-title-section">
            <h6 id="forgotpassword-email-title" class="font-weight-bold mb-0">
              비밀번호 찾기
            </h6>
          </div>
          <div id="forgotpassword-message-email-section">
            <h6 id="forgotpassword-message-email" class="font-weight-bold mb-0">
              soonsill2@gmail.com
            </h6>
          </div>
          <div id="forgotpassword-message-sentence-section">
            <h6 id="forgotpassword-message-sentence-1" class="mb-0">
              인증 메일이 발송 되었습니다
            </h6>
            <h6 id="forgotpassword-message-sentence-2" class="mb-0">
              (인증 유효 시간은 30분 입니다)
            </h6>
            <h6 id="forgotpassword-message-sentence-3" class="mb-0">
              입력하신 이메일에서 전송된 링크를 클릭하여<br/>
              비밀번호 변경을 진행 해 주세요
            </h6>
            <h6 id="forgotpassword-message-sentence-4" class="mb-0">
              인증 메일이 도착하지 않을 경우, 스팸 메일함을 확인<br/>
              하시거나 다시시도를 해주세요
            </h6>
            <h6 id="forgotpassword-message-sentence-5" class="mb-0">
              인증 메일 수신이 되지 않는 다면<br/>
              <a href="mailto:Gobit@gobit.me">Gobit@gobit.me</a>로 문의해 주시기 바랍니다.
            </h6>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgotPasswordEmailForm'
}
</script>

<style lang='scss' scoped>
  @import '~scss/forgotpassword/emailform.scss';
</style>
