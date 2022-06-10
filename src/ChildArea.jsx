const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = (props) => {
  // 受け取ったpropsを展開
  const { open } = props;
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
};
