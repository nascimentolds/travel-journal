import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import data from './data.js'

function App() {
  const card = data.map((item, index) => (
      <Card key={item.key}
        {...item} 
        dados={data.length - 1}
        index={index}
      />
  ))

  return (
    <div className='container'>
      <Header />
      <section className='card--list'>{card}</section>
    </div>
  )
}

export default App
