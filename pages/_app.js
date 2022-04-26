import "../styles/globals.css";
import { wrapper } from "../redux/reducers/store";

export const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
