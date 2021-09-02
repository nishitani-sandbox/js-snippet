import { useState } from "react";

const conversations = {
  "bob": [
    {
      "from": "bob",
      "message": "hi, taro",
    },
    {
      "from": "taro",
      "message": "hi, bob",
    },
  ],
  "takashi": [
    {
      "from": "taro",
      "message": "元気??",
    },
    {
      "from": "takashi",
      "message": "元気だよ",
    },
  ],
}

function Chat({ me, to }) {
  const [chats, setChats] = useState(() => {
    console.log(`simple-chat-1 chat is initialized me: ${me}, to: ${to}`);
    return conversations[to]
  });
  const [input, setInput] = useState(`hi, ${to}`);

  function handleSubmit(e) {
    e.preventDefault();
    setChats([...chats, { from: me, message: input, }])
  }

  function handleChange(e) {
    e.stopPropagation();
    setInput(e.target.value);
  }

  return (
    <>
      <ul>
        {
          chats.map(({ from, message }) => (
            <li>{`${from}: ${message}`}</li>
          ))
        }
      </ul>
      <form onSubmit={handleSubmit}>
        <textarea onChange={handleChange} value={input} />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

function SimpleChat1() {
  const [selected, setSelected] = useState("bob");

  function handleChange(e) {
    e.stopPropagation();
    setSelected(e.target.value);
  }

  return (
    <>
      <h2>チャットアプリのサンプル1</h2>
      <p>期待した通りに動かない</p>
      <form>
        <select onChange={handleChange} value={selected}>
          <option>bob</option>
          <option>takashi</option>
        </select>
      </form>
      <Chat me="taro" to={selected} />
    </>
  );
}

export default SimpleChat1;
