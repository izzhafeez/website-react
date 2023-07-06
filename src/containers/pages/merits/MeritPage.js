import { useParams } from "react-router-dom";

const MeritPage = () => {
  const { page } = useParams();
  
  console.log(page);
};

export default MeritPage;