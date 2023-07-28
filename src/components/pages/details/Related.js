import allData from "data";
import ItemsFactory from "./ItemsFactory";

class Related {
  constructor(relatedItems) {
    this.relatedItems = relatedItems;
    this.items = this.getItems();
  }

  getItems() {
    return this.relatedItems
      .sort((a, b) => a.type.localeCompare(b.type))
      .map(related => {
        const data = allData[related.category].data[related.type].data;
        const itemsDict = related.items.reduce((map, item) => {
          map[item] = data[item];
          return map;
        }, {});
        return ItemsFactory.getConstructor(related.category)({
          type: related.type,
          data: itemsDict
        }).getPreview({
          withReturnButton: false,
          withMap: false
        });
      });
  }
};

export default Related;