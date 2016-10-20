import CodeBlock from './CodeBlock.vue';
import CodeExample from './CodeExample.vue';
import Note from './Note.vue';

export default (Vue) => {
    Vue.component(CodeBlock.name, CodeBlock);
    Vue.component(CodeExample.name, CodeExample);
    Vue.component(Note.name, Note);
};
