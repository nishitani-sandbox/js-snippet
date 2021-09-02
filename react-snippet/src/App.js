import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SimpleChat1 from "./pages/SimpleChat1";
import SimpleChat2 from "./pages/SimpleChat2";
import SimpleChat3 from "./pages/SimpleChat3";
import ComponentLifecycle from "./pages/ComponentLifecycle.js";

function App() {
  return (
    <Router>
      <h1>コンテンツ一覧</h1>
      <h2>外部の値の変化に応じてComponentのstateを変更する方法の確認</h2> 
      <ul>
        <li>
          <Link to="simple-chat-1">期待した通りに動かない</Link>
        </li>
        <li>
          <Link to="simple-chat-2">keyを変化させてuseStateの初期値を設定</Link>
        </li>
        <li>
          <Link to="simple-chat-3">useEffectでpropsの変化を監視して変化に応じてsetStateする</Link>
        </li>
      </ul>
      <h2><Link to="component-lifecycle">Componentがいつ初期化されていつ更新されるか</Link></h2>
      <hr />
      <h1>コンテンツ</h1>
      <Switch>
        <Route path="*/simple-chat-1">
          <SimpleChat1 />
        </Route>
        <Route path="*/simple-chat-2">
          <SimpleChat2 />
        </Route>
        <Route path="*/simple-chat-3">
          <SimpleChat3 />
        </Route>
        <Route path="*/component-lifecycle">
          <ComponentLifecycle />
        </Route>
        <Route path="*/">
          <p>コンテンツを選択してください。</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
