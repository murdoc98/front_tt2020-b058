<template>
  <!-- 
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  -->
  <div class="sidebar" :class="{ open: isOpen }">
    <div class="logo-details">
      <i class="bx bxl-c-plus-plus icon"></i>
      <div class="logo_name">SafeEagle</div>
      <i
        class="bx"
        id="btn"
        @click="toggle"
        :class="[isOpen ? 'bx-menu-alt-right' : 'bx-menu']"
      ></i>
    </div>
    <ul class="nav-list">
      <li>
        <i class="bx bx-search"></i>
        <input type="text" placeholder="Search..." />
        <span class="tooltip">Search</span>
      </li>
      <li>
        <a href="#" @click="emit('board')">
          <i class="bx bx-grid-alt"></i>
          <span class="links_name">General</span>
        </a>
        <span class="tooltip">General</span>
      </li>
      <li>
        <a href="#" @click="emit('profile')">
          <i class="bx bx-user"></i>
          <span class="links_name">Perfil</span>
        </a>
        <span class="tooltip">Perfil</span>
      </li>
      <li>
        <a href="#" @click="emit('partners')">
          <i class="bx bx-chat"></i>
          <span class="links_name">Socios</span>
        </a>
        <span class="tooltip">Socios</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-pie-chart-alt-2"></i>
          <span class="links_name">Colaboradores</span>
        </a>
        <span class="tooltip">Colaboradores</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-folder"></i>
          <span class="links_name">File Manager</span>
        </a>
        <span class="tooltip">Files</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-cart-alt"></i>
          <span class="links_name">Order</span>
        </a>
        <span class="tooltip">Order</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-heart"></i>
          <span class="links_name">Saved</span>
        </a>
        <span class="tooltip">Saved</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-cog"></i>
          <span class="links_name">Setting</span>
        </a>
        <span class="tooltip">Setting</span>
      </li>
      <li class="profile">
        <div class="profile-details">
          <img src="@/assets/profile.png" alt="profileImg" />
          <div class="name_job">
            <div class="name">Prem Shahi</div>
            <div class="job">{{ userRole }}</div>
          </div>
        </div>
        <i class="bx bx-log-out" id="log_out" @click="logout"/>
      </li>
    </ul>
  </div>
</template>
<script>
import auth from "@/logic/auth";
export default {
  data: () => ({
    isOpen: true,
  }),
  computed: {
    userRole: () => {
      return auth
        .getUserRole()
        .match(/\b(\w)/g)
        .join("")
        .toUpperCase();
    },
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    logout() {
      auth.logout();
      this.$router.push({ name: "Login" });
    },
    emit(value) {
      this.$emit('clicked', value)
    }
  },
};
</script>
<style lang="scss" scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 78px;
  background: #11101d;
  padding: 6px 14px;
  z-index: 99;
  transition: all 0.5s ease;
  &.open {
    width: 250px;
    .logo-details {
      .icon,
      .logo_name {
        opacity: 1;
      }
      #btn {
        text-align: right;
      }
    }
  }
  .logo-details {
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
    .icon {
      opacity: 0;
      transition: all 0.5s ease;
    }
    .logo_name {
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      opacity: 0;
      transition: all 0.5s ease;
    }
    #btn {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      font-size: 22px;
      transition: all 0.4s ease;
      font-size: 23px;
      text-align: center;
      cursor: pointer;
      transition: all 0.5s ease;
    }
  }
}
.sidebar {
  i {
    color: #fff;
    height: 60px;
    min-width: 50px;
    font-size: 28px;
    text-align: center;
    line-height: 60px;
  }
  .nav-list {
    margin-top: 20px;
    height: 100%;
  }
  li {
    position: relative;
    margin: 8px 0;
    list-style: none;
    &:hover .tooltip {
      opacity: 1;
      pointer-events: auto;
      transition: all 0.4s ease;
      top: 50%;
      transform: translateY(-50%);
    }
    .tooltip {
      position: absolute;
      top: -20px;
      left: calc(100% + 15px);
      z-index: 3;
      background: #fff;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
      padding: 6px 12px;
      border-radius: 4px;
      font-size: 15px;
      font-weight: 400;
      opacity: 0;
      white-space: nowrap;
      pointer-events: none;
      transition: 0s;
    }
    a {
      display: flex;
      height: 100%;
      width: 100%;
      border-radius: 12px;
      align-items: center;
      text-decoration: none;
      transition: all 0.4s ease;
      background: #11101d;
      &:hover {
        background: #fff;
        .links_name,
        i {
          transition: all 0.5s ease;
          color: #11101d;
        }
      }
      .links_name {
        color: #fff;
        font-size: 15px;
        font-weight: 400;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transition: 0.4s;
      }
    }
    i {
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      border-radius: 12px;
    }
    &.profile {
      position: fixed;
      height: 60px;
      width: 78px;
      left: 0;
      bottom: -8px;
      padding: 10px 14px;
      background: #1d1b31;
      transition: all 0.5s ease;
      overflow: hidden;
      .name,
      .job {
        font-size: 15px;
        font-weight: 400;
        color: #fff;
        white-space: nowrap;
      }
      .job {
        font-size: 12px;
      }
    }
    .profile-details {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
    }
    img {
      height: 45px;
      width: 45px;
      object-fit: cover;
      border-radius: 6px;
      margin-right: 10px;
    }
  }
  &.open {
    li {
      .tooltip {
        display: none;
      }
      a {
        .links_name {
          opacity: 1;
          pointer-events: auto;
        }
      }
      &.profile {
        width: 250px;
      }
    }
    input {
      padding: 0 20px 0 50px;
      width: 100%;
    }
    .bx-search:hover {
      background: #1d1b31;
      color: #fff;
    }
    .profile {
      #log_out {
        width: 50px;
        background: none;
      }
    }
  }
  input {
    font-size: 15px;
    color: #fff;
    font-weight: 400;
    outline: none;
    height: 50px;
    width: 100%;
    width: 50px;
    border: none;
    border-radius: 12px;
    transition: all 0.5s ease;
    background: #1d1b31;
  }
  .bx-search {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-size: 22px;
    background: #1d1b31;
    color: #fff;
    &:hover {
      background: #fff;
      color: #11101d;
    }
  }
  .profile {
    #log_out {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      background: #1d1b31;
      width: 100%;
      height: 60px;
      line-height: 60px;
      transition: all 0.5s ease;
      cursor: pointer;
      &:hover {
        background: #fff;
        color: #11101d;
      }
    }
  }
}
@media (max-width: 420px) {
  .sidebar li .tooltip {
    display: none;
  }
}
</style>
