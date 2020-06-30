
import React, {useState} from "react"

export default function SortButton(props) {
  let { items, setItems, id } = props;
  const [asdOrder, setAsdOrder] = useState(1)

  const IdSort = () => {
    var sortIt;
    if (id === "title")
      sortIt = [...items].sort(function(a, b) {
        var tA = a.title.toLowerCase(),
          tB = b.title.toLowerCase();
        return (tA > tB) ? asdOrder : (asdOrder * -1);
      })

    if (id === "vote_count")
    sortIt = [...items].sort(function(a, b) {
        return (a.vote_count > b.vote_count) ? asdOrder : (asdOrder * -1);
    });

    if (id === "vote_average")
    sortIt = [...items].sort(function(a, b) {
        return (a.vote_average > b.vote_average) ? asdOrder : (asdOrder * -1);
    });

    if (id === "release_date")
    sortIt = [...items].sort(function(a, b) {
        var dateA = new Date(a.release_date), dateB = new Date(b.release_date)
      return (dateA > dateB) ? asdOrder : (asdOrder * -1);
    })

    setItems(sortIt);
    setAsdOrder(-1 * asdOrder);
  };
  return <button onClick={IdSort}>Sort with {id}</button>;
}
