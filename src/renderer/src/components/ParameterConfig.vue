<template w-full h-50px f-c-c>
  <div h-auto f-c-c bg-white>
    <div class="w-20%" h-940px>
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" font-size-5 />
    </div>
    <el-divider
      direction="vertical"
      class="m-0 h-940px"
      border-width="3px"
      border-color="#eeeeee"
    ></el-divider>
    <div class="w-60%" h-940px>
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
      <div class="demo-input-suffix font-size-5">
        <el-row :gutter="20">
          <span class="ml-20 w-35 text-gray-600 inline-flex items-center">噪声系数</span>
          <el-input v-model="input1" class="w-50 m-2" placeholder="input a value" />
          <span class="w-35 text-gray-600 inline-flex items-center">dB</span>
        </el-row>
      </div>
      <div class="demo-input-suffix font-size-5">
        <el-row :gutter="20">
          <span class="ml-20 w-35 text-gray-600 inline-flex items-center">增益</span>
          <el-input v-model="input2" class="w-50 m-2" placeholder="input a value" />
          <span class="w-35 text-gray-600 inline-flex items-center">dB</span>
        </el-row>
      </div>
      <div class="demo-input-suffix font-size-5">
        <el-row :gutter="20">
          <span class="ml-20 w-35 text-gray-600 inline-flex items-center">带宽</span>
          <el-input v-model="input3" class="w-50 m-2" placeholder="input a value" />
          <span class="w-35 text-gray-600 inline-flex items-center">GHz</span>
        </el-row>
      </div>
      <div class="demo-input-suffix font-size-5">
        <el-row :gutter="20">
          <span class="ml-20 w-35 text-gray-600 inline-flex items-center">阻抗匹配</span>
          <el-input v-model="input4" class="w-50 m-2" placeholder="input a value" />
          <span class="w-35 text-gray-600 inline-flex items-center">Ω</span>
        </el-row>
      </div>
      <div class="demo-input-suffix font-size-5">
        <el-row :gutter="20">
          <span class="ml-20 w-35 text-gray-600 inline-flex items-center">线性度</span>
          <el-input v-model="input5" class="w-50 m-2" placeholder="input a value" />
          <span class="w-35 text-gray-600 inline-flex items-center">dBm</span>
        </el-row>
      </div>
      <div class="demo-input-suffix font-size-5">
        <el-row :gutter="20">
          <span class="ml-20 w-35 text-gray-600 inline-flex items-center">功耗</span>
          <el-input v-model="input6" class="w-50 m-2" placeholder="input a value" />
          <span class="w-35 text-gray-600 inline-flex items-center">mW</span>
        </el-row>
      </div>
      <div class="demo-input-suffix font-size-5">
        <el-row :gutter="20">
          <span class="ml-20 w-35 text-gray-600 inline-flex items-center">稳定性</span>
          <el-input v-model="input7" class="w-50 m-2" placeholder="input a value" />
          <span class="w-35 text-gray-600 inline-flex items-center"></span>
        </el-row>
      </div>
      <div class="demo-input-suffix font-size-5">
        <el-row :gutter="20">
          <span class="ml-20 w-35 text-gray-600 inline-flex items-center">反向隔离</span>
          <el-input v-model="input8" class="w-50 m-2" placeholder="input a value" />
          <span class="w-35 text-gray-600 inline-flex items-center">dB</span>
        </el-row>
      </div>
      <div class="demo-input-suffix font-size-5">
        <el-row :gutter="20">
          <span class="ml-20 w-35 text-gray-600 inline-flex items-center">输出功率</span>
          <el-input v-model="input9" class="w-50 m-2" placeholder="input a value" />
          <span class="w-35 text-gray-600 inline-flex items-center">dBm</span>
        </el-row>
      </div>
      <div class="demo-input-suffix font-size-5">
        <el-row :gutter="20">
          <span class="ml-20 w-35 text-gray-600 inline-flex items-center">动态范围</span>
          <el-input v-model="input10" class="w-50 m-2" placeholder="input a value" />
          <span class="w-35 text-gray-600 inline-flex items-center">dB</span>
        </el-row>
      </div>
    </div>
    <el-divider
      direction="vertical"
      class="m-0 h-940px"
      border-width="3px"
      border-color="#eeeeee"
    ></el-divider>
    <div class="w-20%" h-940px>
      <el-table :data="tableData" border style="width: 100% high: 60%">
        <el-table-column prop="Name" label="Name" />
        <el-table-column prop="value" label="Value" />
        <el-table-column prop="notes" label="Notes" />
      </el-table>
      <el-divider class="m-0" border-width="3px" border-color="#eeeeee"></el-divider>
      <div class="demo-image__error">
        <div class="block">
          <span class="demonstration">Custom</span>
          <el-image>
            <template #error>
              <div class="image-slot">
                <el-icon><icon-picture /></el-icon>
              </div>
            </template>
          </el-image>
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

const defaultProps = {
  children: 'children',
  label: 'label'
}

const tableData = [
  {
    Name: '噪声系数',
    value: '2',
    notes: 'dB'
  },
  {
    Name: '增益',
    value: '15',
    notes: 'dB'
  },
  {
    Name: '带宽',
    value: '10',
    notes: 'GHz'
  },
  {
    Name: '阻抗匹配',
    value: '50',
    notes: 'Ω（欧姆）'
  },
  {
    Name: '线性度',
    value: '10',
    notes: 'dBm'
  },
  {
    Name: '功耗',
    value: '30',
    notes: 'mW'
  },
  {
    Name: '稳定性',
    value: '1',
    notes: '\\'
  },
  {
    Name: '反向隔离',
    value: '30',
    notes: 'dB'
  },
  {
    Name: '输出功率',
    value: '50',
    notes: 'dBm'
  },
  {
    Name: '动态范围',
    value: '50',
    notes: 'dB'
  }
]
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
