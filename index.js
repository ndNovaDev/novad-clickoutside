
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
                document.addEventListener('click', clickoutside)
            },
            unbind(el, binding) {
                document.removeEventListener('click', el.__clickoutside__)
                delete el.__clickoutside__
            }
        })
    }
}