export default function(hostNames) {
  return {
    computed: {
      active() {
        return this.$parent.activeChild === this;
      },
    },
    beforeCreate() {
      if(typeof this.$parent.addCoupledChild === 'function') {
    		this.$parent.addCoupledChild(this);
      } else {
      	console.warn(`<${this.$options.name}> component needs a parent with 'addCoupledChild(vm)' method.`);
      }
    },
    beforeDestroy() {
    	if(typeof this.$parent.removeCoupledChild === 'function') {
    		this.$parent.removeCoupledChild(this);
      } else {
      	console.warn(`<${this.$options.name}> component needs a parent with 'removeCoupledChild(vm)' method.`);
      }
    },
  };
}