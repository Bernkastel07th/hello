import React from 'react'
import Markdown from 'react-markdown'
import Layout from '../components/Layout'
import Skills from '../components/Skills'

const linksMd = `
## Links
  - twitter: https://twitter.com/hi_im_Corki
  - github: https://github.com/Bernkastel07th
  - codepen: https://codepen.io/Bernkastel07th/
  - 当ポートフォリオサイトのソースコード: https://github.com/Bernkastel07th/portfolio
`

export default () => (
  <Layout>
    <Skills />
    <Markdown source={linksMd} />
  </Layout>
)
