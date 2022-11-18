import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
interface Props {
  setShow: (value: boolean) => void;
}

interface FormInputs {
  userName: string;
  email: string;
  password: string;
  number: number;
}

const schema = yup.object().shape({
  userName: yup.string().required("Username is a required field"),
  email: yup.string().email().required("Email is a required field"),
  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      // "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      "Password must contain at least 8 characters"
    ),
});

const SignUp = ({ setShow }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    alert("Successfully created user");
    // console.log(data);
    setShow(true);
  };
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  return (
    <SignupMainWrapper>
      <SignupWrapper>
        <BackButton onClick={handleBack}>⬅Back</BackButton>
        <SignupHeadingWrapper>
          <SignupHeading>Sign up</SignupHeading>
        </SignupHeadingWrapper>

        <SignupForm onSubmit={handleSubmit(onSubmit)}>
          <LabelWrapper>
            <Label>Username</Label>
          </LabelWrapper>
          <InputWrapper>
            <Input type="text" {...register("userName")} />
          </InputWrapper>
          {errors.userName && <ErrorMsg>{errors.userName?.message}</ErrorMsg>}
          <LabelWrapper>
            <Label>Email</Label>
          </LabelWrapper>
          <InputWrapper>
            <Input type="Email" {...register("email")} />
          </InputWrapper>
          {errors.email && <ErrorMsg>{errors.email?.message}</ErrorMsg>}
          <LabelWrapper>
            <Label>Password</Label>
          </LabelWrapper>
          <InputWrapper>
            <Input type="Password" {...register("password")} />
          </InputWrapper>
          {errors.password && <ErrorMsg>{errors.password?.message}</ErrorMsg>}
          <LabelWrapper>
            <Label>Phone</Label>
          </LabelWrapper>
          <InputWrapper>
            <Input type="Number" {...register("number")} />
          </InputWrapper>
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
};

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

const BackButton = styled.button`
  background-color: #2e85f7;
  border-radius: 5%;
  border: none;
  color: white;
  font-size: 0.8vw;
  font-weight: 500;
  :hover {
    cursor: pointer;
    background-color: red;
    color: black;
    transform: scale(1.2);
  }
`;

const ErrorMsg = styled.span`
  color: red;
  font-size: 0.7vw;
  margin-left: 10px;
`;
