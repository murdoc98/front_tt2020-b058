<template>
  <h1>{{ groups }}</h1>
</template>

<script>
import teachersGroups from '@/logic/teachersGroups';
export default {
  name: 'TeachersGroups',
  components: {
  },
  data: () => ({
    groups: []
  }),
  methods: {
    sidebarStatus(value) {
      this.tab = value;
    }
  },
  async created() {
    const response = await teachersGroups.getGroups();
    console.log(response);
    this.groups = response.data;
  }
}
</script>

<style lang="scss" scoped>

</style>