import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Router.css";
import { Navbar, Nav, Button, Spinner } from "react-bootstrap";
import AllMovie from "../AllMovie/AllMovie.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function HomePage() {
  const [curPage, setcurPage] = useState(1);
  const apikey = `82f403f0b5eff96063eaa0a41372b443`;
  const baseurl = "https://api.themoviedb.org/3/movie/popular?";
  let iniurl = `${baseurl}api_key=${apikey}&language=en-US&page=${curPage}`;
  const [allItems, setAllitems] = useState([]);
  const [allIts, setAllits] = useState([]);
  const [isLoaded,setLoaded]=useState(false);
  //////id获取有困难，再useEffect调用的时候会无限循环！
  const setResult = arr => {
    for (let i = 0; i < arr.length; i++) {
      let it = {
        id: arr[i].id,
        genreids: arr[i].genre_ids,
        isIn: true,
        isBlock: false,
        isLike: false
      };
      setAllitems([...allItems, it]);
    }
  };
  const fetchData = () => {
    fetch(iniurl)
      .then(res => res.json())
      .then(res => res.results)
      .then(res => {
        setAllits(res);
        res.forEach(item => {
          let it = {
            id: item.id,
            genreids: item.genre_ids,
            isIn: true,
            isBlock: false,
            isLike: false
          };
          setAllitems([...allItems, it]);
        });
      });
  };
  useEffect(() => {
    
    fetchData();
    setLoaded(true)
  }, iniurl);
  const Prev = () => {
    let idx = curPage;
    if (idx > 1) {
      setcurPage(idx - 1);
      setLoaded(false)
    }
  };
  const Next = () => {
    let idx = curPage;
    if (idx < 500) {
      setcurPage(idx + 1);
      setLoaded(false)
    }
  };

  const router = (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movie">
         <div> 
         <div>
        <Button
          size="sm"
          variant="outline-dark"
          onClick={Prev}
          style={{ position: "absolute", left: "5%" }}
        >
          Prev
        </Button>
        <span>{curPage}/500</span>
        <span style={{display:isLoaded?"none":"inline-block"}}>
     
          <Spinner animation="border" size="sm" />
        </span>
        <Button
          size="sm"
          variant="outline-dark"
          onClick={Next}
          style={{ position: "absolute", left: "85%" }}
        >
          Next
        </Button>
      </div>
           <AllMovie allItems={allItems} allIts={allIts} /></div>
        </Route>
      </Switch>
    </Router>
  );
 

  return (
    <div>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Top Movies</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/movie">All Movies</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      
      <div style={{ postion: "absolute", top: "20px" }}> {router}</div>
    </div>
  );
}
function Home() {
  return <div>HomePage</div>;
}
