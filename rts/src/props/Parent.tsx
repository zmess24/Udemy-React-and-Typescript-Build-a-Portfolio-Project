import { Child } from "./Child";

const Parent = () => {
  return (
    <Child color="red" onClick={() => console.log("Clicked")}>
      Zac Messinger
    </Child>
  );
};

export default Parent;
