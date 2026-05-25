import Carousel from '../Carousel/Carousel'
import Desination from '../Destination/Destination'
import HeroSection from '../HeroImage/Heroimage'
import Itenary from '../Itenary/Itenary'
import './explore.css'

const Explore = () => {
  const taglines = [
        {
            logo: 'A',
            title: "Smart Search",
            description: 'Compare and save on every booking'
        },
        {
            logo: 'B',
            title: "Save Time",
            description: 'Everytging you need in one place'
        },
        {
            logo: 'C',
            title: "Personalize Trip",
            description: 'AI Powered recommendations'
        },
        {
            logo: 'D',
            title: "Memorable Journerys",
            description: 'Build Experience you never forget'
        }
    ]

    const carouselItem = [
      {
        state: "Paris",
        country: 'France',
        img: ''
      },
      {
        state: "Bali",
        country: 'Indonesia',
        img: ''
      },
      {
        state: "Switzerland",
        country: 'Europe',
        img: ''
      },
      {
        state: "Dubai",
        country: 'UAE',
        img: ''
      },
      {
        state: "Tokyo",
        country: 'Japan',
        img: ''
      },
      {
        state: "Munnar",
        country: 'Keralam',
        img: ''
      },
      {
        state: "Paris",
        country: 'France',
        img: ''
      },
      {
        state: "Bali",
        country: 'Indonesia',
        img: ''
      },
      {
        state: "Switzerland",
        country: 'Europe',
        img: ''
      },
      {
        state: "Dubai",
        country: 'UAE',
        img: ''
      },
      {
        state: "Tokyo",
        country: 'Japan',
        img: ''
      },
      {
        state: "Munnar",
        country: 'Keralam',
        img: ''
      }
    ]
  return (
    <div>
      <div className='explore-container'>
        <HeroSection />
        <Desination items = {taglines} />
        <Carousel items={carouselItem} />
      </div>
      <div>
        <Itenary />
      </div>
    </div>
  )
}

export default Explore