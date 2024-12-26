import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";
import BoxReveal from "@/components/magicui/box-reveal";
import { useTranslation } from "@/utils/Imports";

export default function Portfolio_Intro() {
  const { t } = useTranslation();

  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden bg-background">
      <div className=" px-3 container mx-auto">
        <div className="container flex gap-8 my-8 flex-col-reverse lg:flex-row ">
          <div className="m-auto max-w-[800px] font-montserrat">
            <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold italic mb-3">
                {t("portfolio-intro-title")}
              </h1>
            </BoxReveal>
            <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
              <p className="text-text-light text-xl">
                {t("portfolio-intro-para")}
              </p>
            </BoxReveal>
          </div>
          <div className="max-w-[407px] mx-auto">
            <img
              src="/images/logo.png"
              alt="logo"
              className="lg:w-[317px] w-[200px]"
            />
          </div>
        </div>
      </div>
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [20, 10],
          [10, 15],
          [15, 10],
          [20, 15],
          [16, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
}
