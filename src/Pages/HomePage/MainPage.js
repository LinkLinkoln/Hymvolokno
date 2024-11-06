import Header from "./Components/Header";
import MainPageGrid from "./Components/MainPageGrid";
import DesignLine from "./Components/DesignLine";
import NewsBlock from "./Components/NewsBlock";



function MainPage() {
    return (
      <div className="MainPage">
        <div class = "HeaderWrapper">
          <Header/>
        </div>
        <div className="DesignLineTop">
        <DesignLine/>
        </div>
        <div className="MainPageGrid">
        <MainPageGrid/>
        </div>
        <NewsBlock className="NewsBlock"/>
      </div>
    );
  }
  export default MainPage;