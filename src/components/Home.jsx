import React, { useEffect, useState } from 'react'
import smartphoneService from '../service/smartphone.service';
import { Link } from 'react-router-dom';

const Home = () => {

    const [smartphoneList, setSmartphoneList] = useState([]);

    const [message, setMessage] = useState("");

    // const [searchTerm, setSearchTerm] = useState("");
    // const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        // smartphoneService.getAll().then((res) => {
        //     console.log(res.data);
        //     setSmartphoneList(res.data)
        // }).catch((error) => {
        //     console.log(error);
        // })
        init();
    }, []);

    const init = () => {
        smartphoneService.getAll().then((res) => {
            console.log(res.data);
            setSmartphoneList(res.data)
        }).catch((error) => {
            console.log(error);
        });
    };

    const deleteSmartPhone = (id, name) => {
        smartphoneService.delete(id).then((res) => {
            setMessage(name + " Deleted Successfully from our Gallery");
            init();
        }).catch((error) => {
            console.log(error);
        })
    };

    //search 
    // const searchHandler = (searchTerm) => {
    //     setSearchTerm(searchTerm);

    //     if (searchTerm !== "") {
    //         const result = smartphoneList.filter((smartphone) => {
    //             return smartphone.name.toLowerCase().includes(searchTerm.toLowerCase());
    //         })

    //         if (result !== null) {
    //             setSearchResults(result);
    //         } else {
    //             <h2>No Results</h2>
    //         }
    //     } else {
    //         setSearchResults(smartphoneList);
    //     }
    // };

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header fs-3 text-center">
                                FlagShip SmartPhones List
                                {
                                    message && <p className="fs-4 text-center text-success">{message}</p>
                                }
                            </div>
                            <div className="card-body">
                                <table class="table table-hover">
                                    <thead>

                                        <tr>
                                            <th scope="col">Sr No</th>
                                            <th scope="col">Model Name</th>
                                            <th scope="col">RAM in GB</th>
                                            <th scope="col">Storage in GB</th>
                                            <th scope="col">Camera</th>
                                            <th scope="col">Price in $USD</th>
                                            <th scope="col">Brand</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Update/Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            smartphoneList.map((s, id) => (
                                                <tr>
                                                    <td>{id + 1}</td>
                                                    <td>{s.name}</td>
                                                    <td>{s.ram_GB}</td>
                                                    <td>{s.storage_GB}</td>
                                                    <td>{s.camera_Pixel}</td>
                                                    <td>{s.price_$dollars}</td>
                                                    <td>{s.brand}</td>
                                                    <td>{s.status}</td>
                                                    <td>
                                                        <Link to={'/smartphones/update/' + s.id} className="btn btn-sm btn-primary">UPDATE</Link>
                                                        <button onClick={() => deleteSmartPhone(s.id, s.name)} className="btn btn-sm btn-danger ms-1">DELETE</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;