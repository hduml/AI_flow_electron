<template>
  <div :style="{ height: 'calc(100% - 50px)' }" flex bg-white>
  <!-- <div :style="{ height: 'calc(100% - 50px)' }" f-c-c bg-white> -->
    <div class="w-20%">
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" font-size-5 />
    </div>
    <el-divider
      direction="vertical"
      class="m-0"
      border-width="3px"
      border-color="#eeeeee"
    ></el-divider>
    <div class="w-60%">
      <!-- <el-text class="mx-1 font-size-5 p-5">设计结果输出</el-text>
      <el-divider class="m-0" border-width="1px" border-color="#eeeeee"></el-divider>
      <div class="block text-center ml-10 mr-10">
        <span class="demonstration font-size-5">原理图设计结果</span>
        <el-carousel height="450px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small justify-center" text="2xl">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="block text-center ml-10 mr-10" m="t-4">
        <span class="demonstration font-size-5">版图设计结果</span>
        <el-carousel trigger="click" height="350px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small justify-center" text="2xl">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div> -->
      <span class="mt-5 ml-10 w-35 text-gray-600 inline-flex items-center font-size-5"
        >特性参数:</span
      >
      <el-divider class="m-0" border-width="1px" border-color="#eeeeee"></el-divider>
      <div class="demo-input-suffix font-size-5">
        <el-row :gutter="200">
          <span class="ml-20 w-35 text-gray-600 inline-flex items-center">起始频率</span>
          <el-input v-model="input1" class="w-50 m-2" placeholder="input a value" />
          <span class="w-35 text-gray-600 inline-flex items-center">GHz</span>
        </el-row>
      </div>
      <div class="demo-input-suffix font-size-5">
        <el-row :gutter="200">
          <span class="ml-20 w-35 text-gray-600 inline-flex items-center">截至频率</span>
          <el-input v-model="input2" class="w-50 m-2" placeholder="input a value" />
          <span class="w-35 text-gray-600 inline-flex items-center">GHz</span>
        </el-row>
      </div>
      <div class="demo-input-suffix font-size-5">
        <el-row :gutter="200">
          <span class="ml-20 w-35 text-gray-600 inline-flex items-center">通带增益</span>
          <el-input v-model="input3" class="w-50 m-2" placeholder="input a value" />
          <span class="w-35 text-gray-600 inline-flex items-center">dB</span>
        </el-row>
      </div>
      <div class="demo-input-suffix font-size-5">
        <el-row :gutter="200">
          <span class="ml-20 w-35 text-gray-600 inline-flex items-center">阻带衰减</span>
          <el-input v-model="input4" class="w-50 m-2" placeholder="input a value" />
          <span class="w-35 text-gray-600 inline-flex items-center">dB</span>
        </el-row>
      </div>
      <div class="demo-input-suffix font-size-5">
        <el-row :gutter="200">
          <span class="ml-20 w-35 text-gray-600 inline-flex items-center">群延迟</span>
          <el-input v-model="input5" class="w-50 m-2" placeholder="input a value" />
          <span class="w-35 text-gray-600 inline-flex items-center">deg</span>
        </el-row>
      </div>
      <div class="demo-input-suffix font-size-5">
        <el-row :gutter="200">
          <span class="ml-20 w-35 text-gray-600 inline-flex items-center">阻抗匹配</span>
          <el-input v-model="input6" class="w-50 m-2" placeholder="input a value" />
          <span class="w-35 text-gray-600 inline-flex items-center">Ω</span>
        </el-row>
      </div>
      <span class="mt-5 ml-10 w-35 text-gray-600 inline-flex items-center font-size-5"
        >拓扑结构选择:</span
      >
      <el-divider class="m-0" border-width="1px" border-color="#eeeeee"></el-divider>
      <div class="demo-input-suffix font-size-5">
        <el-row :gutter="200">
          <span class="ml-20 w-35 text-gray-600 inline-flex items-center">拓扑结构</span>
          <el-select v-model="value" class="m-2" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <span class="w-35 text-gray-600 inline-flex items-center"></span>
        </el-row>
      </div>
    </div>
    <el-divider
      direction="vertical"
      class="m-0"
      border-width="3px"
      border-color="#eeeeee"
    ></el-divider>
    <div class="w-20%">
      <el-table :data="tableData" border style="width: 100% high: 60%">
        <el-table-column prop="Name" label="Name" />
        <el-table-column prop="value" label="Value" />
        <el-table-column prop="notes" label="Notes" />
      </el-table>
      <el-divider class="m-0" border-width="3px" border-color="#eeeeee"></el-divider>
      <div class="demo-image">
        <div v-for="fit in fits" :key="fit" class="block">
          <span class="demonstration w-auto">原理图结构</span>
          <!-- <el-image style="width: 300px; height: 300px" :src="'image://' + PFPath" :fit="fit" /> -->
          <img style="width: 300px; height: 300px" src="@renderer/assets/layout.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Picture as IconPicture } from '@element-plus/icons-vue'
