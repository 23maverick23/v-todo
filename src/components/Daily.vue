<template>
    <div id="app-daily" class="content-column col l3 red lighten-4">
        <template v-for="item in items">
            <div class="card-panel">{{ item }}</div>
        </template>
    </div>
</template>

<script>
export default {
    name: 'daily',
    data () {
        return {
            items: [
                "Remember the milk",
                "Tie your shoes",
                "Drain the tub"
            ]
        }
    }
}
</script>