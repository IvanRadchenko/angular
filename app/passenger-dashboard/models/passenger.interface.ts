export interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  children: Children[] | null,
  baggage: string,
  checkedInDate?: number,
}


export interface Children {
  name: string,
  age: number
}
