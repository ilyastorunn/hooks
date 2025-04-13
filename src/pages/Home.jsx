import State from "./State";

export default function Home() {
  return (
    <div className="bg-black">
      <h1 className="items-center justify-center flex text-white">
        React Hooks Playground
      </h1>
      <div className="flex flex-col items-start justify-center">
        <span className="text-white">State Hooks</span>
          <a href="/state" className="text-yellow-300">state</a>
      </div>
    </div>
  );
}
