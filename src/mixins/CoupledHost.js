export default {
  props: {
    value: {
      default: 0,
    },
  },
  data: () => ({
    children: [],
    activeChildIndex: parseInt(this.value) || 0,
  }),
  computed: {
  	activeChild() {
    	if(this.activeChildIndex < this.children.length) {
      	return this.children[this.activeChildIndex];
      }
    },
  },
  watch: {
    value(val) {
      this.activateChild(parseInt(val) || 0, true);
    },
  },
  methods: {
    updateChildren(operation, index, vm) {
      if(operation === 'add') {
        if(index <= this.activeChildIndex) {
        	this.activeChildIndex ++;
        }
        if (this.children.length === 1) {
        	this.activeChildIndex	= 0;
        }
      } else if(operation === 'remove') {
        if(index <= this.activeChildIndex) {
          this.activeChildIndex --;
        }
      }
    },
    addCoupledChild(vm) {
      // Guard
      if (this.$slots && this.$slots.default) {
        // We need to wait for the instances creation
        this.$nextTick(() => {
          // We need to get the components in the slot
          const childComponents = this.$slots.default.reduce((list, vnode) => {
            if (vnode.child) {
              list.push(vnode.child);
            }
            return list;
          }, []);
          // List has the child component in the right order
          // We can now register the child component in the right place
          const index = childComponents.indexOf(vm);
          // Add child
          if (index !== -1) {
            this.children.splice(index, 0, vm);
          }
          // Hook
          this.updateChildren('add', index, vm);
        });
      }
    },
    removeCoupledChild(vm) {
    	const index = this.children.indexOf(vm);
      // Remove child
      if (index !== -1) {
        this.children.splice(index, 1);
      }
      // Hook
      this.updateChildren('remove', index, vm);
    },
    activateChild(index, external = false) {
      if(index < 0) {
        index = 0;
      } else if(index >= this.children.length) {
        index = this.children.length - 1;
      }
      this.activeChildIndex = index;
      this.$emit('input', index);
      this.childActivated(index, external);
    },
    childActivated(index, external) { },
  },
  created() {
    if(this.children.length !== 0) {
      this.activateChild(parseInt(this.value) || 0, true);
    }
  },
};