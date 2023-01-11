import React from 'react'
import { useState } from 'react';
import smartphoneService from '../service/smartphone.service';

const Add = () => {

    const [smartphone, setSmartphone] = useState({
        name: "",
        ram_GB: "",
        storage_GB: "",
        camera_Pixel: "",
        price_$dollars: "",
        brand: "",
        status: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setSmartphone({ ...smartphone, [e.target.name]: value })
    }

    const AddDetails = (e) => {
        e.preventDefault();
        console.log(smartphone);

        smartphoneService.saveSmartPhone(smartphone).then((res) => {
            console.log("SmartPhone added successfully...")
            setMessage("SmartPhone added to database successfully 👍")
            setSmartphone({
                name: "",
                ram_GB: "",
                storage_GB: "",
                camera_Pixel: "",
                price_$dollars: "",
                brand: "",
                status: ""
            });
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header fs-3 text-center">
                                Add SmartPhone Details Here
                            </div>
                            {
                                message && <p className="fs-4 text-center text-success">{message}</p>
                            }
                            <div className="card-body">
                                <form onSubmit={(e) => AddDetails(e)} >
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
                                    <button className="btn btn-primary mt-4 col-md-12">ADD</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add