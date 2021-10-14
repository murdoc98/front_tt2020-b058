<template>
    <div class="partner">
        {{ data }}
    </div>
</template>
<script>
export default {
    props: ['data']
    
}
</script>
<style lang="scss" scoped>
.partner {
    background: #fff;
    border-radius: 10px;
    margin: 15px 10px;
}
</style>