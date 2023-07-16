import Item from '../Item';
import './style.scss';

class Project extends Item {
  constructor(fields) {
    super({
      category: 'projects',
      ...fields,
    })
  }
};

export default Project;