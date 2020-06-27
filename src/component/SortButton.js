import React from "react";
export default function SortButton(props) {
  let { items, setItems, id } = props;
  const IdSort = () => {
    var sortIt;
    if (id === "title")
      sortIt = [...items].sort(function(a, b) {
        var tA = a.title.toLowerCase(),
          tB = b.title.toLowerCase();
        if (tA < tB)
          //sort string ascending
          return -1;
        if (tA > tB) return 1;
        return 0;
      });
    //else if  other sorting ways
    setItems(sortIt);
  };
  return <button onClick={IdSort}>Sort with {id}</button>;
}
