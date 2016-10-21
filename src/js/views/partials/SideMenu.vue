<template>
    <aside class="menu sidebar">
        <a class="github-button" href="https://github.com/logaretm/vee-validate" data-icon="octicon-star" data-style="mega" data-count-href="/logaretm/vee-validate/stargazers" data-count-api="/repos/logaretm/vee-validate#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star logaretm/vee-validate on GitHub">Star</a>
        <p class="menu-label">
            Getting Started
        </p>
        <ul class="menu-list">
            <li><router-link active-class="is-active" :to="{ name: 'home', hash: '#about'}">What is vee-validate?</router-link></li>
            <li>
                <router-link active-class="is-active" :to="{ name: 'home', hash: '#installation'}">Installation</router-link>
                <ul>
                    <li><router-link :to="{ name: 'home', hash: '#npm'}">npm</router-link></li>
                    <li><router-link :to="{ name: 'home', hash: '#bower'}">bower</router-link></li>
                    <li><router-link :to="{ name: 'home', hash: '#cdn'}">CDN</router-link></li>
                </ul>
            </li>
            <li><router-link active-class="is-active" :to="{ name: 'home', hash: '#basic-example'}">Basic Example</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'home', hash: '#render-errors'}">Rendering Errors</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'home', hash: '#available-rules'}">Available Validations</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'home', hash: '#configuration'}">Configuration</router-link></li>
        </ul>
        <p class="menu-label">
            Validation Rules
        </p>
        <ul class="menu-list">
            <li><router-link active-class="is-active" :to="{ name: 'rules', hash: '#syntax'}">Syntax</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'rules', hash: '#available-validations'}">Available Validations</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'rules', hash: '#custom-rules'}">Custom Validations</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'rules', hash: '#custom-messages'}">Custom Messages</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'rules', hash: '#custom-attributes'}">Custom Attributes</router-link></li>
        </ul>
        <p class="menu-label">
            Localization
        </p>
        <ul class="menu-list">
            <li><router-link active-class="is-active" :to="{ name: 'localization', hash: '#translation'}">Translation</router-link></li>
            <li>
                <router-link active-class="is-active" :to="{ name: 'localization', hash: '#attributes-data-as'}">Attributes</router-link>
                <ul>
                    <li><router-link active-class="is-active" :to="{ name: 'localization', hash: '#attributes-data-as'}">data-as</router-link></li>
                    <li><router-link active-class="is-active" :to="{ name: 'localization', hash: '#attributes-dictionary'}">dictionary</router-link></li>
                </ul>
            </li>
            <li><router-link active-class="is-active" :to="{ name: 'localization', hash: '#localized-files'}">Localized Files</router-link></li>
        </ul>
        <p class="menu-label">
            Examples
        </p>
        <ul class="menu-list">
            <li><router-link active-class="is-active" :to="{ name: 'examples', hash: '#debounce-example'}">Debounce</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'examples', hash: '#reject-example'}">Reject Files</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'examples', hash: '#validate-data-example'}">Validating Expressions</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'examples', hash: '#validate-form'}">Form Validation</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'examples', hash: '#locale-example'}">Localized Messages</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'examples', hash: '#scope-example'}">Validation Scopes</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'examples', hash: '#coupon-example'}">Custom Validation: Coupon</router-link></li>
            <li><router-link active-class="is-active" :to="{ name: 'examples', hash: '#radio-buttons-example'}">Radio Buttons Validation</router-link></li>
        </ul>
        <p class="menu-label">
            API
        </p>
        <ul class="menu-list">
            <li><router-link active-class="is-active" :to="{ name: 'api', hash: '#error-bag'}">Error Bag</router-link></li>
            <li>
                <router-link active-class="is-active" :to="{ name: 'api', hash: '#validator'}">Validator</router-link>
                <ul>
                    <li><router-link active-class="is-active" :to="{ name: 'api', hash: '#validator'}">API</router-link></li>
                    <li><router-link active-class="is-active" :to="{ name: 'api', hash: '#validator-example'}">Example</router-link></li>
                </ul>
            </li>
        </ul>
    </aside>
</template>
