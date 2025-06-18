<template>
    <div>
        <div class="login" v-if="isLogin">
            <form @submit.prevent="submitLogin">
                <div class="div">
                    <label for="username">用户名: </label>
                    <input type="text" name="username" id="username" v-model="LoginUsername" placeholder="请输入用户名">
                </div>
                <div class="div">
                    <label for="password">密&nbsp;&nbsp;&nbsp;&nbsp;码: </label>
                    <input type="password" name="password" id="password" v-model="LoginPassword" placeholder="请输入密码">
                </div>
                <div class="div">
                    <button type="submit">登录</button>
                </div>
            </form>
        </div>
        <div class="register" v-if="!isLogin">
            <form @submit.prevent="submitRegister">
                <div class="div">
                    <label for="RegisterUsername">用户名: </label>
                    <input type="text" name="RegisterUsername" id="RegisterUsername" v-model="RegisterUsername"
                        placeholder="请输入用户名">
                </div>
                <div class="div">
                    <label for="password">密&nbsp;&nbsp;&nbsp;&nbsp;码: </label>
                    <input type="password" name="RegisterPassword" id="RegisterPassword" v-model="RegisterPassword"
                        placeholder="请输入密码">
                </div>
                <div class="div">
                    <label for="confirmPwd">确认密码: </label>
                    <input type="password" name="confirmPwd" id="confirmPwd" v-model="confirmPwd" placeholder="请确认密码">
                </div>
                <div class="div">
                    <label for="phone">手机号: </label>
                    <input type="text" name="phone" id="phone" v-model="phone" placeholder="请输入手机号" maxlength="11"
                        @input="handleInput">
                </div>
                <div class="div">
                    <button type="submit">注册</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    inject: ['routerName'],
    mounted() {
        console.log(this.routerName)
        this.routerName === 'login' ? this.isLogin = true : this.isLogin = false
    },
    data() {
        return {
            isLogin: true,
            LoginUsername: "",
            LoginPassword: "",
            RegisterUsername: "",
            RegisterPassword: "",
            confirmPwd: "",
            phone: ""
        }
    },
    methods: {
        submitLogin() {
            // 发送数据到服务器
            this.$store.dispatch('login', {
                LoginUsername: this.LoginUsername,
                LoginPassword: this.LoginPassword
            }).then(() => {
                // console.log("数据发送成功");
                this.$router.push({
                    name: 'stop'
                }).catch(err => {
                    console.log(err)
                })
            })
        },
        submitRegister() {
            if (this.RegisterPassword == this.confirmPwd) {
                this.$store.dispatch('register', {
                    RegisterUsername: this.RegisterUsername,
                    RegisterPassword: this.RegisterPassword,
                    phone: this.phone
                })
            } else {
                alert('两次密码输入不一致')
            }

        },
        handleInput() {
            // 只保留数字，其他字符会被删除
            // this.phone = value.replace(/\D/g, '');
            // console.log(event.target.value);
            // this.phone = event.target.value.replace(/[0-9]/g, '')
        }
    }
}
</script>

<style scoped>
.div button {
    width: 96px;
    height: 38px;
    margin-top: 30px;
    margin-left: 25px;
}
</style>