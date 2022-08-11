import React, { FC } from 'react'
import { Heart, HeartFill } from 'react-bootstrap-icons'

type Props = {
  isHover: boolean
  isFavorite: boolean
  onAddToFavorite: () => void
  onRemoveFromFavorite: () => void
}
export const FavoritesIcon: FC<Props> = ({
  isFavorite,
  isHover,
  onAddToFavorite,
  onRemoveFromFavorite,
}) => (
  <>
    {isFavorite ? (
      <span
        style={{
          position: 'absolute',
          content: '',
          top: 8,
          right: 8,
          cursor: 'pointer',
        }}
        tabIndex={0}
        onClick={onRemoveFromFavorite}
        title='Remove from Favorites'
      >
        {/*@ts-ignore-next-line*/}
        <HeartFill
          size={28}
          style={{ fill: '#dc3545' }}
        />
      </span>
    ) : !isFavorite && isHover ? (
      <span
        style={{
          position: 'absolute',
          content: '',
          top: 8,
          right: 8,
          cursor: 'pointer',
        }}
        tabIndex={0}
        onClick={onAddToFavorite}
        title='Add to Favorites'
      >
        {/*@ts-ignore-next-line*/}
        <Heart
          size={28}
          style={{ fill: '#dc3545' }}
        />
      </span>
    ) : null}
  </>
)
