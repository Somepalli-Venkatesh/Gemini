import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p><span>Hello, Dev.</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              {[
                { text: 'Suggest beautiful places to see on an upcoming road trip', icon: assets.compass_icon },
                { text: 'Briefly summarize this concept: urban planning', icon: assets.bulb_icon },
                { text: 'Brainstorm team bonding activities for our work retreat', icon: assets.message_icon },
                { text: 'Improve the readability of the following code', icon: assets.code_icon },
              ].map((card, index) => (
                <div key={index} className="card">
                  <p>{card.text}</p>
                  <img src={card.icon} alt="" />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} alt="User Icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="Gemini Icon" />
              {loading ? (
                <div className="loader">
                  <hr /><hr /><hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="Gallery Icon" />
              <img src={assets.mic_icon} alt="Mic Icon" />
              {input && <img onClick={() => onSent()} src={assets.send_icon} alt="Send Icon" />}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
