function Post({ userId, id, title, body }) {
  console.log(userId, id, title, body);
  return (
    <div className="card">
      <small>id: {id}</small>
      <h3>Title: {title}</h3>{" "}
      <p style={{ color: "lightgreen" }}>Body: {body}</p>
      <h3>User ID: {userId}</h3>
    </div>
  );
}

export default Post;
