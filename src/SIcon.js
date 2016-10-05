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
      'class': {
        's-icon': true,
        'material-icons': true,
      },
    }, context.props.icon);
  },
};
