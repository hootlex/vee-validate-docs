<template>
    <div id="layout" ref="layout">
        <!-- Menu toggle -->
        <a href="#menu" id="menuLink" class="menu-link" ref="menuLink">
            <!-- Hamburger icon -->
            <span></span>
        </a>

        <div id="menu" ref="menu">
            <div class="pure-menu">
                <router-link to="/" class="pure-menu-heading">Vee Validate</router-link>
                <ul class="pure-menu-list">
                    <li class="pure-menu-item">
                        <router-link to="/" class="pure-menu-link">Getting Started</router-link>
                    </li>
                    <li class="pure-menu-item">
                        <router-link to="/#installation" class="pure-menu-link">Installation</router-link>
                    </li>
                    <li class="pure-menu-item">
                        <router-link to="/#basic-example" class="pure-menu-link">Basic Example</router-link>
                    </li>
                    <li class="pure-menu-item">
                        <router-link to="/#render-errors" class="pure-menu-link">Rendering Errors</router-link>
                    </li>
                    <li class="pure-menu-item">
                        <router-link to="/examples" class="pure-menu-link">Examples</router-link>
                    </li>
                    <li class="pure-menu-item">
                        <router-link to="/rules" class="pure-menu-link">Validation Rules</router-link>
                    </li>
                    <li class="pure-menu-item">
                        <router-link to="/localization" class="pure-menu-link">Localization</router-link>
                    </li>
                    <li class="pure-menu-item">
                        <router-link to="/api" class="pure-menu-link">API Reference</router-link>
                    </li>
                    <li class="pure-menu-item">
                        <router-link to="/#configuration" class="pure-menu-link">Configuration</router-link>
                    </li>
                </ul>
            </div>
            <div class="about flex-center">
                <a target="github" href="https://github.com/logaretm/vee-validate"><i class="icon-github"></i></a>
            </div>
        </div>

        <div id="main">
            <div class="header">
                <h1>{{ $route.meta.title || 'Vee-Validate' }}</h1>
                <h2>{{ $route.meta.subtitle }}</h2>
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        const layout = this.$refs.layout;
        const menu = this.$refs.menu;
        const menuLink = this.$refs.menuLink;

        const toggleClass = (element, className) => {
            const classes = element.className.split(/\s+/);
            const length = classes.length;

            for(let i = 0; i < length; i++) {
                if (classes[i] === className) {
                    classes.splice(i, 1);
                    break;
                }
            }
            // The className is not found
            if (length === classes.length) {
                classes.push(className);
            }

            element.className = classes.join(' ');
        }

        menuLink.onclick = (e) => {
            const active = 'active';

            e.preventDefault();
            toggleClass(layout, active);
            toggleClass(menu, active);
            toggleClass(menuLink, active);
        };
    }
}
</script>
