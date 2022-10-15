import About from "@/views/About.vue"
// import { mount } from "@vue/test-utils"

// shallowMount 僅測試到第一層child component
import { shallowMount } from "@vue/test-utils" 

describe('About.vue', () => {
    test('renders inner text', () => {
        const wrapper = shallowMount(About)
        expect(wrapper.text()).toContain('about')
    })

})