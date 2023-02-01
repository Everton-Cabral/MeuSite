<template>
    <div class="menu">
        <router-link to="/">
            <box-icon name='home' class="icon"></box-icon>
         </router-link>
         
        <box-icon name='check' class="icon"></box-icon>

        <router-link to="/generos">
            <box-icon name='grid-horizontal' class="icon"></box-icon>
        </router-link>

        <router-link to="/produtos">
            <box-icon name='menu' class="icon"></box-icon>
        </router-link>
        <box-icon name='horizontal-right' class="icon"></box-icon>
    </div>
</template>

<script>
export default {

}
</script>

<style src="./style.scss" lang="scss" scoped />

