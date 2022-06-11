import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  // e(イベント値)を更新する
  const onChangeText = (e) => setText(e.target.value);

  // !で現在と反対のbooleanに切り替える
  const onClickOpen = () => setOpen(!open);

  // => は毎回新しい関数を生成していると判断される
  // useCallback(関数, []) setOpenが変わった時に関数を再生成する
  const onClickClose = useCallback(() => setOpen(false), []);

  // 変数の Memo 化
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
