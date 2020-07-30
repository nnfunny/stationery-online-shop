import React, { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<any> {
  children: React.ReactNode;
}

const ScrollTopTop: React.SFC<Props> = ({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);
  return <>{children}</>;
};

export default withRouter(ScrollTopTop);
