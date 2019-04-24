<template>
  <!-- footer -->
  <div class="app-footer fixed-bottom">
    <div class="container">
      <div id="footer-button-row" class="row text-center">
        <ul class="col-12 list-inline">
          <li class="list-inline-item">
            <a href="#" class="btn footer-buttons">
              로그인
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#" class="btn footer-buttons">
              이용약관
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#" class="btn footer-buttons">
              개인정보처리방침
            </a>
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="col-12">
          <p id="footer-sentence" class="text-center">
            (주)Gobit  서울시 서초구 강남대로<br/>
            대표이사 홍길동 : 사업자 등록번호 00-00
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalFooter'
}
</script>

<style lang='scss' scoped>
  @import '~scss/footer/base.scss';
</style>
