import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { AddLocation, CountUp, NextLink } from '@/components'
import { MapComponent } from '@/components/Map/OpenStreetMap'
import { HOLDERS_WORLDWIDE, MIN_WEN_AMOUNT } from '@/constants'
import { usePhantomWallet } from '@/contexts/PhantomWalletContext'
import { supabase } from '@/services/supabase'
import { IUser } from '@/types'

const JoinCommunity = () => {
  const { connected, isEligible, connect } = usePhantomWallet()

  const [showForm, setShowForm] = useState<boolean>(false)

  const [users, setUsers] = useState<IUser[]>([])

  const fetchMarkers = useCallback(async () => {
    const { data, error } = await supabase.from('users').select('*')
    if (error) toast.error(error.message)
    else setUsers(data)
  }, [])

  useEffect(() => {
    fetchMarkers()
  }, [fetchMarkers])

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-12 py-10">
        <div className="flex flex-col gap-5">
          <h1 className="pr-10 text-10 font-bold leading-10">
            Join the community
          </h1>
          {connected ? (
            <>
              {isEligible ? (
                <button
                  onClick={() => setShowForm(true)}
                  className="w-max rounded-2.5 border bg-black px-5 py-2.5 font-medium text-white transition-colors hover:border-black hover:bg-white hover:text-black disabled:opacity-50"
                  type="button"
                  disabled={showForm}
                >
                  Add my location
                </button>
              ) : (
                <div className="flex flex-col gap-3">
                  <h2 className="font-semibold">
                    You need {MIN_WEN_AMOUNT.toLocaleString()} WEN to join the
                    community
                  </h2>
                  <NextLink
                    href={'https://jup.ag/swap/USDC-WEN'}
                    target="_blank"
                  >
                    Buy Now
                  </NextLink>
                </div>
              )}
            </>
          ) : (
            <button
              className="w-max rounded-2.5 border bg-black px-5 py-2.5 font-medium text-white transition-colors hover:border-black hover:bg-white hover:text-black"
              onClick={connect}
            >
              Connect to Phantom Wallet
            </button>
          )}
        </div>
        <div className="flex flex-col items-end gap-2 rounded-lg bg-black/70 px-5 py-3 text-white">
          <h2 className="relative flex items-center gap-2 text-5xl font-semibold">
            <span className="relative top-0 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
            </span>
            <span className="relative flex text-2xl">
              <CountUp end={HOLDERS_WORLDWIDE} />
            </span>
          </h2>
          <p className="text-base">Holders Worldwide</p>
        </div>
      </div>
      <div>
        <AddLocation
          fetchMarkers={fetchMarkers}
          showForm={showForm}
          setShowForm={setShowForm}
        />
      </div>
      <section className="min-h-[50%] gap-8 py-12 md:py-16">
        <MapComponent users={users} enableInteraction={true} />
      </section>
    </>
  )
}

export default JoinCommunity
