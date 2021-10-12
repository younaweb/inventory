<template>
  <div class="login">
  <div class="wrapper wrapper-login">
		<div class="container container-login animated fadeIn">
			<h3 class="text-center">Sign In To Admin</h3>
			<form class="login-form" @submit.prevent="login">
				<div class="form-group form-floating-label">
					<input id="username" name="username" v-model="form.email" type="email" class="form-control input-border-bottom">
					<label for="username" class="placeholder">Email</label>
					<small id="emailHelp" v-if="errors.email" class="form-text text-danger">{{errors.email[0]}}</small>
				</div>
				<div class="form-group form-floating-label">
					<input id="password" name="password" v-model="form.password" type="password" class="form-control input-border-bottom">
					<label for="password" class="placeholder">Password</label>
					<div class="show-password">
						<i class="flaticon-interface"></i>
					</div>
					<small id="emailHelp" v-if="errors.password" class="form-text text-danger">{{errors.password[0]}}</small>

				</div>
				<div class="row form-sub m-0">
					<div class="custom-control custom-checkbox">
						<input type="checkbox" class="custom-control-input" id="rememberme">
						<label class="custom-control-label" for="rememberme">Remember Me</label>
					</div>
					
					<a href="#" class="link float-right">Forget Password ?</a>
				</div>
				<div class="form-action mb-3">
					<button type="submit" class="btn btn-primary btn-rounded btn-login">Sign In</button>
				</div>
				<div class="login-account">
					<span class="msg">Don't have an account yet ?</span>
					<a href="#" id="show-signup" class="link">Sign Up</a>
				</div>
			</form>
		</div>

		
	</div>
  </div>
</template>

<script>

export default {
	created(){
      if (User.loggedIn()) {
        this.$router.push({name: 'home'})
      }
    },
	data(){
		return{
			form:{
				email:null,
				password:null,
			},
			errors:{}
		}
	},
	methods:{
		login(){
			axios.post("api/auth/login",this.form)
			.then(res => {
				console.log(res)
				User.responseAfterLogin(res);
				Toast.fire({
				icon: 'success',
				title: 'Signed in successfully'
				})
				this.$router.push({name:'home'})
			})
			.catch(err => {
				 
				Toast.fire({
				icon: 'warning',
				title: 'Failed to sign in'
				})
				this.errors=err.response.data;
				console.log(this.errors);
			})
		}
	}

}
</script>

<style>

</style>