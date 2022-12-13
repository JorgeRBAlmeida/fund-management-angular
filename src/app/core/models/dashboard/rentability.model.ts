export interface Rentability {
  fund: RentDate,
  benchmark: RentDate
}

export interface RentDate {
  day: number,
  mouth: number,
  year: number
}
