<template>
    <div class="gulu-tabs">
        <div class="gulu-tabs-nav">
            <!-- 显示两个导航标题，并用selected控制是否应用样式 -->
            <div class="gulu-tabs-nav-item" v-for="(t, index) in titles" :key="index" :class="{ selected: t === selected }"
                @click="select(t)">{{ t }}
                <transition>
                    <div class="gulu-tabs-nav-indicator" v-if="t === selected"></div>
                </transition>
            </div>

        </div>
        <!-- 以下使得显示内容 -->
        <div class="gulu-tabs-content">
            <component class="gulu-tabs-content-item" v-for="(c, index) in defaults" :is="c" :key="index"
                :class="{ selected: selected === c.props.title }" />
        </div>
    </div>
</template>

<script>
import Tab from './Tab.vue'
export default {
    props: {
        selected: {
            type: String,
            default: '导航1'
        }
    },

    setup(props, context) {
        const defaults = context.slots.default()
        defaults.forEach((tag) => {
            if (tag.type !== Tab) {
                throw new Error('Tabs子标签必须是Tab')
            }
        })
        const titles = defaults.map((tag) => {
            return tag.props.title
        })
        //使输入的title显示在页面中
        const select = (tag) => {
            context.emit('update:selected', tag)
        }

        return { defaults, titles, select }
    }

}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.gulu-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
        position: relative;

        &-item {

            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;
            position: relative;

            &:first-child {
                margin-left: 0;
            }


            &.selected {
                color: $blue;
            }
        }

        &-indicator {
            position: absolute;
            height: 3px;
            background: $blue;
            left: calc(50% - 20.5px);
            bottom: -1px;
            width: 41px;
        }
    }

    &-content {
        padding: 8px 0;

        &-item {
            display: none;

            &.selected {
                display: block;
            }
        }

    }
}
.v-enter-from{
    transform: scale(0.3);
   
}
.v-enter-active{
    transition: all 500ms;
}
</style>