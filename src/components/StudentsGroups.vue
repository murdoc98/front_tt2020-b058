<template>
  <h1>{{ groups }}</h1>
</template>

<script>
import studentssGroups from '@/logic/studentsGroups';
export default {
  name: 'StudentsGroups',
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
    const response = await studentssGroups.getGroups();
    console.log(response);
    this.groups = response.data;
  }
}
</script>

<style lang="scss" scoped>

</style>