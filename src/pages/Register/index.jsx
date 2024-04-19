import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Heading, Text } from "../../components";
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title>Account Registration - Start Your Journey With Us</title>
        <meta
          name="description"
          content="Register for a new account using your email and username. Secure your login with a strong password. Join us and explore our services."
        />
      </Helmet>

      {/* registration section */}
      <div className="flex w-full justify-center bg-gradient1 px-14 py-[262px] md:p-5">
        <div className="flex w-[38%] flex-col items-center justify-center rounded-[30px] bg-white-A700 p-[29px] shadow-xs md:w-full sm:p-5">
          <a href="REGISTER" target="_blank" rel="noreferrer">
            <Text size="2xl" as="p" className="!font-play !text-black-900_01">
              REGISTER
            </Text>
          </a>
          <div className="relative mt-[-1px] h-[3px] w-[11%] bg-light_blue-A700" />
          <Heading as="h1" className="ml-5 mt-[5px] self-start md:ml-0">
            Email
          </Heading>
          <div className="mt-[17px] flex flex-col items-center self-stretch">
            <Input shape="square" type="email" name="email" placeholder={`Type your email here`} className="sm:pr-5" />
            <Heading as="h2" className="ml-2 mt-3.5 self-start md:ml-0">
              Username
            </Heading>
            <Input
              shape="square"
              type="text"
              name="userName"
              placeholder={`Type your username here`}
              className="mt-[17px] sm:pr-5"
            />
            <Heading as="h3" className="ml-2 mt-3.5 self-start md:ml-0">
              Password
            </Heading>
            <Input
              size="sm"
              shape="square"
              type="password"
              name="password"
              placeholder={`Type your password here`}
              className="mt-4 sm:pr-5"
            />
            <Heading as="h4" className="ml-2 mt-4 self-start md:ml-0">
              Ulangi Password
            </Heading>
            <Input
              shape="square"
              type="password"
              name="password"
              placeholder={`Type your password here`}
              className="mt-[15px] sm:pr-5"
            />
            <Link to="/pages/Login/index.jsx">
              <Button
                size="xs"
                variant="gradient"
                shape="square"
                color="cyan_A400_01_light_blue_A400"
                className="mt-[34px] min-w-[100px] font-bold"
              >
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
