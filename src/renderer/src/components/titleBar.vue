<template>
  <div
    v-if="!isUseSysTitle && isNotMac"
    class="w-full h-50px flex flex-row border-b-solid border-b-1 border-#ccc"
    style="box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2)"
  >
    <div v-if="isNotMac" style="-webkit-app-region: nodrag" class="m0">
      <img f-c-c w-180px h-full :src="logo" alt="这是logo" />
    </div>
    <!-- <div w-auto p-1 font-italic font-mono font-size-8>AI&nbsp;Flow</div> -->
    <div style="-webkit-app-region: drag" w-screen></div>
    <div style="-webkit-app-region: drag" flex items-center>
      <el-steps
        p-3
        min-w-160
        bg-white
        space="1"
        :active="active"
        finish-status="success"
        simple
        style="margin: 0px"
        align-center
      >
        <el-step title="功能选择" description="Function selection" />
        <el-step title="参数配置" description="Parameter configuration" />
        <el-step title="智能设计" description="Intelligent design" />
        <el-step title="设计结果" description="Design Results" />
      </el-steps>
    </div>
    <div f-c-c>
      <el-button>上一步</el-button>
      <el-button>下一步</el-button>
      <el-select v-model="value" class="m-2 min-w-20" placeholder="更多">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
      /></el-select>
    </div>
    <div f-c-c>
      <div class="windows-icon-bg" @click="Mini">
        <el-icon ma size="25" color="black"><icon-material-symbols-minimize /></el-icon>
      </div>
      <div class="windows-icon-bg" @click="maxOrReduction">
        <el-icon v-if="max" ma size="25" color="black"
          ><icon-material-symbols-select-window
        /></el-icon>
        <el-icon v-else ma size="25" color="black"
          ><icon-material-symbols-square-outline-rounded
        /></el-icon>
      </div>
      <div class="windows-icon-bg hover-bg-red-500" @click="Close">
        <el-icon ma size="25" color="black"
          ><icon-material-symbols-close-rounded
        /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import logo from '@renderer/assets/logo.png'

const active = ref(0)
const isNotMac = ref(true)
const isUseSysTitle = ref(false)
const max = ref(false)
const Mini = () => {
  window.electron.ipcRenderer.send('win:invoke', 'min')
}
const maxOrReduction = () => {
  window.electron.ipcRenderer.send('win:invoke', 'max')
  max.value = !max.value
}
const Close = () => {
  window.electron.ipcRenderer.send('win:invoke', 'close')
}
const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
]
</script>

<style lang="css">
.windows-icon-bg {
  @apply m-0 flex w-45px h-45px;
  @apply hover-bg-gray-200 cursor-pointer;
}

.close-icon {
  @apply hover-bg-red-500;
}

.el-step__main .el-step__arrow {
  @apply w-30px;
}
</style>
