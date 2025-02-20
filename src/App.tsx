import './assets/css/Index.css'
import 'animate.css';
import {useMemo } from 'react';
import useWebXPanel from './hooks/useWebXPanel';

import {createHashRouter, RouterProvider} from 'react-router-dom'

//css
import "../src/assets/css/index.css"


// Dashboard
import Home from './structure/dashboard/HomeDashboard';


// Pages -------------------------------------------------------------------------






// Tools
import ScreenSize from './structure/tools/ScreenSize';
import imageBackground from "../src/assets/images/backgrounds/mark-de-jong-BmhoEBTXKxI-unsplash.jpg"
        
        
   

function App() {

  const router = createHashRouter ([
  {
    path: '/',
    element: <Home />
  },

  

  //------------------------------------ Tools


  {
    path: '/ScreenSize',
    element: <ScreenSize />
  },

])


  
  const webXPanelConfig = useMemo(() => ({
    ipId: '0x03',
    host: '0.0.0.0',
    roomId: '',
    authToken: ''
  }), []); // Dependencies array is empty, so this object is created only once

  useWebXPanel(webXPanelConfig);

  

  
  return (
    <div className='project_container'>
      <RouterProvider router={router} />
      <img className="imageApp" src={imageBackground} />
    </div>
  );
}

export default App
