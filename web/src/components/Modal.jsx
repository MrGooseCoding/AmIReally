// App.jsx
import React, { useState } from 'react';
import './../App.css';

function Modal(props) {
  return (
		<div className="Modal">
			{props.children}
		</div>
  );
}

export default Modal;
