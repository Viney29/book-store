<template>
    <div class="user-login">
        <div class="signUp-form" v-if="formtype == form.signup">
            <form id="sign-up">
                <label>Sign up</label>
                <input type="text" placeholder="Name" id="user-name" v-model="name">
                <input type="email" placeholder="e-mail" id="user-email" v-model="email">
                <input type="password" placeholder="Password" id="user-pwd" v-model="passWord">
                <input type="password" placeholder="Re-enter Password" v-model="rePassword">
                <button type="button" @click="submit()">Sign Up</button>
            </form>
            <p>Already have a account <br> <span>Please login here.</span></p>
            <a @click="changeForm(form.login)" class="c-btn">Log In</a>
        </div>
        <div class="login-form" v-if="formtype == form.login">
            <form id="login">
                <label>Login</label>
                <input type="email" placeholder="User Name" v-model="email">
                <input type="password" placeholder="Passord" v-model="passWord">
                <button type="button" id="userlogin" @click="logIn()">Login</button>
            </form>
            <p>{{ activeUserName }}</p>
            <p>Create a new account <br> <span>It's free and always will be.</span></p>
            <a @click="changeForm(form.signup)" class="c-btn">Sign Up</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:'',
            email:'',
            passWord:'',
            rePassword: '',
            form:{
                login: 'login',
                signup: 'signup'
            },
            formtype:'',
            userData:[],
            authenticate: false,
            activeUser:{}
        }
    },

    mounted(){
        this.formtype = this.form.login;
        this.getUsers();
        // this.Userdata = this.$http.post("https://book-store-29.firebaseio.com/users.json", data);
        // console.log( this.Userdata);
    },

    methods: {
        changeForm: function(formtype){
            this.formtype = formtype;
        },
        submit: function(){
            if (this.passWord == this.rePassword && (this.passWord && this.email) ){
                this.registerUser({
                    name:this.name,
                    email:this.email,
                    password:this.passWord
                })
            }

        },
        authenticateUser(userData){
            let _this = this;
            for(var i = 0; i < _this.userData.length; i++){
                let user = _this.userData[i].data;
                if( _this.email == user.email && _this.passWord == user.password){
                    console.log('User logged in');
                    _this.authenticate = true;
                    _this.activeUser = _this.userData[i];
                    break;
                }
            };
            if(!_this.authenticate) {
                alert('User not Found');
            }
        },
        logIn(){
            this.authenticateUser();

        },
        filterData(users){
			for( var id in users ){
				this.userData.push({
					id: id,
					data: users[id]
				})
            }
            console.log(this.userData);
		},
		getUsers: function(){
			let _this = this;
			this.$http.get("https://book-store-29.firebaseio.com/users.json").then(function(resp){
				_this.filterData(resp.body);
			});
		},
        clearForm: function(){
            this.name = this.email = this.passWord = this.rePassword = '';
        },
        registerUser: function(data){
            let _this = this;
			this.$http.post("https://book-store-29.firebaseio.com/users.json", data).then(function(resp){
                alert('Register successfully');
                _this.clearForm();
                _this.formtype = _this.form.login;
			})
		},
    },
    computed:{
        activeUserName(){
            return this.activeUser.data ? this.activeUser.data.name : ""
        }
    }
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

.c-btn {
    display: inline-block;
    font-weight:bold;
    text-decoration: underline;
    margin-top:10px;
    cursor: pointer;
}

</style>


