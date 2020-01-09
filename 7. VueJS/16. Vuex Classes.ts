/****  user.vuex.ts ****/
import {
    createModule, mutation, action,
} from 'vuex-class-component';
  
  const VuexModule = createModule({
    // namespaced: 'userStore',
    strict: false,
  });
  
  export default class UserStore extends VuexModule {
    public username: string|null = null;
    public uid: number|null = null;
    public notificationsEnabled: boolean = false;
  
    @action() async login({ username, password }: { username: string, password: string }) {
        // Perform login operation
        // Note that using vuex-class-component, we can directly modify the state in actions
    }

    @mutation changeNotificationSetting({ enabled }: { enabled: boolean }) {
        this.notificationsEnabled = enabled;
    }
  }

/****  store.ts ****/
import Vue from 'vue';
import Vuex from 'vuex';
import { extractVuexModule } from 'vuex-class-component';
import UserStore from './user.vuex';

Vue.use(Vuex);

// @ts-ignore
export default new Vuex.Store({
    modules: {
        // This allows us to turn our class component into a VueX module
        ...extractVuexModule(UserStore),
    },
});

/**** app.vue ****/
// The $vxm property is a handdy way to access all our stores
import Vue from 'vue';
import App from './App.vue';
import store from './store/store'
import UserStore from './store/user.vuex';

Vue.prototype.$vxm = {
    user: createProxy(store, UserStore),
};

const app = new Vue({
    store,
    render: h => h(App),
});

/**** SomeComponent.vue ****/
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  @Component()
  export default class SomeComponent extends Vue {
    username: string = '';
    password: string = '';

    async doSomething() {
        // We can access all the properties of our store through our vxm proxies
        console.log(this.$vxm.user.username);
        await this.$vxm.user.login({
            username: this.username,
            password: this.password,
        });
        this.$vxm.user.changeNotificationSetting({enabled: true});
        // Note that with vuex-class-component, when the module's strict parameter is set to false
        // it even automatically creates mutations for each property so we can modify it like normal
        this.$vxm.user.notificationsEnabled = false;
    }
  }
</script>