import { getData } from '../lib/data.js';

export default async function ExampleServerComponent() {
  const fetchResult = await getData();
  return (
    <>
      <h2>Example Server Component</h2>
      <ul>
        {fetchResult.data.map((emp) => {
          console.log(emp)
          return (
            <li key={emp.id}>{emp.employee_name}</li>
          )
        })}
      </ul>
    </> 
  )
}
