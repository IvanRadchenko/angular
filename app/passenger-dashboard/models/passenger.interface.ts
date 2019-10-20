export interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  children: Children[] | null,
}


export interface Children {
  name: string,
  age: number
}
