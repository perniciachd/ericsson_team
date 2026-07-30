import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './Card.tsx'
import Greeting from './Greeting.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    {/* <Card title="Staffs" count={10} value={10} /> */}
    {/* <Card title="Students" count={70}> */}
    <App></App>
    {/* <Greeting></Greeting> */}
  </StrictMode>,
)
