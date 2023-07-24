import { capitalise } from "common/text";
import { Helmet } from "react-helmet";

class Seo {
  constructor({ title, imgPath, category, type, page, description }) {
    this.title = capitalise(title);
    this.imgPath = `/img/${imgPath}`;
    this.description = description.split(/\.$|\.\s/).slice(0, 2).map(text => text + ".").join(' ');
    this.url = `https://www.izzhafeez.com`;
    if (category !== undefined) {
      this.url += `/${category}`;
    }
    if (type !== undefined) {
      this.url += `/${type}`;
    }
    if (page !== undefined) {
      this.url += `/${page}`;
    }
  }

  getHelmet() {
    return <Helmet>
      <title>Izz Hafeez | {this.title}</title>
      <meta name='description' content={this.description}/>
      <meta property="og:title" content={`Izz Hafeez | ${this.title}`}/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content={this.imgPath}/>
      <meta property="og:description" content={this.description}/>
      <meta property="og:url" content={this.url}/>
    </Helmet>
  }
};

export default Seo;