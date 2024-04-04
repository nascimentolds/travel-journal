import { FaLocationDot } from "react-icons/fa6";

export default function Card(props) {
  const line = props.index !== props.dados ? 'card--line' : ''

  return (
    <div className={`card ${line}`}>
      <img className="card--image" src={props.imageUrl} alt={props.title} />
      <div className="card--description">
        <div className="card--location">
          <FaLocationDot className="card--icon" />
          <span className="card--loc">{props.location}</span>
          <a className="card--link" href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className="card--title">{props.title}</h1>
        <strong>{props.startDate} - {props.endDate}</strong>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
