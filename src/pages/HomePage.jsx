import React from "react";
import { Banner } from "../components/Banner";
import { Featureds } from "../components/Featureds";
import { DesignModel } from "../components/DesignModel";
import { TypesPayment } from "../components/TypesPayment";
import { Advantages } from "../components/Advantages";
import { Categories } from "../components/Categories";

export function HomePage() {
  return (
    <>
      <Banner />
      <Featureds />
      <DesignModel />
      <TypesPayment />
      <Advantages />
      <Categories />
    </>
  );
}
