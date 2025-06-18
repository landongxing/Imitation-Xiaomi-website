import axios from 'axios';
import router from '../router';
import store from '../store';

import Vue from 'vue';

// 设置请求超时时间
axios.defaults.timeout = 5000;

// 请求拦截器
axios.interceptors.request.use(config => {
    if (store.state.token) {
        config.headers.Authorization = "Bearer " + store.state.token
    }
    return config;
});

// // 响应拦截器
axios.interceptors.response.use(res => {
    return res;
}, (err) => {
    const { response } = err;
    console.log(response);
    switch (response.status) {
        case 401:
            Vue.prototype.$confirm('登录过期,请重新登录', '提示', {// 第一个参数为弹窗内容，第二个参数为标题
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                router.replace({
                    name: 'login'
                }).catch(err => {
                    console.log(err);
                })
                console.log("返回对应的login页面");
            }).catch(err => {
                console.log(err);
            })
            break;

        default:
            break;
    }
})


export default axios;