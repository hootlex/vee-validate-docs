<template>
    <div class="note">
        <b>{{ capitalize(title) }}:</b> <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'This is a note'
        },
        type: {
            type: String,
            default: 'info'
        }
    },
    methods: {
        capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    }
};
</script>
