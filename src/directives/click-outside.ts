import { Directive } from 'vue'

const clickOutside: Directive = {
  beforeMount(el, binding) {
    el.clickOutsideEvent = function (event) {
      // Check if the click was outside the el and its children
      if (!(el === event.target || el.contains(event.target))) {
        binding.value()
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
}

export default clickOutside
