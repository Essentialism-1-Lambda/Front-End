import React from 'react';

class EditForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        editing: false
      };
      this.name = "";
      this.desc = "";
      this.time = "";
      this.values = "";
    }
  
    render() {
      const { name, desc, time, values,  } = this.props;
      return (
        <div className="card">
          <div className="card-content">
            <div className="card-name">{name}</div>
            <p>
              <span>Project:</span>
              {this.state.editing ? (
                <span className="project-name">{name}</span>
              ) : (
                <input
                  type="text"
                  defaultValue={name}
                  ref={node => {
                    this.newName = node;
                  }}
                />
              )}
            </p>
            <p>
              <span>Description:</span>
              {this.state.editing ? (
                <span className="proj-desc">{desc}</span>
              ) : (
                <input
                  type="text"
                  defaultValue={desc}
                  ref={node => {
                    this.newDesc = node;
                  }}
                />
              )}
            </p>
            <p>
              <span>Time spent:</span>
              {this.state.editing ? (
                <span className="proj-time">{time}</span>
              ) : (
                <select
                  type="text"
                  defaultValue={time}
                  ref={node => {
                    this.newTime = node;
                  }}
                />
              )}
            </p>
            <p>
              <span>Corresponding value:</span>
              {this.state.editing ? (
                <span className="proj-value">{values}</span>
              ) : (
                <select
                  type="text"
                  defaultValue={values}
                  ref={node => {
                    this.newValue= node;
                  }}
                />
              )}
            </p>
            <div align="center">
              <button
                onClick={() => {
                  this.setState({ editing: true });
                }}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      );
    }
  }