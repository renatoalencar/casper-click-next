import "@/styles/globals.css";
import dynamic from "next/dynamic";

const clickOptions = {
    appName: 'Casper dApp',
    appId: 'csprclick-template',
    contentMode: 'iframe',
    providers: ['casper-wallet', 'ledger', 'metamask-snap', 'casperdash'],
};

const ClickProvider = dynamic(
  () => import('@make-software/csprclick-ui').then(imp => imp.ClickProvider),
  { ssr: false },
)

export default function App({ Component, pageProps }) {
  return (
    <ClickProvider options={clickOptions}>
      <Component {...pageProps} />
    </ClickProvider>
  )
}
