function Wrapper(props) {
  // console.log(props);

  const style = {
    backgroundColor: props.color,
    width: "350px",
    padding: "20px",
    margin: "20px auto",
  };

  return <div style={style}>{props.children}</div>;
}

export default Wrapper;
