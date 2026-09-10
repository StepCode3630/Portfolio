import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  mounted(el) {
    const titleLayer = el.querySelector('.title-layer')
    const imageLayer = el.querySelector('.image-layer')

    if (!titleLayer && !imageLayer) {
      console.warn('v-title-animation : Nothing found.', el)
      return
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'center bottom',
          end: 'center top -=150',
          scrub: 1,
          markers: true,
        },
      })

      if (titleLayer) {
        timeline.from(titleLayer, {
          opacity: 0,
          scale: 3,
          yPercent: 100,
        })
      }
      if (imageLayer) {
        timeline.from(imageLayer, { yPercent: 100 }, '<')
      }
      el._titleAnimation = { context, timeline }
    }, el)
  },
  unmounted(el) {
    el._titleAnimation?.context.revert()
    delete el._titleAnimation
  },
}
