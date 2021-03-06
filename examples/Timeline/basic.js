import React from 'react'

import { boxStyles } from '../styles'

import { createTimeline, helpers } from '../../build/animated-timeline.min.js'

const t = createTimeline({
  iterations: Infinity,
  direction: 'alternate',
  duration: 2000,
  easing: 'easeInOutSine'
})

export class BasicTimeline extends React.Component {
  componentDidMount() {
    t
      .animate({
        scale: helpers.transition({
          from: 2,
          to: 1
        })
      })
      .start()
  }

  render() {
    return <t.div style={boxStyles} />
  }
}
