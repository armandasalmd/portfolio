import { FC, useState } from "react";
import styled from "styled-components";
import galeryIcon from "../../assets/galery.svg";
import ImgsViewer from "react-images-viewer";
import { ImageItem } from "../Portfolio/portfolioData";

const StyledCardHeader = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  margin-bottom: 1.8rem;
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
  overflow: hidden;
  cursor: pointer;

  img.hero-image {
    position: absolute;
    width: 100%;

    height: 220px;
    object-fit: cover;
  }

  .overlayImage {
    position: absolute;
    width: 100%;
    height: 220px;
    background: rgba(0, 0, 0, 0.35);
    z-index: 1;

    div {
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.7);
      width: 48px;
      height: 48px;
    }
  }
`;

interface ImageViewerProps {
  isHovered: boolean;
  images: ImageItem[];
}

export const ImageViewer: FC<ImageViewerProps> = (props) => {
  const [galeryOpen, setGaleryOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  function onClick() {
    setGaleryOpen(true);
  }

  function onPrev() {
    if (currentImgIndex > 0) {
      setCurrentImgIndex(currentImgIndex - 1);
    } else {
      setCurrentImgIndex(props.images.length - 1);
    }
  }

  function onNext() {
    if (currentImgIndex < props.images.length - 1) {
      setCurrentImgIndex(currentImgIndex + 1);
    } else {
      setCurrentImgIndex(0);
    }
  }

  function onClose() {
    setGaleryOpen(false);
    setCurrentImgIndex(0);
  }

  return (
    <StyledCardHeader onClick={onClick}>
      {props.isHovered && (
        <div className="overlayImage center">
          <div className="center">
            <img width={28} height={28} src={galeryIcon} alt="view galery" />
          </div>
        </div>
      )}

      <img className="hero-image" alt="sample" src={props.images[0].link} />

      <ImgsViewer
        backdropCloseable
        showThumbnails
        currImg={currentImgIndex}
        onClickPrev={onPrev}
        onClickNext={onNext}
        isOpen={galeryOpen}
        onClose={onClose}
        onClickThumbnail={setCurrentImgIndex}
        closeBtnTitle="Close"
        imgs={props.images.map((o) => ({ src: o.link, caption: o.caption }))}
      />
    </StyledCardHeader>
  );
};
