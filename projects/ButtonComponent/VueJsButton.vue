<template>
  <div class="button">
    <button :class="buttonClass" class @click="onClick">
      <slot v-if="!loading" />
      <div v-else>
        <ButtonLoadingComponent />
      </div>
      <!-- <icon v-if='icon' :name='icon'/> -->
    </button>
  </div>
</template>

<script>
import ButtonLoadingComponent from './ButtonLoadingComponent'
import VButton from './index'
export default {
  name: 'v-btn',
  components: {
    ButtonLoadingComponent,
  },
  props: {
    rounded: {
      type: String,
      default: 'none',
      validator: value => {
        return ['none', 'small', 'full'].indexOf(value) > -1
      },
    },
    size: {
      type: String,
      default: 'small',
      validator: value => {
        return ['small', 'medium', 'large'].indexOf(value) > -1
      },
    },
    theme: {
      type: String,
      default: 'primary',
      validator: value => {
        return ['primary', 'gray', 'dark', 'modern'].indexOf(value) > -1
      },
    },
    outline: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    full: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    document.documentElement.style.setProperty(
      '--primaryColor',
      VButton.primaryColor
    )
    document.documentElement.style.setProperty(
      '--primaryHoverColor',
      VButton.primaryHoverColor
    )
  },
  computed: {
    buttonClass() {
      let className = []
      switch (this.theme) {
        case 'primary':
          className.push('button-primary')
          break
        case 'gray':
          className.push('button-gray')
          break
        case 'dark':
          className.push('button-dark')
          break
        case 'modern':
          className.push('button-modern')
          break
        default:
          break
      }

      switch (this.size) {
        case 'small':
          className.push('size-sm')
          break
        case 'medium':
          className.push('size-md')
          break
        case 'large':
          className.push('size-lg')
          break
        default:
          break
      }

      switch (this.rounded) {
        case 'none':
          className.push('border-radius-none')
          break
        case 'small':
          className.push('border-radius-sm')
          break
        case 'full':
          className.push('border-radius-lg')
          break
        default:
          break
      }
      if (this.outline) className.push('button-outline')
      if (this.full) className.push('w-full')
      if (this.disabled) className.push('button-disabled')
      return className
    },
  },
  methods: {
    onClick() {
      if (this.disabled) return
      if (this.loading) return
      this.$emit('click')
    },
  },
}
</script>

<style scoped lang="scss">
// Color
$primary: var(--primaryColor);
$primary-hover: var(--primaryHoverColor);

$blurPurple: #4352ff;
$blurPurple-hover: #3645ee;

$dark: #1e1e1e;
$dark-hover: #404040;

$gray: #e0e1e2;
$gray-hover: #5a5a5a;

// Font Size
$fontSize: 14px;

.button {
  button {
    outline: none;
    cursor: pointer;
    border: none;
    font-size: $fontSize;
  }
  .w-full {
    width: 100%;
  }
  .size-lg {
    height: 66px;
    padding: 0px 40px;
  }
  .size-md {
    height: 52px;
    padding: 0px 24px;
  }
  .size-sm {
    height: 40px;
    padding: 0px 16px;
  }
  .border-radius-lg {
    border-radius: 50px;
  }
  .border-radius-sm {
    border-radius: 5px;
  }
  .border-radius-none {
    border-radius: 0px;
  }
  .button-disabled {
    cursor: not-allowed !important;
    opacity: 0.5;
  }
  .button-outline {
    border: 1px solid transparent;
  }
  .button-primary {
    color: white;
    background-color: $primary;
    &.button-outline {
      color: $primary;
      background-color: white;
      border-color: $primary;
      &:hover {
        background-color: $primary;
        color: white;
      }
    }
    &:hover {
      background-color: $primary-hover;
    }
  }
  .button-modern {
    color: white;
    background-color: $blurPurple;
    &.button-outline {
      color: $blurPurple;
      background-color: white;
      border-color: $blurPurple;
      &:hover {
        background-color: $blurPurple;
        color: white;
      }
    }
    &:hover {
      background-color: $blurPurple-hover;
    }
  }
  .button-dark {
    color: white;
    background-color: $dark;
    &.button-outline {
      color: $dark;
      background-color: white;
      border-color: $dark;
      &:hover {
        background-color: $dark;
        color: white;
      }
    }
    &:hover {
      background-color: $dark-hover;
    }
  }
  .button-gray {
    color: #5a5a5a;
    background-color: $gray;
    &.button-outline {
      color: $gray-hover;
      background-color: white;
      border-color: $gray-hover;
      &:hover {
        color: white;
        background-color: $gray-hover;
      }
    }
    &:hover {
      color: white;
      background-color: $gray-hover;
    }
  }
}
</style>
