<template>
  <div class="doc-example">
    <div class="header">
      <span class="label">{{ label }}</span>
      <a @click="editMode = !editMode"><s-icon icon="mode_edit"></s-icon> Edit Code</a>
    </div>
    
    <div class="panes">
      <div class="demo pane">
        <slot>
          <dynamic-template :template="template" :data-hook="dataHook"></dynamic-template>
        </slot>
      </div>
      <div v-if="editMode" class="code-editor pane">
        <textarea v-model="currentCode"></textarea>
      </div>
      <code-snippet v-else class="code pane" :code="currentCode" :lang="lang">
        <!--<slot name="code"></slot>-->
      </code-snippet>
    </div>
    
    
  </div>
</template>

<script>

export default {
  name: 'doc-example',
  props: {
    value: String,
    label: String,
    lang: String,
    dataHook: Function,
  },
  data() {
    return {
      editMode: false,
    };
  },
  computed: {
    template() {
      return `<div>${this.currentCode}</div>`;
    },
    currentCode: {
      get() {
        return this.value.trim();
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>

<style lang="sass" scoped>
@import './styles/imports';

.doc-example {
  margin: 12px;
  border-top: solid 1px #eee;
  padding-top: 8px;
}

.header {
  @include h-box;
  margin-bottom: 6px;
}

.label {
  color: grey;
  flex: auto 1 1;
}

.panes {
  @include h-box;
  align-items: flex-start;
  padding: 8px 0;
  
  .pane {
    flex: 100% 1 1;
  }
  
  .demo {
    
  }
  
  .code, .code-editor {
    margin-left: 4px;
  }
  
  .code {
    max-height: 400px;
  }
  
  .code-editor {
    textarea {
      width: 100%;
      min-height: 100px;
      resize: vertical;
    }
  }
}

@media(max-width: 800px) {
  .panes {
    flex-direction: column;
    align-items: stretch;
  }
  
  .code, .code-editor {
    margin-left: 0;
    margin-top: 10px;
  }
}
</style>