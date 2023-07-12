import Item from '../Item';
import './style.scss';

class Merit extends Item {
  getClassNames() {
    let classNames = 'container preview border border-info merit row align-items-center';
    if (this.isStarred()) {
      classNames += ' starred';
    }
    return classNames;
  }

  getBackLink(type) {
    return `/merits/${type}`;
  }
}

export default Merit;