<template>
  <div :style="{ height: 'calc(100% - 50px)' }" flex bg-white>
  <!-- <div flex bg-white :style="{ height: 'calc(100% - 50px)' }"> -->
    <div p-2 class="w-20%">
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" font-size-5 />
    </div>
    <el-divider
      direction="vertical"
      m-0
      h-full
      border-width="3px"
      border-color="#eeeeee"
    ></el-divider>
    <div p-2 class="w-60%">
      <h3 mx-2 font-size-5>设计尺寸参数</h3>
      <!-- <el-text class="mx-1 font-size-5 p-5">设计尺寸参数</el-text> -->
      <el-divider class="m-0" border-width="1px" border-color="#eeeeee"></el-divider>
      <el-table :data="tableData" style="width: 100%; height: 80%">
        <el-table-column prop="Name" label="变量名称" width="180" />
        <el-table-column prop="Value" label="数值" width="180" />
        <el-table-column prop="Unit" label="单位" />
      </el-table>
      <div f-c-c mt-10><el-button size="large">导出GDSII版图</el-button></div>
    </div>
    <el-divider
      direction="vertical"
      m-0
      h-full
      border-width="3px"
      border-color="#eeeeee"
    ></el-divider>
    <div class="w-20%">
      <el-table :data="tableData1" border style="width: 100%; height: 60%">
        <el-table-column prop="Name" label="Name" />
        <el-table-column prop="value" label="Value" />
        <el-table-column prop="notes" label="Notes" />
      </el-table>
      <el-divider class="m-0" border-width="3px" border-color="#eeeeee"></el-divider>
      <div flex flex-col>
        <span f-c-c p-1>滤波器原理图</span>
        <!-- <el-image p-1 :src="imagePath"></el-image> -->
        <img src="@renderer/assets/layout.png" alt="滤波器" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Picture as IconPicture } from '@element-plus/icons-vue'
import imagePath from '@renderer/assets/HPF1.png'

interface Tree {
  label: string
  children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
  console.log(data)
}

const tableData1 = [
  {
    Name: '起始频率',
    value: 10,
    notes: 'GHz'
  },
  {
    Name: '截止频率',
    value: 20,
    notes: 'GHz'
  },
  {
    Name: '带宽',
    value: 10,
    notes: 'GHz'
  },
  {
    Name: '通带增益',
    value: -1,
    notes: 'dB'
  },
  {
    Name: '阻带抑制',
    value: -20,
    notes: 'dB'
  },
  {
    Name: '群延迟',
    value: 1,
    notes: 'deg'
  },
  {
    Name: '阻抗匹配',
    value: 50,
    notes: 'Ω（欧姆）'
  },
  {
    Name: '拓扑结构',
    value: "LPF1",
    notes: ''
  }
]

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
    Name: 'C1-C13',
    Value: 5.469,
    Unit: 'fF'
  },
  {
    Name: 'C2-C12',
    Value: 6.985,
    Unit: 'fF'
  },
  {
    Name: 'C3-C11',
    Value: 10.256,
    Unit: 'fF'
  },
  {
    Name: 'C4-C10',
    Value: 58.62,
    Unit: 'fF'
  },
  {
    Name: 'C5-C8',
    Value: 15.67,
    Unit: 'fF'
  },
  {
    Name: 'C6-C9',
    Value: 3.33,
    Unit: 'fF'
  },
  {
    Name: 'C7',
    Value: 7.79,
    Unit: 'fF'
  },
  {
    Name: 'l1-l9',
    Value: 16.98,
    Unit: 'nH'
  },
  {
    Name: 'l2-l8',
    Value: 7.732,
    Unit: 'nH'
  },
  {
    Name: 'l3-l7',
    Value: 8.89,
    Unit: 'nH'
  },
  {
    Name: 'l4-l6',
    Value: 9.63,
    Unit: 'nH'
  },
  {
    Name: 'l5',
    Value: 4.53,
    Unit: 'nH'
  }
]

const tableData1 = [
{
    Name: '起始频率',
    value: 1.5,
    notes: 'GHz'
  },
  {
    Name: '截止频率',
    value: 3.5,
    notes: 'GHz'
  },
  {
    Name: '带宽',
    value: 2,
    notes: 'GHz'
  },
  {
    Name: '通带增益',
    value: -1,
    notes: 'dB'
  },
  {
    Name: '阻带抑制',
    value: 0.5,
    notes: 'dB'
  },
  {
    Name: '群延迟',
    value: -30,
    notes: 'deg'
  },
  {
    Name: '阻抗匹配',
    value: 50,
    notes: 'Ω（欧姆）'
  },
  {
    Name: '拓扑结构',
    value: 'layout',
    notes: ''
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
