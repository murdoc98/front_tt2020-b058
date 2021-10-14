<template>
  <div class="login-view">
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm';
export default {
  name: 'login',
  components: {
    LoginForm
  }
}
</script>

<style lang="scss" scoped>
.login-view {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  animation-name: backgroundColorPalette;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes backgroundColorPalette {
  0% {
    background: #1565c0;
  }
  25% {
    background: #0d47a1;
  }
  50% {
    background: #1a237e;
  }
  75% {
    background: #283593;
  }
  100% {
    background: #303f9f;
  }
}
</style>