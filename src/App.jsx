import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Header,Feed,SearchResult,VideoDetails} from './components'
import {AppContext} from './context/contextApi'

import './App.css'

function App() {
  

  return (
    <AppContext>
    <BrowserRouter>
        <div className="flex flex-col h-full w-[100vw] overflow-hidden">
            <Header />
            <Routes>
                <Route path="/" exact element={<Feed />} />
                <Route
                    path="/searchResult/:searchQuery"
                    element={<SearchResult />}
                />
                <Route path="/video/:id" element={<VideoDetails />} />
            </Routes>
        </div>
    </BrowserRouter>
</AppContext>
  )
}

export default App
