<script setup lang="ts">
import { nextTick, ref } from 'vue'
type TransferPersonInfo = {
  name: string
  phone: string
  id: string
  phoneNo: string
}
// mock数据
const getContactList = (): Promise<TransferPersonInfo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let list = []
      for (let i = 0; i < 500000; i++) {
        list.push({
          name: '张三' + i,
          phone: '1234567890' + i,
          id: i + '',
          phoneNo: '000' + i
        })
      }
      resolve(list)
    }, 100)
  })
}
const transferContactList = ref<TransferPersonInfo[]>([])
const showData = ref<TransferPersonInfo[]>([]) // 显示的数据

getContactList().then((res) => {
  transferContactList.value = res
  showData.value = transferContactList.value.slice(0, 20) // 初始展示的数据 （前20个）
  console.log('---data---', showData.value)
})


const scrollTop = ref(0) // 初始滚动距离
const itemHeight = ref(0) // 每一个item的高度
const viewHeight = ref(0) // 容器高度

const getHeight = () => {
  const item = document.querySelector<HTMLDivElement>('.person-info-card')
  const view = document.querySelector<HTMLDivElement>('.person-info-view')
    console.log('---view---', view);
  console.log('---item---', item);

  itemHeight.value = item ? item.offsetHeight : 0
  viewHeight.value = view ? view.offsetHeight : 0
  console.log('itemHeight', itemHeight.value)
  console.log('viewHeight', viewHeight.value)
}
nextTick(getHeight)


// 滚动事件
const handleScroll = (e: Event) => {
  if (itemHeight.value === 0 || viewHeight.value === 0) {
    getHeight()
  }
  // 获取滚动距离
  scrollTop.value = (e.target as HTMLElement).scrollTop
  console.log('scrollTop.value', scrollTop.value)
  // 初始索引 = 滚动距离 / 每一项的高度
  const startIndex = Math.floor(scrollTop.value / itemHeight.value)
  // 结束索引 = 初始索引 + 容器高度 / 每一项的高度
  const endIndex = Math.ceil(startIndex + 1 + viewHeight.value / itemHeight.value) 
  // 根据初始索引和结束索引，截取数据
  showData.value = transferContactList.value.slice(startIndex, endIndex)
}

</script>

<template>
  <div class="view-content person-info-view" @scroll="handleScroll">
    <div class="contact-content-container" :style="{height: `${transferContactList.length * itemHeight}px`}" >
      <div class="item-container "
      :style="{ transform: `translateY(${scrollTop}px)`}">
        <div class="item person-info-card" v-for="(item, index) in showData" :key="index">
          {{ item.phoneNo }}
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.view-content {
  width: 200px;
  height: 400px;
  background-color: #ccc;
  position: relative;
  overflow: auto;
}

.contact-content-container{
  height: 1000px;
}
.item-container{
  position: absolute;
  overflow: hidden;
}

</style>
