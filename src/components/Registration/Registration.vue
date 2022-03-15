<template>
  <div class="Registration">
    <div class="navigationPanel">
      <h2>Registration Form</h2>
    </div>
    <RegistrationForm />
  </div>
</template>

<script>
import RegistrationForm from "@/components/Registration/RegistrationForm.vue"
export default {
  name: 'Registration',
  data: () => ({
  }),
  components: {
    RegistrationForm,
  }
}
</script>

<style scoped lang="scss">
.Registration {
  width: 100%;
  height: 100vh;
  padding-bottom: 50px;
}
.navigationPanel {
  padding-top: 35px;
  background: #f4f4f4;
  height: 100px;
  h2 {
    color: #222529;
  }
}
</style>
