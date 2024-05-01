"use client";

import notfound from "../public/lottie/notfound.json";
import Lottie from "lottie-react";

export default function NotFound() {
  return (
    <html>
      <body style={{display:'flex', justifyContent:'center', alignItems:'center', height:'90vh'}}>
        <div>
          <div style={{width:'200px', height:'200px'}}>
            <Lottie
              animationData={notfound}
              style={{ width: "100%", height: "100%", objectFit:'cover' }}
            />
          </div>
          <h1 style={{fontSize:'16px', textAlign:'center', fontWeight:300}}>
            Page not found
          </h1>
        </div>
      </body>
    </html>
  );
}
