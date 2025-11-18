import { Sun, Moon } from 'lucide-react';
import { ClientOnly } from '@tanstack/react-router'


export const DarkModeBtn = ({
  handleChange,
}: {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <ClientOnly>
    <div className="btn btn-ghost btn-circle">
      <label className="swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input
          type="checkbox"
          className="theme-controller"
          value="synthwave"
          onChange={handleChange}
        />

        {/* sun icon */}
        <Sun className="swap-off h-5 w-5 fill-current" />

        {/* moon icon */}
        <Moon className="swap-on h-5 w-5 fill-current" />
      </label>
    </div>
  </ClientOnly>
);
