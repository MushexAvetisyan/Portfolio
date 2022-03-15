<template>
  <div class="Aut_div">
    <form method="post">
      <h2>Login form</h2>
      <div class="input-box">
        <input type="text" id="password" value="" required>
        <span>Your password:</span>
      </div>
      <div class="input-box">
        <input type="text" id="mail" value="" required>
        <span>Your email:</span>
      </div>

      <div class="input-box">
        <!--        <input type="button" value="Login">-->
        <button type="button" name="button">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.Aut_div {
  position: relative;
  padding: 50px 50px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}
.Aut_div h2 {
  font-size: 2em;
  border-left: 5px solid dodgerblue;
  padding: 10px;
  color: #000;
  letter-spacing: 5px;
  margin-bottom: 60px;
  font-weight: bold;
  padding-left: 10px;
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
    border: 2px solid #000;
    outline: none;
    background: none;
    padding: 10px;
    border-radius: 10px;
    font-size: 1.2em;
  }
}
.Aut_div{
  .input-box:last-child {
    margin-bottom: 0;
  }
}
.Aut_div{
  .input-box span {
    position: absolute;
    top: 14px;
    left: 20px;
    font-size: 1em;
    transition: 0.6s;
    font-family: sans-serif;
  }
}
.Aut_div{
  .input-box input:focus ~ span,
  .Aut_div .input-box input:valid ~ span {
    transform: translateX(-13px) translateY(-35px);
    font-size: 1em;
  }
}

.Aut_div{
  .input-box button {
    width: 50%;
    background: dodgerblue;
    color: #fff;
    border: #fff;
  }
}
.Aut_div{
  .input-box:hover button {
    background: linear-gradient(45deg, greenyellow, dodgerblue);
  }
}
</style>
