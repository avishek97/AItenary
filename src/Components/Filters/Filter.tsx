import FilterSidebar from './FlightFilters/FilterSidebar'
import BusFilterSidebar from './BusFilterSideBar/BusFilterSideBar'
import TrainFilterSidebar from './TrainFilter/TrainFilterSidebar'
import { commuteList } from '../../Helpers/constants'


const Filter = ({communteOption}) => {
    function FilterLayout(communteOption) {
        if (communteOption === commuteList.Flight) {
            return <FilterSidebar />
        } else if(communteOption === commuteList.Bus) {
            return <BusFilterSidebar />
        } else if (communteOption === commuteList.Train) {
            return <TrainFilterSidebar />
        }
    }
  return (
    <div>
        {
            FilterLayout(communteOption)
        }
    </div>
  )
}

export default Filter