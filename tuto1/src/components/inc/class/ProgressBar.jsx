import React, { Component } from "react";

 class ProgressBar extends Component {
  render() {
    const { count, btnColor } = this.props;
    return (
      <div className="my-4">
        <div className="text-left">
          <span>{count}%</span>
          <div className="progress">
            <div
              className={`progress-bar bg-${btnColor}`}
              role="progressbar"
              style={{ width: `${count}%` }}
              aria-valuenow={{ count }}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
export default React.memo(ProgressBar);
