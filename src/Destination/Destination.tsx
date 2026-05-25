import './Destination.css'

const Desination = ({items}) => {
    
  return (
    <div>
      <div className='tag-container'>
        {
            items.map((item)=>{
                return <TagLines logo={item.logo} title = {item.title} description={item.description} />
            })
        }

    </div>
    </div>
  )
}

export default Desination

const TagLines = ({logo, title, description}) => {
    return (
        <div className='tag-card'>
            <div className='icon'>{logo}</div>
            <div className='subject'>
                <div>{title}</div>
                <div>{description}</div>
            </div>
        </div>
    )
}