<template>
    <div class="Board">
        <h1>Este es el perfil</h1>
        <p>{{ name }}</p>
        <p>{{ surname }}</p>
        <p>{{ secondSurname }}</p>
        <p>{{ lada }} | {{ phoneNumber }}</p>
        <p>{{ sex }}</p>
        <p>{{ age }}</p>
        <p>{{ email }}</p>
        <p>{{ role }}</p>
        <p>{{ lastLogin}} </p>
    </div>
</template>
<script>
import account from "@/logic/account";

export default {
  name: "profile",
  components: {
  },
  data: () => ({
    name: '',
    surname: '',
    secondSurname: '',
    lada: '',
    phoneNumber: '',
    sex: undefined,
    age: undefined,
    email: '',
    role: '',
    lastLogin: ''
  }),
  methods: {
    sidebarStatus(value) {
      this.tab = value;
    }
  },
  async mounted() {
    const { data } = await account.getProfile();
    this.name = data.name;
    this.surname = data.surname;
    this.secondSurname = data.secondSurname;
    this.lada = data.phoneNumber.slice(0, 3);
    this.phoneNumber = data.phoneNumber.slice(3, data.phoneNumber.length);
    this.sex = data.sex ? 'Hombre' : 'Mujer';
    this.age = Date(data.age);
    this.email = data.email;
    this.role = data.role;
    this.lastLogin = Date(data.lastLogin);
  }
};
</script>
<style lang="scss" scoped>
.board {
    margin: 0 auto;
}
</style>