import Card from "../../components/Card";
import Hero from "../../components/Hero";
import image1 from "../../assets/1.jpeg";
import image2 from "../../assets/2.jpeg";
import image3 from "../../assets/4.jpeg";
import image4 from "../../assets/4.jpeg";
import image5 from "../../assets/5.jpeg";
import image11 from "../../assets/11.jpeg";
import image12 from "../../assets/12.jpeg";
import portrait from "../../assets/portrait.png";
import test from "../../assets/test.png";

const Home = () => {
  const imageUrls = [
    { url: image1, id: "image1", subtitle: "Subtitle 1", title: "Title 1" },
    { url: portrait, id: "image2", subtitle: "Subtitle 2", title: "Title 2" },
    { url: image4, id: "image3", subtitle: "Subtitle 3", title: "Title 3" },
    { url: image5, id: "image4", subtitle: "Subtitle 4", title: "Title 4" },
    { url: image1, id: "image1", subtitle: "Subtitle 1", title: "Title 1" },
    { url: image2, id: "image2", subtitle: "Subtitle 2", title: "Title 2" },
    { url: image4, id: "image3", subtitle: "Subtitle 3", title: "Title 3" },
    { url: image5, id: "image4", subtitle: "Subtitle 4", title: "Title 4" },
    { url: image5, id: "image4", subtitle: "Subtitle 4", title: "Title 4" },
  ] as any;
  return (
    <>
      <div>
        <Hero />
        <div className="flex flex-col align-center justify-center  mx-auto">
          <Card id="realisations" title="Réalisations">
            <div className="sm:columns-3 columns-1 gap-4">
              {imageUrls.map((item: any, index: any) => (
                <div key={index} className="mb-4 break-inside-avoid">
                  <img
                    className="w-full h-auto rounded-lg"
                    src={item.url}
                    alt={`gallery-photo-${index}`}
                  />
                </div>
              ))}
            </div>
          </Card>
          <Card id="about" title="A propos">
            <div className="flex flex-col sm:align-center sm:justify-center sm:flex-row md:align-start md:justify-start">
              <div>
                <img
                  className="rounded-lg h-80"
                  src={portrait}
                  alt="portrait"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-80 mt-5 ml-7">
                <p className="text-2xl ">
                  Je m’appelle Nicole Rome, je fais de la poterie depuis
                  quelques années maintenant. J’ai pas mal de réalisations à mon
                  actif.
                  <br /> <br />
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
