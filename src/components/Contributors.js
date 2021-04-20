import { Link } from "react-router-dom";
import Axios from "axios";
import React, { useState, useEffect, usePrevious} from "react";
import ContributorsList from "./ContributorsList";



export default function Contributors(props) {

    const [contributorsData, setContributorsData] = useState();



    const getContributorsData = (e) => {
       Axios.get(`http://localhost:5000/contributors/`)
            .then((response) => {
                setContributorsData(response.data)
            //    console.log(response)

            })

            .catch((error) => console.log(error))
    }
    useEffect(()=>{
        getContributorsData();

    },[])

    
    return (
    
            <section className="credits">
                <h2 className="credits__heading">Contributors</h2>
                <Link to="/addcontributors">
                    <button>Add A Contributor </button>
                </Link>
                {/* <button onClick={getContributorsData}> Button</button> */}
                <div className="credits__contributors-wrapper">
                    {contributorsData && contributorsData.map((contributorsData) => {
                        return (
                            <ContributorsList
                                key={contributorsData.id}
                                id={contributorsData.id}
                                name={contributorsData.name}
                                linkedIn={contributorsData.linkedIn}
                                gitHub={contributorsData.gitHub}
                                // facebook={contributorsData.facebook}
                                twitter={contributorsData.twitter}
                            />
                            
                        )
                    })}
  
                
                </div>
             {/* {getContributorsData()} */}
              {usePrevious}
    
            </section>


       
    )

}
