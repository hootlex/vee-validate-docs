<template>
    <div>
        <section class="hero">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title is-1">
                        {{ $route.meta.title || 'Vee-Validate' }}
                    </h1>
                    <h2 class="subtitle">
                        {{ $route.meta.subtitle }}
                    </h2>
                </div>
            </div>
        </section>
        <div class="container columns">
            <div class="column is-3">
                <aside class="menu sidebar">
                    <p class="menu-label">
                        General
                    </p>
                    <ul class="menu-list">
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Customers</a></li>
                    </ul>
                    <p class="menu-label">
                        Administration
                    </p>
                    <ul class="menu-list">
                        <li><a href="#">Team Settings</a></li>
                        <li>
                            <a class="is-active" href="#">Manage Your Team</a>
                            <ul>
                                <li><a href="#">Members</a></li>
                                <li><a href="#">Plugins</a></li>
                                <li><a href="#">Add a member</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Invitations</a></li>
                        <li><a href="#">Authentication</a></li>
                    </ul>
                    <p class="menu-label">
                        Transactions
                    </p>
                    <ul class="menu-list">
                        <li><a href="#">Payments</a></li>
                        <li><a href="#">Transfers</a></li>
                        <li><a href="#">Balance</a></li>
                    </ul>
                </aside>
            </div>
            <div class="column content-container">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
