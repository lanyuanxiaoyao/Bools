<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Common from './js/oprations/common'
import { mapGetters } from 'vuex'

import MacOperation from './js/oprations/mac'

export default {
  mounted() {
    utools.onPluginReady(() => {
      console.log('onPluginReady')
      var version = Common.version()
      console.log('version', version)
      if (version === '') {
        utools.showNotification('未能识别到系统版本', null, true)
        utools.outPlugin()
      }
      this.$store.emit('updateOsVersion', version)
      console.log('version in store', this.osVersion)
    })
    utools.onPluginEnter(({ code, type, payload }) => {
      payload.operation = MacOperation
      var codeArray = code.split('_')
      console.log(codeArray)
      var operate = codeArray[0]
      var func = codeArray[1]
      var addition = codeArray.length > 2 ? codeArray[2] : ''
      console.log(operate, func, addition)
      if (this.supportBroswer[func].includes(operate)) {
        this.$router.push({
          name: func,
          params: {
            operate: operate,
            addition: addition,
            type: type,
            payload: payload
          }
        })
      }
    })
    utools.onPluginOut(() => {
      utools.setExpendHeight(1)
    })
  },
  computed: mapGetters({
    supportBroswer: 'supportBroswer',
    osVersion: 'osVersion'
  })
}
</script>
