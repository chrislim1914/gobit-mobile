<template>
  <div class="app-otpauth">
    <!-- otp container -->
    <div class="otp-container">
      <!-- 1. Google Authenticator 설치 -->
      <div class="otp-box">
        <div class="otp-title">1. Google Authenticator 설치</div>
        <div class="otp-body">
          <ul>
            <li><a href="">Android 버전 설치</a></li>
            <li><a href="">iOS 버전 설치</a></li>
          </ul>
        </div>
      </div>
      <!-- 2. QR코드 스캔 -->
      <div class="otp-box">
        <div class="otp-title">2. QR코드 스캔</div>
        <div class="otp-body">
          <div class="qr-box">
            <img src='https://chart.googleapis.com/chart?cht=qr&chl=http%3A%2F%2Fm.gobit.me%2Fdepositwithdraw%2Fqrcode&chs=180x180&choe=UTF-8&chld=L|2' alt='qr code'>
            <a href='https://www.qr-code-generator.com/' border='0' style='cursor:default'  rel='nofollow'></a>
          </div>
          <div class="qr-data">
            <p>Provided key:</p>
            <p>6BLUUNGDXATCZ61C <span>복사</span></p>
          </div>
        </div>
      </div>
      <!-- 3. OTP 번호 입력 -->
      <div class="otp-box">
        <div class="otp-title">3. OTP 번호 입력</div>
        <div class="otp-body">
          <input type="text" placeholder="Google Authenticator 인증 번호를 입력 해 주세요" />
        </div>
      </div>
      <!-- confirm -->
      <div class="otp-box">
        <div class="otp-body">
          <button type="submit" class="btn">확인</button>
        </div>
      </div>
    </div>
    <!-- otp container -->
  </div>
</template>

<script>
import Topbar from './Topbar'
export default {
  name: 'OTPAuth',
  components: {
    'topbar': Topbar
  }
}
</script>

<style lang='scss' scoped>
  @import 'scss/security/otpauth.scss';
</style>
