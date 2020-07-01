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

    setLoaded(false)
    const localItems = localStorage.getItem(`${pagination.page}`);
    const localTotalPages = localStorage.getItem("totalPages");
    const prevtime = localStorage.getItem(`${pagination.page}fetchtime`);
    const curtime = new Date().getTime();

    if (
      localItems &&
      localTotalPages &&
      prevtime &&
      curtime - prevtime <= 300000
    ) {
      setItems(JSON.parse(localItems));
      setTotalPages(localTotalPages);
      setLoaded(true);
    } else {
      let diff = curtime - prevtime;
      if (prevtime && diff > 300000) {
        localStorage.removeItem(`${pagination.page}`);
        localStorage.removeItem(`${pagination.page}fetchtime`)
      }

      async function fetchItems() {
        setLoaded(false)
        // sleep 1 second here, to demo loading spinner and cache performance
        // await sleep(1000); 
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=767a17491866d99d6e9e4da2bd8f8507&language=en-US&page=${
          pagination.page
          }`
        );

        const items = await data.json();
        setTotalPages(items.total_pages);
        setItems([...items.results]);
        setLoaded(true);

        localStorage.setItem(
          `${pagination.page}`,
          JSON.stringify(items.results)
        );
        localStorage.setItem("totalPages", items.total_pages);
        localStorage.setItem(`${pagination.page}fetchtime`, new Date().getTime());
      }
      fetchItems();
    }
  }, [pagination.page]);

  // const sleep = (milliseconds) => {
  //   return new Promise(resolve => setTimeout(resolve, milliseconds))
  // } // uncomment to check loading spiner

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
            <div>
              <Navigation likeList={likeList} blockList={blockList} />
              <MovieList
                isLoaded={isLoaded}
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
            </div>
          </Route>
          <Route path="/like">
            <div>
              <Navigation likeList={likeList} blockList={blockList} />
              <LikeList
                likeList={likeList}
                setLikeList={setLikeList}
                addBlock={addBlock}
              />
            </div>
          </Route>
          <Route path="/block">
            <div>
              <Navigation likeList={likeList} blockList={blockList} />
              <BlockList
                blockList={blockList}
                setBlockList={setBlockList}
                addLike={addLike}
              />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
