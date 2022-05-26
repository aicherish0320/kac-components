import KaText from '@/components/ka-text/KaText.vue'
import { textDefaultProps } from '@/defaultProps'
import { shallowMount } from '@vue/test-utils'

describe('KaText.vue component', () => {
  const location = window.location
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: {
        href: ''
      }
    })
  })
  afterEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: location
    })
  })
  it('default KaText render', () => {
    const text = 'HelloWorld'
    const props = {
      ...textDefaultProps,
      text
    }
    const wrapper = shallowMount(KaText, {
      props
    })
    // should have the right text
    expect(wrapper.text()).toBe(text)
    // should be default div tag
    expect(wrapper.element.tagName).toBe('DIV')
    // should not have certain css attr
    const style = wrapper.attributes().style
    expect(style.includes('font-size')).toBeTruthy()
    // should not have prop has been filtered
    expect(style.includes('actionType')).toBeFalsy()
  })
  it('KaText with actionType and URL should trigger location href change', async () => {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: 'http://www.baidu.com'
    }
    const wrapper = shallowMount(KaText, {
      props
    })
    await wrapper.trigger('click')
    expect(window.location.href).toBe('http://www.baidu.com')
  })
  it('KaText with isEditing should not trigger location href change', async () => {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: 'http://www.baidu.com',
      tag: 'h2',
      isEditing: true
    }
    const wrapper = shallowMount(KaText, {
      props
    })
    await wrapper.trigger('click')
    expect(window.location.href).not.toBe('http://www.baidu.com')
  })
})
