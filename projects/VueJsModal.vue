<template>
  <div v-if="isShow" class>
    <div :class="[backgroundColorStyle]" class="overlayClass" @click.self="hide">
      <div
        :class="{show: isShow}"
        class="d-container d-bg-white d-rounded d-overflow transition"
        :style="`width: ${width}px; height: ${height}px; min-height: ${minHeight}px`"
      >
        <slot ref="slots"/>
      </div>
    </div>
  </div>
</template>

<script>
import VModal from './index'
export default {
  name: 'v-modal',
  props: {
    name: {
      required: true,
      type: String,
    },
    height: {
      type: [Number, String],
      default: 'AUTO',
    },
    width: {
      type: Number,
      default: 500,
    },
    maxHeight: {
      type: Number,
      default: 1000,
    },
    minHeight: {
      type: Number,
      default: 200,
    },
    theme: {
      type: String,
      default: 'Default',
      validator(value) {
        return true
      },
    },
  },
  data() {
    return {
      isShow: false,
      backgroundColorStyle: 'dialog-Default-Overlay',
    }
  },
  created() {
    VModal.event.$on('toggle', this.handleToggleEvent)
    window.addEventListener('resize', this.handleWindowResize)
  },
  beforeDestroy() {
    //   Remove listen handler
    VModal.event.$off('toggle', this.handleToggleEvent)
    window.removeEventListener('resize', this.handleWindowResize)
  },
  methods: {
    handleWindowResize() {
      if (window.outerHeight < this.maxHeight)
        this.maxHeight = window.outerHeight

      if (window.outerWidth < this.width) this.width = window.outerWidth
    },
    handleToggleEvent(name, isShow) {
      if (name !== this.name || this.name === undefined) return
      if (isShow) this.show()
      else this.hide()
    },
    hide() {
      this.isShow = false
      this.$emit('onClose', true)
    },
    show() {
      this.isShow = true
      this.$emit('onShow', true)
    },
  },
  watch: {
    isShow() {
      if (this.isShow === false) return
    },
  },
}
</script>

<style lang="scss" scoped>
.dialog-Default-Overlay {
  background-color: rgba(30, 30, 30, 0.85);
}

.dialog-Blue-Overlay {
  background-color: rgba(27, 31, 207, 0.55);
}

.d-rounded {
  border-radius: 5px;
}

.d-bg-white {
  background-color: white;
}

.d-overflow {
  overflow: hidden;
}

.overlayClass {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;

  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.d-container {
  display: flex;
  flex-direction: column;
}
</style>