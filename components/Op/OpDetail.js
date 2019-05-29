/* Dumb React component Shows contents of an opportunity
 */
import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Markdown from 'markdown-to-jsx'
import styled from 'styled-components'

import { FormattedMessage } from 'react-intl'
import { Button } from 'antd'
import { FullPage } from '../../hocs/publicPage'
import { HalfGrid, Spacer } from '../VTheme/VTheme'

const Left = styled.div``

const Right = styled.div``

const TitleFont = styled.h1`
  font-weight: 900;
  font-size: 2rem;
  letter-spacing: -0.02rem;
`
const ItemHeader = styled.h3`
  font-weight: 600;
  font-size: 1rem;

  margin-bottom: 0;
`
const ItemListing = styled.p`
  font-weight: 500;
  font-size: 1rem;
  opacity: 1;
  color: initial;
  margin-bottom: 0.2rem;
`
const ItemP = styled.div`
  letter-spacing: -0.02rem;
  font-weight: 400;
  font-size: 1rem;
  opacity: 1;
  color: initial;
  margin-bottom: 1rem;
`

export function OpDetail ({ op }) {
  return (
    <FullPage>
      <Spacer />
      <Head>title = {op.title}</Head>
      <HalfGrid>
        <Left>
          <TitleFont>{op.title}</TitleFont>
          <ItemListing>⏱&nbsp;{op.duration}</ItemListing>
          <ItemListing>🏫&nbsp;{op.location}</ItemListing>
          <ItemListing>📝&nbsp;{op.status}</ItemListing>
          <Spacer />
          <ItemP>
            <Markdown
              children={op.description}
              options={{
                overrides: {
                  Button: { component: Button }
                }
              }}
            />
          </ItemP>
          <Spacer />
        </Left>
        <Right>
          <img style={{ width: '100%' }} src={op.imgUrl} alt={op.title} />
        </Right>
      </HalfGrid>
    </FullPage>
  )
}

OpDetail.propTypes = {
  op: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    imgUrl: PropTypes.any,
    description: PropTypes.string,
    duration: PropTypes.string,
    status: PropTypes.string,
    _id: PropTypes.string.isRequired
  })
}

export default OpDetail
