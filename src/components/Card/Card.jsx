export const Card = ({ onBrowse }) => (
    <div className="cards__item">
      <div className="cards__card card">
        <div className="card__group">
          <div className="card__theme _orange">
            <p className="_orange">Web Design</p>
          </div>
          <button 
            type="button" 
            className="card__btn"
            onClick={onBrowse}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
        <div className="card__content">
          <h3 className="card__title">Название задачи</h3>
          <div className="card__date">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13">
              {/* SVG содержимое */}
            </svg>
            <p>30.10.23</p>
          </div>
        </div>
      </div>
    </div>
  );