<template>
	<div id="product-drawer" :style="{'order':index}">
		<div class="left-side">
			<img src="/"/>
		</div>
		<div class="right-side">
		content
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
	}
}
</script>

<style>
#product-drawer{
	height:400px;
	width:100%;
	background-color:red;
}
</style>
