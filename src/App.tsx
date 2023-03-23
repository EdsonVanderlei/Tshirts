import React from 'react';
import camiseLiver from './Assets/Camiseta.png'
import logoLiver from './Assets/Logo.png'
import videoBarca from './Assets/Video.png'
import backgroundLiver from './Assets/backgroundliver.png'
import camisetabarca from './Assets/CamisetaBarca.png'
import camisaBarca from './Assets/camisaBarca.png'
import logoBarca from './Assets/LogoBarca.png'
import backgroundBarca from './Assets/backgroundbarca.png'
import previewLiver from './Assets/previewLiver.png'
import videoLiver from './Assets/videoliver.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper'
import 'swiper/css';
import 'swiper/css/bundle'
import Tshirt from './Components/Tshirt';
import { Team, schema } from './Types/Types'

function App() {

  const [index, setIndex] = React.useState(1)

  const Liverpool: Team = {
    nome: 'LIVERPOOL',
    kit: 'HOME KIT 21/22',
    made: 'The recycled polyester used in Nike products begins as recycled plastic bottles, which are cleaned, shredded into flakes and converted into pellets.',
    about: 'The Liverpool F.C. Stadium Home Shirt features highly breathable fabric to help keep sweat off your skin while you cheer for your team.This product is made from at least 75% recycled polyester fibres.',
    camiseta: camiseLiver,
    logo: logoLiver,
    video: videoLiver,
    background: backgroundLiver,
    preview: {
      kit: 'HOME KIT 21/22',
      nome: 'BARCELONA',
      camiseta: camisetabarca,
      color: '#1368BE'

    }
  }
  const barcelona: Team = {
    nome: 'BARCELONA',
    kit: 'HOME KIT 21/22',
    made: 'The recycled polyester used in Nike products begins as recycled plastic bottles, which are cleaned, shredded into flakes and converted into pellets.',
    about: 'The F.C. Barcelona Stadium Home Shirt features highly breathable fabric to help keep sweat off your skin while you cheer for your team.This product is made from 100% recycled polyester fibres.',
    camiseta: camisaBarca,
    logo: logoBarca,
    video: videoBarca,
    background: backgroundBarca,
    preview: {
      kit: 'HOME KIT 21/22',
      nome: 'LIVERPOOL',
      camiseta: previewLiver,
      color: '#c90404'
    }
  }




  const Times: Team[] = [
    Liverpool, barcelona

  ]

  const Wrapper = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    if (Wrapper.current) {
      Wrapper.current.style.backgroundImage = `url(${Times[index].background})`
    }
  }, [Wrapper.current, index])




  return (
    <Swiper
      slidesPerView={1}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      effect='fade'
      speed={500}
      loop
      pagination
      navigation
      autoplay={{
        pauseOnMouseEnter: true,
        delay: 4000,
        disableOnInteraction: true,
      }}
    >
      {Times.map((item) => {
        return (
          <SwiperSlide>
            <Tshirt Time={item} />
          </SwiperSlide>
        )
      })}

    </Swiper>
  );
}

export default App;
