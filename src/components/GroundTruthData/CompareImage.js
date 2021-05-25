import React from "react";
import ReactCompareImage from "react-compare-image";
import styles from "./CompareImage.module.scss";

export default function CompareImage() {
  return (
    <>
      <div
        className={styles.CompareImage__container}

      >
        <ReactCompareImage
          leftImage="/assets/post-migration.jpg"
          rightImage="/assets/pre-migration.jpg"
          handle={
            <button className={styles.Compare__btn}>
              <img
                src="/assets/handle.png"
                loading="lazy"
                style={{ width: "115px" }}
              />
            </button>
          }
          sliderLineColor="#3ac280"
        />
        {/* <ImageSlider
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
          /> */}
      </div>
      <div className={styles.try_now_btn}>
        <button className={styles.btn}>Try Today</button>
      </div>
    </>
  );
}
