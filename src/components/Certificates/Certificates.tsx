import { certificates } from "../../data/certificates";
import Title from "../Title/Title";

const Certificates = () => {
  return (
    <div className="mt-9">
      <Title text="Certificates" />
      {certificates.length !== 0 && (
        <ul className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-5 justify-items-center md:justify-items-start">
          {certificates.map((certificate) => (
            <li
              key={certificate.id}
              className="dark:text-dark-text w-certificate"
            >
              <h2 className="text-xl font-normal">{certificate.title}</h2>
              <h3>{certificate.school}</h3>
              <p className="text-sm">Issued: {certificate.issued}</p>
              <a
                href={certificate.credential}
                target="_blank"
                className="underline text-sm dark:hover:text-blue-500 hover:text-blue-500 transition-all duration-300"
              >
                {certificate.cerId}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Certificates;
