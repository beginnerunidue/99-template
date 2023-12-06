import { useEffect, useState } from "react";

import Post from "./Post";

function Posts() {
  const [myPosts, setMyPosts] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "https://jsonplaceholder.typicode.com/posts/";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((posts) => setMyPosts(posts))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

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
