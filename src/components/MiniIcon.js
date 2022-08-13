function MiniIcon(props) {
  return (
    <div>
      <img src={props.logo} alt={props.alt} className="mini-icon"></img>
      <div>{props.alt}</div>
    </div>
  );
}

export default MiniIcon;