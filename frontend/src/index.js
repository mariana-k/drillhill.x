import React from 'react';
import ReactDOM from 'react-dom';
import { registerLicense } from '@syncfusion/ej2-base';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

registerLicense(process.env.REACT_APP_SYNCFUSION_LICENSE_KEY);

ReactDOM.render(
    <React.StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
