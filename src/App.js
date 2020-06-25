import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './component/Navigation.js';
import LikeList from './component/LikeList.js';
import MovieList from './component/MovieList.js';
import BlockList from './component/BlockList.js'
import Home from './component/Home.js'

function App() {

  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    prev: true,
    next: false
  });

  const [likeList, setLikeList] = useState([]);
  const [blockList, setBlockList] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=767a17491866d99d6e9e4da2bd8f8507&language=en-US&page=${pagination.page}`
      );
  
      const items = await data.json();
      setItems([...items.results]);
    }
    fetchItems();
  }, [pagination.page]); 

  const handlePrev = () => {
    setPagination({
      page: pagination.page - 1,
      prev: pagination.page - 1 !== 1 ? false : true
    })
  }

  const handleNext = () => {
    setPagination({
      page: pagination.page + 1,
      next: pagination.page + 1 !== 373 ? false : true
    })
  }

  const addLike = item => {
    if (likeList.find(movie => movie.id === item.id) === undefined) {
      setLikeList([...likeList, item])
    }
  }

  const addBlock = item => {
    if (blockList.find(movie => movie.id === item.id) === undefined) {
      setBlockList([...blockList, item])
    }
  }

  let blockId = new Set(blockList.map(item => { return item.id }))
  let filterItems = items.filter(item => !blockId.has(item.id))

  return (
    <Router>
      <div className='App'>
        <Navigation likeList={likeList} blockList={blockList} />
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/movie'>
            <MovieList
              pagination={pagination}
              likeList={likeList}
              blockList={blockList}
              handlePrev={handlePrev}
              handleNext={handleNext}
              addLike={addLike}
              addBlock={addBlock}
              filterItems={filterItems}
            />
          </Route>
          <Route path='/like'><LikeList likeList={likeList} /></Route>
          <Route path='/block'><BlockList blockList={blockList} /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


