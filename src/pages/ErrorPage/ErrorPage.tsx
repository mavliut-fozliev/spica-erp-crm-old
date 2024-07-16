import { useEffect, useState } from "react";
import Spinner from "../../components/progress/Spinner/Spinner";

export default function ErrorPage() {
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowError(true), 3000);
  }, []);
  return showError ? (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Üzgünüz, beklenmeyen bir hata oluştu.</p>
    </div>
  ) : (
    <Spinner isLoading={true} hideSidebar={true} />
  );
}
