export const PopupBrowse = ({ onClose }) => (
    <div className="pop-browse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <button 
              type="button" 
              className="pop-browse__close"
              onClick={onClose}
            >
              &#10006;
            </button>
          </div>
        </div>
      </div>
    </div>
  );