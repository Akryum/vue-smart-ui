import Vue from 'vue';

export default function updateTemplate(instance, template) {
  try {
    const ref = Vue.compile(template);
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    instance.$options.render = render;
    instance.$options.staticRenderFns = staticRenderFns;
    instance._staticTrees = [];
    instance.$forceUpdate();
  } catch(e) {
    // console.warn(e);
  }
}