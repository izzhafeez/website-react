const Img = ({ src, className }) => {
  return <img
    src={`img/${src}`}
    className={className}
  />;
}

export default Img;