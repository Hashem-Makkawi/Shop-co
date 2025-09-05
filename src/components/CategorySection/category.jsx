import { useNavigate } from "react-router-dom";

import style from "./category.module.css"

const category = () => {
  const navigate = useNavigate();

  return (
    <div className={style.section}>
      <h2>BROWSE BY DRESS STYLE</h2>
      <div className={style.categories}>

        <div className={style.category} onClick={() => {
          navigate("/category");
        }}>
          <h3>Casual</h3>
        </div>

        <div className={style.category} onClick={() => {
          navigate("/category");
        }}>
          <h3>Formal</h3>
        </div>

        
        <div className={style.category} onClick={() => {
          navigate("/category");
        }}>
          <h3>Party</h3>
        </div>
        

        
        <div className={style.category} onClick={() => {
          navigate("/category");
        }}>
          <h3>Gym</h3>
        </div>
        
      </div>
    </div>
  )
}

export default category
