import { VueWrapper, mount } from '@vue/test-utils'
import { describe, it, beforeEach, expect } from 'vitest'
import AppHeader from './AppHeader.vue'

describe('AppHeader.vue', () => {
  let wrapper: VueWrapper<unknown>
  beforeEach(() => {
    wrapper = mount(AppHeader)
  })

  it('renders', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
