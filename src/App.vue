<template>
	<div id="app" class="app-main">
		<div class="app-sidebar">
			<login/>
		</div>
		<div class="app-content">
			<search-bar :searchtext="query" :send-query="searchHit"/>
			<div class="searchresult">
				<span class="loader" v-if="state"><img src="./assets/loader.gif" alt="loader"></span>
				<p class="searchlabel" v-if="requestInit" :style="{'opacity':state ? '0' : '1'}">Showing results for <b>{{searchText}}</b></p>
				<div class="book-collection">
				<bookItem :book-info="item" v-for="(item , index) in bookitem" :key="index"  :index="index + 1" :open-drawer="openDrawer"/>
				<productDrawer v-if="show && bookPitem" :index="pindex" :bookdetail="bookPitem"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import searchBar from './components/search-bar.vue'
import bookItem from './components/book-item'
import productDrawer from './components/product-drawer'
import login from './components/login'
import cart from './components/cart'
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
      activeBookitem:null,
      bookPitem:null,
      seen:false,
      state:false,
      requestInit: false,
      show:false,
      pindex:0,
      searchText: "",
      isActive: false
    }
  },
  components: {
    // HelloWorld
    searchBar,
    bookItem,
    productDrawer,
    login,
    cart
  },
  methods:{
    searchHit: function(){
      let _this = this;
      this.state = true;
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.query.q}`).then(function(resp){
        console.log(resp.data.items);
        resp.data.items.forEach(function(item){
          item.isActive = false;
          item.wishlist = false;
        });
        _this.bookitem = resp.data.items; //
        _this.state = false;
        _this.requestInit = true;
        _this.searchText = _this.query.q;
      });
    },
    openDrawer: function(index, item){
      this.show = true;

    if(this.activeBookitem != null){
      this.activeBookitem.isActive = false;
    }

      this.activeBookitem = item;
      this.activeBookitem.isActive = true;
      this.bookPitem = item;
      this.getPosition(index, 4);
    },
    getPosition: function(index, col){
      var rem = index % col;
      if (index <= col) {
        this.pindex = col;
      }else if (rem == 0){
        this.pindex = index;
      }
      else {
        rem = index % col;
        var inc = col - rem;
        var updateIndex = index + inc;
        this.pindex = updateIndex;
      }
    }
  }
}

</script>

<style>
/* html , body {
	height: 100%;
	overflow-x: hidden;
} */

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
.searchlabel {
  margin: 20px 0px;
}

.searchlabel b {
  border-bottom: 1px solid #333;
}

.searchresult {
  background-color:#f2f2f2;
  overflow: hidden;
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top:0;
  right:0;
  width: 100%;
  height: 100%;
  background-color:rgba(0,0,0,.3);
  z-index: 9;
}

.loader img {
    max-width:80px;
    background-color:rgba(255,255,255,.3);
    padding:2px;
    border-radius:50%;
}
.app-main {
	display: flex;
	height: 100%;
}

.app-sidebar {
	display: flex;
	order:1;
	flex:1 1 20%;
	height: 100%;
}

.app-content {
	order:1;
	flex:1 1 80%;
}
</style>

