// memoで関係ない親要素に影響された再レンダリングが起きないようにする
import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

// 基本的にコンポーネントは memo で囲む
export const ChildArea = memo((props) => {
  // 受け取ったpropsを展開
  const { open } = props;
  console.log("ChildAreaがレンダリングされた");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {/* 三項演算子
      条件 ? trueの値 : falseの値 */}
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});
