<template>
    <div class="columns is-mobile">
        <button :class="{ 'button': true, 'sidebar-button': true, 'is-open': sidebarToggle }" @click="sidebarToggle = ! sidebarToggle" type="button">
            <span class="icon">
                <i class="fa fa-bars"></i>
            </span>
        </button>
        <div :class="{ 'column is-2 sidebar-container': true, 'is-open': sidebarToggle }">
            <side-menu></side-menu>
        </div>
        <div class="column columns is-mobile main-container">
            <div class="column is-12">
                <section class="hero">
                    <div class="hero-body">
                        <div class="container has-text-centered">
                            <h1 class="title is-2">
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
import SideMenu from './views/partials/SideMenu.vue';

export default {
    data: () => ({
        sidebarToggle: false
    }),
    components: {
        SideMenu
    }
};
</script>
