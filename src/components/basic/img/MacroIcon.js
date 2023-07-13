import './style.scss';

const MacroIcon = ({ imgPath, type }) => {
  return <div className='container my-4'>
    <div className='justify-content-center row'>
      <div className='col-auto'>
        {/* col-auto is to center the image */}
        <div
          className='rounded-circle border border-5 border-success bg-white'
        >
          <img
            src={'/img/png/'+imgPath}
            alt={type}
            className='rounded-circle macro-icon col'
          />
        </div>
      </div>
    </div>
  </div>;
};

export default MacroIcon;