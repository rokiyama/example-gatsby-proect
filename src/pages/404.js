import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"

export default () => (
  <Layout>
    <h1 css={css`
      padding: 20vh 0;
      text-align: center;
    `}>お探しのページが見つかりませんでした。</h1>
  </Layout>
)
