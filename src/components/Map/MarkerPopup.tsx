import Image from 'next/image'
import Link from 'next/link'

import { Popup } from 'react-leaflet'

import { IUser } from '@/types'

import { TwitterV2 } from '../icons'
import ExternalLink from '../icons/ExternalLink'

const MarkerPopup = ({ user }: { user: IUser }) => (
  <Popup>
    {user.twitter_name ? (
      <div className="flex w-40 flex-col gap-2 px-3 py-2 text-white">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.webp"
            alt="avatar"
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="text-sm font-bold">{user.username}</span>
        </div>
        <Link
          href={`https://x.com/{${user.twitter_name}}`}
          target="_blank"
          className="flex items-center gap-1 text-xs"
        >
          <TwitterV2 />
          {user.twitter_name}
          <ExternalLink className="-translate-y-0.5" />
        </Link>
      </div>
    ) : (
      <div className="flex w-40 flex-col gap-2 px-3 py-2 text-white">
        <span className="text-sm font-bold">{user.username}</span>
        <span className="flex items-center gap-1 text-xs text-white/60">
          <TwitterV2 /> N/A
        </span>
      </div>
    )}
  </Popup>
)

export default MarkerPopup