import { Calendar, Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
const input5 = ref('')
const input6 = ref('')
const input7 = ref('')
const input8 = ref('')
const input9 = ref('')
const input10 = ref('')

const difinput = computed(() => {
  const num1 = parseInt(input1.value, 10)
  const num2 = parseInt(input2.value, 10)

  // 如果input1或input2不是有效的数字，返回NaN
  if (isNaN(num1) || isNaN(num2)) {
    return NaN
  }

  return num2 - num1
})

const fits = ['cover']
const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

interface Tree {

  label: string
  children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
  console.log(data)
}

const data: Tree[] = [
  {
    label: '工程项目1',
    children: [
      {
        label: '低噪声放大器自动设计',
        children: [
          {
            label: '参数设置'
          }
        ]
      }
    ]
  },
  {
    label: '工程项目2',
    children: [
      {
        label: '低噪声放大器自动设计',
        children: [
          {
            label: '参数设置'
          }
        ]
      },
      {
        label: '滤波器自动设计',
        children: [
          {
            label: '参数设置'
          }
        ]
      }
    ]
  },
  {
    label: '工程项目3',
    children: [
      {
        label: '电阻自动设计',
        children: [
          {
            label: '参数设置'
          }
        ]
      },
      {
        label: '电感自动设计',
        children: [
          {
            label: '参数设置'
          }
        ]
      }
    ]
  }
]

const value = ref('')

const options = [
  {
    value: 'layout',
    label: '低通滤波器拓扑结构1'
  },
  {
    value: 'LPF2',
    label: '低通滤波器拓扑结构2'
  },
  {
    value: 'LPF3',
    label: '高通滤波器拓扑结构1'
  },
  {
    value: 'LPF4',
    label: '高通滤波器拓扑结构2'
  },
  {
    value: 'HPF1',
    label: '带通滤波器拓扑结构1'
  },
  {
    value: 'HPF2',
    label: '带通滤波器拓扑结构2'
  },
  {
    value: 'HPF3',
    label: '全通滤波器拓扑结构1'
  },
  {
    value: 'HPF4',
    label: '全通滤波器拓扑结构2'
  }
]

const defaultProps = {
  children: 'children',
  label: 'label'
}

const tableData = [
  {
    Name: '起始频率',
    value: input1,
    notes: 'GHz'
  },
  {
    Name: '截止频率',
    value: input2,
    notes: 'GHz'
  },
  {
    Name: '带宽',
    value: difinput,
    notes: 'GHz'
  },
  {
    Name: '通带增益',
    value: input3,
    notes: 'dB'
  },
  {
    Name: '阻带抑制',
    value: input4,
    notes: 'dB'
  },
  {
    Name: '群延迟',
    value: input5,
    notes: 'deg'
  },
  {
    Name: '阻抗匹配',
    value: input6,
    notes: 'Ω（欧姆）'
  },
  {
    Name: '拓扑结构',
    value: value,
    notes: ''
  }
]

// const PFPath = computed(() => {
//   return `D:\\GitWork\\electron_work\\AI_flow_electron\\resources\\${value.value}.png`.replace(
//     /\\\\/g,
//     '/'
//   )
// })
</script>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.demo-image__error .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
  vertical-align: top;
}
.demo-image__error .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.demo-image__error .el-image {
  padding: 0 5px;
  max-width: 3000px;
  max-height: 2000px;
  width: 100%;
  height: 200px;
}

.demo-image__error .image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
.demo-image .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 20%;
  box-sizing: border-box;
  vertical-align: top;
}
.demo-image .block:last-child {
  border-right: none;
}
.demo-image .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.demo-input-suffix {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
