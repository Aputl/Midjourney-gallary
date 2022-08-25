
const About = () => {
  return (
    <main className="text-white mx-auto w-4/5 text-center">
      <h2 className="text-4xl mt-16">このアプリケーションについて</h2>
      <p className="text-xl mt-6">react_ver18系(vite)+tailwindcss+GraphQLを使用した</p>
      <p className="text-xl mt-2"><a className="text-blue-500" href="https://github.com/Aputl" target="_blank">Aputl</a>のポートフォリオです。</p>
      <p className="text-xl mt-6">画像生成AI Midjourneyで作成した画像と作成したキーワードを</p>
      <p className="text-xl mt-2">GraphQLから連携し、ランダムで表示するアプリケーションです。</p>
      <p className="text-xl mt-2">ルーティングはreact-routerを使用。デプロイはgithub pages。</p>
      <p className="text-xl mt-6">Midjourneyは良いぞぉ～^^</p>
    </main>
  )
}

export default About;