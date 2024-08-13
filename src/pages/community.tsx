import { useState } from 'react'

import { AddLocation, HandHeart } from '@/components'
import { MapComponent } from '@/components/Map/OpenStreetMap'

const JoinCommunity = () => {
  const [showForm, setShowForm] = useState<boolean>(false)

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-12 py-10">
        <div className="flex flex-col gap-5">
          <h1 className="pr-10 text-10 font-bold leading-10">
            Join the community
          </h1>
          <button
            onClick={() => setShowForm(true)}
            className="hidden w-max rounded-2.5 bg-black px-5 py-2.5 font-medium text-white disabled:opacity-50 md:block"
            type="button"
            disabled={showForm}
          >
            Add my location
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="flex flex-col gap-6 text-5xl font-semibold md:flex-row md:items-center">
            <HandHeart /> 280,000+
          </h2>
          <p className="text-lg">Holders Worldwide</p>
        </div>
      </div>
      <AddLocation showForm={showForm} setShowForm={setShowForm} />
      <section className="aspect-21/9 gap-8 py-12 md:py-16">
        <MapComponent />
      </section>
    </>
  )
}

export default JoinCommunity
