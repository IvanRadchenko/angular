export interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  children: Children[] | null,
  baggage: string,
}


export interface Children {
  name: string,
  age: number
}
