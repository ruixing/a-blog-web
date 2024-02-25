import React from 'react';
import ReactDOM from 'react-dom';

const Page = () => {
  return (
    <>
      <h1 style={{ margin: 0 }}>Hello wold</h1>
      <div style={{ position: 'absolute', width: '100%', bottom: '100px' }}>
        <input style={{ display: 'block' }} />
        <div>page footer</div>
        <div>page footer</div>
        <div>page footer</div>
        <div>page footer</div>
        <div>page footer</div>
      </div>
    </>
  )
}

ReactDOM.render(
  <Page />,
  document.getElementById('content-body')
);