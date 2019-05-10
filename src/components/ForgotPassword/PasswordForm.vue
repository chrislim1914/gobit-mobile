<template>
  <div class="app-forgotpassword-form">
    <div id="forgotpassword-holder">
      <div id="forgotpassword-content">
        <div id="forgotpassword-title-section">
          <h6 id="forgotpassword-title" class="font-weight-bold mb-0">
            비밀번호 찾기
          </h6>
        </div>
        <div id="forgotpassword-field-section">
          <div id="forgotpassword-field-1-div">
            <input type="password" id="forgotpassword-field-1" placeholder="비밀번호">
          </div>
          <div id="forgotpassword-field-2-div">
            <input type="password" id="forgotpassword-field-2" placeholder="비밀번호 확인">
          </div>
        </div>
        <div id="forgotpassword-button-section">
          <button type="submit" id="forgotpassword-submit-button" class="btn">
            비밀번호 변경하기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgotPasswordForm'
}
</script>

<style lang='scss' scoped>
  @import '~scss/forgotpassword/passwordform.scss';
</style>
