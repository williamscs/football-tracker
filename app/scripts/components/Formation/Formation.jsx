import React, {Component} from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
  }
  errorHandler(event) {
      event.target.src='/images/no-image.jpg';
  }
  render() {
    var imageUrl = "/images/" + this.props.imageName;
    var variations = this.props.variations;
    var variationClass = "";
    var numVariations = "";
    if(variations !== null && variations !== undefined && variations.length > 0) {
      variationClass = "variation-exists";
      numVariations += variations.length;
    }
    //imageUrl = this.checkImage(imageUrl);
    return (
      <a className="formation" href="#">
        <div>
          <div className={variationClass}>{numVariations}</div>
          <img className="formation-image" src={imageUrl} onError={this.errorHandler} />
          <div className="formation-name">{this.props.formationName}</div>
        </div>
      </a>
    );
  }
}
