<template>
    <div class="nav-banner">
        <div class="nav-aside" slot-scope="">
            <el-aside width="234px" v-for="(item, index) in content" v-bind:key="index">{{
                item }}</el-aside>
        </div>
        <el-carousel trigger="click" height="460px">
            <el-carousel-item v-for="(item, index) in imgUrl" v-bind:key="index">
                <div class="item">
                    <router-link :to="{ name: item.path, params: { id: item.id } }" class="item-link">
                        <img class="nav-img" :src="item.img" alt="">
                    </router-link>
                    <!-- <a v-bind:href="item.path + item.id" v-bind:key="index"> -->

                    <!-- <DetailMain :imgUrl="item.img"></DetailMain> -->
                    <!-- </a> -->
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
// import DetailMain from '@/views/DetailMain.vue';
export default {
    components: {
        // DetailMain
    },
    data() {
        return {
            content: ['手机', '电视', '家电', '笔记本 平板 显示器', '出行 穿戴', '耳机 音响', '健康 儿童', '生活 箱包', '智能 路由器', '电源 配件'],
            imgUrl: [
                { id: 1, img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a644c0be9094f589307e60fdb8f271f6.jpg?w=2452&h=920', path: "DetailMain" },
                { id: 2, img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eac4a60c852f35e47ac73c48552fb3a9.png?thumb=1&w=1226&h=460&f=webp&q=90', path: "DetailMain" },
                { id: 3, img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e1c08a2dff9ee0acb925f25d00f86575.jpg?thumb=1&w=1226&h=460&f=webp&q=90', path: "DetailMain" },
                { id: 4, img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ad090beb21360d40ed1960389c20d293.png?thumb=1&w=1226&h=460&f=webp&q=90', path: 'StopMain' },
                { id: 5, img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ed84eeed8e176004421f583312034bd.jpg?thumb=1&w=1226&h=460&f=webp&q=90', path: 'StopMain' },
                { id: 6, img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9160ae1fc11a98f3f018f6738527c5de.jpg?thumb=1&w=1226&h=460&f=webp&q=90', path: 'StopMain' },
            ]
        }
    }
}
</script>

<style scoped>
.nav-aside {
    width: 234px;
    height: 460px;
    background: rgba(105, 101, 101, .6);
    position: absolute;
    z-index: 3;
    left: 0;
    top: 0;
    padding: 20px 0;
    text-align: left;
}

.el-aside {
    width: 234px;
    height: 42px;
    padding-left: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.el-aside:hover {
    background: #ff6700;
}

.nav-banner {
    position: relative;
    height: 460px;
}

.nav-img {
    width: 100%;
}

.item-link {
    display: inline-block;
}

/*使用深度选择器(针对 scoped CSS)*/
::v-deep .el-carousel__arrow--left {
    left: 250px;
}
</style>