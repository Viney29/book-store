<template>
	<div id="product-drawer" :style="{'order':index}">
		<div class="productContent">
			<div class="left-side">
				<img :src="bookImg" />
			</div>
			<div class="right-side">
				<h2>{{ bookdetail.volumeInfo.title}}</h2>
				<p>{{bookdetail.volumeInfo.description}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	props: {
		index: {
			type:Number,
			default:0
		},
		bookdetail:{
			type:Object,
			required:true
		}
	},

	computed:{
		bookImg(){
			if( this.bookdetail ){
				return this.bookdetail.volumeInfo.imageLinks ? this.bookdetail.volumeInfo.imageLinks.thumbnail : "";
			}
		}
	}
}
</script>

<style scoped>
#product-drawer{
	width:100%;
	background-color:#fff;
	transform: scale(.95);
	box-shadow: -6px 6px 15px -2px #d2d0d0;
}

.productContent {
	display: flex;
	padding: 20px;
}

.left-side {
	flex:1 1 25%;
	border-right: 1px solid #f2f2f2;
}

.left-side img {
	width:100%;
	object-fit: cover;
}
h2 {
	font-size: 24px;
	line-height: 34px;
	padding-bottom: 10px;
	border-bottom: 1px solid #f2f2f2;
	margin-bottom: 30px;
}

.right-side {
	flex:1 1 75%;
	padding: 0px  20px;
	display: flex;
	flex-direction: column;
	text-align: left;
}
</style>
