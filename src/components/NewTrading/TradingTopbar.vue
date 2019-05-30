<template>
  <div class="app-tradingtopbar">
    <div class="topbar-container">
      <div class="back">
        <img src="~img/back-arrow32x32.png" alt="back icon">
      </div>
      <div class="title">
        이더리움(ETH/KRW)
        <img src="~img/and12x12.png" alt="and icon">
        <img src="~img/star32x32.png" alt="star icon">
      </div>
      <div class="home-icon">
        <router-link to="/">
          <img src="~img/home32x32.png" alt="home icon">
        </router-link>
      </div>
      <div class="menu-icon" v-on:click="toggleSidebar">
        <img src="~img/menu.png" alt="menu icon" >
      </div>
    </div>
    <sidebar v-show="!showSidebar"></sidebar>
  </div>
</template>

<script>
import Sidebar from '../Globals/Sidebar'
export default {
  name: 'TradingTopbar',
  components: {
    'sidebar': Sidebar
  },
  data () {
    return {
      showSidebar: true
    }
  },
  methods: {
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/newtrading/tradingtopbar.scss';
</style>
