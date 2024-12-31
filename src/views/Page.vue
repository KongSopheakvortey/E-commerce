<template>
  <div class="Page1Container">
    <div class="MenuComponent">
      <p class="section">Menu</p>
      <router-link :to="{ name: 'section', params: { id: '1' } }" class="section">Section 1</router-link>
      <router-link :to="{ name: 'section', params: { id: '2' } }" class="section">Section 2</router-link>
      <router-link :to="{ name: 'section', params: { id: '3' } }" class="section">Section 3</router-link>
      <router-link :to="{ name: 'section', params: { id: '4' } }" class="section">Section 4</router-link>
    </div>
    <div class="PageContent">
      <div>
        <p class="PageDetail">Welcome to Page {{ nb }}</p>
        <RouterView/>
      </div>

      <div class="DisplayMessage">
        <div v-if="Messages.length">
          <p v-for="(Message, index) in Messages" :key="index">
            Message from Page {{ Message.num }}: {{ Message.text }}
          </p>
        </div>

        <div v-if="SectionMessages.length">
          <p v-for="(Message, index) in SectionMessages" :key="index">
            Message from Section {{ Message.sectionNum }} Page {{ Message.num }}: {{ Message.text }}
          </p>
        </div>
      </div>

      <div class="inputBox">
        <label for="messageInput">Message : </label>
        <input v-model="input" @keydown.enter="displayMessage">
      </div>

    </div>
  </div>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router';
// const model = defineModel()

export default {
  computed: {
    nb() {
      return this.$route.params.nb;
    },
    sectionId() {
      return this.$route.params.id;
    }
  },

  data(){
    return{
      input: '',
      Messages: [],
      SectionMessages: [],
    }
  },

  methods:{
    displayMessage(){
      if(this.input.trim()){
        const message = {
          text: this.input,
          num: this.nb,
        };

        if (this.sectionId) {
          message.sectionNum = this.sectionId;
          this.SectionMessages.push(message);
        }

        else{
          this.Messages.push(message);
        }
        this.input='';
      }
    },
  }
};
</script>

<style>
.Page1Container{
    height: 400px;
    width: 100%;
    display: flex;
    border: 1px solid black;
}
.MenuComponent{
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 200px;
}

.section{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    padding: 10px 0;
    width: 100%;
    margin: 0;
}

.PageContent{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.PageDetail{
  display: flex; 
  justify-content: center;
}

.DisplayMessage{
  width: 100%;
  height: auto;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.inputBox{
  margin: 10px 0;
  padding: 10px;
}

.section.router-link-active {
  background-color: aliceblue;
  outline: black;
  border-radius: 5px;
  font-weight: bold;
}
</style>