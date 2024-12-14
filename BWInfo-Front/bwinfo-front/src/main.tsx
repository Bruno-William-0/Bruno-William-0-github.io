import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { defaultSystem } from "@chakra-ui/react"
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'


const router = createBrowserRouter([ {path: '/', element: <Home />}])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <ChakraProvider value={defaultSystem}>
    <RouterProvider router={router} />
   </ChakraProvider>
  </StrictMode>,
)
