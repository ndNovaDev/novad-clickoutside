
module.exports = {
    install(Vue) {
        Vue.directive('clickoutside', {
            bind(el, binding) {
                function clickoutside(e) {
                    if (el.contains(e.target)) {
                        return false
                    }
                    if (binding.expression) {
                        binding.value(e)
                    }
                }
                el.__clickoutside__ = clickoutside
                setTimeout(() => {
                    document.addEventListener('click', clickoutside)
                }, 0);
            },
            unbind(el, binding) {
                document.removeEventListener('click', el.__clickoutside__)
                delete el.__clickoutside__
            }
        })
    }
}