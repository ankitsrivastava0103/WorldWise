/* eslint-disable react/prop-types */
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  const flagEmojiToPng = (flag) => {
    let countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
      .map((char) => String.fromCharCode(char - 127397).toLowerCase())
      .join("");
    return <img src={`https://flagcdn.com/24x18/${countryCode}.png`} />;
  };

  return (
    <li className={styles.countryItem}>
      <span>{flagEmojiToPng(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
