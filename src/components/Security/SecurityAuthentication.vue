<template>
  <div class="app-securityauth">
    <!-- topbar -->
    <topbar></topbar>
    <!-- end of topbar -->
    <!-- level indicator -->
    <div class="lvl-indicate">
      회원님의 현재 보안레벨은 <span>Lv.1</span>  입니다
    </div>
    <!-- level indicator -->
    <!-- 4-way security -->
    <div class="four-way-container">
      <div class="f-w-box">
        <div class="fw-box-l"><p>1 단계</p></div>
        <div class="fw-box-m">
          <p>이메일 인증 <span>완료</span></p>
          <p>701feel@naver.com</p>
        </div>
        <div class="fw-box-r "></div>
      </div>
      <div class="f-w-box">
        <div class="fw-box-l"><p>2 단계</p></div>
        <div class="fw-box-m">
          <p>핸드폰 인증 <span>완료</span></p>
          <p>코인 입출금 한도 상향</p>
        </div>
        <div class="fw-box-r"><a href="">인증하기</a></div>
      </div>
      <div class="f-w-box">
        <div class="fw-box-l"><p>3 단계</p></div>
        <div class="fw-box-m">
          <p>계좌 인증 <span>완료</span></p>
          <p>원화 입출금 가능</p>
        </div>
        <div class="fw-box-r"><a href="">인증하기</a></div>
      </div>
      <div class="f-w-box ">
        <div class="fw-box-l"><p>4 단계</p></div>
        <div class="fw-box-m">
          <p>OTP 인증 <span>완료</span></p>
          <p>입출금 한도 상향</p>
        </div>
        <div class="fw-box-r"><a href="">인증하기</a></div>
      </div>
    </div>
    <!-- 4-way security -->
    <!-- footer note -->
    <div class="footer-note">
      <p>보안 등급에 따라 암호화폐 입출금 한도 및 원화 입출금 한도가 차등 적용 됩니다.</p>
      <p>각 인증단계를 완료하는 즉시 보안등급이 상향 됩니다.</p>
    </div>
    <!-- footer note -->
  </div>
</template>

<script>
import Topbar from './Topbar'
export default {
  name: 'SecurityAuth',
  components: {
    'topbar': Topbar
  }
}
</script>

<style lang='scss' scoped>
  @import 'scss/security/securityauth.scss';
</style>
