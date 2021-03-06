import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Button } from 'antd'

const OfferContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0 4rem 0;
  @media screen and (min-width: 1026px) and (max-width: 1289px) {
    grid-template-columns: 1fr 1fr ;
  }
  @media screen and (min-width: 768px) and (max-width: 1025px) {
    
    grid-template-columns: 1fr ;
    margin: 2rem 0 ;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 2rem 0 ;
  }
`

const OfferCard = styled.div`

  padding: 3rem;
display: grid;
gap:1.5rem;
grid-template-columns: 1fr;
width: 100%;
  background: #ffffff;
  box-shadow: 2px 2px 16px 0 rgba(118, 118, 118, 0.5);
  border-radius: 8px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
min-height: 292px;

  h3 {
    bottom: 0;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: -0.38px;
    line-height: 1.5;

    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
  }
  small {
  font-size: 1rem
}
 

  :hover {
    transform: scale(1.01);
    h3 {
      color: #653cad;
    }
  }

  /* Tablet */
  @media screen and (min-width: 768px) and (max-width: 1025px) {
    min-height: initial;

   }

  /* Mobile */
  @media screen and (max-width: 768px) {
    min-height: initial;


  padding: 2rem;
    width: calc(100vw - 2rem);


  h3 {
    bottom: 0;
    font-size: 1.5rem;
  
  }

  }

`

const OfferSection = () => (
  <div>

    <OfferContainer>

      <Link href='/home'>

        <a>

          <OfferCard>
            <figcaption>
              <h3>Offer to help</h3>
              <p>
            Want to volunteer your time, or resources to help out someone in need? See what is needed and offer your skills.
              </p><Button size='large' shape='round' type='primary' style={{ marginTop: '1rem' }}>See how you can help</Button>
            </figcaption>
          </OfferCard>
        </a>
      </Link>

      {/* <Link href='/act'> */}
      <a rel='noopener noreferrer' target='_blank' href='https://blog.voluntarily.nz/pre-register'>
        <OfferCard>

          <figcaption>

            <small>Coming soon</small>
            <h3>Ask for help</h3>
            <p>Coming this week. We make it easy to ask for exactly what you need.
            </p>
            <Button size='large' shape='round' type='primary' style={{ marginTop: '1rem' }}>See what help is available</Button>
          </figcaption>
        </OfferCard>
      </a>
      {/* </Link> */}
      <a rel='noopener noreferrer' target='_blank' href='https://blog.voluntarily.nz/get-involved'>
        <OfferCard>

          <img src='./static/img/icons/code-party.svg' />
          <figcaption>
            <h3>Be part of the community build</h3>
            <p>The entire project is open-source, and everyone is welcome to join. Click for more info.

            </p>
          </figcaption>
        </OfferCard>
      </a>
    </OfferContainer>
  </div>
)

export default OfferSection
