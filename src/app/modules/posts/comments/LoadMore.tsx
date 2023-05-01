import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Props {
  dataLength: number;
  next: () => Promise<void>;
  hasMore: boolean;
  loader: JSX.Element;
  endMessage: JSX.Element;
  children?: React.ReactNode;
}

const LoadMore = () => {
  const [items, setItems] = useState<Comment[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = `https://jsonplaceholder.typicode.com/comments?_page=${pageNumber + 1}&_limit=10`;
    const res = await axios(url);
    setItems(items.concat(res.data));
    setPageNumber(pageNumber + 1);
    setTotalItems(parseInt(res.headers["x-total-count"]));
  };

  const hasMoreItems: boolean = items.length < totalItems;

  return (
    <div>
      <h1> Load more pagination... </h1>

      <table className="table">
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>EMAIL</td>
            <td>COMMENTS</td>
          </tr>
        </thead>
        <tbody>
          {items.map((item: Comment, index: number) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMoreItems}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        children={null}
      ></InfiniteScroll>
    </div>
  );
};

export default LoadMore;
