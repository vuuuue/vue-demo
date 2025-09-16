<script setup lang="ts">
import { computed, nextTick, onMounted, onUpdated, ref } from 'vue'

type TransferPersonInfo = {
  name: string
  phone: string
  id: string
  phoneNo: string
}
const arr: AnyObj = {}

const props = defineProps({
  // 真实数据
  listData: {
    type: Array as () => TransferPersonInfo[],
    default: () => {
      return []
    }
  },
  // 展示内容区域高度
  height: {
    type: String,
    default: '100%'
  },
  buffer: {
    type: Number,
    default: 10
  }
})
// item元素
const items = ref<(Element[])>([])
// item高度
const itemHeight = ref(0)
onUpdated(() => {
  if (itemHeight.value) return
  if (items.value && items.value.length) {
    const { height } = items.value[0].getBoundingClientRect()
    itemHeight.value = height
  }
})
// 滚动区域高度--用于充开滚动条
const scrollHeight = computed(() => {
  return itemHeight.value * props.listData.length
})
// 滚动上方距离
const scrollTop = ref(0)
// itemContent的偏移量
const offsetY = computed(() => {
  return scrollTop.value - (scrollTop.value % itemHeight.value) - Math.min(props.buffer, startIndex.value) * itemHeight.value
})
// 开始索引
const startIndex = computed(() => {
  return Math.floor(scrollTop.value / itemHeight.value)
})
// 显示区域高度
const viewContent = ref<Element | null>(null)
const viewHeight = ref(0)
onMounted(() => {
  if (viewContent.value) {
    viewHeight.value = viewContent.value.clientHeight
  }
})
// 结束索引
const endIndex = computed(() => {
  return Math.ceil(startIndex.value + (viewHeight.value / itemHeight.value)) + props.buffer || 1
})
// 显示的数据
const visibleData = computed(() => {
  return props.listData.slice(Math.max(startIndex.value - props.buffer, 0), endIndex.value)
})
// 滚动事件
const scrollHandle = (e: Event) => {
  scrollTop.value = (e.target as Element).scrollTop
}
</script>

<template>
  <div ref="viewContent" class="view-content" @scroll="scrollHandle" :style="{ height }">
    <div class="scroll-content" :style="{ height: scrollHeight + 'px' }">
      <div class="item-container" :style="{ transform: `translateY(${offsetY}px` }">
        <div ref="items" class="item" v-for="(item, index) in visibleData" :key="index">
          <slot :item="item"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.view-content {
  width: 200px;
  background-color: #ccc;
  position: relative;
  overflow: auto;
}

.item-container {
  overflow: hidden;
}
</style>
