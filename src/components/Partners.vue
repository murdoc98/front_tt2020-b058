<template>
  <div class="partners">
    <h1 class="partners_title">Socios</h1>
    <ul>
      <li v-for="partner in partners" :key="partner.id">
        <Partner :data=partner></Partner>
      </li>
    </ul>
  </div>
</template>

<script>
import partners from "@/logic/partners";
import Partner from "@/components/Partner";

export default {
  name: "partners",
  components: {
      Partner
  },
  data: () => ({
    partners: undefined,
  }),
  methods: {},
  async mounted() {
    const { data } = await partners.getPartners();
    this.partners = data;
  },
};
</script>

<style lang="scss" scoped>
.partners {
    background: red;
    padding: 15px;
    ul {
        list-style: none;
    }
}
</style>
