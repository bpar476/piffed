import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Title } from './Content'

export interface CarouselProps {
  items: CarouselItem[]
}
export interface CarouselItem {
  title: string
  body: ReactElement
  backgroundImage: string
}

const CarouselContainer = styled.div`
  position: relative;

  border: ${(props): string => `2px solid ${props.theme.border}`};
  border-radius: 10px;
  // This truncates any background content that overflows the border-radius
  overflow: hidden;
`

const VerticallyCenteredButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
  padding: 15px;

  button {
    border: ${(props): string => `2px solid ${props.theme.border}`};
    border-radius: 24px;

    // Adding AA to the colour sets the alpha channel
    background-color: ${(props): string => `${props.theme.secondary}AA`};
    font-size: 16px;
    font-weight: bold;
    color: ${(props): string => `${props.theme.text}`};

    height: 32px;
    width: 32px;
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
  width: auto;
  height: 100%;
  padding: 15px;
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
  const [widthRatio, setWidthRatio] = useState<number>(1)
  const [heightRatio, setHeightRatio] = useState<number>(1)

  useEffect(() => {
    setHeightRatio(((document.documentElement.clientHeight / screen.height) * screen.height) / 720 || 1)
    setWidthRatio(((document.documentElement.clientWidth / screen.width) * screen.width) / 1280 || 1)

    window.onresize = (): void => {
      setHeightRatio(((document.documentElement.clientHeight / screen.height) * screen.height) / 720 || 1)
      setWidthRatio(((document.documentElement.clientWidth / screen.width) * screen.width) / 1280 || 1)
    }
  }, [])

  return (
    <div style={{ width: '100%' }}>
      <CarouselProvider
        infinite
        totalSlides={items.length}
        naturalSlideWidth={widthRatio * 4}
        naturalSlideHeight={heightRatio * 1}
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
    </div>
  )
}
