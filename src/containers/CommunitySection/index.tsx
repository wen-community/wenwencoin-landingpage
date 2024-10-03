import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { AddLocation, CountUp, NextLink } from '@/components'
import { MapComponent } from '@/components/Map/OpenStreetMap'
import { MIN_WEN_AMOUNT } from '@/constants'
import { usePhantomWallet } from '@/contexts/PhantomWalletContext'
import { supabase } from '@/services/supabase'
import { IUser } from '@/types'

const CommunitySection = () => {
  const {
    connected,
    isEligible,
    connect,
    // totalHolders,
    fetchTotalHolders
  } = usePhantomWallet()

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

  useEffect(() => {
    const fetchData = async () => {
      await fetchTotalHolders()
    }
    fetchData()
  }, [fetchTotalHolders])

  return (
    <section id="community" className="flex flex-col gap-10 py-28 lg:flex-row">
      {/* Left Section: Content */}
      <div className="flex flex-col gap-4 lg:w-1/2">
        <h2 className="text-4xl font-bold">Join the Community</h2>
        <div className="flex max-w-screen-sm flex-col gap-8 font-semibold">
          {connected ? (
            <>
              {isEligible ? (
                <button
                  onClick={() => setShowForm(true)}
                  className="w-max rounded-lg border bg-black px-5 py-2.5 font-medium text-white transition-colors hover:border-black hover:bg-white hover:text-black disabled:opacity-50"
                  type="button"
                  disabled={showForm}
                >
                  Add My Location
                </button>
              ) : (
                <div className="flex flex-col gap-3">
                  <h2 className="font-semibold">
                    You need {MIN_WEN_AMOUNT.toLocaleString()} WEN to join the
                    community.
                  </h2>
                  <NextLink href="https://jup.ag/swap/USDC-WEN" target="_blank">
                    Buy Now
                  </NextLink>
                </div>
              )}
            </>
          ) : (
            <button
              className="w-max rounded-lg border bg-black px-5 py-2.5 font-medium text-white transition-colors hover:border-black hover:bg-white hover:text-black"
              onClick={connect}
            >
              Connect to Phantom Wallet
            </button>
          )}
        </div>
        <div className="flex flex-col gap-6 pt-7 md:flex-row">
          <div className="flex flex-col justify-between gap-2">
            <h2 className="flex text-4xl font-bold">
              <CountUp end={286455} />
            </h2>
            <p>Worldwide Members</p>
          </div>
        </div>
      </div>

      {/* Right Section: Map and Add Location */}
      <div className="flex flex-col gap-10">
        <AddLocation
          fetchMarkers={fetchMarkers}
          showForm={showForm}
          setShowForm={setShowForm}
        />
        <div className="relative h-[400px] overflow-hidden lg:w-[600px]">
          <MapComponent users={users} />
        </div>
      </div>
    </section>
  )
}

export default CommunitySection
