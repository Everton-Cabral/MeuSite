<template>
    <div class="corpo">
        <div class="conteudo">
            <router-view />
        </div>

        <div class="menu">
            <AppMenu />
        </div>
    </div>
</template>

<script>

import AppMenu from '../menu/AppMenu.vue'

export default {
    components: {AppMenu}
}
</script>

<style src="./style.scss" lang="scss" scoped />


