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
    //imageUrl = this.checkImage(imageUrl);
    return (
      <a className="formation" href="#">
        <div>
          <img className="formation-image" src={imageUrl} onError={this.errorHandler} />
          <div className="formation-name">{this.props.formationName}</div>
        </div>
      </a>
    );
  }
}
