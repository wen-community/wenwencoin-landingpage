import { useCallback, useEffect, useMemo, useState } from 'react'
import { Marker, useMap } from 'react-leaflet'

import { PointFeature } from 'supercluster'
import useSupercluster from 'use-supercluster'

import { IUser } from '@/types'

import { markerIcon, pointIcon } from './MapMarker'

type BBox = [number, number, number, number]

type IClusterProps = IUser & {
  cluster: boolean
  point_count: number
  cluster_id: number
}

const Cluster = ({ users }: { users: IUser[] }) => {
  const [bounds, setBounds] = useState<BBox | undefined>()
  const [zoom, setZoom] = useState(12)
  const map = useMap()

  const updateMap = useCallback(() => {
    console.log('updating')
    const b = map.getBounds()
    setBounds([
      b.getSouthWest().lng,
      b.getSouthWest().lat,
      b.getNorthEast().lng,
      b.getNorthEast().lat
    ])
    setZoom(map.getZoom())
  }, [map])

  useEffect(() => {
    updateMap()
  }, [updateMap])

  useEffect(() => {
    map.on('move', updateMap)
    return () => {
      map.off('move', updateMap)
    }
  }, [map, updateMap])

  const points: PointFeature<IClusterProps>[] = useMemo(
    () =>
      users.map((location) => ({
        type: 'Feature',
        properties: {
          cluster: false,
          point_count: 1,
          cluster_id: location.id,
          ...location
        },
        geometry: {
          type: 'Point',
          coordinates: [parseFloat(location.lat), parseFloat(location.lat)]
        }
      })),
    [users]
  )

  const { clusters, supercluster } = useSupercluster({
    points: points,
    bounds: bounds,
    zoom: zoom,
    options: { radius: 75, maxZoom: 17 }
  })

  return (
    <>
      {clusters.map((cluster) => {
        // every cluster point has coordinates
        const [longitude, latitude] = cluster.geometry.coordinates
        // the point may be either a cluster or a crime point
        const { cluster: isCluster } = cluster.properties
        // we have a cluster to render
        if (isCluster && supercluster) {
          return (
            <Marker
              key={`cluster-${cluster.id}`}
              position={[latitude, longitude]}
              icon={pointIcon(cluster.properties.point_count, 50)}
              eventHandlers={{
                click: () => {
                  const expansionZoom = Math.min(
                    supercluster.getClusterExpansionZoom(cluster.id as number),
                    17
                  )
                  map.setView([latitude, longitude], expansionZoom, {
                    animate: true
                  })
                }
              }}
            />
          )
        }

        // we have a single point (crime) to render
        return (
          <Marker
            key={`crime-${cluster.properties.id}`}
            position={[latitude, longitude]}
            icon={markerIcon(cluster.properties as IUser)}
          />
        )
      })}
    </>
  )
}

export default Cluster
