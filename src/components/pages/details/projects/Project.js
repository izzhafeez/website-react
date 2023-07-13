import Item from '../Item';
import './style.scss';

class Project extends Item {
  getClassNames() {
    let classNames = 'projects container preview border border-info row align-items-center';
    if (this.isStarred()) {
      classNames += ' starred';
    }
    return classNames;
  }

  getBackLink(type) {
    return `/projects/${type}`;
  }
};

export default Project;