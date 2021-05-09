import React, { useEffect, useState } from "react";
import "./BannerStyles.css";
import { useDispatch } from "react-redux";
import { Banner } from "@shopify/polaris";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { setBanner } from "../../actions";

const BannerComp = () => {
  const Nomination = useSelector((state: RootState) => state.Nomination);
  const showBanner = useSelector((state: RootState) => state.showBanner);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(Nomination.length);
    if (showBanner) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [showBanner]);
  return (
    <div>
      {show && (
        <Banner
          title="Congratulations, you have added 5 Nominations!"
          status="success"
          onDismiss={() => {setShow(false)}}
        />
      )}
    </div>
  );
};

export default BannerComp;
