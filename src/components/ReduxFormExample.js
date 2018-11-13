import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';

class ReduxFormExample extends React.Component {
  incomeInput({ input, meta: { touched, error }, ...custom }) {
    const hasError = touched && error !== undefined;
    return (
      <div>
        {hasError && <p error header="Error" content={error} />}
        <input
          error={hasError}
          fluid
          placeholder="income"
          {...input}
          {...custom}
        />
      </div>
    );
  }

  submit() {}

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submit.bind(this))}>
        <Field name="income" component={this.incomeInput} />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default reduxForm({
  form: 'redux-example'
})(ReduxFormExample);
