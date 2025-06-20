import React from 'react';
import { Route, Routes,} from 'react-router-dom';

import App from './routes/app/app';
import Experiment from './routes/app/experiment';
import Analytics from './routes/app/analytics';
import Log from './routes/app/log';

const Index = () => <Routes path="/" key='index'>
      <Route path="/app" element={<App />} key={'app'} 
        children={[  
					<Route path="/app/experiment" element={<Experiment />} key={'experiment'} />,
					<Route path="/app/analytics" element={<Analytics />} key={'analytics'} />,
					<Route path="/app/log" element={<Log />} key={'log'} />
            ]}/>,
    </Routes>

export default Index;
