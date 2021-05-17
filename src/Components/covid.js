import React, {useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table'
function Covid() {
    const [data, setData] = useState([])
    const covidData = async()=>{
            try{
                const res= await fetch('https://api.covid19india.org/data.json');
                // console.log(response)
                const actualData= await res.json();
                console.log(actualData.statewise);
                setData(actualData.statewise)
            }
            catch(err){
                    console.log(err);
            }
      
    }

    useEffect(() => {
        covidData();
    }, []);

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="heading">
                    <h1 className="mb-5"><span >India</span> Covid 19 Tracker</h1>
                </div>
                <div className="table-responsive">
                    <Table striped bordered hover variant="dark" className="table table-hover">
                       <thead className="thead-dark">
                           <tr>
                               <th>State</th>
                               <th>Confirmed</th>
                               <th>Recovered</th>
                               <th>Deaths</th>
                               <th>Active</th>
                               <th>Updated</th>
                           </tr>
                       </thead>
                       <tbody>
                            {
                                data.map((element,index)=>{
                                    return (
                                        <tr key={index}>
                                <th>{element.state}</th>
                                <td>{element.confirmed}</td>
                                <td>{element.recovered}</td>
                                <td>{element.deaths}</td>
                                <td>{element.active}</td>
                                <td>{element.lastupdatedtime}</td>
                            </tr> 
                                    )
                                })
                            }
                       </tbody>
                    </Table>
                </div>
            </div>
            
        </>
    )
}

export default Covid;