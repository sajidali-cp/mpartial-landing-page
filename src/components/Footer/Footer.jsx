import React from "react";

export default function Footer() {
  return (
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <p>
              mpartial, a 4D Schematics Company. Copyright 2020 all rights
              reserved.
            </p>
          </div>
          <div class="col-md-6 col-sm-12">
            <ul class="social-links">
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/mpartial1/"
                  aria-label="Facebook"
                  rel="noopener"
                >
                  <img src="" />{" "}
                </a>{" "}
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/mpartial_/"
                  aria-label="Instagram"
                  rel="noopener"
                >
                  <img src="" />{" "}
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/mpartial-keep-building"
                  aria-label="Linkedin"
                  rel="noopener"
                >
                  <img src="" />
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
