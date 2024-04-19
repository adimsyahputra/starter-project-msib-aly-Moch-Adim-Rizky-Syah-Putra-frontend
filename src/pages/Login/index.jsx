import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Input, Heading } from "../../components";
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>User Login - Secure Access to Your Account</title>
        <meta
          name="description"
          content="Log in to access your account with ease. Enter your email and password to proceed. Don't have an account yet? Sign up today."
        />
      </Helmet>

      {/* login section */}
      <div className="flex w-full justify-center bg-gradient1 px-14 py-[312px] md:p-5">
        <div className="flex w-[38%] flex-col items-center rounded-[30px] bg-white-A700 p-[17px] shadow-xs md:w-full">
          <a href="LOGIN" target="_blank" rel="noreferrer" className="mt-3">
            {/* login link section */}
            <Text size="2xl" as="p" className="!font-play !text-black-900_01">
              LOGIN
            </Text>
          </a>

          {/* separator line section */}
          <div className="relative mt-[-1px] h-[3px] w-[11%] bg-light_blue-A700" />
          <div className="mt-8 flex w-[89%] flex-col items-center md:w-full">
            {/* email input section */}
            <div className="flex flex-col items-start gap-2.5 self-stretch">
              <Heading as="h1" className="ml-2 md:ml-0">
                Email
              </Heading>
              <Input
                shape="square"
                type="email"
                name="email"
                placeholder={`Type your email here`}
                className="sm:pr-5"
              />
            </div>

            {/* password input section */}
            <Heading as="h2" className="ml-2 mt-9 self-start md:ml-0">
              Password
            </Heading>
            <Input
              shape="square"
              type="password"
              name="password"
              placeholder={`Type your  password here`}
              className="mt-[17px] sm:pr-5"
            />
            <Link to="/pages/profilepage/index.jsx">
              {/* login button section */}
              <Button
                size="xs"
                variant="gradient"
                shape="square"
                color="cyan_A400_01_light_blue_A400"
                className="mt-[27px] min-w-[100px] font-bold sm:px-5"
              >
                LOGIN
              </Button>
            </Link>
            <Link to="/pages/registration/index.jsx">
              {/* registration prompt section */}
              <Text size="s" as="p" className="mt-[29px] !text-blue-A400">
                Don't have an account yet?
              </Text>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}