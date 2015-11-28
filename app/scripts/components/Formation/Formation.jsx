import React, {Component} from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href="#">
        <div>
          <img src={"/images/" + this.props.imageName} />
          <div>{this.props.formationName}</div>
        </div>
      </a>
    );
  }
}
