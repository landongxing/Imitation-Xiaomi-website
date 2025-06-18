<template>
    <el-container>
        <div class="aside-banner" v-bind:style="{ width: Width + 'px' }"></div>
        <el-container>
            <el-header style="height:80px">
                <div class="header-logo">
                    <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi.com-assets/shop/img/logo-mi2.png" alt="">
                    <h2>小米账号</h2>
                </div>
                <div class="mi-nav">
                    <el-link :underline="false">用户协议</el-link>
                    <el-link :underline="false">隐私政策</el-link>
                    <el-link :underline="false">帮助中心</el-link>
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            中文(简体)<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>English</el-dropdown-item>
                            <el-dropdown-item>中文(繁体)</el-dropdown-item>
                            <el-dropdown-item>日本語</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>
            <el-main>
                <AuthComponent></AuthComponent>
            </el-main>
            <el-footer>小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号</el-footer>
        </el-container>
    </el-container>
</template>

<script>
import AuthComponent from '@/components/AuthComponent'

export default {
    provide() {
        return {
            routerName: this.$router.currentRoute.name
        }
    },
    components: {
        AuthComponent
    },
    data() {
        return {
            Width: 375,
            windowWidth: window.innerWidth
        }
    },
    watch: {
        windowWidth(val) {
            val < 1000 ? this.Width = 0 : this.Width = 375
        }

    },
    mounted() {
        window.onresize = () => {// 监听窗口大小变化
            return (() => {
                this.windowWidth = window.innerWidth
            })()
        }

    }
}
</script>

<style scoped>
.aside-banner {
    width: 375px;
    height: 100vh;
    background: url('https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.92c693b4..jpg') no-repeat;
    background-position: 50%;
    background-size: cover;
}

.el-header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 490px;
}

.header-logo {
    width: 154px;
    height: 40px;
    display: flex;
    align-items: center;
}

.header-logo img {
    width: 40px;
    height: 40px;
}

.mi-nav {
    width: 352px;
    height: 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.el-footer {
    color: #999;
    font-size: 12px;
}

.el-main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 83vh;
    min-width: 490px;
}
</style>
