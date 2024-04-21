<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import VirtuallyList from './components/VirtuallyList.vue'
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
            let list: TransferPersonInfo[] = []
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
</script>

<template>
    <div class="box"></div>
    <div style="height: 400px">
        <VirtuallyList  :listData="transferContactList" v-slot="slotProps">
            <div class="item" style="height: 28px;">
                {{ slotProps.item.phoneNo }}
            </div>
        </VirtuallyList>
    </div>

</template>

<style scoped>
html{
    padding-top: 400px !important;
}
.item{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
