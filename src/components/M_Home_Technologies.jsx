import { useTranslation } from "@/utils/Imports";
import BoxReveal from "@/components/magicui/box-reveal";

export default function M_Home_Technologies() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto min-h-fit pb-11 lg:pb-20 mt-10">
      <h2 className="text-4xl lg:text-5xl mb-2 lg:leading-[3rem] text-text font-bold mleading-[2.5rem] animated wow bounceIn">
        <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
          {t("technologies-and-tools")}
        </BoxReveal>
      </h2>
      <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
        <p className="mb-7 text-text-light max-w-[500px] animated wow bounceIn">
          {t("turning-your-ideas-into-cutting-edge")}{" "}
        </p>
      </BoxReveal>
      <div className="grid grid-col lg:grid-cols-2 gap-5">
        <div className="rounded-xl border p-5 animated wow fadeInUp lg:text-start text-center">
          <h3 className="text-2xl font-bold text-text mb-7">{t("design")}</h3>
          <div className="flex flex-wrap gap-8 items-center lg:justify-start justify-center">
            <a
              className="flex flex-col items-center justify-center animated wow bounceIn"
              target="_blank"
              href="https://helpx.adobe.com/mena_ar/xd/get-started.html"
            >
              <img
                src="/images/Adobe-XD.webp"
                width="55"
                height="55"
                alt="Adobe XD Design"
                sizes="55px"
                className="mb-2"
              />
              <h2 className="mt-auto text-text text-sm">Adobe XD</h2>
            </a>
            <a
              className="flex flex-col items-center justify-center animated wow bounceIn"
              target="_blank"
              href="https://www.adobe.com/eg_en/products/illustrator.html"
            >
              <img
                src="/images/illustrator.webp"
                width="55"
                height="55"
                alt="illustrator Design"
                sizes="55px"
                className="mb-2"
              />
              <h2 className="mt-auto text-text text-sm">illustrator</h2>
            </a>
            <a
              className="flex flex-col items-center justify-center animated wow bounceIn"
              target="_blank"
              href="https://www.adobe.com/mena_ar/products/photoshop.html"
            >
              <img
                src="/images/Photoshop.webp"
                width="55"
                height="55"
                alt="Photoshop Design"
                sizes="55px"
                className="mb-2"
              />
              <h2 className="mt-auto text-text text-sm">Photoshop</h2>
            </a>
            <a
              className="flex flex-col items-center justify-center animated wow bounceIn"
              target="_blank"
              href="https://www.figma.com/"
            >
              <img
                src="/images/Figma.webp"
                width="55"
                height="55"
                alt="figma Design"
                sizes="55px"
                className="mb-2"
              />
              <h2 className="mt-auto text-text text-sm">Figma</h2>
            </a>
          </div>
        </div>
        <div className="rounded-xl border p-5 animated wow fadeInUp lg:text-start text-center">
          <h3 className="text-2xl font-bold text-text mb-7">
            {t("mobile-development")}
          </h3>
          <div className="flex flex-wrap gap-8 items-center lg:justify-start justify-center">
            <a
              className="flex flex-col items-center justify-center animated wow bounceIn"
              target="_blank"
              href="https://developer.apple.com/swift/"
            >
              <img
                src="/images/Swift.webp"
                width="55"
                height="55"
                alt="Swift Mobile Development"
                sizes="55px"
                className="mb-2"
              />
              <h2 className="mt-auto text-text text-sm">Swift</h2>
            </a>
            <a
              className="flex flex-col items-center justify-center animated wow bounceIn"
              target="_blank"
              href="https://developer.android.com/studio"
            >
              <img
                src="/images/Android-Studio.webp"
                width="55"
                height="55"
                alt="Android Studio Mobile Development"
                sizes="55px"
                className="mb-2"
              />
              <h2 className="mt-auto text-text text-sm">Android Studio</h2>
            </a>
            <a
              className="flex flex-col items-center justify-center animated wow bounceIn"
              target="_blank"
              href="https://reactnative.dev/"
            >
              <img
                src="/images/React-Native.png"
                width="55"
                height="55"
                alt="React Mobile Development"
                sizes="55px"
                className="mb-2"
              />
              <h2 className="mt-auto text-text text-sm">React Native</h2>
            </a>
            <a
              className="flex flex-col items-center justify-center animated wow bounceIn"
              target="_blank"
              href="https://kotlinlang.org/"
            >
              <img
                src="/images/Kotlin.webp"
                width="55"
                height="55"
                alt="Kotlin Mobile Development"
                sizes="55px"
                className="mb-2"
              />
              <h2 className="mt-auto text-text text-sm">Kotlin</h2>
            </a>
            <a
              className="flex flex-col items-center justify-center animated wow bounceIn"
              target="_blank"
              href="https://flutter.dev/"
            >
              <img
                src="/images/Flutter.webp"
                width="55"
                height="55"
                alt="Flutter Mobile Development"
                sizes="55px"
                className="mb-2"
              />
              <h2 className="mt-auto text-text text-sm">Flutter</h2>
            </a>
            <a
              className="flex flex-col items-center justify-center animated wow bounceIn"
              target="_blank"
              href="https://dart.dev/"
            >
              <img
                src="/images/Dart.webp"
                width="55"
                height="55"
                alt="Dart Mobile Development"
                sizes="55px"
                className="mb-2"
              />
              <h2 className="mt-auto text-text text-sm">Dart</h2>
            </a>
          </div>
        </div>
        <div className="rounded-xl border p-5 animated wow fadeInUp lg:text-start text-center">
          <h3 className="text-2xl font-bold text-text mb-7">{t("back-end")}</h3>
          <div className="flex flex-wrap gap-8 items-center lg:justify-start justify-center">
            <a
              className="flex flex-col items-center justify-center animated wow bounceIn"
              target="_blank"
              href="https://www.php.net/"
            >
              <img
                src="/images/PHP.png"
                width="55"
                height="55"
                alt="PHP Back-End"
                sizes="55px"
                className="mb-2"
              />
              <h2 className="mt-auto text-text text-sm">PHP</h2>
            </a>
            <a
              className="flex flex-col items-center justify-center animated wow bounceIn"
              target="_blank"
              href="https://nodejs.org/en"
            >
              <img
                src="/images/Node-js.webp"
                width="55"
                height="55"
                alt="Node js Back-End"
                sizes="55px"
                className="mb-2"
              />
              <h2 className="mt-auto text-text text-sm">Node js</h2>
            </a>
            <a
              className="flex flex-col items-center justify-center animated wow bounceIn"
              target="_blank"
              href="https://www.ruby-lang.org/en/"
            >
              <img
                src="/images/Ruby.webp"
                width="55"
                height="55"
                alt="Ruby Back-End"
                sizes="55px"
                className="mb-2"
              />
              <h2 className="mt-auto text-text text-sm">Ruby</h2>
            </a>
            <a
              className="flex flex-col items-center justify-center animated wow bounceIn"
              target="_blank"
              href="https://dotnet.microsoft.com/en-us/"
            >
              <img
                src="/images/Dot-Net.webp"
                width="55"
                height="55"
                alt="Dot Net Back-End"
                sizes="55px"
                className="mb-2"
              />
              <h2 className="mt-auto text-text text-sm">Dot Net</h2>
            </a>
            <a
              className="flex flex-col items-center justify-center animated wow bounceIn"
              target="_blank"
              href="https://www.python.org/"
            >
              <img
                src="/images/Python.webp"
                width="55"
                height="55"
                alt="Python Back-End"
                sizes="55px"
                className="mb-2"
              />
              <h2 className="mt-auto text-text text-sm">Python</h2>
            </a>
            <a
              className="flex flex-col items-center justify-center animated wow bounceIn"
              target="_blank"
              href="https://www.java.com/en/"
            >
              <img
                src="/images/Java.webp"
                width="55"
                height="55"
                alt="Java Back-End"
                sizes="55px"
                className="mb-2"
              />
              <h2 className="mt-auto text-text text-sm">Java</h2>
            </a>
          </div>
        </div>
        <div className="rounded-xl border p-5 animated wow fadeInUp lg:text-start text-center">
          <h3 className="text-2xl font-bold text-text mb-7">
            {t("front-end")}
          </h3>
          <div className="flex flex-wrap gap-8 items-center lg:justify-start justify-center">
            <a
              className="flex flex-col items-center justify-center animated wow bounceIn"
              target="_blank"
              href="https://www.javascript.com/"
            >
              <img
                src="/images/JavaScript.webp"
                width="55"
                height="55"
                alt="JavaScript Front-End"
                sizes="55px"
                className="mb-2"
              />
              <h2 className="mt-auto text-text text-sm">JavaScript</h2>
            </a>
            <a
              className="flex flex-col items-center justify-center animated wow bounceIn"
              target="_blank"
              href="https://angular.io/"
            >
              <img
                src="/images/Angular.webp"
                width="55"
                height="55"
                alt="Angular Front-End"
                sizes="55px"
                className="mb-2"
              />
              <h2 className="mt-auto text-text text-sm">Angular</h2>
            </a>
            <a
              className="flex flex-col items-center justify-center animated wow bounceIn"
              target="_blank"
              href="https://react.dev/"
            >
              <img
                src="/images/React-js.webp"
                width="55"
                height="55"
                alt="React js Front-End"
                sizes="55px"
                className="mb-2"
              />
              <h2 className="mt-auto text-text text-sm">React js</h2>
            </a>
            <a
              className="flex flex-col items-center justify-center animated wow bounceIn"
              target="_blank"
              href="https://vuejs.org/"
            >
              <img
                src="/images/Vue-js.webp"
                width="55"
                height="55"
                alt="Vue js Front-End"
                sizes="55px"
                className="mb-2"
              />
              <h2 className="mt-auto text-text text-sm">Vue js</h2>
            </a>
            <a
              className="flex flex-col items-center justify-center animated wow bounceIn"
              target="_blank"
              href="https://en.wikipedia.org/wiki/CSS"
            >
              <img
                src="/images/Css.webp"
                width="55"
                height="55"
                alt="Css Front-End"
                sizes="55px"
                className="mb-2"
              />
              <h2 className="mt-auto text-text text-sm">Css</h2>
            </a>
            <a
              className="flex flex-col items-center justify-center animated wow bounceIn"
              target="_blank"
              href="https://en.wikipedia.org/wiki/HTML"
            >
              <img
                src="/images/Html.webp"
                width="55"
                height="55"
                alt="Html Front-End"
                sizes="55px"
                className="mb-2"
              />
              <h2 className="mt-auto text-text text-sm">Html</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
