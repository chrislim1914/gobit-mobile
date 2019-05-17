<template>
  <!-- notice -->
  <div class="app-notice fixed-bottom" :class="{'d-none': !isNoticeShown}">
    <div class="container-fluid">
      <div id="notice-row" class="row">
        <div class="col-1 text-center">
          <img src="~img/megaphone24x24.png" id="megaphone-icon" alt="Gobit notice megaphone icon">
        </div>
        <div class="col-9 col-sm-10 mt-1">
          <h6 class="text-white" id="notice-text">
            [견본견본] 견본견본견본견본견본 5 (견본)
          </h6>
        </div>
        <div class="col-2 col-sm-1 text-center">
          <a id="notice-close" @click="hideNotice">
            <img src="~img/exit24x24.png" alt="Gobit notice close icon" id="close-icon">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalNotice',
  props: ['isNoticeShown'],
  methods: {
    hideNotice () {
      this.$emit('close-notice', true)
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/notice/base.scss';
</style>
