import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Button from '../../../shared/buttons'
import { ActorConstructor } from '../constructor'
import { deleteActor } from '../../../../sagas/actors/actions'

export const ShopItem = ({ actor }) => {
  const dispatch = useDispatch()
  const [editMode, setEditMode] = useState(false)

  const content = !editMode ? (
    <div>
      <div>{actor.name}</div>
      <div>{actor.bio}</div>
      <div>
        <Button color="primary" text="edit" onClick={() => setEditMode(true)} />
        <Button color="secondary" text="delete" onClick={() => dispatch(deleteActor(actor._id))} />
      </div>
    </div>
  ) : (
    <ActorConstructor actor={actor} setEditMode={setEditMode} mode="CHANGE" />
  )

  return content
}