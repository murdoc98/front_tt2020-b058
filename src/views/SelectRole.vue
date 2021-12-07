<template>

    <SelectRoleComponent/>
</template>


<script>
        
    import SelectRoleComponent from '../components/SelectRoleComponent';

    export default {
        name: 'SelectRole',
        components: {
            SelectRoleComponent
        }
    }
</script>

<style lang="scss" scoped>

*
{
    background-color: #0093E9;
    background-image: linear-gradient(270deg, #0093E9 0%, #11c8ad 85%);
}

</style>