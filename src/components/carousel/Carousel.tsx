import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import React, { FunctionComponent, ReactElement } from 'react'
import styled, { keyframes } from 'styled-components'
import { breakpoints } from '../../breakpoints'
import { useScreenScale } from '../../hooks/aspect-ratio'
import { Title } from '../Content'
import { CarouselStyles } from './Styles'

export interface CarouselProps {
  items: CarouselItem[]
}
export interface CarouselItem {
  title: string
  body: ReactElement
  backgroundImage: string
}

const fadeIn = keyframes`
  from {
    opacity: 0.5;
  }

  to {
    opacity: 1;
  }
`

const CarouselRoot = styled.div`
  width: 100%;
  ${CarouselStyles};
`

const CarouselContainer = styled.div`
  position: relative;
  // This truncates any background content that overflows the border-radius
  overflow: hidden;
`

const VerticallyCenteredButton = styled.div`
  @media only screen and (max-width: ${breakpoints.largeMobile}) {
    display: none;
  }

  position: absolute;
  top: 40%;
  overflow: hidden;
  padding: 15px;

  button {
    border-radius: 24px;
    border: 0;

    // Adding AA to the colour sets the alpha channel
    background-color: ${(props): string => `${props.theme.secondary}AA`};
    border: ${(props): string => `2px solid ${props.theme.secondary}AA`};
    opacity: 0.5;
    font-size: 16px;
    font-weight: bold;
    color: ${(props): string => `${props.theme.text}`};

    height: 32px;
    width: 32px;

    :hover {
      border: ${(props): string => `2px solid ${props.theme.border}`};
      animation: ${fadeIn} 0.2s ease-in;
      animation-fill-mode: forwards;
    }
  }
`

const BackButtonContainer = styled(VerticallyCenteredButton)`
  left: 0;
`

const NextButtonContainer = styled(VerticallyCenteredButton)`
  right: 0;
`

const CarouselItemContainer = styled.div<{ imageUrl: string }>`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  width: auto;
  height: 100%;
  padding: 70px;

  @media only screen and (max-width: ${breakpoints.largeMobile}) {
    padding: 15px;
  }
`

const SlideTitle = styled(Title)`
  margin: 0;
`

function toCarouselSlide(item: CarouselItem, index: number): ReactElement {
  return (
    <Slide index={index} key={index}>
      <CarouselItemContainer imageUrl={item.backgroundImage}>
        <SlideTitle>{item.title}</SlideTitle>
        {item.body}
      </CarouselItemContainer>
    </Slide>
  )
}

export const Carousel: FunctionComponent<CarouselProps> = ({ items }) => {
  const { widthRatio, heightRatio } = useScreenScale(1280, 720)

  return (
    <CarouselRoot>
      <CarouselProvider
        infinite
        totalSlides={items.length}
        naturalSlideWidth={widthRatio * 4}
        naturalSlideHeight={heightRatio * 1}
        isPlaying={window.matchMedia(`(max-width: ${breakpoints.largeMobile})`).matches}
        interval={2000}
      >
        <CarouselContainer>
          <Slider>{items.map(toCarouselSlide)}</Slider>
          <BackButtonContainer>
            <ButtonBack>{'<'}</ButtonBack>
          </BackButtonContainer>
          <NextButtonContainer>
            <ButtonNext>{'>'}</ButtonNext>
          </NextButtonContainer>
        </CarouselContainer>
      </CarouselProvider>
    </CarouselRoot>
  )
}
