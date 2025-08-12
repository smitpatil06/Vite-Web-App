import './App.css'
import Content from './comp/content'
import Title from './comp/title'
function App() {
  return (
    <div style={{ backgroundColor: '#f3e8c6' }} className='absolute h-screen w-full z-0'>
      <div className='grid grid-cols-10 z-10 m-2'>
        <div className='col-span-2'></div>
        <div className='col-span-6 z-20'>
          <Title />
          <Content />
          </div>
        <div className='col-span-2'></div>
      </div>
    </div>
  )
}

export default App
