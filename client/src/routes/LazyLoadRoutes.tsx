import RootLayout from '@/components/RootLayout'
import { Spin } from 'antd'
import { lazy, Suspense } from 'react'

type LazyLoadRoutesProps = {
  componentName: string
  withLayout?: boolean
}

export function lazyLoadRoutes({ componentName, withLayout }: LazyLoadRoutesProps): JSX.Element {
  const LazyElement = lazy(() => import(`../pages/${componentName}/index.tsx`))

  return (
    <Suspense fallback={<Spin size="large" />}>
      {withLayout
        ? <RootLayout><LazyElement /></RootLayout>
        : <LazyElement />
      }
    </Suspense>
  )
}