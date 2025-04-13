export default function Home() {
  return (
    <div className="bg-black">
      <h1 className="items-center justify-center flex text-white">
        React Hooks Playground
      </h1>
      <div className="flex flex-col items-start justify-center">
        <span className="text-white">State Hooks</span>
        <a className="text-gray-400" href="/src/pages/useState.jsx"></a>
      </div>
    </div>
  );
}
