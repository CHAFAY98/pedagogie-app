import Aside from "./components/Aside/Aside";
import HeaderComponent from "./components/Header/Header";
import HomeComponent from "./components/Pages/Home";
function App() {
  return (
    <div className="page d-flex flex-row flex-column-fluid">
      <Aside />
      <div
        className="wrapper d-flex flex-column flex-row-fluid"
        id="kt_wrapper"
      >
        <HeaderComponent />
        <div
          className="content d-flex flex-column flex-column-fluid"
          id="kt_content"
        >
          <HomeComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
