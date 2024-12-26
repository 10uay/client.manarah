import WhatsAppButton from "../WhatsAppButton";
import { useTranslation } from "@/utils/Imports";

export default function M_Game({ info, domain }) {
  const { t } = useTranslation();

  return (
    <div
      className="container mx-auto grid gap-8 lg:gap-14 py-20 px-3 grid-cols-1 lg:grid-cols-2 items-center !bg-cover rounded-3xl mb-11 lg:mb-20 !bg-no-repeat"
      style={{
        background: "url('/images/Game.png')",
      }}
    >
      <div className="rounded-2xl">
        <img
          src={`${domain}/${info?.img}`}
          alt="Why the Game Development Application with Al Almiya Al Hura."
          className="relative rounded-2xl w-full object-contain max-h-[650px]"
        />
      </div>
      <div className="space-y-5">
        <h2 className="text-2xl md:text-3xl lg:text-4xl lg:leading-[2.8rem] text-text font-bold leading-[2.5rem] capitalize">
          {t(info?.title)}
        </h2>
        <div className="text-text-light max-w-[500px]">{t(info?.para)}</div>
        <ul className="flex w-full gap-1 !mt-11">
          <li
            className="text-text mb-3 last:mb-0 space-y-5"
            style={{ width: "60%" }}
          >
            <h2 className="font-bold text-5xl">60%</h2>
            <h2>
              <span>ui/ux design</span>
            </h2>
            <p
              className="h-3 w-full rounded-full overflow-hidden"
              style={{ background: "rgb(98, 115, 251)" }}
            ></p>
          </li>
          <li
            className="text-text mb-3 last:mb-0 space-y-5"
            style={{ width: "40%" }}
          >
            <h2 className="font-bold text-5xl">40%</h2>
            <h2>
              <span>development</span>
            </h2>
            <p
              className="h-3 w-full rounded-full overflow-hidden"
              style={{ background: "rgb(255, 122, 114)" }}
            ></p>
          </li>
        </ul>
        <WhatsAppButton text="get-service-now" />
      </div>
    </div>
  );
}
