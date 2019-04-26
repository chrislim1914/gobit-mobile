<template>
  <!-- notice -->
  <div class="app-notice fixed-bottom" :class="{'d-none': !isNoticeShown}">
    <div class="container-fluid">
      <div id="notice-row" class="row">
        <div class="col-1 text-center">
          <i id="notice-icon" class="fa-2x fa fa-volume-off" />
        </div>
        <div class="col-10">
          <h6 class="text-white">
            [견본견본] 견본견본견본견본견본 5 (견본)
          </h6>
        </div>
        <div class="col-1 text-center">
          <a id="notice-close" @click="hideNotice">
            <i class="material-icons">close</i>
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
