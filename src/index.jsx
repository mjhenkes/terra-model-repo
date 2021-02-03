import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationBase from '@cerner/terra-application';

const Index = () => (
  <ApplicationBase>
    <div>hi mom</div>
  </ApplicationBase>
);

ReactDOM.render(<Index />, document.getElementById('root'));
