import TransportCard from '../../TransportCard/TransportCard'

const FlightAvailability = () => {
    const flightProps = {
        'logo': 'data:image/png;base64,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',
        'provider': '',
        'departureTime':'23:45',
        'departurePlace':'Del',
        'arrivalTime':'07:00',
        'arrivalPlace':'CDG',
        'duration':'6h:45m',
        'stops':'1',
        'price':'45,000',
        'tag':'',
        'buttonText' : "Select",
    }
  return (
    <div >
      <TransportCard {...flightProps} />
      <TransportCard {...flightProps} />
      <TransportCard {...flightProps} />
      <TransportCard {...flightProps} />
      <TransportCard {...flightProps} />
      <TransportCard {...flightProps} />
      <TransportCard {...flightProps} />
      <TransportCard {...flightProps} />
      <TransportCard {...flightProps} />
      <TransportCard {...flightProps} />
      <TransportCard {...flightProps} />
      <TransportCard {...flightProps} />
      <TransportCard {...flightProps} />
    </div>
  )
}

export default FlightAvailability