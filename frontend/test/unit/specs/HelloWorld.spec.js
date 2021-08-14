import Vue from 'vue'
import BaseTech from '@/components/BaseTech'

describe('BaseTech.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(BaseTech)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello p').textContent)
      .toEqual('Hello World!!')
  })
})
