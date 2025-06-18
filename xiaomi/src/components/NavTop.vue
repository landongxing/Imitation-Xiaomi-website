<template>
    <el-main>
        <nav class="auto">
            <div class="nav-main">
                <div class="nav-logo">
                    <a href="#">
                        <img class="logo" src="https://cdn.cnbj1.fds.api.mi-img.com/mi.com-assets/shop/img/logo-mi2.png"
                            alt="此图片无法加载">
                    </a>
                </div>
                <ul class="nav-list">
                    <li v-for="(item, index) in text" v-bind:key="index">{{ item }}</li>
                </ul>
                <div class="nav-sousuo">
                    <input class=nav-search type="text" placeholder="stop">
                    <i class="el-icon-search"></i>
                </div>
            </div>
            <NavBanner></NavBanner>
        </nav>
    </el-main>
</template>

<script>
import NavBanner from '@/components/NavBanner'
export default {
    components:{
        NavBanner
    },
    data() {
        return {
            count: 0,
            text: [ '','Xiaomi手机', "REDMI手机", "电视", "笔记本", "平板", "家电", "路由器", "服务中心", '社区'],
            stop: ["笔记本"]
        }
    }
}
</script>

<style scoped>
.el-main {
    overflow: visible;
}
.nav-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-list {
    width:850px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-left: 30px;
}

.nav-list li {
    height: 88px;
    line-height: 88px;
    text-align: center;
}

.logo {
    width: 56px;
    height: 56px;
}

.nav-search {
    width: 245px;
    height: 50px;
    border: 1px solid #e0e0e0;
    padding-left: 10px;
    outline: none;
}

.el-icon-search {
    width: 52px;
    height: 50px;
    padding-top: 17px;
    border: 1px solid #e0e0e0;
    border-left: none;
    cursor: pointer;
}

.nav-sousuo {
    height: 50px;
    display: flex;
}
</style>