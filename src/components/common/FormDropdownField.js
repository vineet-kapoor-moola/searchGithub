import React, { Component } from "react";
import "../../assets/css/common.css";
import M from "materialize-css";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectClass: ""
    };
  }
  componentDidMount() {
    M.AutoInit();
  }

  componentWillMount() {
    this.setState({ selectClass: `input-field ${this.props.className}` });
  }

  createOptions(options) {
    return options.map(({ value, label }) => {
      return (
        <option key={value} value={value}>
          {label}
        </option>
      );
    });
  }

  render() {
    let { handleChange, label, options } = this.props;
    return (
      <div className={this.state.selectClass}>
        <select defaultValue="" onChange={e => handleChange(e.target.value)}>
          <option value="" disabled>
            Choose {label}
          </option>
          {this.createOptions(options)}
        </select>
        <label className="font-size-16">License</label>
      </div>
    );
  }
}

export default Dropdown;
