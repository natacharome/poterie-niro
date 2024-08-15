import Card from "../../components/Card";
import Hero from "../../components/Hero";
import portrait from "../../assets/portrait.png";
import { useGetPoteries } from "../../hooks/useGetPoteries";

const Home = () => {
  const { data, isLoading, isError, error } = useGetPoteries();

  if (isLoading) {
    return <div>Chargement des poteries...</div>;
  }

  if (isError) {
    return <div>Erreur lors du chargement des poteries : {error.message}</div>;
  }

  return (
    <>
      <div>
        <Hero />
        <div className="flex flex-col align-center justify-center  mx-auto">
          <Card id="realisations" title="Réalisations">
            <div className="sm:columns-3 columns-1 gap-4">
              {data?.map((item: any, index: any) => (
                <div key={index} className="mb-4 break-inside-avoid">
                  {item.fields.Main ? (
                    <img
                      className="w-full h-auto rounded-lg"
                      src={item.fields.Main[0].url}
                      alt={`gallery-photo-${index}`}
                    />
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
            </div>
          </Card>
          <Card id="about" title="A propos">
            <div className="flex flex-col sm:items-center sm:justify-center sm:flex-row md:items-center md:justify-start">
              <div className="w-[50%] object-contain">
                <img
                  className="rounded-lg h-80"
                  src={portrait}
                  alt="portrait"
                />
              </div>
              <div className="flex flex-col items-start justify-center mt-5 sm:ml-24 ml-0">
                <p className="text-2xl">
                  Je m’appelle Nicole Rome, je fais de la poterie depuis
                  quelques années maintenant. J’ai pas mal de réalisations à mon
                  actif.
                </p>
                <p className="text-2xl mt-10">
                  J’ai crée cette vitrine pour me permettre d’exposer mon
                  travail. N’hésitez pas à me contacter par mail si une poterie
                  vous intéresse
                </p>
                <a
                  className="text-primary bg-secondary hover:bg-primary hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-6"
                  href="mailto:nicole.rome74@gmail.com"
                >
                  Contactez-moi
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
