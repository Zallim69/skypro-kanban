export const PopupExit = ({ onClose }) => (
    <div className="pop-exit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form">
            <div className="pop-exit__form-group">
              <button 
                type="button" 
                className="pop-exit__exit-yes _hover01"
                onClick={onClose}
              >
                Да, выйти
              </button>
              <button 
                type="button" 
                className="pop-exit__exit-no _hover03"
                onClick={onClose}
              >
                Нет, остаться
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );