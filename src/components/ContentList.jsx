import React from "react";
import ListItem from "./ListItem";

function ContentList({ items }) {
  return (
    <section>
      <ul>
        {items.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default ContentList;
