<template>
  <div>
    <a
      :href="my_url"
    >
      <svg
        height="32"
        viewBox="0 0 16 16"
        version="1.1"
        width="32"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
        />
      </svg>
    </a>
  </div>

  <!-- http://www.ruanyifeng.com/blog/2019/04/github-oauth.html -->
  <!-- 5eeb1fbb5d00630d81d0-->
  <!-- 56aa7da20ef8fb37fe33989ea0477d89a275ad09  -->
</template>
<script>
import request from '@/utils/request'
import qs from 'qs'
// import axios from 'axios'
export default {
  name: 'GitHubLogin',
  data() {
    return {
      gitHubCode: '',
      my_url: 'https://github.com/login/oauth/authorize?client_id=' + process.env.VUE_APP_Client_Id,
      client_id: process.env.VUE_APP_Client_Id,
      client_secret: process.env.VUE_APP_Client_Secret
    }
  },
  created() {
    this.gitHubCode = this.getQueryString('code')
    if (this.gitHubCode) {
      // console.log(this.getQueryString('code'))
      this.getGitHubToken()
    }
  },
  methods: {
    /**
     * @description 获取url中的参数
     * 参考：https://www.cnblogs.com/cczlovexw/p/7495128.html
     */
    getQueryString(name) {
      /* eslint-disable */
      return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[, ''])[1].replace(/\+/g, '%20')) || null
      /* eslint-enable */
    },
    /**
     * @description 获取gitHub的Token
     */
    getGitHubToken() {
      // 使用vue代理
      request({
        method: 'post',
        url: '/Vueget_gitHub_accessToken/',
        // url: '/gitHubAccess',
        data: qs.stringify({
          client_id: this.client_id,
          client_secret: this.client_secret,
          code: this.gitHubCode })
      }).then(response => {
        // eslint-disable-next-line eqeqeq
        if (response.status != 200) {
          return console.log(response.data)
        }
        this.getGitHubUser(response.data)
      }).catch(error => {
        console.log('getGitHubToken---' + error)
      })
    }, /**
     * @description 获取gitHub的用户信息
     */
    getGitHubUser(token) {
      // 使用vue代理
      request({
        method: 'get',
        url: 'https://api.github.com/user',
        headers: {
          'Authorization': 'Bearer ' + token + ''
        }
      }).then(re => {
        console.log(re)
      }).catch(error => {
        console.log('getGitHubUser--' + error)
      })
    }
  }
}
</script>
