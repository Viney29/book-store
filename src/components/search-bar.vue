<template>
	<div class="searchBar">
		<h2>My Book Store</h2>
		<div>
			<div class="search-bar">
				<input v-model="searchtext.q" type="text" @keyup="pressEnter" placeholder="Enter Book Name here"/>
				<button @click="btnClick">Search</button>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
	name : "searchBar",
	props:{
		searchtext:{
			type: Object,
			default: () => {}
		},
		sendQuery:{
			type:Function,
			default: () => Function
		}
	},
	data(){
		return{
			// q: ""
		}
	},
	methods:{
		btnClick: function () {
			if (this.searchtext.q.trim()){
				this.sendQuery();
			}
		},
		pressEnter: function(e){
			if (this.searchtext.q.trim() && e.keyCode == 13){
				this.sendQuery();
			}
		}
	}
  }
</script>

<style scoped>

.searchBar {
    overflow: hidden;
    background: #fafafa;
    padding-top: 30px;
}

h2 {
	font-size:32px;
	color:#a7a7a7;
	text-transform: uppercase;
	letter-spacing: 1px;
}
.search-bar  {
	display: flex;
	height:50px;
	justify-content: center;
	width: 80%;
	margin:30px auto;

}

.search-bar input {
	width:70%;
	outline:none;
	text-indent: 20px;
	border:1px solid #42b983;
	font-size: 18px;
}

.search-bar button {
	width:200px;
	border:1px solid #42b983;
	background:#42b983;
	color:#fff;
	font-size:24px;
	text-transform: uppercase;
}

hr {
	height:0px;
	width:100%;
	border:0px;
	border-bottom:1px solid #f2f2f2;
	/* box-shadow:0px 4px 8px 1px #36495D; */
	margin-bottom: 30px;
}

</style>