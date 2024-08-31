// useModal.js
import { createApp, h, ref } from 'vue';
import Modal from '@/components/dialog/index.vue';
import ElementPlus from 'element-plus'; // 引入 Element Plus

export function useModal() {
    const isVisible = ref(false);

    const showModal = (component, { title = '默认标题', width = '500px', onClose } = {}) => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        // 使用渲染函数定义空状态组件
        const EmptyState = {
            render() {
                return h('div', { style: { padding: '20px', textAlign: 'center' } }, '没有内容');
            },
        };

        const app = createApp({
            render() {
                return h(
                    Modal,
                    {
                        title,
                        width,
                        onClose: () => {
                            isVisible.value = false;
                            app.unmount();
                            if (document.body.contains(container)) {
                                document.body.removeChild(container);
                            }
                            if (typeof onClose === 'function') {
                                onClose(); // 调用传入的关闭回调
                            }
                        },
                    },
                    { default: () => h(component || EmptyState) } // 如果没有传入组件，使用空状态组件
                );
            },
        });

        isVisible.value = true;
        app.use(ElementPlus); // 确保使用 Element Plus 插件
        app.mount(container);
    };

    return { showModal };
}
