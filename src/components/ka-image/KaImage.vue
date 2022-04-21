<template>
  <img
    :style="styleProps"
    class="ka-image-component"
    @click.prevent="handleClick"
    :src="src"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import useComponentCommon from '@/hooks/useComponentCommon'
import {
  transformToComponentProps,
  imageDefaultProps,
  imageStylePropsNames
} from '@/defaultProps'

const defaultProps = transformToComponentProps(imageDefaultProps)

export default defineComponent({
  name: 'KaImage',
  props: {
    ...defaultProps
  },
  setup(props) {
    const { styleProps, handleClick } = useComponentCommon(
      props,
      imageStylePropsNames
    )
    return {
      styleProps,
      handleClick
    }
  }
})
</script>

<style scoped>
.ka-image-component {
  max-width: 100%;
  position: relative !important;
}
</style>
