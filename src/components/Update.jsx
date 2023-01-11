import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import smartphoneService from '../service/smartphone.service';

const Update = () => {

    const [smartphone, setSmartphone] = useState({
        id: "",
        name: "",
        ram_GB: "",
        storage_GB: "",
        camera_Pixel: "",
        price_$dollars: "",
        brand: "",
        status: ""
    });

    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);
    // eslint-disable-next-line
    const [message, setMessage] = useState("");

    useEffect(() => {
        smartphoneService.getById(id).then((res) => {
            setSmartphone(res.data);
        }).catch((error) => {
            console.log(error);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setSmartphone({ ...smartphone, [e.target.name]: value });
    };

    const SmartPhoneUpdate = (e) => {
        e.preventDefault();

        smartphoneService.update(smartphone).then((res) => {
            // setMessage(smartphone.name + " updated successfully 👍");
            console.log("Product updated successfully" + smartphone.status);
            navigate("/smartphones");
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header fs-3 text-center">
                                Edit {smartphone.name} Details
                            </div>
                            {
                                message && <p className="fs-4 text-center text-success">{message}</p>
                            }
                            <div className="card-body">
                                <form onSubmit={(e) => SmartPhoneUpdate(e)} >
                                    <div className="mb-3">
                                        <label>Enter Smartphone Name</label>
                                        <input type="text"
                                            name="name"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value={smartphone.name}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>RAM in GB</label>
                                        <input type="text"
                                            name="ram_GB"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value={smartphone.ram_GB}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Storage in GB</label>
                                        <input type="text"
                                            name="storage_GB"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value={smartphone.storage_GB}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Camera in Pixels</label>
                                        <input type="text"
                                            name="camera_Pixel"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value={smartphone.camera_Pixel}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Price in $</label>
                                        <input type="number"
                                            name="price_$dollars"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value={smartphone.price_$dollars}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Smartphone Brand Name</label>
                                        <input type="text"
                                            name="brand"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value={smartphone.brand}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Availability Status</label>
                                        <input type="text"
                                            name="status"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value={smartphone.status}
                                        />
                                    </div>
                                    <button className="btn btn-primary mt-4 col-md-12">UPDATE</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Update