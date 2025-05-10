import { useState } from 'react';
import './App.css';
// Импорты компонентов
import { PopupExit } from './components/PopupExit/PopupExit';
import { PopupNewCard } from './components/PopupNewCard/PopupNewCard';
import { PopupBrowse } from './components/PopupBrowse/PopupBrowse';
import { Header } from './components/Header/Header';
import { Column } from './components/Column/Column';
import { Card } from './components/Card/Card';

function App() {
  // Состояния для управления попапами
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [showNewCardPopup, setShowNewCardPopup] = useState(false);
  const [showBrowsePopup, setShowBrowsePopup] = useState(false);

  return (
    <div className="wrapper">
      {/* Рендер попапов при необходимости */}
      {showExitPopup && (
        <PopupExit onClose={() => setShowExitPopup(false)} />
      )}
      
      {showNewCardPopup && (
        <PopupNewCard onClose={() => setShowNewCardPopup(false)} />
      )}
      
      {showBrowsePopup && (
        <PopupBrowse onClose={() => setShowBrowsePopup(false)} />
      )}

      {/* Основной шаблон приложения */}
      <Header 
        onNewCard={() => setShowNewCardPopup(true)}
        onExit={() => setShowExitPopup(true)}
      />

      <main className="main">
        <div className="container">
          <div className="main__block">
            <Column title="Без статуса">
              <Card onBrowse={() => setShowBrowsePopup(true)} />
              {/* Можно добавлять другие карточки */}
            </Column>
            
            {/* Пример добавления новой колонки */}
            <Column title="В работе">
              <Card onBrowse={() => setShowBrowsePopup(true)} />
            </Column>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;