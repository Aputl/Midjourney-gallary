import { useState } from 'react'
import { gql, useQuery } from '@apollo/client'

const Midjourney = gql`
query MyQuery {
  midjourneys {
    id
    keyword
    picture {
      url
    }
  }
}
`;


const MainContent = () => {
  // GraphQL初期化
  let [midjourneys, setMidjourneys] = useState(
    {id: "", picture: {url: ""}, title: "", keyword: ""}
  );

  // GraphQLセット
  const { data, loading, error} = useQuery(Midjourney);
  if(loading) return <p className="text-3xl text-white text-center mt-32">...now loading</p>
  if(error) return `error!${error}`;

  //  // GraphQLランダムセット
  const handleGetImg = () => {
    const max = data.midjourneys.length;
    let MidIndex = Math.floor(Math.random() * max);
    const oldMidjourneys = midjourneys;

    for(let i=0; i<5; ++i){
      midjourneys = data.midjourneys[MidIndex];
      if(midjourneys !== oldMidjourneys){
        setMidjourneys(midjourneys);
        break;
      } else {
        MidIndex = Math.floor(Math.random() * max);
      }

    };
  };

  return (
    <main className="text-white mx-auto w-3/4 text-center">
      <button className="text-white text-3xl flex rounded-full mx-auto mt-16 py-4 px-8 bg-red-900" onClick={() => handleGetImg()} >画像を取得</button>
      <div className="text-4xl mt-16 mb-64 leading-relaxed" key={midjourneys.id}>
        <img className="rounded-sm mx-auto" src={midjourneys.picture.url} alt="" />
        <p>keyword: {midjourneys.keyword}</p>
      </div >
    </main>
  )
}

export default MainContent;