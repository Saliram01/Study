import { CountryContext } from './context/Context'
import Header from './components/Header'
import Country from './components/Country'
import useFetch from './customHooks/useFetch'
import { useEffect, useState } from 'react'
import Loading from './components/Loading'

function App() {
  const current_theme = localStorage.getItem('current_theme');

  let data = useFetch('https://restcountries.com/v3.1/all');
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');
  const [theme, setTheme] = useState(current_theme);

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  },[theme])

  return (
    <CountryContext.Provider value={
      {
        data,
        search, setSearch,
        region, setRegion,
        theme, setTheme
      }}>
      <div className={`${theme}`}>
        <Header/>
        {
          !data ? <Loading/> : <Country/>
        }
      </div>
    </CountryContext.Provider>
  )
}

export default App
