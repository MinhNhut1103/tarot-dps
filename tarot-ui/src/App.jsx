import { useState, useEffect } from 'react';
import './App.css';

const API_BASE_URL = '';

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCard, setSelectedCard] = useState(() => {
    const saved = localStorage.getItem('tarot_selectedCard');
    return saved ? JSON.parse(saved) : null;
  });
  const [spreadCards, setSpreadCards] = useState(() => {
    const saved = localStorage.getItem('tarot_spreadCards');
    return saved ? JSON.parse(saved) : null;
  });
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('tarot_lang') || 'vi';
  });

  const t = {
    vi: {
      title: "Trải Bài Tarot Huyền Bí",
      subtitle: "Khám phá bí mật của những lá bài",
      loading: "Đang kết nối tâm linh... (Summoning spirits...)",
      error: "Lỗi",
      drawBtn: "Rút 1 Lá",
      drawBtnNote: "Rút 1 lá bất kỳ",
      draw3Btn: "Trải Bài 3 Lá",
      draw3BtnNote: "Xem Quá Khứ - Hiện Tại - Tương Lai",
      close: "Đóng",
      original: "Bản Gốc Tiếng Anh:",
      reset: "Xoá Dữ Liệu & Tải Lại",
      past: "Quá Khứ",
      present: "Hiện Tại",
      future: "Tương Lai"
    },
    en: {
      title: "Mystic Tarot Reader",
      subtitle: "Discover the secrets of the cards",
      loading: "Summoning spirits...",
      error: "Error",
      drawBtn: "1-Card Draw",
      drawBtnNote: "Draw any single card",
      draw3Btn: "3-Card Spread",
      draw3BtnNote: "View Past - Present - Future",
      close: "Close",
      original: "Original English:",
      reset: "Clear Data & Refresh",
      past: "Past",
      present: "Present",
      future: "Future"
    }
  };

  useEffect(() => {
    if (selectedCard) {
      localStorage.setItem('tarot_selectedCard', JSON.stringify(selectedCard));
    } else {
      localStorage.removeItem('tarot_selectedCard');
    }
  }, [selectedCard]);

  useEffect(() => {
    if (spreadCards) {
      localStorage.setItem('tarot_spreadCards', JSON.stringify(spreadCards));
    } else {
      localStorage.removeItem('tarot_spreadCards');
    }
  }, [spreadCards]);

  useEffect(() => {
    localStorage.setItem('tarot_lang', lang);
  }, [lang]);

  const handleReset = () => {
    localStorage.clear();
    setSelectedCard(null);
    setSpreadCards(null);
    setLang('vi');
    window.location.reload();
  };

  useEffect(() => {
    fetchCards();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCard(null);
        setSpreadCards(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCard]);

  const fetchCards = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/cards`);
      if (!response.ok) {
        throw new Error('Failed to fetch cards');
      }
      const data = await response.json();
      setCards(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const drawRandomCard = () => {
    if (cards.length === 0) return;
    setSpreadCards(null);
    const randomIndex = Math.floor(Math.random() * cards.length);
    setSelectedCard(cards[randomIndex]);
  };

  const drawSpread = () => {
    if (cards.length < 3) return;
    setSelectedCard(null);
    let selected = [];
    let tempCards = [...cards];
    for (let i = 0; i < 3; i++) {
      const idx = Math.floor(Math.random() * tempCards.length);
      selected.push(tempCards[idx]);
      tempCards.splice(idx, 1);
    }
    setSpreadCards(selected);
  };

  return (
    <div className="app-container">
      <div className="language-toggle" style={{display: 'flex', alignItems: 'center'}}>
        <button 
          title={t[lang].reset}
          onClick={handleReset} 
          style={{marginRight: '1rem', background: 'transparent', border: '1px solid var(--glass-border)', color: 'var(--text-light)', padding: '0.4rem 0.8rem', borderRadius: '20px', cursor: 'pointer', fontFamily: 'Roboto, sans-serif', fontSize: '0.9rem', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '0.3rem'}}>
          <span style={{fontSize: '1.2em', lineHeight: 1}}>↺</span> Refresh
        </button>
        <button 
          className={lang === 'vi' ? 'active' : ''} 
          onClick={() => setLang('vi')}>
          VI
        </button>
        <button 
          className={lang === 'en' ? 'active' : ''} 
          onClick={() => setLang('en')}>
          EN
        </button>
      </div>

      <header className="app-header glass-panel">
        <h1>{t[lang].title}</h1>
        <p>{t[lang].subtitle}</p>
      </header>

      <main className="app-main">
        {loading && <div className="loader">{t[lang].loading}</div>}
        {error && <div className="error">{t[lang].error}: {error}</div>}

        {!loading && !error && (
          <div className="content-wrapper">
            <div className="action-area" style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
              <button className="draw-btn" onClick={drawRandomCard} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1.2' }}>
                <span>{t[lang].drawBtn}</span>
                <span style={{ fontSize: '0.65rem', fontWeight: 'normal', opacity: '0.8', marginTop: '4px', letterSpacing: '0.5px' }}>{t[lang].drawBtnNote}</span>
              </button>
              <button className="draw-btn spread-btn" onClick={drawSpread} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1.2' }}>
                <span>{t[lang].draw3Btn}</span>
                <span style={{ fontSize: '0.65rem', fontWeight: 'normal', opacity: '0.8', marginTop: '4px', letterSpacing: '0.5px' }}>{t[lang].draw3BtnNote}</span>
              </button>
            </div>
            
            <div className="cards-grid">
               {cards.map((card, index) => (
                  <div key={index} className="card-item glass-panel" onClick={() => setSelectedCard(card)}>
                     <img src={`${API_BASE_URL}${card.image}`} alt={card.name} loading="lazy" />
                     <h3>
                       {lang === 'vi' ? (card.name_vi || card.name) : card.name}
                       {lang === 'vi' && card.name_vi && <span className="subtitle-en" style={{display: 'block', fontSize: '0.65em', marginTop: '6px', opacity: 0.7}}>{card.name}</span>}
                     </h3>
                  </div>
               ))}
            </div>
          </div>
        )}
      </main>

      {selectedCard && (
        <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedCard(null)}>×</button>
            <div className="modal-body">
              <div className="modal-image-container">
                 <img src={`${API_BASE_URL}${selectedCard.image}`} alt={selectedCard.name} />
              </div>
              <div className="modal-info">
                <h2>
                  {lang === 'vi' ? (selectedCard.name_vi || selectedCard.name) : selectedCard.name}
                  {lang === 'vi' && selectedCard.name_vi && <span className="subtitle-en" style={{display: 'block', fontSize: '0.6em', marginTop: '10px', opacity: 0.7}}>{selectedCard.name}</span>}
                </h2>
                <div className="description">
                  {(lang === 'vi' ? (selectedCard.description_vi || selectedCard.description) : selectedCard.description).split('\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {spreadCards && (
        <div className="modal-overlay" onClick={() => setSpreadCards(null)} style={{alignItems: 'flex-start', paddingTop: '2rem', overflowY: 'auto'}}>
          <div className="modal-content glass-panel spread-modal" onClick={(e) => e.stopPropagation()} style={{maxWidth: '1200px', width: '95%'}}>
            <button className="close-btn" onClick={() => setSpreadCards(null)}>×</button>
            <h2 style={{textAlign: 'center', marginBottom: '2rem', color: 'var(--accent-gold)'}}>{t[lang].draw3Btn}</h2>
            <div className="spread-container" style={{display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center'}}>
              {[t[lang].past, t[lang].present, t[lang].future].map((label, i) => {
                const card = spreadCards[i];
                return (
                  <div key={i} className="spread-item" style={{flex: '1 1 300px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h3 style={{marginBottom: '1rem', color: 'var(--accent-gold)', borderBottom: '1px solid var(--accent-gold)', paddingBottom: '0.5rem'}}>{label}</h3>
                    <div className="card-image-large" style={{maxWidth: '200px'}}>
                       <img src={`${API_BASE_URL}${card.image}`} alt={card.name} style={{width: '100%', borderRadius: '10px'}} />
                    </div>
                    <div className="modal-info" style={{marginTop: '1.5rem', width: '100%'}}>
                      <h4 style={{fontSize: '1.2rem', textAlign: 'center', marginBottom: '1rem'}}>
                        {lang === 'vi' ? (card.name_vi || card.name) : card.name}
                        {lang === 'vi' && card.name_vi && <span className="subtitle-en" style={{display: 'block', fontSize: '0.7em', marginTop: '6px', opacity: 0.7}}>{card.name}</span>}
                      </h4>
                      <div className="description" style={{fontSize: '0.9rem', lineHeight: '1.6'}}>
                        {(lang === 'vi' ? (card.description_vi || card.description) : card.description).split('\n').map((paragraph, idx) => (
                          <p key={idx} style={{marginBottom: '0.8rem'}}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <footer className="app-footer" style={{ textAlign: 'center', padding: '1.5rem', marginTop: '30px', borderTop: '1px solid var(--glass-border)', fontSize: '0.9rem', opacity: 0.8 }}>
        <div>Copyright © {new Date().getFullYear()} Phát triển bởi DPS.MEDIA team Dev</div>
      </footer>
    </div>
  );
}

export default App;
