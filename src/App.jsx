import './App.css'
import PopupExit from './components/PopupExit/PopupExit'
import PopupNewCard from './components/PopupNewCard/PopupNewCard'
import PopupBrowse from './components/PopupBrowse/PopupBrowse'
import Header from './components/Header/Header'
import Column from './components/Column/Column'
import Card from './components/Card/Card'

function App() {
  return (
    <div className="wrapper">
      <PopupExit />
      <PopupNewCard />
      <PopupBrowse />
      
      <Header />

      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              <Column title="Без статуса">
                <Card theme="orange" title="Web Design" date="30.10.23" />
                <Card theme="green" title="Research" date="30.10.23" />
                <Card theme="orange" title="Web Design" date="30.10.23" />
                <Card theme="purple" title="Copywriting" date="30.10.23" />
                <Card theme="orange" title="Web Design" date="30.10.23" />
              </Column>

              <Column title="Нужно сделать">
                <Card theme="green" title="Research" date="30.10.23" />
              </Column>

              <Column title="В работе">
                <Card theme="green" title="Research" date="30.10.23" />
                <Card theme="purple" title="Copywriting" date="30.10.23" />
                <Card theme="orange" title="Web Design" date="30.10.23" />
              </Column>

              <Column title="Тестирование">
                <Card theme="green" title="Research" date="30.10.23" />
              </Column>

              <Column title="Готово">
                <Card theme="green" title="Research" date="30.10.23" />
              </Column>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;