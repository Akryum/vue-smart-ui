<script>
import updateTemplate from './update-template';

export default {
  props: {
  	template: {
    	type: String,
      required: true,
    },
    dataHook: {
    	type: Function,
      default: () => function() {},
    },
  },
  watch: {
  	template(val) {
    	updateTemplate(this, val);
    },
  },
  beforeCreate() {
  	const template = this.$options.propsData.template;
  	if(template) {
    	this.$options.template = template;
    } else {
    	this.$options.template = `<div></div>`;
    }
    const dataHook = this.$options.propsData.dataHook;
    if(dataHook) {
    	this.$options.data = dataHook; //.bind(this);
    }
  },
};
</script>