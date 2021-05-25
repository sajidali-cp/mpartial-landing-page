import React from "react";
import { Button } from "react-bootstrap";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import ImageSlider from "react-image-comparison-slider";
import styles from "./CompareImag.module.scss";
import img1 from "../../images/12.jpg";
import img2 from "../../images/13.jpg";

export default function CompareImage() {
  return (
    <>
        <div className={styles.compare_images_section}>
          <ImageSlider
            image1={img1}
            image2={img2}
            customHandle={
              <Button className="Compare__btn">
                <ArrowLeft fontSize={30} />
                <ArrowRight fontSize={30} />
              </Button>
            }
            sliderWidth={3}
            sliderColor="#3ac280"
            handleColor="#3ac280"
            handleBackgroundColor="white"
          />
        </div>
      <div className={styles.try_now_btn}>
        <Button className={styles.btn}>Try Today</Button>
      </div>
    </>
  );
}
