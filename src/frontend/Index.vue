<template>
  <div id="index">
    <img :src='image'/>
    <h2 v-if='!backEnd'>{{ msg }}</h2>
    <button @click="onClick">Click!</button>
    <div v-if="this.backEnd">Hi</div>

    <ul v-if='backEnd'>
      <li v-for='d in data'>
        <p>User Id: {{ d.userId }}</p>
        <p>Id: {{ d.id }}</p>
        <p>Title: {{ d.title }}</p>
        <p>Body: {{ d.body }}</p>
        <hr />
      </li>
    </ul>

  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

import * as Controllers from '../backend/controllers/controllers';

@Component
export default class Index extends Vue {
  name    : string     = 'index';
  backEnd : boolean    = false;
  image   : string     = 'src/assets/logo.png';
  data    : Array<any> = [];
  msg     : string     = 'Populate data?';

  mounted() {}

  onClick() : void {
    Controllers.grabData( this.toIndex.bind(this) );
  }

  toIndex(res : any) : void {
    interface Data {
      userId  : number,
      id      : number,
      title   : string,
      body    : string
    }

    res.json()
      .then( (payload : Array<any>) => {
        this.data = payload;
        this.backEnd = !this.backEnd;
      })
      .catch( (errors : any) => {
        this.msg = 'oops, something went wrong.';
        this.backEnd = !this.backEnd;
      })
  }

  emptyData() {
    this.data = [];
  }
};
</script>

<style lang="css" scoped>
#index {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

img {
  width: 25%;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  width: 80%;
  margin-top: 20px;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  margin-top: 10px;
  padding: 3px;
  border: 1px solid #42b983;
  background-color: #2c3e50;
  color: white;
  border-radius: 10px;
  width: 50px;
}

hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  width: 70%;
  margin-bottom: 20px;
}
</style>
