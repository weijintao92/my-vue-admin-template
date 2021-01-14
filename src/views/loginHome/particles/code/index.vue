<template>
  <div class="my_main">
    <el-row>
      <MyShow />
      <el-button type="text" @click="drawer = true">查看源码</el-button>
      <CodeView :source-code-title="sourceCodeTitle" :source-code="sourceCode" />
    </el-row>

    <!-- Drawer 抽屉 -->
    <el-drawer
      :visible.sync="drawer"
      :with-header="false"
      size="50%"
      direction="rtl"
    >
      <CodeView :source-code-title="sourceCodeTitle" :source-code="sourceCode" />
    </el-drawer>
  </div>
</template>
<script>
import MyShow from '@/views/loginHome/particles/show/index'
import Demo from '@/views/loginHome/particles/show/index'
import CodeView from '@/components/CodeView'
export default {
  name: 'LoingHome2',
  components: {
    MyShow,
    CodeView
  },
  data() {
    return {
      activeName: 'second',
      drawer: false,
      sourceCodeTitle: Demo.__sourceCodeTitle,
      sourceCode: Demo.__sourceCode
    }
  },
  created() {

  }, methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style scoped>
.main {
  width: 100%;
  height: 100%;
}

</style>
