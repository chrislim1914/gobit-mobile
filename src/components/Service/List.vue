<template>
  <!-- service list -->
  <div class="app-servicelist">
    <div id="service-list-content">
      <ul id="service-list-item-holder" class="">
        <li class="service-list-item" :key="index" v-for="(service, index) in services">
          <router-link to="/" class="font-weight-bold">
            {{ service }}
          </router-link>
        </li>
      </ul>
    </div>
    <!-- extra -->
    <div id="extra-colored-space"></div>
    <service-list-cs></service-list-cs>
    <service-list-footer></service-list-footer>
  </div>
</template>

<script>
import CustomerService from '../Globals/CustomerService'
import Footer from '../Globals/Footer'
export default {
  name: 'ServiceList',
  components: {
    'service-list-cs': CustomerService,
    'service-list-footer': Footer
  },
  data () {
    return {
      services: ['공지사항', '이벤트 안내', '이달의 승급코인', '이용안내', '입출금현황', 'Open API 안내', '정책 및 고지', '1:1 문의하기', '문의내역', '자주하는 질문', '카카오톡 문의(24시간)']
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '~scss/service/list.scss';
</style>
