import { getLocale, locales, setLocale } from '@/paraglide/runtime';
import { Earth } from 'lucide-react';

type LangModeBtnProps = {
  handleChanged?: (value: any) => void;
};



export const LangModeBtn = ({ handleChanged }: LangModeBtnProps) => {
  // const { lang, toggleLang, locales } = useLangMode();

  const lang = getLocale()

  const handleSelect = (newLang: string) => {
    if (newLang === lang) return;
    // toggleLang(newLang);
    setLocale(newLang)
    handleChanged && handleChanged(newLang);
  };



  return (

    <div className="dropdown dropdown-end">
      <button className="btn btn-ghost btn-circle" tabIndex={0} type="button">
        <label className="swap swap-rotate">
          <Earth />
        </label>
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-20"
        role="listbox"
        aria-label="语言列表"
      >
        {locales.map((locale: any) => (
          <li key={locale}>
            <button
              className={`flex items-center gap-2 w-full ${locale === lang ? 'font-semibold bg-neutral text-neutral-content' : ''}`}
              onClick={() => handleSelect(locale)}
              role="option"
              aria-selected={locale === lang}
            >
              <span>{locale}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>

  );
};
