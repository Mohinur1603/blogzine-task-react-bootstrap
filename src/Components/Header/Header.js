import React, { useContext } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import BasicExample from "../Dropdown";
import "./Header.scss";
import { home } from "../../data";
import { pages } from "../../data";
import { post } from "../../data";
import ThemeContext from "../../Contexts/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div className={`header ${theme}`}>
        <nav className="d-flex justify-content-between">
          <div className={`header links ${theme}`}>
            <ul className="d-flex gap-4">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Forum</a>
              </li>
              <li>
                <a href="#">Buy now!</a>
              </li>
              <li>
                <a href="#">Login/Join</a>
              </li>
            </ul>
          </div>
          <div className="d-flex gap-4 align-items-center">
            <div className="btn-group">
              <ButtonGroup aria-label="Basic example">
                <Button variant="outline-primary" className="btnGroup">
                  A-
                </Button>
                <Button variant="primary" className="btnGroup">
                  A
                </Button>
                <Button variant="outline-primary" className="btnGroup">
                  A+
                </Button>
              </ButtonGroup>
            </div>
            <div className="toggle-mode d-flex gap-2">
              <span>Dark-mode</span>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={toggleTheme}
                />
              </div>
            </div>
            <div className="icons d-flex gap-2">
              <a href="https://blogzine.webestica.com/index.html#">
                <img
                  src="https://pbs.twimg.com/media/DjV5dXSW4AUxBuj.png"
                  alt="1"
                />
              </a>
              <a href="https://blogzine.webestica.com/index.html#">
                <img
                  src="https://pbs.twimg.com/media/CDNsU_aUEAAi7B2.png"
                  alt="1"
                />
              </a>
              <a href="https://blogzine.webestica.com/index.html#">
                <img
                  src="https://www.clipartmax.com/png/full/141-1418548_linkedin-ícones-linkedin-png.png"
                  alt="1"
                />
              </a>
              <a href="https://blogzine.webestica.com/index.html#">
                <img
                  src="https://www.pngmart.com/files/3/YouTube-Play-Button-PNG-File.png"
                  alt="1"
                />
              </a>
              <a href="https://blogzine.webestica.com/index.html#">
                <img
                  src="https://www.pinclipart.com/picdir/big/26-264365_follow-light-engine-on-vimeo-logo-vimeo-png.png"
                  alt="1"
                />
              </a>
            </div>
          </div>
        </nav>
        <span className="line my-2"></span>
      </div>
      <div className={`sticky p-1 ${theme}`}>
        <div className="logo">
          {(theme === "light" && (
            <img
              src="https://blogzine.webestica.com/assets/images/logo.svg"
              alt=""
            />
          )) || (
            <img
              src="https://blogzine.webestica.com/assets/images/logo-light.svg"
              alt=""
            />
          )}
        </div>
        <div className="links">
          <ul className="menu-ul d-flex gap-2 align-items-center">
            <li>
              <BasicExample title="Home" data={home} theme={theme} />
            </li>
            <li>
              <BasicExample title="Pages" data={pages} theme={theme} />
            </li>
            <li>
              <BasicExample title="Post" data={post} theme={theme} />
            </li>
            <li>
              <BasicExample title="Lifestyle" data={pages} theme={theme} />
            </li>
            <li>Dashboard</li>
          </ul>
        </div>
        <div className="d-flex gap-3">
          <Button variant="danger">Subscribe!</Button>
          <a href="https://blogzine.webestica.com/index.html#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </a>
          <a href="https://blogzine.webestica.com/index.html#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-text-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
