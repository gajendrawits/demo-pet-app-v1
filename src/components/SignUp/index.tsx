import styled from "styled-components";
import { useForm } from "react-hook-form";
interface Props {
  setShow: (value: boolean) => void;
}
function SignUp({ setShow }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    alert("Successfully created user");
    console.log(data);
    setShow(true);
  };
  return (
    <SignupMainWrapper>
      <SignupWrapper>
        <SignupHeadingWrapper>
          <SignupHeading>Sign up</SignupHeading>
        </SignupHeadingWrapper>

        <SignupForm onSubmit={handleSubmit(onSubmit)}>
          <LabelWrapper>
            <Label>Username</Label>
          </LabelWrapper>
          <InputWrapper>
            <Input type="text" {...register("username", { required: true })} />
          </InputWrapper>
          {errors.email && <ErrorMsg>userName is required</ErrorMsg>}
          <LabelWrapper>
            <Label>Email</Label>
          </LabelWrapper>
          <InputWrapper>
            <Input type="Email" {...register("email", { required: true })} />
          </InputWrapper>
          {errors.email && <ErrorMsg>email is required</ErrorMsg>}
          <LabelWrapper>
            <Label>Password</Label>
          </LabelWrapper>
          <InputWrapper>
            <Input
              type="Password"
              {...register("password", { required: true })}
            />
          </InputWrapper>
          {errors.password && <ErrorMsg>password is required</ErrorMsg>}
          <LabelWrapper>
            <Label>Phone</Label>
          </LabelWrapper>
          <InputWrapper>
            <Input type="Number" {...register("number", { required: true })} />
          </InputWrapper>
          {errors.number && <ErrorMsg>email is required</ErrorMsg>}
          <SignupButtonWrapper>
            <SignupButton type="submit">Sign up</SignupButton>
          </SignupButtonWrapper>
        </SignupForm>
        <HaveAnAccWrapper>
          <Text>Already have an account? </Text>
          <TextLink onClick={() => setShow(true)}>Login</TextLink>
        </HaveAnAccWrapper>
      </SignupWrapper>
    </SignupMainWrapper>
  );
}

export default SignUp;

// styles

const SignupMainWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SignupWrapper = styled.div`
  background-color: #e7e9eb;
  padding: 3vw 4vw;
  border-radius: 1vw;
`;
const SignupHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignupHeading = styled.h2``;

const SignupForm = styled.form``;

const LabelWrapper = styled.div`
  padding: 0.2vw 0.2vw;
`;
const Label = styled.label`
  font-size: 1vw;
`;
const InputWrapper = styled.div`
  padding: 0.2vw 0.2vw;
`;
const Input = styled.input`
  width: 16vw;
  height: 3.5vh;
  border: none;
  border-radius: 8px;
`;

const SignupButtonWrapper = styled.div`
  padding: 1vw 0;
  width: 16.3vw;
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SignupButton = styled.button`
  width: 16.3vw;
  padding: 0.6vw;
  background-color: #2e85f7;
  border: none;
  color: white;
  font-size: 1vw;
  font-weight: 900;
  border: none;
  border-radius: 8px;
`;

const HaveAnAccWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.span`
  font-size: 1vw;
`;
const TextLink = styled.span`
  font-size: 1vw;
  color: #1877f2;
  cursor: pointer;
`;

const ErrorMsg = styled.span`
  color: red;
  font-size: 0.7vw;
  margin-left: 10px;
`;
