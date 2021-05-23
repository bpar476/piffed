import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import React, { FunctionComponent, ReactElement } from 'react'
import styled, { keyframes } from 'styled-components'
import { breakpoints } from '../../breakpoints'
import { useScreenScale } from '../../hooks/aspect-ratio'
import { Title } from '../Content'
import { CarouselStyles } from './Styles'

/**
 * A Carousel can render CarouselItems or arbitrary
 * react elements as its content
 */
export interface CarouselProps {
  items: Array<CarouselItem | ReactElement>
}
/**
 * Carousel item is a type that when populated can be
 * used to create a basic carousel slide. If you want a
 * simple carousel, this type should work.
 */
export interface CarouselItem {
  title: string
  body: ReactElement
  backgroundImage: string
}

function isCarouselItem(obj: CarouselItem | ReactElement): obj is CarouselItem {
  const carouselItem = obj as CarouselItem
  return (
    carouselItem.title !== undefined && carouselItem.body !== undefined && carouselItem.backgroundImage !== undefined
  )
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

const CarouselItemContainerBase = styled.div`
  width: auto;
  height: 100%;
  padding: 15px 70px 15px 70px;

  @media only screen and (max-width: ${breakpoints.largeMobile}) {
    padding: 15px;
  }
`

const CarouselItemContainer = styled(CarouselItemContainerBase)<{ imageUrl: string }>`
  background-image: url(${(props) => props.imageUrl || undefined});
  background-size: ${(props) => (props.imageUrl && 'cover') || undefined};
  background-color: rgba(220, 230, 240, 0.8);
  background-blend-mode: lighten;
`

const SlideTitle = styled(Title)`
  margin: 0;

  @media screen and (max-width: ${breakpoints.largeMobile}) {
    font-size: 1.5rem;
  }
`

function toCarouselSlide(item: CarouselItem | ReactElement, index: number): ReactElement {
  return (
    <Slide index={index} key={index}>
      {isCarouselItem(item) ? (
        <CarouselItemContainer imageUrl={item.backgroundImage}>
          <SlideTitle>{item.title}</SlideTitle>
          {item.body}
        </CarouselItemContainer>
      ) : (
        <CarouselItemContainerBase>{item}</CarouselItemContainerBase>
      )}
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
