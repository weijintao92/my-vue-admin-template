<template>
  <div id="CodeLogin">
    <!-- <demo /> -->
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
#CodeLogin {
  position: relative;
  height: 100%;
  overflow: scroll;
}
</style>

