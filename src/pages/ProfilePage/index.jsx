import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";

export default function ProfilePagePage() {
  return (
    <>
      <Helmet>
        <title>User Profile - Adim Syahputra, Developer & Designer</title>
        <meta
          name="description"
          content="Discover Adim Syahputra's professional profile. Learn about his skills as a developer and designer, view past projects, and connect on social media."
        />
      </Helmet>

      {/* profile header section */}
      <div className="relative h-[1024px] w-full bg-white-A700 md:h-auto">
        {/* personal info section */}
        <div className="flex w-full items-start justify-center sm:flex-col">
          <div className="flex w-[22%] flex-col items-end bg-gradient2 p-[35px] sm:w-full sm:p-5">
            <div className="mr-3.5 mt-[342px] flex w-[87%] flex-col items-center md:mr-0 md:w-full">
              <div className="flex flex-col items-start">
                <Heading size="md" as="h1" className="p-2.5 text-center !text-[25px] !text-white-A700">
                  Adim Syahputra
                </Heading>
                <Text as="p" className="relative ml-[7px] mt-[-20px] !text-xl !text-gray-600 md:ml-0">
                  Developer & Designer
                </Text>
              </div>
              <Text as="p" className="ml-[50px] mt-[35px] self-start !text-black-900_01 md:ml-0">
                About Me
              </Text>
              <div className="flex flex-col items-start self-stretch">
                <Text size="md" as="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  doloremagna aliqua.{" "}
                </Text>
                <Text as="p" className="relative left-5 m-[15px] text-center !text-[25px] !text-black-900_01 md:ml-0">
                  Social Media
                </Text>
                <div className="flex w-[63%] items-center justify-between gap-5 md:w-full">
                  <Img
                    src="images/img_social_icons.svg"
                    alt="socialicons_one"
                    className="h-[30px] w-[30px] self-start"
                  />
                  <Text size="md" as="p" className="self-end">
                    AdimSyahputra
                  </Text>
                </div>
                <div className="mt-[22px] flex w-[45%] items-center justify-between gap-5 md:w-full">
                  <Img
                    src="images/img_social_icons_black_900.svg"
                    alt="socialicons"
                    className="h-[30px] w-[30px] self-start"
                  />
                  <Text size="md" as="p" className="self-end">
                    a_dm87
                  </Text>
                </div>
                <div className="mt-[22px] flex w-[63%] items-center justify-between gap-5 md:w-full">
                  <Img src="images/img_link.svg" alt="link_one" className="h-[30px] w-[30px] self-start" />
                  <Text size="md" as="p" className="self-end">
                    AdimSyahputra
                  </Text>
                </div>
                <div className="mt-[22px] flex w-[52%] items-center justify-between gap-5 md:w-full">
                  <Img src="images/img_social_icons_indigo_a200.svg" alt="socialicons" className="h-[30px] w-[30px]" />
                  <Text size="md" as="p" className="self-end">
                    Mocachino
                  </Text>
                </div>
                <div className="mt-6 flex w-[59%] items-center justify-between gap-5 md:w-full">
                  <Img src="images/img_volume.svg" alt="volume_one" className="h-[30px] w-[30px]" />
                  <Text size="md" as="p" className="self-end">
                    081111111111111
                  </Text>
                </div>
                <div className="mt-[23px] flex w-[63%] items-center justify-between gap-5 md:w-full">
                  <Img
                    src="images/img_social_icons_blue_gray_900.svg"
                    alt="socialicons"
                    className="h-[30px] w-[30px] self-start"
                  />
                  <Text size="md" as="p" className="self-end">
                    AdimSyahputra
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* navigation section */}
          <div className="relative ml-[-410px] flex h-[250px] flex-1 items-start justify-end bg-[url(/public/images/img_group_8.png)] bg-cover bg-no-repeat px-[11px] pb-[11px] md:h-auto sm:ml-0 sm:self-stretch sm:p-5">
            <div className="mb-[181px] flex items-center sm:flex-col">
              <Heading
                size="s"
                as="h2"
                className="flex h-[55px] items-center justify-center self-start bg-black-900_7f px-[23px] py-px !text-white-A700 sm:px-5"
              >
                Home
              </Heading>
              <Heading
                size="s"
                as="h3"
                className="ml-[37px] flex h-[54px] items-center justify-center self-start bg-black-900_7f px-[21px] py-px !text-white-A700 sm:ml-0 sm:px-5"
              >
                About
              </Heading>
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <div className="ml-[26px] flex bg-black-900_7f sm:ml-0">
                  <a href="Logout" target="_blank" rel="noreferrer" className="right-[115100px]">
                    <Heading size="s" as="h4" className="!text-[33px] !font-normal normal-case !text-white-A700">
                      Logout
                    </Heading>
                  </a>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* profile image section */}
        <Img
          src="images/img_ellipse_1.png"
          alt="circleimage"
          className="absolute left-[25px] right-full top-[120px] m-auto h-[250px] w-[250px] rounded-[50%]"
        />
        <div className="absolute bottom-[9%] right-[3%] m-auto flex w-[66%] flex-col items-start">
          <Text size="2xl" as="p" className="!text-black-900_01">
            Project
          </Text>

          {/* projects section */}
          <div className="self-stretch bg-gray-200 p-3.5">
            <div className="mb-[95px] flex flex-col gap-[17px]">
              <div className="flex flex-1 items-center justify-center rounded-[15px] bg-white-A700 md:flex-col">
                <Button shape="round" className="relative right-[15px] w-[40px] flex-row md:p-5">
                  <Img src="images/img_group_3.png" />
                </Button>
                <Text as="p" className="ml-3.5 !text-black-900_01 md:ml-0 md:p-5">
                  Project landing page for customers Toko Surya Agung-Banyuwangi
                </Text>
                <div className="ml-[35px] flex w-[5%] flex-col items-center self-start rounded-[20px] bg-black-900_01 px-px pb-px md:ml-0 md:w-full md:p-5">
                  <div className="flex flex-col">
                    <Text size="lg" as="p" className="text-center">
                      20{" "}
                    </Text>
                    <Text size="xs" as="p" className="text-center">
                      Days
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center rounded-[15px] bg-white-A700 md:flex-col">
                <div className="flex flex-1 items-center justify-center md:self-stretch md:p-5">
                  <div className="relative z-[1] h-[13px] w-[13px] self-end rounded-md bg-red-A700" />
                  <Button shape="round" className="relative ml-[-12px] w-[45px]">
                    <Img src="images/img_group_3.png" />
                  </Button>
                </div>
                <Text as="p" className="ml-3.5 !text-black-900_01 md:ml-0 md:p-5">
                  Project landing page for customers Toko Surya Agung-Banyuwangi
                </Text>
                <div className="ml-[35px] flex flex-1 flex-col items-center self-start rounded-[20px] bg-black-900_01 px-px pb-px md:ml-0 md:self-stretch md:p-5">
                  <div className="flex flex-col">
                    <Text size="lg" as="p" className="text-center">
                      20{" "}
                    </Text>
                    <Text size="xs" as="p" className="text-center">
                      Days
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text size="2xl" as="p" className="mt-[11px] !text-black-900_01">
            Finished
          </Text>

          {/* completed projects section */}
          <div className="relative h-[301px] self-stretch bg-gray-200 p-4">
            <div className="absolute left-0 right-0 top-[16.00px] m-auto h-[55px] w-full max-w-[900px] rounded-[15px] bg-white-A700 md:h-auto md:p-5">
              <div className="flex w-full items-center justify-center md:flex-col">
                <Button shape="round" className="w-[45px]">
                  <Img src="images/img_group_3.png" />
                </Button>
                <Text as="p" className="ml-3.5 !text-black-900_01 md:ml-0">
                  Project landing page for customers Toko Surya Agung-Banyuwangi
                </Text>
                <div className="ml-[35px] h-[40px] w-[40px] rounded-[20px] bg-black-900_01 md:ml-0" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-center justify-center rounded-[15px] bg-white-A700 md:relative md:flex-col">
                <Button shape="round" className="w-[45px] md:p-5">
                  <Img src="images/img_group_3.png" />
                </Button>
                <Text as="p" className="ml-3.5 self-end !text-black-900_01 md:ml-0 md:p-5">
                  Project landing page for customers Toko Surya Agung-Banyuwangi
                </Text>
                <div className="ml-[35px] h-[40px] w-[40px] rounded-[20px] bg-black-900_01 md:ml-0 md:p-5" />
              </div>
            </div>
            <Img
              src="images/img_approve.png"
              alt="approve_one"
              className="absolute right-[45.00px] top-[18.00px] m-auto h-[55px] w-[55px] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
