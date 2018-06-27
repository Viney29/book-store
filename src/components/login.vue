<template>
    <div class="login-area">
        <span>
            <i class="fa fa-user-circle-o" aria-hidden="true"></i><br>
            User Login area
        </span>
        <div class="user-dashboard">
            <h2>My books</h2>
            <ul>
                <li v-for="book in books" :key="book.id"></li>
            </ul>
        </div>
    </div>

</template>

<script>
export default {
    props:{
        books: {
            type: Function,
            default: () => Function
        }
    }
}

</script>

<style scoped>
.login-area {
    justify-content: center;
	align-items: center;
    display: flex;
    position: fixed;
    width:20%;
    height: 100%;
    flex:1;
    background-color:#6fb1ff;
}
</style>

