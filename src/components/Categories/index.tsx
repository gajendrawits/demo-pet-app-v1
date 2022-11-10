import axios from "axios";
import Loader from "components/Loader";
import { SinglePet } from "components/SinglePet";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "views/footer";
import NavBar from "views/navBar";

const Categories = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(data, "cAllData");

  const { category } = useParams();
  console.log(category, "categorywise");

  const categoryData = data.filter((item: any) => item.name === category);
  console.log(categoryData, "filteredData");

  const fetchPets = async () => {
    setLoading(true);
    await axios
      .get("https://petstore.swagger.io/v2/pet/findByStatus?status=available")
      .then((response) => setData(response.data));
    setLoading(false);
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <>
      <NavBar />
      {loading ? (
        <Loader />
      ) : (
        <SinglePet data={categoryData} category={category} />
      )}

      <Footer />
    </>
  );
};

export default Categories;
