import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-Barlow-Condensed text-primary-100">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
