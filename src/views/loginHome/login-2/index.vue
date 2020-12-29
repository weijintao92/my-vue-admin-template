<template>
  <div class="my_main">
    <el-row>
      <MyShow />
      <el-button type="text" @click="drawer = true">查看源码</el-button>

      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="vue源码" name="first">
          <CodeView :source-code-title="sourceCodeTitle" :source-code="sourceCode" />
        </el-tab-pane>
        <el-tab-pane label="组件源码" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane
          label="定时任务补偿"
          name="fourth"
        >定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-row>

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
import MyShow from '../login-2/show/index'
import Demo from '@/views/loginHome/login/show/index'
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
<style>
.my_pre{
  width: 100%;
  height: 20px;
}
.main {
  width: 100%;
  height: 100%;
}
/* .el-drawer{
  display: -webkit-inline-box !important;
} */
</style>
