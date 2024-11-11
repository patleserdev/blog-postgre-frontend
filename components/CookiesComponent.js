import Link from "next/link.js";
import { useEffect } from "react";
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";

export default function CookiesComponent(){


  useEffect(()=>{

    console.log("cookie",getCookieConsentValue("blogin"));
  },[])


    return (

        <CookieConsent
        location="bottom"
        buttonText="Accepter"
        enableDeclineButton
        declineButtonText="Refuser"
        cookieName="blogin"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        declineButtonStyle={{ color: "#fffff", fontSize: "13px" }}
        expires={150}
      >
        Ce site utilise des cookies, veuillez en accepter les termes pour
        pouvoir commenter les articles
        <br />{" "}
        <div style={{ fontSize: "15px", marginTop: "10px" }}>
          <Link href="/cookies" passHref legacyBehavior>
            <a className="border p-2 my-2 hover:bg-gray-200 hover:text-gray-800 transition-all">Lire les termes</a>
          </Link>
        </div>
        
      </CookieConsent>
    )
}