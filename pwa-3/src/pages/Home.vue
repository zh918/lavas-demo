<template>
    <div>
        <h2 class="gray--text">LAVAS</h2>
        <h4 class="gray--text">[ˈlɑ:vəz]</h4>
    </div>
</template>

<script>
let state = {
    appHeaderState: {
        show: true,
        title: 'Lavas',
        showMenu: true,
        showBack: false,
        showLogo: true,
        actions: [
            {
                icon: 'search',
                route: '/search'
            }
        ]
    },
    activateBottomNav: 'home'
};

function setState(store) {
    store.dispatch('appShell/appHeader/setAppHeader', state.appHeaderState);
    store.dispatch('appShell/appBottomNavigator/activateBottomNav', state.activateBottomNav);
    store.dispatch('appShell/appBottomNavigator/showBottomNav');
}

export default {
    name: 'home',
    head: {
        title: 'Home',
        titleTemplate: '%s - Lavas',
        meta: [
            {name: 'keywords', content: 'lavas PWA'},
            {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
        ]
    },
    async asyncData({store, route}) {
        setState(store);
    },
    activated() {
        setState(this.$store);
    }
};
</script>

<style lang="stylus" scoped>
h2
    margin-top 50%
    font-size 46px
    font-weight 500

</style>
