<template>
  <button
    type="button"
    :class="['button', { primary, secondary }, size]"
    @click="$emit('onClick')"
    :style="style"
    v-text="label"
  />
</template>

<script>
export default {
  props: {
    /**
     * ボタン内に表示するテキスト
     */
    label: {
      type: String,
      required: true
    },
    /**
     * プライマリーカラーを適用するか
     */
    primary: {
      type: Boolean,
      default: false
    },
    /**
     * セカンダリーカラーを適用するか
     */
    secondary: {
      type: Boolean,
      default: false
    },
    /**
     * ボタンのサイズ
     * @values small, medium, large
     */
    size: {
      type: String,
      default: 'medium',
      validator: function(value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      }
    },
    backgroundColor: {
      type: String,
      required: false
    }
  },
  computed: {
    style() {
      return {
        backgroundColor: this.backgroundColor
      }
    }
  },
  methods: {
    onClick() {
      /**
       * ボタンクリック時のイベント
       * @event onClick
       * @type {object}
       */
      this.$emit('onClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  &.primary {
    color: white;
    background-color: #1ea7fd;
  }
  &.secondary {
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }

  &.large {
    font-size: 16px;
    padding: 12px 24px;
  }
  &.medium {
    font-size: 14px;
    padding: 11px 20px;
  }
  &.small {
    font-size: 12px;
    padding: 10px 16px;
  }
}
</style>