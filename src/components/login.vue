<template>
    <div class="login-area">
        <span class="user-icon">
            <i class="fa fa-user-circle-o" aria-hidden="true"></i><br>
        </span>
        <user-form/>
        <div class="user-dashboard">
            <h2>My Wishlist</h2>
            <ul>
                <li v-for="(book , index) in books" :key="book.id">
                    <div class="book-image">
                        <img :src="book.volumeInfo.imageLinks.thumbnail" v-if="book.volumeInfo.imageLinks">
                        <span v-else>No thumbail available</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>

import userForm from "./authenticate";

export default {
    props:{
        books: {
            type: Function,
            default: () => Function
        }
    },
    components:{
        userForm
    }
}

</script>

<style scoped>
.login-area {
    padding-top:30px;
	align-items: center;
    display: flex;
    position: fixed;
    width:330px;
    height: 100%;
    flex:1;
    background-color:#6fb1ff;
    flex-direction: column;
}

.user-dashboard {
    width:100%;
    padding-top: 25px;
    border-top: 1px solid #43658b;
    margin-top: 25px;
}

ul {
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

ul li {
    display: inline-block;
    margin:5px;
    list-style-type: none;
    background-color:#797979;
}

.book-image {
    max-width:60px;
    width:100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.book-image img {
    width:100%;
    vertical-align: bottom;
    object-fit: cover;
    height: 90px;
}
.book-image span {
    font-size: 10px;
    color: #fff;
    padding: 0px 5px;
}

.user-icon {
    font-size: 40px;
}

</style>

