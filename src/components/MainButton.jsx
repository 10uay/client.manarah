import {useTranslation} from '../utils/Imports'

export default function MainButton({ text, submit }) {
  const { t } = useTranslation();

  return (
    <div className="w-fit">
      <button
        type={submit ? 'submit': ''}
        className="relative whitespace-nowrap inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#49ceb4] to-[#044572] group-hover:from-[#49ceb4] group-hover:to-[#044572] hover:text-white dark:text-white"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {t(text)}
        </span>
      </button>
    </div>
  );
}