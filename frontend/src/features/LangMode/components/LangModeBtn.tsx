import { Earth } from 'lucide-react';
import { getLocale, locales, setLocale } from '@/paraglide/runtime';
import { uiText } from '@/utils/localeText';

type LangModeBtnProps = {
  handleChanged?: (value: string) => void;
};

export const LangModeBtn = ({ handleChanged }: LangModeBtnProps) => {
  const lang = getLocale();

  const handleSelect = (newLang: (typeof locales)[number]) => {
    if (newLang === lang) return;

    setLocale(newLang);
    handleChanged?.(newLang);
  };

  return (
    <div className="dropdown dropdown-end">
      <button className="btn btn-ghost btn-circle" tabIndex={0} type="button">
        <span className="swap swap-rotate">
          <Earth />
        </span>
      </button>
      <ul
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-20"
        aria-label={uiText('语言列表', 'Language list')}
      >
        {locales.map((locale) => (
          <li key={locale}>
            <button
              type="button"
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
