import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

import Header from "../components/header/header"

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

//TODO Add footer component
export default component$(() => {
  return (<>
  <Header/>
  <Slot />;
  
  </>)
});
