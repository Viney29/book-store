<template>
    <div class="book-item"  :style="{'order':index}" @click="openDrawer(index, bookInfo)">
        <div class="book-image">
            <img :src="bookInfo.volumeInfo.imageLinks.thumbnail" v-if="bookInfo.volumeInfo.imageLinks">
            <span v-else>No thumbail available</span>
        </div>
        <div class="book-detail">
            <h3 class="book-title"> {{ bookInfo.volumeInfo.title}}</h3>
            <p>
                <a class="book-link" target="_blank" :href="bookInfo.volumeInfo.previewLink">Preview</a>
                <span class="book-price">${{ priceGen }}</span>
            </p>
        </div>
        <!-- <div class="book-description">
            <p>{{bookInfo.volumeInfo.description}}</p>
        </div> -->
    </div>
</template>

<script>
export default{
    props:{
        bookInfo: {
            type: Object,
            required: true
        },
        openDrawer:{
            type: Function,
            default: () => Function
        },
        index: {
            type:Number,
            default:0
        }
    },
    computed:{
        priceGen:function(){
            return Math.round(Math.random() * 1000);
        }
    }
}
</script>

<style scoped>
.book-item {
    flex:1 1 20%;
    margin:15px;
    border: 1px solid #42b983;
    padding: 10px;
    max-width:200px;
    background-color:#f2f2f2;
    width:100%;
    order: 1;
    display: flex;
    flex-direction: column;
}

.book-image{
    display:flex;
    height: 280px;
    justify-content: center;
    align-items: center;
}
.book-image img {
    width:100%;
    height:100%;
}

.book-detail {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}

.book-title {
    text-transform: capitalize;
    margin-bottom: 10px;
    color:#36495D;
    margin-bottom: 10px;
    font-size: 14px;
}

</style>