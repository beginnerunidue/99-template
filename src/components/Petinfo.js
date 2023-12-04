// function Petinfo(props) {
//   console.log(props);
//   const { animal, age, hasPet } = props; // using destruction of object
//   const text = hasPet
//     ? `My ${animal} is ${age} years old`
//     : "I don't have an animal";
//   return (
//     <div>
//       <h1>{text}</h1>
//     </div>
//   );
// }

function Petinfo(props) {
  console.log(props);
  const { animal, age, hasPet } = props; // using destruction of object

  return hasPet ? (
    <h1>{`My ${animal} is ${age} years old`}</h1>
  ) : (
    <h2>I don't have an animal</h2>
  );
}

// function Petinfo(props) {
//   console.log(props);
//   const { animal, age, hasPet } = props; // using destruction of object

//   return hasPet ? (
//     <h1>
//       My {animal} is {age} years old
//     </h1>
//   ) : (
//     <h1>I don't have an animal</h1>
//   );
// }

export default Petinfo;
