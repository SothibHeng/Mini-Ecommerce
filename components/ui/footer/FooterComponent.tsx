"use client";

import { Footer } from "flowbite-react";
import { configuration } from "../../flowbite-config";

import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export default function FooterComponent() {
  return (
    <Footer theme={configuration.footer} bgDark>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Careers</Footer.Link>
              <Footer.Link href="#">Brand Center</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Discord Server</Footer.Link>
              <Footer.Link href="#">Twitter</Footer.Link>
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">iOS</Footer.Link>
              <Footer.Link href="#">Android</Footer.Link>
              <Footer.Link href="#">Windows</Footer.Link>
              <Footer.Link href="#">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-pink-700 p-2 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            className="text-gray-300"
            by="Amazom™"
            year={2022}
          />
          <div className="mt-2 flex space-x-4 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" className="text-gray-300" icon={BsFacebook} />
            <Footer.Icon
              href="#"
              className="text-gray-300"
              icon={BsInstagram}
            />
            <Footer.Icon href="#" className="text-gray-300" icon={BsTwitter} />
            <Footer.Icon href="#" className="text-gray-300" icon={BsGithub} />
            <Footer.Icon href="#" className="text-gray-300" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
