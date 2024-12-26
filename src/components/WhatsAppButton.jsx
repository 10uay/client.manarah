import { useTranslation } from "../utils/Imports";

export default function WhatsAppButton({ text }) {
  const { t } = useTranslation();

  return (
    <>
      <a
        href="https://wa.me/+966500473509"
        className="flex items-center justify-center gap-3 w-fit base-btn-white bg-transparent"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className=" relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#49ceb4] to-[#044572] group-hover:from-[#49ceb4] group-hover:to-[#044572] hover:text-white dark:text-white">
          <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            {t(text)}
          </span>
        </button>
      </a>
    </>
  );
}
