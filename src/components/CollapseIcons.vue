<template>
    <span>
        <font-awesome-icon icon="angle-down" class="icon-collapsed" />
        <font-awesome-icon icon="angle-up" class="icon-show" />
    </span>
</template>

<script>
export default {
    name: 'CollapseIcons'
}
</script>

<style lang="scss">
.collapsed {
    .icon-collapsed {display: block}
    .icon-show {display: none}
}

.not-collapsed {
    .icon-collapsed {display: none}
    .icon-show {display: block}
}
</style>