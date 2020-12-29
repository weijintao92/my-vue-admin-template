<template>
  <div id="CodeLogin">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ sourceCodeTitle }}</span>
        <el-button
          class="btn4"
          :data-clipboard-text="sourceCode"
          style="float: right; padding: 3px 0"
          type="text"
          @click="copyLink()"
        >复制</el-button>
      </div>
      <div class="card_div">
        <pre v-highlightjs class="html_pre">
     <code class="html" style="text-align:left;">{{ sourceCode }}</code>
    </pre>
      </div>
    </el-card>
  </div>
</template>

<script>
import Clipboard from 'clipboard'

export default {
  name: 'Code',
  props: {
    sourceCodeTitle: {
      type: String,
      default: ''
    },
    sourceCode: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    console.log(this.$store.state.screen.screenWidth)
  },
  methods: {
    /**
     * 复制代码
     */
    copyLink() {
      var clipboard = new Clipboard('.btn4')
      var that = this
      clipboard.on('success', function(e) {
        // console.info('Action:', e.action)
        // console.info('Text:', e.text)
        // console.info('Trigger:', e.trigger)

        // Message 消息提示
        that.$message({
          message: '复制成功！',
          type: 'success'
        })
        e.clearSelection()
        // 释放内存
        clipboard.destroy()
      })

      clipboard.on('error', function(e) {
        console.error('Action:', e.action)
        console.error('Trigger:', e.trigger)
      })
    }

  }
}
</script>

<style scoped>
.hljs {
  overflow-x: visible;
  width: 681px;
}

pre {
  margin-top: -19px;
}

.card_div {
  position: relative;
  height: 380px;
  width: 700px;
  overflow: scroll;
}
#CodeLogin {
  width: 700px;
}
</style>

<style lang="scss">
.el-card__body {
    padding: 0px !important;
}
</style>

