import { lazy, Suspense } from 'react'

export function lazyLoadRoutes({ componentName }: { componentName: string }): JSX.Element {
  const LazyElement = lazy(() => import(`../pages/${componentName}/index.tsx`))

  return (
    <Suspense fallback='Loading...'>
      <LazyElement />
    </Suspense>
  )
}