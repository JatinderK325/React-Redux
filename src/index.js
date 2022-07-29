import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);

// Now app component and all its child components and the child of the child components will have access to this redux store. For more info, refer notebook section-18 topic- providing the store
