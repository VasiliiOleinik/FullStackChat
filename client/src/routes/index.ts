import { useRoutes } from "react-router-dom"
import { lazyLoadRoutes } from "./LazyLoadRoutes"

export const RouterElement = () => {
  const routes = [
    {
      path: '/',
      element: lazyLoadRoutes({componentName: 'Main', withLayout: true})
    },
    {
      path: '/todos',
      element: lazyLoadRoutes({componentName: 'ToDo', withLayout: true})
    },
    {
      path: '/login',
      element: lazyLoadRoutes({componentName: 'Login'})
    },
    {
      path: '/sign-up',
      element: lazyLoadRoutes({componentName: 'SignUp'})
    },
    {
      path: '/403',
      element: lazyLoadRoutes({componentName: 'Error403'})
    },
    {
      path: '*',
      element: lazyLoadRoutes({componentName: 'Error404'})
    }
  ]
  
  return useRoutes(routes)
}