import React from "react";

export default ({title, subtitle}) => {
  return (
    <header className="page-header mt-3 mb-4">
      <h3>
        {title}<small className="text-muted"> | {subtitle}</small>
      </h3>
    </header>
  );
};
