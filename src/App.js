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
    const localItems = localStorage.getItem(`${pagination.page}`);
    const localTotalPages = localStorage.getItem("totalPages");
    const prevtime = localStorage.getItem("fetchtime");
    const curtime = new Date().getTime();
    if (
      localItems &&
      localTotalPages &&
      prevtime &&
      curtime - prevtime <= 10000
    ) {
      // I set the updating interval to 10 secs for easy check, you could change;
      //&&localTotalPages===totalPages   not sure if we need to check either it keep the same or not.
      setItems(JSON.parse(localItems));
      setTotalPages(localTotalPages);
      setLoaded(true);
      console.log("still here");
    } else {
      let diff = curtime - prevtime;
      if (prevtime && diff > 10000) {
        localStorage.clear();
        console.log(diff);
      }
      //  console.log(diff);*/
      async function fetchItems() {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=767a17491866d99d6e9e4da2bd8f8507&language=en-US&page=${
            pagination.page
          }`
        );

        const items = await data.json();
        setTotalPages(items.total_pages);
        setItems([...items.results]);
        localStorage.setItem(
          `${pagination.page}`,
          JSON.stringify(items.results)
        );
        localStorage.setItem("totalPages", items.total_pages);
        localStorage.setItem(`fetchtime`, new Date().getTime());
        console.log("has changed");
      }
      fetchItems();
      setLoaded(true);
    }
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
        <Navigation likeList={likeList} blockList={blockList} />
        <Switch>
          <Route exact path="/">
            <Home items={items} />
          </Route>
          <Route exact path="/movie">
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
            />
          </Route>
          <Route path="/like">
            <LikeList
              likeList={likeList}
              setLikeList={setLikeList}
              addBlock={addBlock}
            />
          </Route>
          <Route path="/block">
            <BlockList
              blockList={blockList}
              setBlockList={setBlockList}
              addLike={addLike}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
