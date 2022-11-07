import axios from "axios";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const PostPets = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    console.log(data, "datasend");
    await axios
      .post("https://petstore.swagger.io/v2/pet", {
        name: data.userName,
        category: { name: data.name },
        tags: [{ name: data.breed }],
        photoUrls: [data.photoUrls],
        status: data.status,
      })
      .then((response) => {
        console.log(response.data, "res");
      });
    alert("Successfully Added pet");
  };

  return (
    <PostPetsFormWrapper>
      <PostPetsForm onSubmit={handleSubmit(onSubmit)}>
        <LabelWrapper>
          <Label>owner name</Label>
        </LabelWrapper>
        <InputWrapper>
          <Input type="text" {...register("ownerName", { required: true })} />
        </InputWrapper>
        {errors.ownerName && <ErrorMsg>OwnerName is required</ErrorMsg>}
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
          <Label>Image url</Label>
        </LabelWrapper>
        <InputWrapper>
          <Input type="text" {...register("ImageUrl", { required: true })} />
        </InputWrapper>
        {errors.ImageUrl && <ErrorMsg>ImageUrl is required</ErrorMsg>}

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
                value="notAvailable"
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
const PostPetsFormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e7e9eb;
  padding: 1vw;
`;
const PostPetsForm = styled.form`
  width: 20vw;
  border-radius: 3%;
`;
const LabelWrapper = styled.div`
  padding: 0.2vw 0.2vw;
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
  width: 30vw;
  height: 3.5vh;
  border: none;
  border-radius: 8px;
`;

const AddButtonWrapper = styled.div`
  padding: 1vw 0;
  width: 30vw;
  margin-left: 5px;
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
`;
const ErrorMsg = styled.span`
  color: red;
  font-size: 0.7vw;
  margin-left: 10px;
`;

const RadioWrapper = styled.span`
  margin-left: 10vw;
  font-size: 1vw;
  font-weight: 700;
`;
const RadioLabel = styled.label``;

const RadioInput = styled.input``;
