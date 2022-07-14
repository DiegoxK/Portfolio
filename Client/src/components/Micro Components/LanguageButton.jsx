import { useContext } from "react";
import { Context } from "../../Controller/Store";

function LanguageButton({ className, dark }) {
  const { language, setLanguage } = useContext(Context);

  const languages = {
    spanish: "/assets/flags/colombia.png",
    english: "/assets/flags/us.png",
  };

  const onClick = (e) => {
    setLanguage(e.target.name);
  };

  return (
    <div className={`dropdown ${className}`}>
      <button
        className={`btn ${
          dark ? "btn-outline-primary" : "btn-outline-secondary"
        } dropdown-toggle`}
        type="button"
        id="dropdownMenu2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src={languages[language]} height={25} alt={language} />
      </button>
      <ul
        className="dropdown-menu language-dropdown ms-1 mt-2 "
        aria-labelledby="dropdownMenu2"
      >
        <li>
          <button
            name={language === "spanish" ? "english" : "spanish"}
            onClick={onClick}
            className="dropdown-item"
            type="button"
          >
            <img
              name={language === "spanish" ? "english" : "spanish"}
              src={
                language === "spanish" ? languages.english : languages.spanish
              }
              height={25}
              alt={language === "spanish" ? "english" : "spanish"}
            />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default LanguageButton;
