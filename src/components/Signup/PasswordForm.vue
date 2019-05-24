<template>
  <!-- signup form -->
  <div class="app-signup-passwordform debugger">
    <div class="container-fluid px-0 py-0">
      <div id="signup-passwordform-row" class="row">
        <div class="col-12">
          <h6 id="signup-passwordform-title" class="font-weight-bold mb-0">
            회원가입
          </h6>
        </div>
        <div class="col-12">
          <input type="password" id="signup-password-field" class="form-control font-weight-bold signup-pfield"  placeholder="비밀번호">
        </div>
        <div class="col-12">
          <input type="password" id="signup-confirmpassword-field" class="form-control font-weight-bold signup-pfield"  placeholder="비밀번호 확인">
        </div>
        <div class="col-12">
          <h6 id="signup-passwordform-agreement-title" class="font-weight-bold mb-0">
            모두 동의하기
          </h6>
          <p id="signup-passwordform-agreement-paragprah" class="mb-0">
            이용약관, 개인정보 수집 및 이용, 개인정보 제 3자 제공, 이벤트 등 프로모션 알림에 모두 동의 합니다.
          </p>
        </div>
        <div id="signup-passwordform-divider" class="col-12">
          <hr class="my-0 mx-0">
        </div>
        <div class="col-12">
          <label class="signup-passwordform-agrbox-label">
            [필수] 이용약관
            <input type="checkbox" name="signup-passwordform-agr1-box" id="signup-passwordform-agr1-box" class="signup-passwordform-agrbox position-absolute">
          </label>
        </div>
        <div class="col-12">
          <label class="signup-passwordform-agrbox-label">
            [필수] 개인정보 수집 및 이용
            <input type="checkbox" name="signup-passwordform-agr2-box" id="signup-passwordform-agr2-box" class="signup-passwordform-agrbox position-absolute">
          </label>
        </div>
        <div class="col-12">
          <label class="signup-passwordform-agrbox-label">
            [선택] 개인정보 제 3제 자공
            <input type="checkbox" name="signup-passwordform-agr3-box" id="signup-passwordform-agr3-box" class="signup-passwordform-agrbox position-absolute">
          </label>
        </div>
        <div class="col-12">
          <label class="signup-passwordform-agrbox-label">
            [선택] 이벤트 등 프로모션 수신 동의
            <input type="checkbox" name="signup-passwordform-agr4-box" id="signup-passwordform-agr4-box" class="signup-passwordform-agrbox position-absolute">
          </label>
        </div>
        <div class="col-12">
          <button type="submit" id="signup-passwordform-button" class="btn">
            가입하기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupForm'
}
</script>

<style lang='scss' scoped>
  @import '~scss/signup/passwordform.scss';
</style>
