import type { AppProps } from 'next/app'
import Head from 'next/head';
import Navbar from '../components/Navbar';
import StatusBar from '../components/StatusBar';
import { useState } from "react";

import { toPng, toBlob } from "html-to-image";

import "../styles/styles.scss";
import { CustomizationContextProvider } from '../contexts/customization';
import EditModal from '../components/EditModal';
import { useRouter } from 'next/router';
import Toaster from '../components/Toaster';
import DownloadImagesModal from '../components/DownloadImagesModal';

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const [homePrint, setHomePrint] = useState<string>();
  const [modalPrint, setModalPrint] = useState<string>();
  const [bountyPrint, setBountyPrint] = useState<string>();

  async function takeScreenshot() {
    let element = null as any;
    let printType = "home";

    if (showEditModal) return;
  
    if (showModal) {
      printType = "modal";
      element = document.getElementsByClassName("modal-content")[0];
    } else {
      element = document.getElementById("main-content");

      if (pathname?.includes("bounty")) printType = "bounty";
    }

    if (element === null) {
      return;
    }

    toPng(element, { cacheBust: true, })
      .then((dataUrl) => {
        if (printType === "modal") setModalPrint(dataUrl);
        else if (printType === "home") setHomePrint(dataUrl);
        else setBountyPrint(dataUrl);
      })
      .catch((err) => {
        console.log(err)
      });

    toBlob(element, { cacheBust: true, })
      .then(async blob => {
        if (!blob) return;

        await navigator.clipboard.write([
          new ClipboardItem({
            [blob.type]: blob as Blob,
          }),
        ]);

        setShowSuccessToast(true);
      })
      .catch((err) => {
        console.log(err)
      });
  }

  return (
    <CustomizationContextProvider>
      <Head>
        <title>Bepro Network Demo</title>
        <link href="/favicon.ico" rel="shortcut icon" />
      </Head>

      <div id="main-content">
        <Navbar showModal={showModal} setShowModal={setShowModal} />

        <Component {...pageProps} />
      </div>
      
      <Toaster
        type="success"
        content="Screen copied to your clipboard."
        show={showSuccessToast}
        setShow={() => setShowSuccessToast(false)}
      />

      <Toaster
        type="danger"
        content="Failed to copy to your clipboard."
        show={showErrorToast}
        setShow={() => setShowErrorToast(false)}
      />

      <StatusBar 
        takeScreenshot={takeScreenshot} 
        setShowEditModal={() => setShowEditModal(true)}
        setShowDownloadModal={() => setShowDownloadModal(true)}
      />

      <EditModal
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
      />

      <DownloadImagesModal
        show={showDownloadModal}
        onClose={() => setShowDownloadModal(false)}
        homePrint={homePrint}
        bountyPrint={bountyPrint}
        modalPrint={modalPrint}
      />
    </CustomizationContextProvider>
  );
}
