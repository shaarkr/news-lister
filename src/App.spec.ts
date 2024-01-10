// App.spec.ts
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import App from './App.vue'

describe('App.vue', () => {
  it('renders "Hello, World!"', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toMatch('Hello, World!')
  })
})
