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
import Demo from '@/views/login/index'

export default {
  name: 'CodeLogin',
  data() {
    return {
      sourceCodeTitle: Demo.__sourceCodeTitle,
      sourceCode: Demo.__sourceCode
    }
  }
}
</script>

