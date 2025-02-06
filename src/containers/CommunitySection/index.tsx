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

  const handleDeleteUser = async (walletAddress: string) => {
    try {
      const { error } = await supabase.rpc('delete_user_and_city', {
        walletaddress: walletAddress
      })
      if (error) {
        toast.error(error.message)
      } else {
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user.wallet_address !== walletAddress)
        )
        toast.success('Marker deleted successfully')
      }
    } catch (error) {
      if (error) {
        toast.error('Unable to delete marker')
        console.log(error)
      }
    }
  }

  return (
    <section
      id="community"
      className="mt-10 flex flex-col gap-10 overflow-hidden py-10"
    >
      <div className="flex flex-col gap-4 lg:w-1/2">
        <h2 className="text-4xl font-bold">Join the Community</h2>
        <div className="flex max-w-screen-sm flex-col gap-8 font-semibold">
          <NextLink href="/community">Drop my pin</NextLink>
        </div>
        <p>
          To interact with the map and view the community, click Drop my pin.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        <AddLocation
          fetchMarkers={fetchMarkers}
          showForm={showForm}
          setShowForm={setShowForm}
        />
        <div className="relative mt-5 h-[600px] w-full overflow-hidden">
          <MapComponent
            users={users}
            enableInteraction={false}
            showHolders={false}
            onDeleteUser={handleDeleteUser}
          />
        </div>
      </div>
    </section>
  )
}

export default CommunitySection
