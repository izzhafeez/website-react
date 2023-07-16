import './style.scss';

const MegaIcon = ({ imgPath, type }) => {
  return <div className='container my-4'>
    <div className='justify-content-center row'>
      <div className='col-auto'>
        {/* col-auto is to center the image */}
        <div
          className='border border-5 border-success bg-white'
        >
          <img
            src={'/img/'+imgPath}
            alt={type}
            className='mega-icon col'
          />
        </div>
      </div>
    </div>
  </div>;
};

export default MegaIcon;