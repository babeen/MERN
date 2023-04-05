
// import { useState } from "react";



// function App() {
//   const question = {
//     que1:'What makes you happy?',
//     que2:'What makes me happy?',
//     que4:'What things makes me feel good?',
//     que3:'Who are you?',
//   }
//   const answers = {
//     ans1:'love',
//     ans2:'family',
//     ans3:'food',
//     ans4:'noone'
//   }

//   const [count, setCount] = useState(0);
  
//   function handleClick() {
//     setCount(count + 1);
//   }
//   // count for MyScore
// }
// return (
//   <div className="App">
      
//       <h1>{question.que2}
//         <button>{answers.ans1}</button>
//         <button>{answers.ans2}</button>
//         <button>{answers.ans3}</button>
//         <button>{answers.ans4}</button>
//         <MyButton count={count} onClick={handleClick} />
//       </h1>

//     </div>
//   );



// function MyButton({ count, onClick }) {
//   return (
//     <button onClick={onClick}>
//       Clicked {count} times
//     </button>
//   );
// export default App;

import { useState } from "react";

function App() {
  const question = {
    que1: 'What makes you happy?',
    que2: 'What makes me happy?',
    que4: 'What things makes me feel good?',
    que3: 'Who are you?',
  };
  const answers = {
    ans1: 'love',
    ans2: 'family',
    ans3: 'food',
    ans4: 'noone',
  };

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <div>{count}</div>
      <h1>
        {question.que2}
        <button count={count} onClick={handleClick}>{answers.ans1}</button>
        <button count={count} onClick={handleClick}>{answers.ans2}</button>
        <button count={count} onClick={handleClick}>{answers.ans3}</button>
        <button count={count} onClick={handleClick}>{answers.ans4}</button>
        {/* <MyButton/> */}
      </h1>
    </div>
  );
}


export default App;

