import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { system } from '@chakra-ui/react/preset'
import ToDoList from './pages/List/index.tsx'
import Player from './pages/Player/index.tsx'
import Home from './pages/Home/index.tsx'


const route = createBrowserRouter([{path:'/', element: <Home></Home>}, {path:'/ToDoList', element: <ToDoList></ToDoList>}, {path:"Live", element:<Player></Player>}])

createRoot(document.getElementById('root')!).render(
  <ChakraProvider value={system}>
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>
  </ChakraProvider>
)
