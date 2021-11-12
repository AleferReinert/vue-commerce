<template>
    <span class="collapse-icons" v-bind:class="{active: element}">
        <font-awesome-icon icon="angle-down" v-show="!element" />
        <font-awesome-icon icon="angle-up" v-show="element" />
    </span>
</template>

<script>
export default {
    name: 'CollapseIcons',
    props: ['element']
}
</script>

<style lang="scss">

</style>