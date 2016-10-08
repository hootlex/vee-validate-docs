<template>
    <div class="columns is-multiline">
        <div class="column is-12">
            <div class="tabs is-left">
                <ul>
                    <li :class="{ 'is-active': content === 'demo'}">
                        <a @click="content = 'demo'" class="pure-menu-link">
                            <i class="icon-play"></i>
                            Demo
                        </a>
                    </li>
                    <li :class="{ 'is-active': content === 'html' }">
                        <a @click="content = 'html'" class="pure-menu-link">
                            <i class="icon-html5"></i>
                            HTML
                        </a>
                    </li>
                    <li :class="{ 'is-active': content === 'js' }">
                        <a @click="content = 'js'" class="pure-menu-link">
                            <i class="icon-code"></i>
                            JavaScript
                        </a>
                    </li>
              </ul>
            </div>
        </div>
        <div v-show="content === 'demo'" class="column is-12">
            <slot name="example"></slot>
        </div>
        <div v-show="content === 'html'" class="column is-12">
            <code-block class="language-html"><slot name="code-html"></slot></code-block>
        </div>
        <div v-show="content === 'js'" class="column is-12">
            <code-block class="language-javascript"><slot name="code-js"></slot></code-block>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        content: 'demo'
    })
};
</script>
