<template>
  <div class="modal">
    <simple-modal v-model="isShow">
      <template slot="body">
        <div class="Aut_div">
          <form @submit.prevent="userLogin" class="login_form">
            <h2>Login form</h2>
            <div class="input-box">
              <input
                v-model="user.email"
                type="text"
                id="mail"
                value=""
                required
              />
              <span>Email</span>
            </div>
            <div class="input-box">
              <input
                v-model="user.password"
                type="password"
                name="password"
                autocomplete="off"
                id="password"
                value=""
                required
              />
              <span>Password</span>
            </div>
            <div class="LogOrRegister">
              <button @click="isShow = !isShow" type="submit" class="Login">
                LOGIN
              </button>
            </div>
            <div class="HelpLogin">
              <input type="checkbox" id="checkbox" v-model="checked" />
              <label class="checkbox_label" for="checkbox">Remember Me</label>
              <router-link to="/ResetPassword"
              ><span class="resset" @click="isShow = !isShow"
              >Forgot Password?</span
              ></router-link
              >
            </div>
          </form>
        </div>
      </template>
    </simple-modal>
    <button class="join" @click="isShow = !isShow">LOGIN</button>
  </div>
</template>

<script>
import SimpleModal from "simple-modal-vue";
import firebase from "firebase/compat/app";
export default {
  data: () => ({
    isShow: false,
    checked: false,
    user: {
      email: "",
      password: "",
    },
  }),
  components: {
    SimpleModal,
  },
  methods: {
    userLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          this.$router.push("/MyProfile");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
}
</script>

<style scoped lang="scss">
.Aut_div {
  position: relative;
  padding: 30px 50px;
  background: linear-gradient(292deg, #b70000, #000000, #000000, #ac0000);
  background-size: 800% 800%;
  -webkit-animation: AnimationName 14s ease infinite;
  -moz-animation: AnimationName 14s ease infinite;
  -o-animation: AnimationName 14s ease infinite;
  animation: AnimationName 14s ease infinite;
  border-radius: 8px;
  display: flex;
  justify-content: center;
}
@-webkit-keyframes AnimationName {
  0% {
    background-position: 92% 0%;
  }
  50% {
    background-position: 9% 100%;
  }
  100% {
    background-position: 92% 0%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 92% 0%;
  }
  50% {
    background-position: 9% 100%;
  }
  100% {
    background-position: 92% 0%;
  }
}
@-o-keyframes AnimationName {
  0% {
    background-position: 92% 0%;
  }
  50% {
    background-position: 9% 100%;
  }
  100% {
    background-position: 92% 0%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 92% 0%;
  }
  50% {
    background-position: 9% 100%;
  }
  100% {
    background-position: 92% 0%;
  }
}
::v-deep {
  .vsm {
    background: rgba(0, 0, 0, 0.8);
  }
  .vsm-modal {
    background: none;
    box-shadow: 0 0 10px 2px white;
    border-radius: 8px;
    .btn-close {
      position: absolute;
      right: 35px;
      top: 15px;
      border: none;
      background: transparent;
      font-size: 45px;
      color: white;
      cursor: pointer;
      z-index: 5;
    }
  }
  .vsm-modal-body{
    padding: 0;
  }
}
.Aut_div h2 {
  font-size: 2em;
  padding: 10px;
  color: white;
  letter-spacing: 3px;
  margin-bottom: 30px;
  font-weight: bold;
}
.join{
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background: none;
}
.LogOrRegister{
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  button{
    padding: 10px 25px 10px;
    cursor: pointer;
    background: none;
    color: white;
    border: 2px solid white;
    border-radius: 6px;
    margin-left: 80px;
    font-weight: 700;
    letter-spacing: 2px;
    &:hover{
      background-color: white;
      color: black;
      transition: 0.5s;
    }
  }
  a{
    margin: 8px;
  }
}
.HelpLogin{
  margin-top: 25px;
  display: flex;
  align-items: center;
}
.Aut_div {
  .input-box {
    position: relative;
    width: 300px;
    height: 50px;
    margin-bottom: 50px;
  }
}
.Aut_div {
  .input-box input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border: 2px solid white;
    outline: none;
    background: none;
    padding: 10px;
    border-radius: 10px;
    font-size: 1.2em;
    color: white;
  }
}
.Aut_div {
  .input-box:last-child {
    margin-bottom: 0;
  }
}
.Aut_div {
  .input-box span {
    position: absolute;
    top: 12px;
    left: 20px;
    color: white;
    font-size: 1.2rem;
    transition: 0.6s;
    font-family: sans-serif;
  }
}
.Aut_div {
  .input-box input:focus ~ span, input:valid ~ span {
    transform: translateX(-13px) translateY(-35px);
    font-size: 1em;
  }
}

.Aut_div {
  .input-box button {
    width: 50%;
    background: dodgerblue;
    color: #fff;
    border: #fff;
  }
}
.checkbox_label, #checkbox{
  cursor: pointer;
  margin: 0 4px;
}
.resset{
  margin-left: 40px;
}
.Aut_div {
  .input-box:hover button {
    background: linear-gradient(45deg, greenyellow, dodgerblue);
  }
}
</style>
