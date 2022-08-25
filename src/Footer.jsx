import '../index.css'


const footer = () => {
  return (
    <footer className="text-white w-full py-4 bg-red-900 fixed bottom-0">
      <div className="text-2xl flex flex-wrap justify-center items-center">
        <a className="m-2" href="https://nodejs.org/ja/" target="_blank">node</a>
        <a className="m-2" href="https://ja.reactjs.org/" target="_blank">react</a>
        <a className="m-2" href="https://ja.vitejs.dev/" target="_blank">vite</a>
        <a className="m-2" href="https://tailwindcss.jp/" target="_blank">tailwindcss</a>
        <a className="m-2" href="https://www.npmjs.com/package/react-router-dom" target="_blank">react-router-dom</a>
        <a className="m-2" href="https://hygraph.com/" target="_blank">Hygraph(GraphQL)</a>
        <a className="m-2" href="https://www.midjourney.com/home/" target="_blank">Midjourney</a>
        <a className="m-2" href="https://github.com/Aputl" target="_blank">Github/Aputl</a>
      </div>
  </footer>
  )
}

export default footer