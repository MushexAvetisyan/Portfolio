<template>
  <div class="modal">
    <simple-modal v-model="isShow">
      <template slot="body">
        <div class="Reg_div">
          <form @submit.prevent="userRegistration" class="FormRegistrastion">
            <h2>Registration</h2>
            <div v-if="error" class="error">
              {{ error.message }}
            </div>
            <div class="inputbox">
              <input v-model="user.name" type="text" id="name" value="" autocomplete="off" required>
              <span>Name:</span>
            </div>
            <div class="inputbox">
              <input v-model="user.email" type="text" id="mail" value="" required>
              <span>Email:</span>
            </div>
            <div class="inputbox">
              <input v-model="user.password" type="text" id="password" value="" autocomplete="off" required>
              <span>Password:</span>
            </div>
            <div class="inputbox">
              <input v-model="user.ConfirmPassword" type="text" id="ConfirmPassword" value="" autocomplete="off" required>
              <span>Repeat Password:</span>
            </div>

            <div class="RegistrationButton">
              <button type="submit" name="button">REGISTRATION</button>
              <p>
                Already have an account? <LoginModal/>
              </p>
            </div>
          </form>
        </div>
      </template>
    </simple-modal>
    <button class="join" @click="isShow = !isShow">REGISTRATION</button>
  </div>
</template>

<script>
import SimpleModal from "simple-modal-vue";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import LoginModal from "@/components/modals/LoginModal";
import { required, sameAs, minLength } from 'vuelidate/lib/validators'
export default {
  data: () => ({
    isShow: false,
    user:{
      name: "",
      email: "",
      password: "",
      ConfirmPassword: "",
    }
  }),
  validations: {
    password: {
      required,
      minLength: minLength(6)
    },
  },
  components: {
    LoginModal,
    SimpleModal
  },
  methods: {
    userRegistration() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((res) => {
          res.user
            .updateProfile({
              displayName: this.user.name,
            })
            .then(() => {
              this.$router.push("/MyProfile")
            });
        })
        .catch((error) => {
          alert(error.messages)
        })
    },
  }
}
</script>

<style scoped lang="scss">
.Reg_div {
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
.Reg_div h2 {
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
.FormRegistrastion{
  margin-top: 15px;
}
.Reg_div .inputbox {
  position: relative;
  width: 300px;
  height: 50px;
  margin-bottom: 40px;
}
.Reg_div .inputbox input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 2px solid white;
  outline: none;
  color: white;
  background: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.2em;
}
.Reg_div .inputbox:last-child {
  margin-bottom: 0;
}
.Reg_div .inputbox span {
  position: absolute;
  top: 14px;
  left: 20px;
  color: white;
  font-size: 1em;
  transition: 0.6s;
  font-family: sans-serif;
}
.Reg_div .inputbox input:focus ~ span,
.Reg_div .inputbox input:valid ~ span {
  transform: translateX(-13px) translateY(-35px);
  font-size: 1em;
}
.Reg_div {
  .RegistrationButton{
    p{
      color: white;
    }
    button {
      background: none;
      color: #fff;
      font-weight: 600;
      border: 1px solid white;
      padding: 9px 25px;
      &:hover{
        background-color: white;
        cursor: pointer;
        transition: 0.6s;
        color: black;
      }
    }
  }
}
</style>
