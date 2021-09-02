import {useState} from "react";

function Message({ text }) {
  useState(() => {
    console.log(`Message Component with "${text}" is initialized`);
    return 'hoge';
  });

  return <p><b>{text}</b></p>;
}

function Message2({ text }) {
  useState(() => {
    console.log(`Message2 Component with "${text}" is initialized`);
    return 'hoge';
  });

  return <p><b>{text}</b></p>;
}

function ThisIsEven() {
  useState(() => {
    console.log(`ThisIsEven Component is initialized`);
    return 'hoge';
  });

  return <Message text="this is an even number" />;
}

function ThisIsOdd() {
  useState(() => {
    console.log(`ThisIsOdd Component is initialized`);
    return 'hoge';
  });

  return <Message text="this is an odd number" />;
}

function ComponentLifecycle() {
  const [count, setCount] = useState(0);

  function handleClick(e) {
    e.stopPropagation();
    setCount(count + 1);
  }

  return (
    <>
      <h2>Componentがいつ初期化されていつ更新されるか</h2>
      <h3>最終的なHTMLの構造は同じだけれどComponent名が異なる場合</h3>
      <p>toggleする度に初期化されるはず</p>
      <p>{`count: ${count}`}</p>
      {
        count % 2
          ? <ThisIsEven />
          : <ThisIsOdd />
      }
      <h3>最終的なHTMLの構造は同じでComponent名も同じ場合</h3>
      <p>toggleしても初期化されないはず</p>
      <p>{`count: ${count}`}</p>
      {
        count % 2
          ? <Message2 text="this is an even number" />
          : <Message2 text="this is an odd number" />
      }
      <button onClick={handleClick}>increment</button>
    </>
  )
}

export default ComponentLifecycle;
