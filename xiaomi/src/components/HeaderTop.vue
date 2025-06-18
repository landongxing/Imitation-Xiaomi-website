<template>
    <el-header class="header" style="height:40px">
        <div class="header-main auto">
            <div class="header-left">
                <el-link :underline="false" href="/guanwang">小米官网</el-link>
                <span class="spa">|</span>
                <el-link :underline="false" href="/stop">小米商城</el-link>
                <span class="spa">|</span>
                <el-link :underline="false" href="">小米澎湃OS</el-link>
                <span class="spa">|</span>
                <el-link :underline="false" href="/car">小米汽车</el-link>
                <span class="spa">|</span>
                <el-link :underline="false" href="">云服务</el-link>
                <span class="spa">|</span>
                <el-link :underline="false" href="">IoT</el-link>
                <span class="spa">|</span>
                <el-link :underline="false" href="">有品</el-link>
                <span class="spa">|</span>
                <el-link :underline="false" href="">小爱开放平台</el-link>
                <span class="spa">|</span>
                <el-link :underline="false" href="">资质证照</el-link>
                <span class="spa">|</span>
                <el-link :underline="false" href="">协议规则</el-link>
                <span class="spa">|</span>
                <el-link :underline="false">下载App</el-link>
                <span class="spa">|</span>
                <el-link :underline="false">Select Location</el-link>
            </div>
            <div class="header-right" v-bind:style="{ width: widthBox + 'px' }">
                <div class="header-right-welcome">
                    <div class="header-right-welcome-if" v-if="isLogin">
                        <router-link :to="{ name: 'login' }">登录</router-link>
                        <span class="spa">|</span>
                        <router-link :to="{ name: 'register' }">注册</router-link>
                        <span class="spa">|</span>
                    </div>
                    <div class="header-right-welcome-if" v-if="!isLogin">
                        <span>欢迎您{{ this.$store.state.username }}</span>&nbsp;&nbsp;
                        <div class="logout" @click="handleClcik">退出登录</div>
                    </div>
                </div>
                <el-link :underline="false">消息通知</el-link>
                <div class="stop-car">
                    <i class="el-icon-truck"></i>
                    <span>购物车</span>
                    <span>({{ count="0" }})</span>
                </div>
            </div>
        </div>
    </el-header>

</template>

<script>

export default {
    data() {
        return {
            isLogin: false,
            username: '',
            widthBox: 260
        }
    },
    mounted() {
        this.username = this.$store.state.username;
        this.isLogin ? this.widthBox = 260 : this.widthBox = 350;
    },
    methods: {
        handleClcik() {
            this.$store.commit('logout');
            this.$router.push({
                name: 'login'
            });
        }
    }
}
</script>

<style scoped>
.header {
    height: 40px;
    background: #333;
    text-align: center;
}

.header-main {
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.header-left {
    width: 770px;
    height: 40px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-main a {
    color: #b0b0b0;
    line-height: 40px;
    font-size: 12px;
}


.spa {
    margin: 0.15em;
    font-size: 12px;
    color: #424242;
}

.header-right {
    width: 350px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.stop-car {
    width: 120px;
    height: 40px;
    background: #424242;
    color: #b0b0b0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
}

.header-right-welcome-if {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: red;

}

.logout {
    cursor: pointer;
}
</style>