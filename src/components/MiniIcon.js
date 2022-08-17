import { Link } from 'react-router-dom';

function MiniIcon(props) {
  return (
    <div>
      <Link to={`../merits/${props.kind}/details/${props.alt}`}>
        <img src={props.logo} alt={props.alt} className="mini-icon"></img>
        <div>{props.alt.split("-").join(" ").toUpperCase()}</div>
      </Link>
    </div>
  );
}

export default MiniIcon;