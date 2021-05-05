import React from "react";
import { FormSpy } from "react-final-form";

class AutoSave extends React.Component {
  static defaultProps = {
    debounced: [],
  };
  constructor(props) {
    super(props);
    this.state = { values: props.values, submitting: false };
  }

  componentDidUpdate() {
    const { values, debounce, debounced } = this.props;
    const debouncedValues = {};
    const immediateValues = {};

    Object.keys(values).forEach((key) => {
      if (~debounced.indexOf(key)) {
        debouncedValues[key] = values[key];
      } else {
        immediateValues[key] = values[key];
      }
    });
    if (Object.keys(immediateValues).length) {
      this.save(immediateValues);
    }
    if (Object.keys(debouncedValues).length) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.save(debouncedValues);
      }, debounce);
    }
  }

  save = async (values) => {
    // console.log("values", values);
    if (this.promise) {
      await this.promise;
    }
    const { save } = this.props;

    const changedValues = Object.keys(values).reduce((result, key) => {
      if (values[key] !== this.state.values[key]) {
        result[key] = values[key];
      }
      return result;
    }, {});
    if (Object.keys(changedValues).length) {
      // values have changed
      this.setState(
        (state) => ({
          submitting: true,
          values: { ...state.values, ...changedValues },
        }),
        async () => {
          this.promise = save({ ...this.state.values, ...changedValues });
          await this.promise;
          delete this.promise;
          this.setState({ submitting: false });
        }
      );
    }
  };

  render() {
    // This component doesn't have to render anything, but it can render
    // submitting state.
    return null;
  }
}

// Make a HOC
// This is not the only way to accomplish auto-save, but it does let us:
// - Use built-in React lifecycle methods to listen for changes
// - Maintain state of when we are submitting
// - Render a message when submitting
// - Pass in debounce and save props nicely
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <FormSpy {...props} subscription={{ values: true }} component={AutoSave} />
);
