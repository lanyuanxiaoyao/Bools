
<template>
  <div class="url">
    <el-card v-loading="loading">
      <div
        class="clearfix"
        slot="header"
      >
        <div class="title">
          <img
            :src="icon"
            style="margin-right: 5px"
          />
          <div>{{ name }}</div>
        </div>
      </div>
      <div class="content">
        <el-row>
          <el-col :span="12">
            <qrcode
              :options="{ width: 200, margin: 0 }"
              :value="url"
            ></qrcode>
          </el-col>
          <el-col :span="12">
            <el-input
              :rows="7"
              readonly
              resize="none"
              type="textarea"
              v-model="url"
            ></el-input>
            <div class="operation-bar">
              <el-button
                @click="copy"
                icon="el-icon-document-copy"
                plain
                size="small"
                type="primary"
              >复制</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
import Icon from '../js/icon'

export default {
  name: 'url',
  data() {
    return {
      loading: false,
      icon: '',
      name: '',
      url: 'Hello utools!'
    }
  },
  mounted() {
    var operation = this.params.payload.operation
    console.log('operation', operation)
    this.loading = true
    utools.setExpendHeight(340)
    this.icon = Icon.icon()[this.params.operate]
    this.name = this.params.payload.title
    operation[this.params.operate].url(url => {
      this.url = url
      this.loading = false
    })
  },
  computed: {
    params() {
      return this.$route.params
    }
  },
  methods: {
    copy() {
      window.writeTextToClipboard(this.url)
    }
  }
}
</script>

<style scoped>
.url {
  margin: 5px;
  margin-left: 15px;
  margin-right: 15px;
}
.content {
  text-align: center;
}
.title {
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
}
.title img {
  width: 30px;
  height: 30px;
}
.operation-bar {
  margin-top: 10px;
}
</style>
