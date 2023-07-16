import './style.scss';

const MicroIcon = ({ imgPath, type }) => {
  return <div className='col-auto card-header'>
    <img
      src={'/img/'+imgPath}
      alt={type}
      className='rounded-circle border border-dark bg-white micro-icon'
    />
  </div>;
};

export default MicroIcon;