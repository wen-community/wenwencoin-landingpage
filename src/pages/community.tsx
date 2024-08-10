import { useState } from 'react'

import { AddLocation, HandHeart } from '@/components'
import { MapComponent } from '@/components/Map/OpenStreetMap'

const JoinCommunity = () => {
  const [showForm, setShowForm] = useState<boolean>(false)

  return (
    <>
      <div className="flex items-center justify-between py-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-10 font-bold">Join the community</h1>
          <button
            onClick={() => setShowForm(true)}
            className="w-max rounded-2.5 bg-black px-5 py-2.5 font-medium text-white disabled:opacity-50"
            type="button"
            disabled={showForm}
          >
            Add my location
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="flex items-center gap-6 text-4xl font-semibold">
            <HandHeart /> 280,000+
          </h2>
          <p>Holders Worldwide</p>
        </div>
      </div>
      <AddLocation showForm={showForm} setShowForm={setShowForm} />
      <section className="aspect-21/9 gap-8 py-16">
        <MapComponent />
      </section>
    </>
  )
}

export default JoinCommunity
