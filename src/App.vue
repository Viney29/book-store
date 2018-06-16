<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <search-bar :searchtext="query" :send-query="searchHit"/>
    <span class="loader" v-if="state"><img src="./assets/loader.gif" alt="loader"></span>
    <div class="book-collection">
      <bookItem :book-info="item" v-for="item in bookitem" :key="item"/>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import searchBar from './components/search-bar.vue'
import bookItem from './components/book-item'
import axios from 'axios'

export default {
  name: 'app',
  data(){
    return{
      query: {
        q: ""
      },
      bookApi:"https://www.googleapis.com/books/v1/volumes?q=",
      bookitem:[],
      seen:false,
      state:false,
    }
  },
  components: {
    // HelloWorld
    searchBar,
    bookItem
  },
  methods:{
    searchHit: function(){
      let _this = this;
      this.state = true;
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.query.q}`).then(function(resp){
        console.log(resp.data.items);
        _this.bookitem = resp.data.items;
        _this.state = false;
      });
    },
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

* {
  box-sizing: border-box;
  margin:0px;
  padding: 0px;
}

.book-collection {
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    max-width: 1200px;
    margin:0px auto;
    width:100%;
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: fixed;
  top:0px;
  left:0;
  width: 100%;
  height: 100%;
  background-color:rgba(0,0,0,.5);
}

.loader img {
    max-width:80px;
    background-color:rgba(255,255,255,.3);
    padding:2px;
    border-radius:50%;
}
</style>

