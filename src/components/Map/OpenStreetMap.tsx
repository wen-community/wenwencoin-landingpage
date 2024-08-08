import dynamic from 'next/dynamic'
export const MapComponent = dynamic(() => import('./index'), { ssr: false })
