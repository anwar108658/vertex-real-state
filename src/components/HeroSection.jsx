import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay} from '@fortawesome/free-solid-svg-icons'
import CustomSearch from './CustomSearch'

const HeroSection = () => {
  return (
    <div 
    className={`bg-custom-hero flex justify-center items-center  flex-1 rounded-lg px-2`}>
      <div className='max-w-[800px] h-[120vh] sm:h-screen w-full flex flex-col items-center justify-center gap-4 sm:gap-6'>

        <div className='text-white backdrop-blur-sm '>
            <h1 className='text-2xl font-bold'>Real homes live here</h1>
            <h2 className='text-xl font-semibold'>Real Prices. Real Photos. Real Properties.</h2>
        </div>

        <CustomSearch/>

        <button className="mt-3 sm:mt-6 flex items-center gap-2 border-1 border-white text-white bg-transparent px-4 py-2 rounded-lg cursor-pointer">
          <FontAwesomeIcon icon={faCirclePlay}  size="lg" />
          <span>Experience the journey</span>
        </button>
      </div>
    </div>
  )
}

export default HeroSection