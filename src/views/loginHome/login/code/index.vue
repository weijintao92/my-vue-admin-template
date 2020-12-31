<template>
  <div>
    <CodeView :source-code-title="sourceCodeTitle" :source-code="sourceCode" />
  </div>
</template>

<script>
import CodeView from '@/components/CodeView'
import Demo from '@/views/loginHome/login/show/index'

export default {
  name: 'LoginCode',
  components: {
    CodeView
  },
  data() {
    return {
      sourceCodeTitle: Demo.__sourceCodeTitle,
      sourceCode: Demo.__sourceCode
    }
  }
}
</script>

