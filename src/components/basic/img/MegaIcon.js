import './style.scss';

const MegaIcon = ({ imgPath, category, withMargin=true }) => {
  return <div className={`container ${withMargin && 'my-4'}`}>
    <div className='justify-content-center row'>
      <div className='col-auto'>
        {/* col-auto is to center the image */}
        <div
          className={`bg-white icon-container ${category}`}
        >
          <img
            src={'/img/'+imgPath}
            alt={category}
            className='mega-icon col'
          />
        </div>
      </div>
    </div>
  </div>;
};

export default MegaIcon;