import './style.scss';

const MicroIcon = ({ imgPath, key }) => {
  return <div className='col-auto card-header'>
    <img
      src={'/img/png/'+imgPath}
      alt={key}
      className='rounded-circle border border-dark bg-white micro-icon'
    />
  </div>;
};

export default MicroIcon;