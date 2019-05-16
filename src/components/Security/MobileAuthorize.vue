<template>
  <div id="security-authorize">
    <div id="security-authorize-holder">
      <div id="security-authorize-content">
        <div id="security-authorize-title-section">
          <h6 id="security-authorize-title" class="mb-0 text-center">
            휴대폰 재인증
          </h6>
        </div>
        <div id="security-authorize-list-section">
          <ul>
            <li>
              <h6 class="mb-0">
                휴대폰 번호 변경 및 재인증이 필요한 경우 진행해 주세요
              </h6>
            </li>
            <li>
              <h6 class="mb-0">
                인증에 사용된 번호로 고객님의 휴대폰 번호 정보가 업데이트 됩니다
              </h6>
            </li>
            <li>
              <h6 class="mb-0">
                인증 요청은 일 1회로 제한됩니다
              </h6>
            </li>
          </ul>
        </div>
        <div id="security-authorize-button-section">
          <button type="submit" id="security-authorize-button" class="btn">
            본인인증
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecurityAuthorize'
}
</script>

<style lang='scss' scoped>
  @import '~scss/security/mobileauthorize.scss';
</style>
