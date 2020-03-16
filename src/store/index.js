import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//创建一个 store(仓库)
const store = new Vuex.Store({
  state: {
    user: {
        u_sudent_id: '180706031',
        u_name: '',
        loginTime: 0
    },
    userPerm: {}
},
mutations: {
    setUser(state, data) {
        // state.user.u_num = data.u_num;
        // state.user.u_name = data.u_name;
        // state.user.loginTime = data.loginTime;
        // console.log(state.user);
    },
    userLogin(state, data) {
          state.user.loginTime = data;
        // state.user.u_name = data.u_name;
        // state.user.loginTime = data.loginTime;
        // localStorage.setItem('sdjbvesvrnkh', JSON.stringify(data));
        // console.log(state.user);
    },
    loginOut(state) {
        // console.log("退出登录");
        // state.user = {};
        // state.user.u_power = "";
        // state.user.u_num = "";
        // state.user.u_name = "";
        // state.user.loginTime = 0;
        // localStorage.setItem('sdjbvesvrnkh', JSON.stringify(state.user));
    },
},
    actions: {  //可以执行异步请求
      setUserFun(context,data){
            context.commit('setUser',data)
        },
        userLoginFun(context,data){
          context.commit('userLogin',data)
        },
        loginOutFun(context,data){
          context.commit('loginOut',name)
        }
    }
  })
//可以通过 store.state 来获取状态对象，以及通过 store.commit 方法触发状态变更：
//store.commit('increment')    console.log(store.state.count) // -> 1

  export default store