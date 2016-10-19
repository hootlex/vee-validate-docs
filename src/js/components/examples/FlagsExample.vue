<template>
    <code-example>
        <div slot="example">
            <div>
                <input name="name" v-validate data-rules="required|alpha" type="text" placeholder="Name">
                <span class="error" v-show="! fields('name').valid && fields('name').dirty">{{ errors.first('name') }}</span>
            </div>
            <div>
                <input name="email" v-validate data-rules="required|email" type="text" placeholder="Email">
                <span class="error" v-show="fields('email').failed">{{ errors.first('email') }}</span>
            </div>
            <div>
                <span class="success" v-show="fields('email').passed && fields('name').passed">All Kewl</span>
            </div>
            <button type="button" class="button" :disabled="! (fields('name').dirty || fields('email').dirty)">Save</button>
        </div>
    </code-example>
</template>

<script>
export default {
    data: () => ({
        email: ''
    })
};
</script>
