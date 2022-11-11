import axios from "axios";
import Loader from "components/Loader";
import { SinglePet } from "components/SinglePet";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import {
  Heading,
  MainWrapper,
  SelectBox,
  SelectOptions,
  Wrapper,
} from "styles/Views/allPets";

const AllPets = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  //12,24,36
  const offset = currentPage * PER_PAGE;

  //total pages
  const pageCount = Math.ceil(data.length / PER_PAGE);

  //perPage items(12 perpage)
  const Items = data.slice(offset, offset + PER_PAGE);

  function handlePageClick({ selected: selectedPage }: any) {
    console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
  }

  const handleClick = (e: any) => {
    let status = e.target.value;
    setLoading(true);
    axios
      .get(`https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`)
      .then((response) => setData(response.data));
    setLoading(false);
  };

  const fetchPets = async () => {
    setLoading(true);
    await axios
      .get(`https://petstore.swagger.io/v2/pet/findByStatus?status=available`)
      .then((response) => setData(response.data));
    setLoading(false);
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <MainWrapper>
      <Heading>Select By Status</Heading>
      <SelectBox onChange={handleClick}>
        <SelectOptions>-select-</SelectOptions>
        <SelectOptions>available</SelectOptions>
        <SelectOptions>sold</SelectOptions>
        <SelectOptions>pending</SelectOptions>
      </SelectBox>
      {loading ? (
        <Loader />
      ) : (
        <Wrapper>
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
        </Wrapper>
      )}
    </MainWrapper>
  );
};

export default AllPets;
