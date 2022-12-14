import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Props {
  setShow: (value: boolean) => void;
}

interface FormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
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

function Login({ setShow }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    // console.log(data);
    axios
      .post("https://sql-dev-india.thewitslab.com:3003/auth/login", data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        let token = localStorage.getItem("token");
        // console.log(token);
        token ? navigate("/") : navigate("/loginAndsignup");
      });
  };

  const handleBack = () => {
    navigate("/");
  };
  // https://sql-dev-india.thewitslab.com:3003/auth/login
  // {"email":"narinder.singla@thewitslab.com","password":"Singl@8284"}
  return (
    <LoginMainWrapper>
      <LoginWrapper>
        <BackButton onClick={handleBack}>⬅Back</BackButton>
        <LoginHeadingWrapper>
          <LoginHeading>Log in</LoginHeading>
        </LoginHeadingWrapper>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
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
          <LoginButtonWrapper>
            <LoginButton type="submit">Login</LoginButton>
          </LoginButtonWrapper>
        </LoginForm>
        <NotHaveAccWrapper>
          <Text>Don't have an account? </Text>
          <TextLink onClick={() => setShow(false)}> Signup</TextLink>
        </NotHaveAccWrapper>
      </LoginWrapper>
    </LoginMainWrapper>
  );
}
export default Login;

// styles

const LoginMainWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginWrapper = styled.div`
  background-color: #e7e9eb;
  padding: 4vw 2vw;
  border-radius: 1vw;
`;
const LoginHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginHeading = styled.h2``;

const LoginForm = styled.form``;
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

const LoginButtonWrapper = styled.div`
  padding: 1vw 0;
  width: 16.3vw;
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginButton = styled.button`
  width: 16.3vw;
  padding: 0.6vw;
  background-color: #2e85f7;
  color: white;
  font-size: 1vw;
  font-weight: 900;
  border: none;
  border-radius: 8px;
`;

const NotHaveAccWrapper = styled.div`
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
