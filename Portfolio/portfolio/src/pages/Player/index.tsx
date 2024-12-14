import Layout from "../../components/Layout";
import Header from "../../components/Header";
import HLSPlayer from "../../components/Player";
import PlayerGrid from "../../components/PlayerGrid";

export default function Player()
{
  return(
    <Layout>
      <Header></Header>
      <PlayerGrid>
      <HLSPlayer src='http://www.gwinfo.shop:80/hls/stream.m3u8'></HLSPlayer>
      </PlayerGrid>
    </Layout>
  )
}