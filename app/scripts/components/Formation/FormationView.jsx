import React, {Component} from 'react'
import Formation from './Formation'

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var data = this.props.data;
    return (
      <div>
        {
          data.map(function(result, index) {
            return <Formation key={index} formationName={result.name} imageName={result.imageName} />;
          }
        )}
      </div>
    );
  }
}
