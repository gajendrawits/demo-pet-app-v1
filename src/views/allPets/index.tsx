import axios from "axios";
import { SinglePet } from "components/SinglePet";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Heading, MainWrapper } from "styles/Views/allPets";

const AllPets = () => {
  const [data, setData] = useState([]);
  console.log(data, "alldata");

  const categoryData = data.filter((item: any) => item.name === "fish");
  // const categoryData = data.filter((item: any) => item.name === "doggie");
  // const categoryData = data.filter((item: any) => item.name === "cats");
  console.log(categoryData, "ct");

  const PER_PAGE = 18;
  const [currentPage, setCurrentPage] = useState(1);

  //12,24,36
  const offset = currentPage * PER_PAGE;
  console.log("offset", offset);

  //total pages
  const pageCount = Math.ceil(data.length / PER_PAGE);
  console.log(pageCount, "pagecount");

  //perPage items(12 perpage)
  const Items = data.slice(offset, offset + PER_PAGE);
  console.log("items", Items);

  function handlePageClick({ selected: selectedPage }: any) {
    console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
  }

  const fetchPets = async () => {
    await axios
      .get("https://petstore.swagger.io/v2/pet/findByStatus?status=available")
      .then((response) => setData(response.data));
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <MainWrapper>
      <Heading>All Pets</Heading>
      <SinglePet data={Items} />
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </MainWrapper>
  );
};

export default AllPets;
