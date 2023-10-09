// Write your code here

import './index.css'

const EventItem = props => {
  const {event, setActiveEventId, isActive} = props
  const {id, imageUrl, name, location} = event
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
    // console.log(id)
  }

  return (
    <>
      {/* <h1>Event Item</h1> */}
      <li className="event-item">
        <button type="button" className="event-button" onClick={onClickEvent}>
          <img src={imageUrl} alt="event" className={eventImageClassName} />
        </button>
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </li>
    </>
  )
}

export default EventItem
