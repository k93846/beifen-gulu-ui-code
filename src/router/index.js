import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import Switch from '../components/Switch.vue'
import Button from '../components/Button.vue'
import Dialog from '../components/Dialog.vue'
import Tabs from '../components/TabsDemo.vue'
import Intro from '../views/Intro.vue'
import GetStarted from '../views/GetStarted.vue'
import Install from '../views/Install.vue'


const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/doc',
        component: Doc, children: [
            { path: 'switch', component: Switch },
            { path: 'button', component: Button },
            { path: 'dialog', component: Dialog },
            { path: 'tabs', component: Tabs },
            { path: 'switch', component: Switch },
            { path: 'intro', component: Intro },
            { path: 'getstarted', component: GetStarted },
            { path: 'install', component: Install },



        ]
    },


]

const router = createRouter({
    history: createWebHashHistory(), //哈希值模式
    routes
})

// 暴露出去
export default router

