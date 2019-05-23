<template>
  <div id="security-authorize">
    <div id="security-authorize-holder">
      <div id="security-authorize-content">
        <div id="security-authorize-title-section">
          <h6 id="security-authorize-title" class="mb-0 text-center">
            계좌 인증 해제
          </h6>
        </div>
        <div id="security-authorize-list-section">
          <ul>
            <li>
              <h6 class="mb-0">
                등록된 계좌 변경이 필요한 경우 해제 진행 후 재등록을 해주세요
              </h6>
            </li>
            <li>
              <h6 class="mb-0">
                계좌 해제는 일 1회로 제한 됩니다
              </h6>
            </li>
          </ul>
        </div>
        <div id="security-authorize-button-section">
          <button type="submit" id="security-authorize-button" class="btn">
            계좌 해제
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountDeactivate'
}
</script>

<style lang='scss' scoped>
  @import '~scss/security/accountdeactivate.scss';
</style>
