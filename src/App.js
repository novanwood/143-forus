import { useEffect, useState } from 'react';
import './App.css';
import logo from './img/logo.png'

function App() {
  const [dataAnggota, setDataAnggota] = useState()

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      console.log(data)
      setDataAnggota(data)
    }
    getData()
  }, [setDataAnggota])

  return (
    <div className='min-h-screen p-[5vh]'>
      <div className='flex justify-center text-8xl mb-10'>
        <img src={logo} alt="" className='w-1/2 xl:w-1/6' />
      </div>
      {dataAnggota?.map(item => (
        <div className='flex justify-center text-2xl my-2' key={item.id}>
          {item.email}
        </div>
      ))}
    </div>
  );
}

export default App;
