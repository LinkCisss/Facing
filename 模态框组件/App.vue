<template>
  <div class="mondayModal">
    <h4>{{txt}}</h4>
    <h3 @click='isShow = true'>点击打开dialog</h3>
    <mondayDialog v-if='isShow' :show='isShow' @change='changeShow'/>
  </div>
</template>

<script>

import modal from './components/modal'
export default {
  name: "modal",
  data: () => ({
    txt: '000',
    isShow: false
  }),
  components: {
    modal
  },
  methods: {
    changeShow(val) {
      this.isShow = val
    }
  }
}
</script>

<style lang='scss' scoped>

.mondayLmitation{
  width: 100%;
  height: 100%;
   h4{
      text-align: center;
   }
   h3{
     cursor: pointer;
   }
 }
</style>
