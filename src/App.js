import { Button, ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import "./App.scss";
import { cardbox } from "./data";
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import Box from "./Components/Box/Box";
import Carousel from "./Components/Carousel/Carousel";
import Footer from "./Components/Footer/Footer";
import ThemeContext from "./Contexts/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    console.log(theme);
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app p-3 ${theme}`}>
        <div className="container">
          <Header />
          <main>
            <section>
              <div className="container mt-3">
                <div className="row rounded">
                  <div className="col-12 bg-primary bg-opacity-10 p-2 rounded">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center ">
                        <span className="trending rounded bg-primary text-white">
                          Trending:
                        </span>

                        <p className="ms-3 pt-3">
                          The most common business debate isn't as black and
                          white is you might think
                        </p>
                      </div>

                      <div>
                        <span className="arrow me-2"> &lt;</span>
                        <span className="arrow">&gt;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="mt-3 cards">
              <div className="container">
                <Card data={cardbox} />
              </div>
            </section>
            <section className="mt-5 pt-2 boxs">
              <Box />
            </section>
            <span className="line my-3"></span>
            <section className="pt-3">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex justify-content-between mb-4">
                      <div className="d-flex gap-3 align-items-center">
                        <img
                          style={{ width: "2.1rem", backgroundSize: "cover" }}
                          src="https://cdn-icons-png.flaticon.com/512/2838/2838771.png"
                          alt=""
                        />
                        <h3 className="fw-bold">Sponsored news</h3>
                      </div>
                      <div>
                        <a
                          href="#"
                          style={{ fontSize: "13px" }}
                          className="text-secondary"
                        >
                          Content by: Bootstrap
                        </a>
                      </div>
                    </div>
                    <Carousel />
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
        <div className="container-fluid">
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
