import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CacheProvider, css, EmotionCache, Global, ThemeProvider } from '@emotion/react'
import { CssBaseline, Drawer, Dialog, Typography, Box } from '@mui/material'
import { Head } from 'next/document'
import createCache from '@emotion/cache'
import { RecoilRoot } from 'recoil'
import { useRouter } from 'next/router'
import { grey } from '@mui/material/colors'


const emotionCache = createEmotionCache();
const reset = css`
        .some-class {
          color: hotpink !important;
        }
      `
export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  return <>
    {/* fontSize, lineHiehgt */}
    <Typography sx={{ fontSize: 11,lineHeight:"14px" }}>오버라인</Typography>
    <Typography sx={{ fontSize: 13, lineHeight: "16px" }}>서브텍스트</Typography>
    <Typography sx={{ fontSize: 15, lineHeight: "20px" }}>메인텍스트</Typography>
    <Typography sx={{ fontSize: 17, lineHeight: "24px"}}>섹션헤더</Typography>
    <Typography sx={{ fontSize: 21, lineHeight: "28px" }}>페이지전체헤더</Typography>
    
    {/* color */}
    <Typography sx={{ fontSize: 21, lineHeight: "28px", color: grey[100] }}>페이지전체헤더</Typography>
    <Typography sx={{ fontSize: 21, lineHeight: "28px", color: grey[200] }}>페이지전체헤더</Typography>
    <Typography sx={{ fontSize: 21, lineHeight: "28px", color: grey[300] }}>페이지전체헤더</Typography>
    <Typography sx={{ fontSize: 21, lineHeight: "28px", color: grey[400] }}>페이지전체헤더</Typography>
    <Typography sx={{ fontSize: 21, lineHeight: "28px", color: grey[500] }}>페이지전체헤더</Typography>
    <Typography sx={{ fontSize: 21, lineHeight: "28px", color: grey[600] }}>페이지전체헤더</Typography>
    <Typography sx={{ fontSize: 21, lineHeight: "28px", color: grey[700] }}>페이지전체헤더</Typography>
    <Typography sx={{ fontSize: 21, lineHeight: "28px", color: grey[800] }}>페이지전체헤더</Typography>
    <Typography sx={{ fontSize: 21, lineHeight: "28px", color: grey[900] }}>페이지전체헤더</Typography>

    {/* Width */}
    <Box sx={{width:"100%", background:grey[400]}}>
      <Typography sx={{ fontSize: 21, lineHeight: "28px", color: grey[900] }}>페이지전체헤더</Typography>
    </Box>

    <Box sx={{ width: 100, background: grey[600] }}>
      <Typography sx={{ fontSize: 21, lineHeight: "28px", color: grey[900] }}>페이지전체헤더</Typography>
    </Box>

    <Box sx={{ width: 150, background: grey[800] }}>
      <Typography sx={{ fontSize: 21, lineHeight: "28px", color: grey[900] }}>페이지전체헤더</Typography>
    </Box>

    {/* Padding */}
    <Box sx={{ width: 150, background: grey[800],p:1 }}>
      <Typography sx={{ fontSize: 21, lineHeight: "28px", color: grey[900] }}>페이지전체헤더</Typography>
    </Box>
    <Box sx={{ width: 150, background: grey[800], padding: 8 }}>
      <Typography sx={{ fontSize: 21, lineHeight: "28px", color: grey[900] }}>페이지전체헤더</Typography>
    </Box>

    <Box sx={{ width: 150, background: grey[600], p: 2 }}>
      <Typography sx={{ fontSize: 21, lineHeight: "28px", color: grey[900] }}>페이지전체헤더</Typography>
    </Box>
    <Box sx={{ width: 150, background: grey[600], padding: 16 }}>
      <Typography sx={{ fontSize: 21, lineHeight: "28px", color: grey[900] }}>페이지전체헤더</Typography>
    </Box>

    <Box sx={{ width: 150, background: grey[400], m: 2 }}>
      <Typography sx={{ fontSize: 21, lineHeight: "28px", color: grey[900] }}>페이지전체헤더</Typography>
    </Box>
    <Box sx={{ width: 150, background: grey[400], margin: 16 }}>
      <Typography sx={{ fontSize: 21, lineHeight: "28px", color: grey[900] }}>페이지전체헤더</Typography>
    </Box>
  </>
  // return <CacheProvider value={emotionCache}>
  //   <Head>
  //     <meta charSet="utf-8" />
  //     <title>MY_PROJECT</title>
  //     <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover" />
  //     <meta
  //       name="keywords"
  //       content="MY_PROJECT_TAG1, MY_PROJECT_TAG2, MY_PROJECT_TAG3"
  //     />
  //     <meta name="description" content="MY_PROJECT_DESC" />
  //     <meta property="og:type" content="website" />
  //     <meta property="og:site_name" content="써클인 플러스" />
  //     <meta property="og:title" content="MY_PROJECT_TITLE" />
  //     <meta
  //       property="og:description"
  //       content="MY_PROJECT_DESC"
  //     />
  //     <meta property="og:image" content="/static/share.png" />
  //     <meta property="og:image:width" content="200" />
  //     <meta property="og:image:height" content="200" />
  //     <meta property="og:image:type" content="image/png" />
  //     <meta property="og:url" content="http://www.MY_PROJECT.co.kr" />
  //     <meta name="twitter:card" content="summary" data-react-helmet="true" />
  //     <meta name="twitter:creator" content="" data-react-helmet="true" />
  //     <meta name="twitter:title" content="MY_PROJECT_TITLE" data-react-helmet="true" />
  //     <meta
  //       name="twitter:description"
  //       content="MY_PROJECT_DESC"
  //       data-react-helmet="true"
  //     />
  //     <meta name="twitter:image" content="/static/share.png" />
  //     <meta name="HandheldFriendly" content="true" />
  //     <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
  //     <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-57x57.png" />
  //     <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-60x60.png" />
  //     <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-72x72.png" />
  //     <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-76x76.png" />
  //     <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-114x114.png" />
  //     <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png" />
  //     <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-144x144.png" />
  //     <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-152x152.png" />
  //     <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png" />
  //     <link rel="icon" type="image/png" sizes="144x144" href="/favicon/android-icon-144x144.png" />
  //     <link rel="icon" type="image/png" sizes="192x192" href="/static/android-icon-192x192.png" />
  //     <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
  //     <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
  //     <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
  //     <link rel="manifest" href="/static/manifest.json" />
  //     <meta name="msapplication-TileColor" content="#ffffff" />
  //     <meta name="msapplication-TileImage" content="/static/ms-icon-144x144.png" />
  //     <meta name="theme-color" content="#ffffff" />
  //     <script src="https://js.pusher.com/3.2/pusher.min.js" />
  //     {/* "Mixed content blocked" when running an HTTP AJAX operation in an HTTPS page */}
  //     {/* TODO HTTP를 강제로 HTTPS로 바꿈. API_URL_M localhost에서 사용하려면 주석필요 */}
  //     {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}
  //     {/* 카카오로그인 */}
  //     <script defer src="https://developers.kakao.com/sdk/js/kakao.js"></script>
  //     {/* <!-- jQuery --> */}
  //     <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
  //     {/* <!-- iamport.payment.js --> */}
  //     <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"></script>
  //   </Head>
  //   <Global styles={reset} />
    
  //   <RecoilRoot>
  //     {/* <ThemeProvider theme={{}//theme }>*/}

  //       {/* <CssBaseline /> */}
  //       {/* <HomeHeader /> */}
  //       <Component {...pageProps} key={router.route} />
  //       {/* <BottomNav /> */}
  //       <Drawer />
  //       {/* <CommentDrawer /> */}
  //       {/* <Loader /> */}
  //       {/* <Dialog /> */}
  //     {/* </ThemeProvider> */}
  //   </RecoilRoot>
  // </CacheProvider>
}

function createEmotionCache() {
  return createCache({ key: 'css' });
}
