import './style.scss';

const MacroIcon = ({ imgPath, category, key }) => {
  return <div className='container my-4'>
    <div className='justify-content-center row'>
      <div className='col-auto'>
        {/* col-auto is to center the image */}
        <div
          className={'icon-container rounded-circle bg-white ' + category}
        >
          <img
            src={'/img/'+imgPath}
            alt={key}
            className='rounded-circle macro-icon col'
          />
        </div>
      </div>
    </div>
  </div>;
};

export default MacroIcon;