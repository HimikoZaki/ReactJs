import { memo } from "react";

function Content({ onIncrease }) {
  console.log(`re-rende`);

  return (
    <>
      <h2>Hello Bros!</h2>
      <button onClick={onIncrease}>Click me!</button>
    </>
  );
}
export default memo(Content);
