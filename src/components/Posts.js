import { useEffect, useState } from "react";

import Post from "./Post";

const API_URL = "https://jsonplaceholder.typicode.com/posts/";

function Posts() {
  const [myPosts, setMyPosts] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //// 1. using async und await
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await fetch(API_URL);
  //       const posts = await res.json();
  //       setMyPosts(posts);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //     setIsLoading(false);
  //   }
  //   fetchData();
  // }, []);

  //// 2. using IIFE (Immediately Invoked Function Expressions)
  // useEffect(() => {
  //   (async function () {
  //     try {
  //       const res = await fetch(API_URL);
  //       const posts = await res.json();
  //       setMyPosts(posts);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //     setIsLoading(false);
  //   })();
  // }, []);

  //// 3. using IIFE (Immediately Invoked Function Expressions)
  //// with Arrow-Function
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const posts = await res.json();
        setMyPosts(posts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  //// 4. using fetch(API_URL).then.then
  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((response) => response.json())
  //     .then((posts) => setMyPosts(posts))
  //     .catch((error) => setError(error.message))
  //     .finally(() => setIsLoading(false));
  // }, []);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className="cards">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        myPosts.map((myPost) => <Post {...myPost} key={myPost.id} />)
      )}
    </div>
  );
}

export default Posts;
