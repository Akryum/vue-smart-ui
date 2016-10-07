export default {
  functional: true,
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  render(h, context) {
    return h('i', {
      'class': [
        's-icon',
        'material-icons',
        context.data.staticClass,
      ],
    }, context.props.icon);
  },
};
