import { useEffect, useState } from "react";
import axios from "axios";

const ArrayMap = () => {
  const [profiles, setProfiles] = useState([
    "https://images.dog.ceo/breeds/bulldog-boston/n02096585_2727.jpg",
  ]);

  const getDogImages = async () => {
    let imageSources = [];
    while (imageSources.length < 10) {
      const imageData = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      const dogImage = imageData.data.message;
      imageSources.push(dogImage);
    }
    return imageSources;
  };

  useEffect(() => {
    if (profiles.length < 10) {
      getDogImages().then((dogImages) => {
        setProfiles(dogImages);
      });
    }
  }, [profiles]);

  return (
    <>
      {profiles.map((dogImage, index) => {
        console.log({ index, dogImage });
        return (
          <div key={index} style={{margin: "20px"}}>
            <img key={index} src={dogImage} height="300px" width="300px" />
          </div>
        );
      })}
    </>
  );
};

export default ArrayMap;
