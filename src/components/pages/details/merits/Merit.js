import Item from '../Item';
import './style.scss';

class Merit extends Item {
  constructor(fields) {
    super({
      category: 'merits',
      ...fields,
    })
  }
}

export default Merit;