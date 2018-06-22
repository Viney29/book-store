<template>
    <div class="book-item"  :style="{'order':index}" @click="openDrawer(index, bookInfo)" :class="{'active': isActive}">
        <div class="book-itemWrapper">
            <div class="wishlist-icon" title="Add to wishlist" @click="">
                <i class="fa fa-heart"></i>
                <i class="fa fa-heart-o"></i>
            </div>
            <div class="book-image">
                <img :src="bookInfo.volumeInfo.imageLinks.thumbnail" v-if="bookInfo.volumeInfo.imageLinks">
                <span v-else>No thumbail available</span>
            </div>
            <div class="book-detail">
                <h3 class="book-title"> {{ bookInfo.volumeInfo.title}}</h3>
                <p>
                    <a class="book-link" target="_blank" :href="bookInfo.volumeInfo.previewLink"><i class="fa fa-eye"></i></a>
                    <span class="book-price"> Price ${{ priceGen }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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
        },
        isActive: function(){
            return this.bookInfo.isActive;
        }
    }
}
</script>

<style scoped>
.book-item {
    flex:1 1 calc(25% - 30px);
    margin:15px;
    /* border: 1px solid #42b983; */
    padding: 0px;
    max-width:calc(25% - 30px);
    width:100%;
    order: 1;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    transform: scale(.965);
    transition: all .1s linear;
}
.book-itemWrapper {
    transform: scale(.965);
    box-shadow: 4px 5px 15px -2px #d2d0d0;
    background-color:#fff;
}
.book-item:hover  .book-itemWrapper{
    transform: scale(1);
}

.book-item.active:after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    background: white;
    bottom: -52px;
    left: 0;
    right: 0;
    margin: auto;
    transform: rotate(45deg);
}

.book-image{
    display:flex;
    position: relative;
    padding-top: 100%;
    justify-content: center;
    align-items: center;
    background: #fafafa;
}
.book-image img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
}
.book-image span {
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    text-align: center;
    width:80%;
    left: 0;
    right:0;
    margin: auto;
}

.book-detail {
    display: flex;
    flex-direction: column;
    margin: 10px 0px;;
    padding: 0px 15px;
}

.book-detail p {
    display: flex;
    justify-content: space-between;
}

.book-title {
    text-transform: capitalize;
    margin-bottom: 10px;
    color:#36495D;
    margin-bottom: 10px;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding:0px 10px;
}

a {
    color:#42b983;
}

.wishlist-icon {
    position: absolute;
    top:18px;
    right:20px;
    padding: 5px;
    color:#9E2D4A;
    display: flex;
    z-index: 2;;
    align-items: center;
    justify-content: center;
    font-size:20px;
}
.wishlist-icon .fa {
    position: absolute;
}

</style>