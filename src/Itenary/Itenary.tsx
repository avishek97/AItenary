import { useState } from 'react';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import TrainIcon from '@mui/icons-material/Train';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import './Itenary.css'
import Filter from '../Filters/Filter';
import { commuteList } from '../Helpers/constants';
import AvailabilityLayout from '../CommuteAvailability/AvailabilityLayout/Availability';
import SortDropdown from '../SortDropdown/SortDropdown';

const Itenary = () => {
    const [communteOption, setCommuteOption] = useState(commuteList.Flight)

    function setCommute(option) {
        setCommuteOption(option)
    }
  return (
    <div className='itenary-container'>
      <div className='itenary-secondary-container'>
        <div>
            <div className='itenary-from-to'>Delhi (DEL) &nbsp; <TrendingFlatIcon /> &nbsp;  Paris (CDG)</div>
            <div className='itenary-date-preview'>20 May - 25 May 2024 · 2 Adults · Economy</div>
        </div>
        <div className='itenary-btn-container'>
            <div className='itenary-save-share-btn'><FavoriteBorderIcon/> Save Trip</div>
            <div className='itenary-save-share-btn'><ShareIcon/> Share</div>
        </div>
      </div>
      <div>
        <div className='itenary-commutes'>
            <div className={`itenary-travel-mode ${communteOption === commuteList.Flight ? 'active-commute':''}`} onClick={()=>setCommute(commuteList.Flight)}>
                <LocalAirportIcon />
                <span>Flights</span>
            </div>
            <div className={`itenary-travel-mode ${communteOption === commuteList.Train ? 'active-commute':''}`} onClick={()=>setCommute(commuteList.Train)}>
                <TrainIcon />
                <span>Trains</span>
            </div>
            <div className={`itenary-travel-mode ${communteOption === commuteList.Bus ? 'active-commute':''}`} onClick={()=>setCommute(commuteList.Bus)}>
                <DirectionsBusIcon />
                <span>Buses</span>
            </div>
        </div>
        <div className='itenary-filter-result'>
            <div>
                <Filter communteOption = {communteOption} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                <div style={{display: 'flex', paddingLeft: '20px', paddingBottom: '10px'}}>
                    <SortDropdown/>
                </div>
                <div className='avilability-container' >
                    <AvailabilityLayout communteOption={communteOption} />
                </div>
                <div className='proceed-container'>
                    <button className='proceed-btn'>Proceed</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Itenary