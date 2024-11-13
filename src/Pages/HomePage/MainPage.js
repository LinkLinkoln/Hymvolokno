import Header from "./Components/Header";
import MainPageGrid from "./Components/MainPageGrid";
import DesignLine from "./Components/DesignLine";
import NewsBlock from "./Components/NewsBlock";
import Footer from "./Components/Footer";



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
        <div className="NewsBlock">
        <NewsBlock/>
        </div>
        <Footer/>
      </div>
    );
  }
  export default MainPage;