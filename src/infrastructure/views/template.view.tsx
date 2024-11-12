import type { FC } from "hono/jsx";
import type * as Model from "@/model";

const SectionTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <h2 className="relative inline-block self-start text-xl font-extrabold italic after:absolute after:bottom-0.5 after:left-0 after:z-[-1] after:inline-block after:h-[6px] after:w-full after:bg-gradient-to-t after:from-primary after:to-secondary after:content-['']">
      {title}
    </h2>
  );
};

const Segment: FC<{
  segment: Model.Segment;
}> = ({ segment: { title, subtitle, text, list, tags } }) => {
  return (
    <section className="flex flex-col gap-6">
      {title && (
        <div className="flex flex-col">
          <h3 className="italic leading-4 text-black">{title}</h3>
          {subtitle && (
            <h4 className="text-sm leading-5 text-gray">{subtitle}</h4>
          )}
        </div>
      )}
      {list && (
        <ul className="flex flex-col gap-2">
          {list.map((item) => (
            <li className="flex items-start gap-x-3 text-sm leading-6 text-black">
              <span className="mt-[8.5px] flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black" />
              {item}
            </li>
          ))}
        </ul>
      )}
      {text && <p className="text-sm leading-6 text-black">{text}</p>}
      {tags && (
        <p className="text-sm italic leading-6 text-gray">{tags.join(" • ")}</p>
      )}
    </section>
  );
};

const Section: FC<{ section: Model.Section }> = ({
  section: { title, segments },
}) => {
  return (
    <section className="flex flex-grow-0 flex-col gap-4">
      <SectionTitle title={title} />
      <div className="flex flex-col gap-8">
        {segments.map((segment, index) => (
          <Segment key={index} segment={segment} />
        ))}
      </div>
    </section>
  );
};

const Languages: FC<{ languages: string[] }> = ({ languages }) => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-black italic text-white">Languages</h2>
      <ul className="flex flex-col">
        {languages.map((language) => (
          <li className="text-sm leading-6 text-white">{language}</li>
        ))}
      </ul>
    </section>
  );
};

const Skills: FC<{ skills: string[] }> = ({ skills }) => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-black italic text-white">Skills</h2>
      <p className="text-sm italic leading-6 text-white">
        {skills.join(" • ")}
      </p>
    </section>
  );
};

const Sidebar: FC<{ data: Omit<Model.Template, "sections"> }> = ({
  data: { name, position, languages, skills },
}) => {
  return (
    <aside className="flex h-full w-full flex-col justify-between">
      <div className="flex h-64 w-full flex-col items-center justify-center bg-[url('../public/images/logo-backdrop.svg')] bg-cover bg-no-repeat">
        <div className="flex flex-col items-start">
          <h1 className="relative z-10 inline-block text-6xl font-extrabold italic text-white after:absolute after:bottom-[6px] after:left-0 after:z-[-1] after:inline-block after:h-[6px] after:w-full after:bg-gradient-to-t after:from-primary after:to-secondary after:content-['']">
            {name}
          </h1>
          <p className="leading-tight text-white">{position}</p>
        </div>
      </div>
      <div className="flex flex-col gap-12 px-10 py-12">
        <Languages languages={languages} />
        <Skills skills={skills} />
      </div>
      <div className="flex h-[576px] w-full flex-col items-center justify-end bg-[url('../public/images/block-backdrop.svg')] bg-cover bg-no-repeat px-16 py-6">
        <div className="h-10 w-full bg-[url('../public/images/logo.svg')] bg-contain bg-no-repeat" />
      </div>
    </aside>
  );
};

const Template: FC<{ data: Model.Template }> = ({
  data: { name, languages, position, skills, sections },
}) => {
  return (
    <>
      <div className="relative grid grid-cols-10">
        <div className="col-span-3 bg-black">
          <Sidebar data={{ name, languages, position, skills }} />
        </div>
        <div className="col-span-7 px-16 py-20">
          <div className="flex flex-col gap-12">
            {sections.map((section, index) => (
              <Section key={index} section={section} />
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 right-8 h-44 w-44 bg-[url('../public/images/cube.png')] bg-contain bg-no-repeat opacity-5" />
      </div>
    </>
  );
};

const Root: FC<{ data: Model.Template }> = ({ data }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/public/styles.css" rel="stylesheet" />
        <title>Template</title>
      </head>
      <body>
        <Template data={data} />
      </body>
    </html>
  );
};

export default Root;
