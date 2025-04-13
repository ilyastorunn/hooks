import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function State() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <span className="px-3">increase</span>
        <Button onClick={handleClick}>{count}</Button>
      </div>
    </>
  );
}
