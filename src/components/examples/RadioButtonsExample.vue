<template>
    <code-example>
        <form @submit.prevent="validateForm" slot="example" class="pure-form pure-form-stacked">
            <div class="pure-g">
                <div class="pure-u-1-2">
                    <legend :class="{ 'error': errors.has('radio_group_1') }">Radio Group 1</legend>
                    <label for="radio_group_1_1" class="pure-radio">
                        <input id="radio_group_1_1" name="radio_group_1" v-validate data-rules="required|in:1,2" value="1" type="radio">
                        Option 1
                    </label>
                    <label for="radio_group_1_2" class="pure-radio">
                        <input id="radio_group_1_2" name="radio_group_1" value="2" type="radio">
                        Option 2
                    </label>
                    <label for="radio_group_1_3" class="pure-radio">
                        <input id="radio_group_1_3" name="radio_group_1" value="3" type="radio">
                        Option 3
                    </label>
                    <span class="error" v-show="errors.has('radio_group_1')">{{ errors.first('radio_group_1') }}</span>
                </div>

                <div class="pure-u-1-2">
                    <legend :class="{ 'error': errors.has('radio_group_2') }">Radio Group 2 (Bound)</legend>
                    <label for="radio_group_2_1" class="pure-radio">
                        <input id="radio_group_2_1" v-model="radio_group_2" v-validate="radio_group_2" data-rules="required|in:1,2" name="radio_group_2" value="1" type="radio">
                        Option 1
                    </label>
                    <label for="radio_group_2_2" class="pure-radio">
                        <input id="radio_group_2_2" v-model="radio_group_2" name="radio_group_2" value="2" type="radio">
                        Option 2
                    </label>
                    <label for="radio_group_2_3" class="pure-radio">
                        <input id="radio_group_2_3" v-model="radio_group_2" name="radio_group_2" value="3" type="radio">
                        Option 3
                    </label>
                    <span class="error" v-show="errors.has('radio_group_2')">{{ errors.first('radio_group_2') }}</span>
                </div>
            </div>

            <button type="submit" class="pure-button pure-button-primary" name="button">Apply</button>
        </form>
    </code-example>
</template>

<script>
export default {
    data() {
        return {
            radio_group_2: '',
        }
    },
    methods: {
        validateForm() {
            this.$validator.validateAll();

            if (! this.errors.any()) {
                alert('All Passes!');
            }
        }
    }
}
</script>
