import {
  grassImg,
  woodImg,
  dirtImg,
  glassImg,
  logImg
} from './images.js';

import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'

const grassTexture = new TextureLoader().load(grassImg)
const dirtTexture = new TextureLoader().load(dirtImg)
const woodTexture = new TextureLoader().load(woodImg)
const glassTexture = new TextureLoader().load(glassImg)
const logTexture = new TextureLoader().load(logImg)

const groundTexture = new TextureLoader().load(grassImg)

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

groundTexture.magFilter = NearestFilter
grassTexture.magFilter = NearestFilter
dirtTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter

export {
  groundTexture,
  grassTexture,
  dirtTexture,
  woodTexture,
  glassTexture,
  logTexture
}