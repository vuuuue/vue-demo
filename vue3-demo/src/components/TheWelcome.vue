<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
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
      for (let i = 0; i < 200; i++) {
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
const transferContactList = ref<TransferPersonInfo[]>([]) // 真实数据

getContactList().then((res) => {
  transferContactList.value = res
})
const scrollTop = ref(0) // 滚动距离
const itemHeight = ref(0) // 每一个item的高度
const viewHeight = ref(0) // 容器高度
const  startIndex = ref(0) // 开始索引
const  endIndex = ref(20) // 结束索引-默认展示20个
// 滚动区域高度
const scrollViewHeight = computed(() => {
  return `${transferContactList.value.length * itemHeight.value}px`
})
// 偏移量
const transferY = computed(() => {
  return scrollTop.value - (scrollTop.value % itemHeight.value)
})
// 真实数据
const showData = computed(() =>{
  return transferContactList.value.slice(startIndex.value, endIndex.value)
})

const getHeight = () => {
  const item = document.querySelector<HTMLDivElement>('.person-info-card')
  const view = document.querySelector<HTMLDivElement>('.person-info-view')
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
  startIndex.value = Math.floor(scrollTop.value / itemHeight.value)
  // 结束索引 = 初始索引 + 容器高度 / 每一项的高度
  endIndex.value = Math.ceil(startIndex.value + viewHeight.value / itemHeight.value) 
}
</script>

<template>
  <div class="view-content person-info-view" @scroll="handleScroll">
    <div class="contact-content-container" :style="{height: scrollViewHeight}" >
      <!-- 为了正确实现滚动效果。偏移量一直和scrollTop相同，那就没有滚动效果了就只是渲染区域数据改变-->
      <!-- 所以这里不要要让他进行偏移让他随着父元素去滚动，当滚动距离（scrollTop）大于等于'一个item'
        (也就是下面计算公式如果有御书说明是在item上滚动当余数为0说明正好item滚动结束了)时候才算一个item的偏移量 -->
      <div class="item-container "
      :style="{ transform: `translateY(${transferY}px)`}">
        <div class="item person-info-card" v-for="(item, index) in showData" :key="index">
          {{ item.phoneNo }}
        </div>
      </div>
    </div>
  </div>
</template>
<style>
body{
  padding-top: 200px;
}
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
  /* position: absolute; */
  overflow: hidden;
}

</style>
