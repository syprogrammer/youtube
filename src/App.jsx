import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Header} from './components'
import {Feed,SearchResult,VideoDetails} from './pages'
import {AppContext} from './context/contextApi'

// Created by Syprogrammer Github:- https://github.com/syprogrammer


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
