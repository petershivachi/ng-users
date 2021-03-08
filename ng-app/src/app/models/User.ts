export default interface User {
  firstName: string,
  lastName: string,
  age: number,
  address: {
    street: string,
    city: string,
    estate: string
  }
}