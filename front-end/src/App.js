import { useState, useEffect } from 'react'
import Header from './Components/Header'
import WorkoutDays from './Components/WorkoutDays'


function App() {
  const localApi = 'http://localhost:9000/days'
  const remoteApi = 'https://kmw-api.wl.r.appspot.com/days'
  const api = remoteApi

  const [days, setDays] = useState([])

  useEffect(() => {
    const getDays = async () => {
      const daysFromServer = await fetchDays()
      setDays(daysFromServer)
    }

    getDays()
  }, [])

  const fetchDays = async () => {
    const res = await fetch(api)
    const data = res.json()
    return data
  }

  const fetchDay = async (id) => {
    const res = await fetch(`${api}/${id}`)
    const data = await res.json()
    return data
  }

  const onToggle = async (id) => {
    const dayToToggle = await fetchDay(id)
    const updDay = { ...dayToToggle, enroll: !dayToToggle.enroll }
    
    const res = await fetch(`${api}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updDay)
    })

    const data = await res.json()
    //setDays(days.map((day) => day.id === id ? { ...day, enroll: data[id].enroll} : day))
    setDays(data)
  }

  return (
    <div className='container'>
      <Header />
      {days.length > 1 ? <WorkoutDays days={days} onToggle={onToggle} /> : 'No Data'}
    </div>
  );
}

export default App;
