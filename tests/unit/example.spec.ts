import { shallowMount } from '@vue/test-utils'
import KaText from '@/components/ka-text/KaText.vue'

describe('KaText.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(KaText, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
