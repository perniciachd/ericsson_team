import { RouterProvider } from 'react-router';
import './App.css'
import router from './route';
import { UserProvider } from './UserProvider';
import { Provider } from 'react-redux';
import { store } from "./store";
 './store';
function App() {

  return(
    <>
    <Provider store={store}>
      <UserProvider>
        <RouterProvider router={router}>
        </RouterProvider>
      </UserProvider>
    </Provider>
    </>
  )
}
export default App;