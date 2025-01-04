import React, { Suspense } from "react";

function lazy() {
  const Form = React.lazy(() => import("../components/Form"));
  const Nav = React.lazy(() => import("../components/Nav"));
  const Pagination = React.lazy(() => import("./Pagination"));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route path="form" element={<Form />} />
      <Route path="nav" element={<Nav />} />
      <Route path="home" element={<Pagination />} />
    </Suspense>
  );
}

export default lazy;
