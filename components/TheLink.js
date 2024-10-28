import * as React from "react";
import Link from "next/link";

// Forward Refs, is useful
// eslint-disable-next-line react/display-name
export default React.forwardRef(({ to, ...props }, ref) => {
  return (
    <Link href={to} passHref>
      <span {...props} ref={ref} />
    </Link>
  );
});
