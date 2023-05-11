<template>
  <button class="pa-button" :class="buttonStyle"><slot /></button>
</template>

<script lang="ts" setup>
import './style/index.less'
import { computed } from 'vue'
defineOptions({ name: 'pa-button' })
type ButtonProps = {
  type?: string
}
const buttonProps = defineProps<ButtonProps>()

const buttonStyle = computed(() => {
  return { [`pa-button--${buttonProps.type}`]: buttonProps.type }
})
</script>
