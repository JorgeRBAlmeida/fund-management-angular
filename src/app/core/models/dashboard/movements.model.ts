export interface Movements {
  apply: MovType,
  bailout: MovType
}

export interface MovType {
  first: number,
  second: number
}
