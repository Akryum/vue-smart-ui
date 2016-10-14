export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentValue: this.value,
    } 
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
  },
  methods: {
    toggle() {
      this.currentValue = !this.currentValue;
      this.$emit('input', this.currentValue);
    },
  },
}