import React, { useEffect, useState } from "react";
import Cardpersonaje from "./Cardpersonaje";


const MainPage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    const GetData = async () => {
      const resp = await fetch("  https://rickandmortyapi.com/api/character ");
      const { results } = await resp.json();
      console.log(results);
      setData(results)

    };
    GetData();
  }, []);

  const filter = (searchBy)=>{
    setSearch(searchBy);    
  }

  return (
    <div className="container">
      <input type="text" placeholder="Search" className="form-control" onChange={(e)=>filter(e.target.value)} />
      <div className="row">
        {
            data && data.map((item, index)=>{
                if(item.name.toLowerCase().includes(search.toLowerCase())){
                    return(
                        <div className="col-md-4 col-xs-12" key={index}>
                            <Cardpersonaje personaje={item}/>
                        </div>
                    )
                }
            })
        }
      </div>
    </div>
  );
};

export default MainPage;
