
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultsCharts from './components/ResultsChart/ResultsCharts'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'

const pricingPromise = fetch('priceingOptions.json').then(res => res.json());

const marksPromise = axios.get('marksData.json');

function App() {
  

  return (
    <>
     <header>
  <Navbar></Navbar>
   {/* <DaisyNav></DaisyNav> */}
     </header>
     <main>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>
       
       <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <MarksChart marksPromise={marksPromise}></MarksChart>
       </Suspense>
      
      
      <ResultsCharts></ResultsCharts>
     </main>
    </>
  )
}

export default App
