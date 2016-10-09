<template>
    <div class="columns is-mobile">
        <button :class="{ 'button': true, 'sidebar-button': true, 'is-open': sidebarToggle }" @click="sidebarToggle = ! sidebarToggle" type="button">
            <span class="icon">
                <i class="fa fa-bars"></i>
            </span>
        </button>
        <div :class="{ 'column': true, 'is-3': true, 'sidebar-container': true, 'is-open': sidebarToggle }">
            <aside class="menu sidebar">
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
                    <li><router-link active-class="is-active" :to="{ name: 'rules', hash: '#available-rules'}">Available Validations</router-link></li>
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
        </div>
        <div class="column columns is-mobile">
            <div class="column is-11">
                <section class="hero">
                    <div class="hero-body">
                        <div class="container has-text-centered">
                            <h1 class="title is-1">
                                {{ $route.meta.title || 'Vee-Validate' }}
                            </h1>
                            <h2 class="subtitle is-4">
                                {{ $route.meta.subtitle }}
                            </h2>
                        </div>
                    </div>
                </section>
                <div class="container">
                    <div class="column content-container is-mobile">
                        <transition name="fade" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        sidebarToggle: false
    })
};
</script>
