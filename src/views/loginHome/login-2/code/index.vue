<template>
  <div id="CodeLogin">
    <p>{{ sourceCodeTitle }}</p>
    <pre v-highlightjs>
     <code class="html" style="text-align:left;">{{ sourceCode }}</code>
    </pre>
  </div>
</template>

<script>
import Demo from '@/views/loginHome/login/show/index'

export default {
  name: 'Code',
  data() {
    return {
      sourceCodeTitle: Demo.__sourceCodeTitle,
      sourceCode: Demo.__sourceCode
    }
  }
}
</script>

<style scoped>
.hljs {
    overflow-x: visible;
}
#CodeLogin {
  height: 100%;
  width: 100%;
}
</style>

