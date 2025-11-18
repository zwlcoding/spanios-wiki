import { Earth } from 'lucide-react'
import { ClientOnly } from '@tanstack/react-router'
import { useLangMode } from '../hooks/useLangMode';

type LangModeBtnProps = {
  handleChanged?: (value: any) => void;
};

const LANG_OPTIONS = [
  { id: 'en', label: 'English', emoji: 'en' },
  { id: 'zh', label: '简体中文', emoji: '🇨🇳' },
];

export const LangModeBtn = ({ handleChanged }: LangModeBtnProps) => {
  const { lang, toggleLang } = useLangMode();

  const handleSelect = (newLang: string) => {
    if (newLang === lang) return;
    toggleLang(newLang);
    handleChanged && handleChanged(newLang);
  };

  return (
    <ClientOnly>
      <div className="dropdown dropdown-end">
        <button className="btn btn-ghost btn-circle" tabIndex={0} type="button">
          <label className="swap swap-rotate">
            <Earth />
          </label>
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
          role="listbox"
          aria-label="语言列表"
        >
          {LANG_OPTIONS.map((opt) => (
            <li key={opt.id}>
              <button
                className={`flex items-center gap-2 w-full ${opt.id === lang ? 'font-semibold bg-neutral text-neutral-content' : ''}`}
                onClick={() => handleSelect(opt.id)}
                role="option"
                aria-selected={opt.id === lang}
              >
                <span className="text-lg">{opt.emoji}</span>
                <span>{opt.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </ClientOnly>
  );
};
