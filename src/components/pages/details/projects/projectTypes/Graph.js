import StarScale from "components/basic/text/star/StarScale";
import Project from "../Project";
import MicroIcon from "components/basic/img/MicroIcon";
import MegaIcon from "components/basic/img/MegaIcon";

class Graph extends Project {
  constructor({ complexity, link, ...fields }) {
    super({
      type: 'graphs',
      ...fields
    });
    this.complexity = complexity;
    this.link = link;
  };

  getSubtitle() {
    return this.complexity !== undefined ? <StarScale value={this.complexity}/> : <></>;
  };

  getImage(isBig) {
    if (this.imgPath === undefined) {
      return "";
    }
    if (isBig) {
      return <MegaIcon imgPath={this.getImgPath()} isXl={true} type={this.key}/>
    }
    return <MicroIcon imgPath={this.getImgPath()} type={this.key}/>;
  }

  getFields() {
    return ['complexity', 'link'];
  }
};

export default Graph;