<template>
    <div class="user-login">
        <div class="signUp-form">
            <form id="sign-up">
                <label>Sign up</label>
                <input type="text" placeholder="User Name" id="user-name">
                <input type="password" placeholder="Passord" id="user-pwd">
                <input type="password" placeholder="Re-enter Password">
                <button type="submit">Save</button>
            </form>
        </div>
        <div class="login-form">
            <form id="login">
                <label>Login</label>
                <input type="text" placeholder="User Name">
                <input type="password" placeholder="Passord">
                <button type="submit" id="login">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.sign-up {
    width:100%;
}

.user-login {
    width:100%;
    padding:20px;
}

form input {
    height:35px;
    border:none;
    outline:none;
    width:100%;
    display:block;
    padding:4px;
    margin:0px auto 10px;
    max-width:200px;
    font-size:14px;
    background-color: #fafafa;
    border:1px solid  #42b983;
}
form button {
    height:35px;
    background-color: #42b983;
    color:#fff;
    font-size:15px;
    border:1px solid  #42b983;
    width:100%;
    max-width:180px;
    margin: 20px auto;
}

</style>


