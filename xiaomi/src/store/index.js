import Vue from 'vue'
import Vuex from 'vuex'
import { fetchLogin, fetchRegister } from '../api/index';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || '',
        username: localStorage.getItem('username') || '',
    },
    getters: {

    },
    mutations: {
        login(state, payload) {
            state.token = payload.token;
            state.username = payload.LoginUsername;
            localStorage.setItem('token', payload.token);
            localStorage.setItem('username', payload.LoginUsername);// 保存用户名到本地
        },
        logout(state) {
            state.token = '';
            state.username = '';
            localStorage.removeItem('token');
            localStorage.removeItem('username');
        },
        register(state, payload) {
            console.log(payload);
            if(payload.data.affectedRows>0){
                alert('注册成功');
                this.$router.push('/login');
            }
        }
    },
    actions: {
        login({ commit }, payload) {// 登录
            // console.log(payload);// 通过登录可以拿过来 账号密码
            const { LoginUsername, LoginPassword } = payload;
            return fetchLogin({ LoginUsername, LoginPassword }).then(res => {
                // console.log(res);// 可以拿到登录成功的用户信息
                commit('login', {
                    token: res.data.data.token,
                    LoginUsername: LoginUsername
                });
            }).catch(err => {
                console.log(err);
            })

        },
        register({ commit }, payload) {// 注册
            const { RegisterUsername, RegisterPassword, phone } = payload;
            return fetchRegister({ RegisterUsername, RegisterPassword, phone }).then(res => {
                commit('register', {
                    data: res.data.data
                })
            });
        }
    },
    modules: {
    }
})
export default store;