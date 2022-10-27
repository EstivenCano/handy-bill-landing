import { UseTranslation, useTranslation } from 'next-i18next';

export const About = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="flex w-full pt-14 md:pt-16 min-h-screen overflow-hidden flex-col justify-evenly space-y-5 px-4 md:px-10 bg-gradient-to-tr from-background via-background to-primary-700/40"
    >
      <span>
        <h1 className="m-auto font-bold text-4xl md:text-6xl max-w-lg text-center text-shadow">
          {t('about:takeYourBusiness')}
        </h1>
        <h2 className="m-auto font-bold  text-4xl md:text-6xl max-w-lg text-center text-transparent bg-clip-text bg-gradient-to-r from-primary-100 to-primary-600 text-shadow">
          {t('about:toNextLevel')}
        </h2>
        <hr className="border-transparent mt-5 bg-primary-700 border-2 w-full" />
      </span>
      <div className="flex lg:flex-row flex-col m-auto space-y-5 lg:space-y-0 lg:space-x-5">
        <article className="flex flex-col self-stretch space-y-5 bg-gradient-to-tr from-foreground/20 to-primary/20 py-5 px-5 rounded-xl border-content/10 border-2 max-w-lg">
          <h2 className="font-bold max text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-bl from-primary-100 to-primary-600 text-shadow">
            Fast
          </h2>
          <hr className="border-content/20" />
          <p className="text-md text-justify">
            Optimizada para tener el mayor performance del mercado, con
            excelentes resultados incluso con un gran número de registros por
            minuto.
          </p>
        </article>
        <article className="flex flex-col self-stretch space-y-5 bg-gradient-to-tr from-foreground/20 to-primary/20 py-5 px-5 rounded-xl border-content/10 border-2 max-w-lg">
          <h2 className="font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-bl from-primary-100 to-primary-600 text-shadow">
            Modern
          </h2>
          <hr className="border-content/20" />
          <p className="text-md text-justify">
            Interfaz gráfica moderna y amigable con el usuario, además, con
            diferentes temas de aplicación para cuidar la salud visual de los
            usuarios.
          </p>
        </article>
        <article className="flex flex-col self-stretch space-y-5 bg-gradient-to-tr from-foreground/20 to-primary/20 py-5 px-5 rounded-xl border-content/10 border-2 max-w-lg">
          <h2 className="font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-bl from-primary-100 to-primary-600 text-shadow">
            Easy to use
          </h2>
          <hr className="border-content/20" />
          <p className="text-md text-justify">
            Opciones sencillas e intuitivas para una mejor experiencia de
            usuario, funcionalidades faciles de aprender logrando un manejo ágil
            de la plataforma.
          </p>
        </article>
      </div>
    </section>
  );
};
