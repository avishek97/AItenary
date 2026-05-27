import { commuteList } from '../../../Helpers/constants'
import BusAvailability from '../BusAvailability/BusAvailability'
import FlightAvailability from '../FlightAvailability/FlightAvailability'
import TrainAvailability from '../TrainAvailability/ TrainAvailability'
import './Avilability.css'


const Availability = ({communteOption}) => {

    function AvailabilityLayout(commuteOption){
        if(commuteOption === commuteList.Flight) {
            return <FlightAvailability />
        } else if (commuteOption === commuteList.Train) {
            return <TrainAvailability />
        } else if(commuteOption === commuteList.Bus) {
            return <BusAvailability />
        }
    }
  return (
    <div style={{overflowY: 'auto', overflowX:'hidden', maxHeight: '100%'}}>
      {
        AvailabilityLayout(communteOption)
      }
    </div>
  )
}

export default Availability