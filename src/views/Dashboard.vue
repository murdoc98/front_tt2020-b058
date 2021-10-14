<template>
  <div class="dashboard">
    <Sidevar @clicked="sidebarStatus"></Sidevar>
    <section class="home-section">
      <Board v-if="tab === 'board'"/>
      <Profile v-if="tab === 'profile'"/>
      <Partners v-if="tab === 'partners'"/>
    </section>
  </div>
</template>
<script>
import auth from "@/logic/auth";

import Sidevar from "@/components/Sidevar";
import Profile from "@/components/Profile";
import Board from "@/components/Board";
import Partners from "@/components/Partners";

export default {
  name: "dashboard",
  components: {
    Sidevar,
    Profile,
    Board,
    Partners
  },
  data: () => ({
    token: auth.getUserLogged(),
    tab: 'board'
  }),
  methods: {
    sidebarStatus(value) {
      this.tab = value;
    }
  }
};
</script>
<style lang="scss" scoped>
.home-section {
  position: relative;
  background: #e4e9f7;
  min-height: 100vh;
  top: 0;
  left: 78px;
  width: calc(100% - 78px);
  transition: all 0.5s ease;
  z-index: 2;
  .text {
    display: inline-block;
    color: #11101d;
    font-size: 25px;
    font-weight: 500;
    margin: 18px;
  }
}
.sidebar.open ~ .home-section {
  left: 250px;
  width: calc(100% - 250px);
}
</style>
