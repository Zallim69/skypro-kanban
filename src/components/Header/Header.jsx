export const Header = ({ onNewCard, onExit }) => (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="/">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button 
              type="button" 
              className="header__btn-main-new _hover01"
              onClick={onNewCard}
            >
              Создать новую задачу
            </button>
            <button 
              type="button" 
              className="header__user _hover02"
              onClick={onExit}
            >
              Ivan Ivanov
            </button>
          </nav>
        </div>
      </div>
    </header>
  );