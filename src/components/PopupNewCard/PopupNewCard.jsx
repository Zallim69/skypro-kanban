export const PopupNewCard = ({ onClose }) => (
    <div className="pop-new-card">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <button 
              type="button" 
              className="pop-new-card__close"
              onClick={onClose}
            >
              &#10006;
            </button>
          </div>
        </div>
      </div>
    </div>
  );