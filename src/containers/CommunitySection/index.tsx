import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { AddLocation, NextLink } from '@/components'
import { MapComponent } from '@/components/Map/OpenStreetMap'
import { supabase } from '@/services/supabase'
import { IUser } from '@/types'

const CommunitySection = () => {
  const [showForm, setShowForm] = useState<boolean>(false)
  const [users, setUsers] = useState<IUser[]>([])

  const fetchMarkers = useCallback(async () => {
    const { data, error } = await supabase.from('users').select('*')
    if (error) {
      toast.error(error.message)
    } else {
      setUsers(data)
    }
  }, [])

  useEffect(() => {
    fetchMarkers()
  }, [fetchMarkers])

  return (
    <section id="community" className="flex flex-col gap-10 py-4">
      {/* Left Section: Content */}
      <div className="flex flex-col gap-4 lg:w-1/2">
        <h2 className="text-4xl font-bold">Join the Community</h2>
        <div className="flex max-w-screen-sm flex-col gap-8 font-semibold">
          <NextLink href="/community">Join the Community</NextLink>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <AddLocation
          fetchMarkers={fetchMarkers}
          showForm={showForm}
          setShowForm={setShowForm}
        />
        <div className="relative mt-6 h-[600px] w-full overflow-hidden">
          <MapComponent users={users} />
        </div>
      </div>
    </section>
  )
}

export default CommunitySection
