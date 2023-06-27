import 'server-only'

export async function getData() {
  const res = await fetch('https://dummy.restapiexample.com/api/v1/employees', {
    headers: {
      authorization: process.env.API_KEY,
    },
  })

  return res.json()
}
