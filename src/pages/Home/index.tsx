import React, { useState, useMemo } from "react";
import Card from "../../components/Card";
import Hero from "../../components/Hero";
import portrait from "../../assets/portrait.png";
import { useGetPoteries } from "../../hooks/useGetPoteries";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Home = () => {
  const { data, isLoading, isError, error } = useGetPoteries();
  const [selectedImages, setSelectedImages] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Tout");

  const categories = useMemo(() => {
    if (!data) return ["Tout"];
    const uniqueCategories = data.reduce((acc, item) => {
      const category = item.fields.Category;
      if (category && !acc.includes(category)) {
        acc.push(category);
      }
      return acc;
    }, []);
    return ["Tout", ...uniqueCategories];
  }, [data]);

  const filteredData = useMemo(() => {
    if (!data) return [];
    if (selectedCategory === "Tout") return data;
    return data.filter((item) => item.fields.Category === selectedCategory);
  }, [data, selectedCategory]);

  if (isLoading) {
    return <div>Chargement des poteries...</div>;
  }

  if (isError) {
    return <div>Erreur lors du chargement des poteries : {error.message}</div>;
  }

  const handleImageClick = (images: any) => {
    if (!images || images.length === 0) return;
    const galleryImages = images.map((img: any) => ({
      original: img.url,
      thumbnail: img.url,
    }));
    setSelectedImages(galleryImages);
  };

  const closeGallery = () => {
    setSelectedImages(null);
  };

  return (
    <>
      <div>
        <Hero />

        <div className="flex flex-col align-center justify-center mx-auto">
          <Card id="realisations" title="Réalisations">
            <div className="flex mb-4 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 m-2 rounded-lg transition-colors duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-black hover:bg-primary hover:text-white"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="sm:columns-3 columns-1 gap-4">
              {filteredData.map((item, index) => (
                <div key={index} className="mb-4 break-inside-avoid">
                  {item.fields.Main ? (
                    <img
                      className="w-full h-auto rounded-lg cursor-pointer"
                      src={item.fields.Main[0].thumbnails.large.url}
                      alt={`gallery-photo-${index}`}
                      onClick={() => handleImageClick(item.fields.Images)}
                    />
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
            </div>
          </Card>
          <Card id="about" title="A propos">
            <div className="flex flex-col md:items-center md:flex-row">
              <div className="flex">
                <img
                  className="rounded-lg object-cover max-w-80"
                  src={portrait}
                  alt="portrait"
                />
              </div>

              <div className="flex flex-col items-start justify-start mt-5 md:ml-9 ml-0 max-w-5xl">
                <p className="text-xl md:text-2xl">
                  Je m’appelle Nicole Rome, je fais de la poterie depuis plus de
                  20 ans, cette activité me permet de révéler ma créactivité au
                  travers de différentes réalisations. Je fais de la poterie
                  dans la région Annecienne avec Sylvie Debacker comme
                  accompagnante.
                </p>
                <p className="text-xl md:text-2xl mt-10">
                  J’ai crée cette vitrine pour me permettre d’exposer mon
                  travail. N’hésitez pas à me contacter par mail si une poterie
                  vous intéresse.
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

      {selectedImages && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center z-50 pt-7">
          <button
            className="absolute top-4 right-4 text-white text-xl"
            onClick={closeGallery}
          >
            X
          </button>
          <div className="w-3/4 h-3/4">
            <ImageGallery
              items={selectedImages}
              showThumbnails={false}
              showBullets={true}
              showPlayButton={false}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
