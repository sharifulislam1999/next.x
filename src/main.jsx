import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import FirebaseProvider from './firebase/FirebaseProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
   <FirebaseProvider>
   <RouterProvider router={Routes}>
    </RouterProvider>
   </FirebaseProvider>
  
)
