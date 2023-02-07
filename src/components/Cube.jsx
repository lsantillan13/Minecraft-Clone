import { useBox } from '@react-three/cannon'
import * as textures from '../images/textures.js'
import { useState } from 'react'
import { useStore } from '../hooks/useStore.js'

export const Cube = ({ id, position, texture }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [removeCube] = useStore(state => [state.removeCube])
  const [ref] = useBox(() => ({
    type: 'static',
    position
  }))

  const activeTexture = textures[texture + 'Texture']

  return (
    <mesh
      onPointerMove={(e) => {
        e.stopPropagation()
        setIsHovered(true)
      }}
      onPointerOut={(e) => {
        e.stopPropagation()
        setIsHovered(false)
      }}
      ref={ref}
      onClick={(e) => {
        e.stopPropagation()
        if (e.altKey) {
          removeCube(id)
        }
      }}
    >
      <boxGeometry attach='geometry' />
      <meshStandardMaterial
        map={activeTexture}
        attach='material'
        color={isHovered ? 'grey' : 'white'}
        transparent
      />
    </mesh>
  )
}
