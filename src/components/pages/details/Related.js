import allData from "data";
import ItemsFactory from "./ItemsFactory";

class Related {
  constructor(relatedItems) {
    this.relatedItems = relatedItems;
    this.items = this.getItems();
  }

  getItems() {
    return this.relatedItems.map(related => {
      const data = allData[related.category][related.type];
      const itemsDict = related.items.reduce((map, item) => {
        map[item] = data[item];
        return map;
      }, {});
      return ItemsFactory.getConstructor(related.category)({
        type: related.type,
        data: itemsDict
      }).getPreview({
        withReturnButton: false
      });
    });
  }
};

export default Related;