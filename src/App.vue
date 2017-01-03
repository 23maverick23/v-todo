<template>
    <div id="app">
        <app-nav></app-nav>
        <div id="app-main" class="row">
            <app-daily></app-daily>
            <app-weekly></app-weekly>
            <app-monthly></app-monthly>
            <app-quarterly></app-quarterly>
        </div>
        <!-- <app-footer></app-footer> -->
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Daily from './components/Daily.vue'
import Weekly from './components/Weekly.vue'
import Monthly from './components/Monthly.vue'
import Quarterly from './components/Quarterly.vue'
import Footer from './components/Footer.vue'

export default {
    name: 'app',
    components: {
        'app-nav': Navbar,
        'app-daily': Daily,
        'app-weekly': Weekly,
        'app-monthly': Monthly,
        'app-quarterly': Quarterly,
        'app-footer': Footer
    },
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style>
</style>
