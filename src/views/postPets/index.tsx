import axios from "axios";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const PostPets = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    // console.log(data, "datasend");
    await axios
      .post("https://petstore.swagger.io/v2/pet", {
        name: data.name,
        category: { name: data.name },
        tags: [{ name: data.breed }],
        photoUrls: [data.photoUrls],
        status: data.status,
      })
      .then((response) => {
        // console.log(response.data, "res");
      });
    alert("Successfully Added pet");
    reset();
  };

  return (
    <PostPetsFormWrapper>
      <PostPetsForm onSubmit={handleSubmit(onSubmit)}>
        <Heading>Add a Pet</Heading>
        <LabelWrapper>
          <Label>name</Label>
        </LabelWrapper>
        <InputWrapper>
          <Input type="text" {...register("name", { required: true })} />
        </InputWrapper>
        {errors.name && <ErrorMsg>name is required</ErrorMsg>}
        <LabelWrapper>
          <Label>Category name</Label>
        </LabelWrapper>
        <InputWrapper>
          <Input type="text" {...register("name", { required: true })} />
        </InputWrapper>
        {errors.name && <ErrorMsg>Category is required</ErrorMsg>}
        <LabelWrapper>
          <Label>Breed</Label>
        </LabelWrapper>
        <InputWrapper>
          <Input type="text" {...register("breed", { required: true })} />
        </InputWrapper>
        {errors.breed && <ErrorMsg>Breed is required</ErrorMsg>}

        <LabelWrapper>
          <Label>photoUrls</Label>
        </LabelWrapper>
        <InputWrapper>
          <Input type="text" {...register("photoUrls", { required: true })} />
        </InputWrapper>
        {errors.photoUrls && <ErrorMsg>photoUrls is required</ErrorMsg>}

        <LabelWrapper>
          <Label>
            Available
            <RadioWrapper>
              <RadioInput
                type="radio"
                value="Available"
                {...register("status", { required: true })}
              />
              <RadioLabel>Yes</RadioLabel>
              <RadioInput
                type="radio"
                value="sold"
                {...register("status", { required: true })}
              />
              <RadioLabel>No</RadioLabel>
            </RadioWrapper>
          </Label>
        </LabelWrapper>
        {errors.status && <ErrorMsg>This field is required</ErrorMsg>}
        <AddButtonWrapper>
          <AddButton type="submit">Add Pet</AddButton>
        </AddButtonWrapper>
      </PostPetsForm>
    </PostPetsFormWrapper>
  );
};

export default PostPets;

// styles
const PostPetsFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e7e9eb;
  padding: 1vw;
`;
const Heading = styled.h1`
  text-align: center;
`;
const PostPetsForm = styled.form`
  border-radius: 3%;
`;
const LabelWrapper = styled.div`
  padding: 0.2vw 0.2vw;
  width: 30vw;
`;
const Label = styled.label`
  font-size: 1vw;
  font-weight: 700;
  color: #0b580b;
`;
const InputWrapper = styled.div`
  padding: 0.2vw 0.2vw;
`;
const Input = styled.input`
  width: 29vw;
  height: 3.5vh;
  border: none;
  border-radius: 8px;
  padding: 0.4vw;
  :focus {
    outline: none;
    background-color: #eab9c1;
    font-size: 1vw;
  }
`;

const AddButtonWrapper = styled.div`
  padding: 1vw 0;
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AddButton = styled.button`
  width: 30vw;
  padding: 0.6vw;
  background-color: green;
  border: none;
  color: white;
  font-size: 1vw;
  font-weight: 900;
  border: none;
  border-radius: 8px;
  :hover {
    cursor: pointer;
  }
`;
const ErrorMsg = styled.span`
  color: red;
  font-size: 0.7vw;
  margin-left: 10px;
`;

const RadioWrapper = styled.span`
  padding-left: 8vw;
  font-size: 1vw;
  font-weight: 700;
`;
const RadioLabel = styled.label``;

const RadioInput = styled.input``;
