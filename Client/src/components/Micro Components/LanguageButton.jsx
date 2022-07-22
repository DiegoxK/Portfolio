import useTranslation from "../../Custom/useTranslation";

function LanguageButton({ className, dark }) {
  const { language, setLanguage } = useTranslation();

  const languages = {
    es: "/assets/flags/colombia.png",
    en: "/assets/flags/us.png",
  };

  const onClick = (e) => {
    setLanguage(e.target.name);
    location.reload();
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
            name={language === "es" ? "en" : "es"}
            onClick={onClick}
            className="dropdown-item"
            type="button"
          >
            <img
              name={language === "es" ? "en" : "es"}
              src={language === "es" ? languages.en : languages.es}
              height={25}
              alt={language === "es" ? "en" : "es"}
            />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default LanguageButton;
