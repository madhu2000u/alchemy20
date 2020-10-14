import Common from "../components/Common/Common";
import Subpage from "../components/Subpage Template/Subpage";
import "../styles/Gallery.module.css";

export default function Gallery() {
  return (
    <main className="main">
      <Subpage showNot={false} />
      
    </main>
  );
}

Gallery.Layout = Common;
