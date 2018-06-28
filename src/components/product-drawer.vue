<template>
	<div id="product-drawer" :style="{'order':index}">
		<div class="productContent">
			<div class="left-side">
				<img :src="bookImg" />
			</div>
			<div class="right-side">
				<h2>Title: {{ bookdetail.volumeInfo.title}}</h2>
				<h3><span class="title">Subtitle </span>: {{bookdetail.volumeInfo.subtitle}}</h3>
				<h3><span class="title">Authors </span>: {{joinAuthor}}</h3>
				<h3><span class="title">Publisher </span>: {{bookdetail.volumeInfo.publisher}}</h3>
				<h3><span class="title">Published-Date </span>: {{bookdetail.volumeInfo.publishedDate}}</h3>
				<p v-html=" '<b>Description: </b>' + bookdetail.volumeInfo.description"></p>
				<p class="book-links">
					<a class="c-btn" target="_blank" :href="bookdetail.volumeInfo.previewLink">Preview</a>
					<a class="c-btn" href="">Add to Wishlist  <i class="fa fa-heart"></i></a>
				</p>
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
		},

		joinAuthor(){
			if(this.bookdetail.volumeInfo.authors){
				return this.bookdetail.volumeInfo.authors.join(',');
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
	border: 1px solid #f2f2f2;
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
	margin-bottom: 10px;
}

.right-side {
	flex:1 1 75%;
	padding: 0px  20px 60px;
	display: flex;
	flex-direction: column;
	text-align: left;
	position: relative;
}
.book-links {
	display: flex;
	justify-content: space-between;
	position: absolute;
	bottom:0px;
	width: calc(100% - 40px);
	left: 0px;
	right: 0;
	margin: auto;
}
.book-links .fa {
	color:#9E2D4A;
	margin-left:10px;
}
.title {
	display: inline-block;
	min-width:100px;
}
.c-btn {
	padding:10px 20px;
	min-width:150px;
	border:1px solid #42b983;
	text-align: center;
	display: inline-block;
	text-transform: uppercase;
	text-decoration: none;
	font-size: 14px;
	font-weight: bold;
	color:#39495C;
}
@media only screen and (max-width : 767px){
	.left-side {
		display: none;
	}

	h2 {
		font-size: 18px;
		line-height: 24px;
	}
	h3, h3  span {
		font-size:16px;
	}
	/* #product-drawer {
		position: fixed;
		top:0;
		left:0;
		right:0;
		width:100%;
		height:100%;
		background:rgba(255,255,255,.4);
	}

	.productContent {
		position: absolute;
		top:50%;
		left:50%;
		transform: translateX(-50%) translateY(-50%);
		width:90%;
	} */
}
</style>
