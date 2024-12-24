import { useState } from "react";
import { useLocation, Link } from "wouter";
import "../../css/global.css";

export default function MailVerification() {
  const [status, setStatus] = useState("loading"); // 'loading', 'success', 'error' (change this for different states or constants values)
  const [message, setMessage] = useState("");
  const location = useLocation();

  // Extract the token from the URL
  const token = location[1].split("?")[2]; // test this code

  useEffect(() => {
    // Call the verification API when the page is loaded
    if (token) {
      verifyEmail();
    } else {
      setStatus("error");
      setMessage("Invalid or missing verification token.");
    }
  }, [token]);

  return (
    <section className="center-container">
      <div className="verification-box">
        {status === "loading" && <p className="status-message">Verifying...</p>}

        {status === "success" && (
          <div className="text-center">
            <h1 className="success-message">Verification Complete!</h1>
            <p className="status-message">{message}</p>
            <Link href="/" className="link-button">
              Go Home
            </Link>
          </div>
        )}

        {status === "error" && (
          <div className="text-center">
            <h1 className="error-message">Verification Failed</h1>
            <p className="status-message">{message}</p>
            <Link href="/register" className="link-button">
              Try Again
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
