import Loader from "components/Loader";
import { SinglePet } from "components/SinglePet";
import { useEffect, useState } from "react";
import axiosInstance from "services/axiosInstance";

import ReactPaginate from "react-paginate";
import {
  Heading,
  HeadingAndSelectWrapper,
  MainWrapper,
  SelectBox,
  SelectOptions,
  SelectWrapper,
  StatusText,
  Wrapper,
  NoPetHeading,
} from "styles/Views/allPets";

const AllPets = () => {
  const [data, setData] = useState([]);
  console.log(data, "sold data");
  const [loading, setLoading] = useState(false);

  const PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  //12,24,36
  const offset = currentPage * PER_PAGE;

  //total pages
  const pageCount = Math.ceil(data.length / PER_PAGE);

  //perPage items(12 perpage)
  const Items = data.slice(offset, offset + PER_PAGE);
  console.log("items", Items);

  function handlePageClick({ selected: selectedPage }: any) {
    console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
  }

  const fetchPets = async () => {
    setLoading(true);
    await axiosInstance
      .get(`/findByStatus?status=available`)
      .then((response) => setData(response.data));
    setLoading(false);
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const handleClick = async (e: any) => {
    let status = e.target.value;
    console.log(status, "e target");
    setLoading(true);
    await axiosInstance
      .get(`/findByStatus?status=${status}`)
      .then((response) => setData(response.data));
    setLoading(false);
  };

  return (
    <MainWrapper>
      <HeadingAndSelectWrapper>
        <Heading>Pets</Heading>
        <SelectWrapper>
          <StatusText>Select by status</StatusText>
          <SelectBox onChange={handleClick}>
            <SelectOptions>-select-</SelectOptions>
            <SelectOptions>available</SelectOptions>
            <SelectOptions>sold</SelectOptions>
            <SelectOptions>pending</SelectOptions>
          </SelectBox>
        </SelectWrapper>
      </HeadingAndSelectWrapper>
      {loading ? (
        <Loader />
      ) : (
        <Wrapper>
          {Items.length === 0 ? (
            <NoPetHeading>No Pets To Show</NoPetHeading>
          ) : (
            <>
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
            </>
          )}
        </Wrapper>
      )}
    </MainWrapper>
  );
};

export default AllPets;
