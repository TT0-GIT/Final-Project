import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./component/Navigation.js";
import LikeList from "./component/LikeList.js";
import MovieList from "./component/MovieList.js";
import BlockList from "./component/BlockList.js";
import Home from "./component/Home.js";

const App = () => {
  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState("");
  const [pagination, setPagination] = useState({
    page: 1,
    prev: true,
    next: false
  });
  const [likeList, setLikeList] = useState([]);
  const [blockList, setBlockList] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchItems() {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=767a17491866d99d6e9e4da2bd8f8507&language=en-US&page=${
          pagination.page
        }`
      );

      const items = await data.json();
      setTotalPages(items.total_pages);
      setItems([...items.results]);
    }
    fetchItems();
    setLoaded(true);
  }, [pagination.page]);

  const addLike = item => {
    setLikeList([...likeList, item]);
  };

  const addBlock = item => {
    setBlockList([...blockList, item]);
    if (likeList.find(movie => movie.id === item.id)) {
      const newLikeList = [...likeList].filter(movie => movie.id !== item.id);
      setLikeList(newLikeList);
    }
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home items={items} />
          </Route>
          <Route exact path="/movie">
          <div> <Navigation likeList={likeList} blockList={blockList} />
            <MovieList
              isLoaded={isLoaded}
              setLoaded={setLoaded}
              items={items}
              setItems={setItems}
              pagination={pagination}
              totalPages={totalPages}
              setPagination={setPagination}
              likeList={likeList}
              blockList={blockList}
              addLike={addLike}
              addBlock={addBlock}
            /></div>
          </Route>
          <Route path="/like">
          <div> <Navigation likeList={likeList} blockList={blockList} />
            <LikeList
              likeList={likeList}
              setLikeList={setLikeList}
              addBlock={addBlock}
            /></div>
          </Route>
          <Route path="/block">
          <div> <Navigation likeList={likeList} blockList={blockList} />
            <BlockList
              blockList={blockList}
              setBlockList={setBlockList}
              addLike={addLike}
            /></div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
