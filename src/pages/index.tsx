import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import Instagram from "../assets/instagram-alt.svg";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h1>
            Hi, I'm Frans FP<span className="fancy">.</span>
          </h1>
          <div className="sub">
            <Instagram width={15} height={15}/>
            <span className="handle">
               @fransfp__</span>
          </div>
          <h2>Full stack developer and a Civil Servant 🇲🇨</h2>
          
          <SocialList />
          
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        .sub{
          margin-top: 0.275em;
          display: flex;
          flex-direction: row;
          gap: 0.5em;
          align-items: center;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
