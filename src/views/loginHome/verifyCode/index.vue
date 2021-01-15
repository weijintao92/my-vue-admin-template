<template>
  <div id="verifyCode">
    <!-- 验证码 -->
    <el-form ref="VerifyCodeForm" :model="VerifyCodeForm" :rules="rules">
      <el-form-item prop="verifyCode">
        <el-col :span="3">
          <el-input
            id="verifyCode"
            v-model="VerifyCodeForm.verifyCode"
            class="verifyCode"
            prefix-icon="iconfont icon-renzheng"
            placeholder="请输入验证码"
            style="width:150px"
            size="mini"
            :validate-event="false"
            @blur="clearValidate('VerifyCodeForm')"
            @focus="focus($event)"

            @keydown.native.enter="submitForm('VerifyCodeForm')"
          />
        </el-col>

        <el-col :span="1">
          <div @click="createCode">
            <input
              id="checkNode"
              type="text"
              class="code"
              disabled="disabled"
            >
          </div>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {

  data() {
    var verifyCode = (rule, value, callback) => {
      if (value.toUpperCase() === this.code.toUpperCase()) {
        callback()
      } else {
        callback(new Error('请输入正确的验证码!'))
      }
    }
    return {
      VerifyCodeForm:
      {
        verifyCode: ''
      },
      code: '',
      rules: {
        verifyCode: [{ validator: verifyCode }]
      }

    }
  },
  mounted() {
    this.createCode()
  },
  methods: {
    focus(event) {
      event.currentTarget.select()
    },
    clearValidate(VerifyCodeForm) {
      this.$refs[VerifyCodeForm].clearValidate()
    },
    /**
     * 验证输入的验证码
     */
    submitForm(VerifyCodeForm) {
      this.$refs[VerifyCodeForm].validate((valid) => {
        if (valid) {
          alert('校验成功!')
        } else {
          this.createCode()
        }
      })
    },
    // 图片随机验证
    createCode() {
      /* 生成验证码的函数 */
      this.code = ''
      const codeLength = 4
      const checkCode = document.getElementById('checkNode')
      checkCode.value = ''

      // eslint-disable-next-line no-array-constructor
      const selectChar = new Array(
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'x',
        'y',
        'z',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      )
      for (let i = 0; i < codeLength; i++) {
        const charIndex = Math.floor(Math.random() * 61)
        this.code += selectChar[ charIndex ]
      }
      if (this.code.length !== codeLength) {
        this.createCode()
      }
      checkCode.value = this.code
    },
    /* 检验输入的验证码的正确性 */
    validate(formName) {
      const inputCode = this.VerifyCodeForm.verifyCode.toUpperCase()
      const codeToUp = this.code.toUpperCase()
      this.$refs[ formName ].verifyCode((verifyCode) => {
        console.log(22222222)
        if (verifyCode) {
          if (inputCode !== codeToUp) {
            this.$message.error({
              message: '请输入正确的验证码',
              center: true
            })
            return false
          }
          // const token = BaseUtils.randomGUID()
          // Cookies.set('loginToken', token, { expires: 7 })
          // this.$router.push('/')
        } else {
          this.createCode()
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    .el-form {

      .code {
        margin: 0 5px;
        background:#ffffff;
        font-family: Arial,serif;
        font-style: italic;
        color: black;
        border: 0;
        padding: 2px 3px;
        letter-spacing: 3px;
        font-weight: bolder;
        text-align: center;
        width:55px;
        height:26px
      }

    }
</style>

