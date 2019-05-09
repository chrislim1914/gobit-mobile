<template>
  <div class="app-accountauth">
    <!-- topbar -->
    <topbar></topbar>
    <!-- end of topbar -->
    <!-- bank info -->
    <div class="bank-info">
      <div class="form-elem-container">
        <div class="lbl-box"><label for="username">예금주</label></div>
        <div class="inp-box"><input type="text" name="username" value="홍길동" disabled="disabled"></div>
      </div>
      <div class="form-elem-container">
        <div class="lbl-box"><label for="bankname">은행 선택</label></div>
        <div class="inp-box"><select name="bankname" class="minimal">
              <option value="">국민은행</option>
              <option value="">Citibank Korea</option>
              <option value="">KEB Hana Bank</option>
              <option value="">KB Kookmin Bank</option>
              <option value="">Shinhan Bank</option>
              <option value="">Woori Bank</option>
            </select>
        </div>
      </div>
      <div class="form-elem-container">
        <input type="text" name="banknumber" placeholder="- 없이 계좌번호를 입력해주세요">
      </div>
      <div class="form-elem-container">
        <input type="submit" value="확인">
      </div>
    </div>
    <!-- bank info -->
  </div>
</template>

<script>
import Topbar from './Topbar'
export default {
  name: 'Accountauth',
  components: {
    'topbar': Topbar
  }
}
</script>

<style lang='scss' scoped>
  @import 'scss/security/accountauth.scss';
</style>
