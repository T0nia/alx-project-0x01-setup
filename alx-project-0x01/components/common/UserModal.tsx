import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<UserData>({
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""
            }
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        section?: string,
        subsection?: string
    ) => {
        const { name, value } = e.target;

        if (section === 'address') {
            if (subsection === 'geo') {
                setUser(prev => ({
                    ...prev,
                    address: {
                        ...prev.address,
                        geo: {
                            ...prev.address.geo,
                            [name]: value
                        }
                    }
                }));
            } else {
                setUser(prev => ({
                    ...prev,
                    address: {
                        ...prev.address,
                        [name]: value
                    }
                }));
            }
        } else if (section === 'company') {
            setUser(prev => ({
                ...prev,
                company: {
                    ...prev.company,
                    [name]: value
                }
            }));
        } else {
            setUser(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto">
            <div className="min-h-screen px-4 text-center">
                {/* This element is to trick the browser into centering the modal contents. */}
                <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                >
                    &#8203;
                </span>

                <div className="inline-block w-full max-w-2xl p-6 my-8 text-left align-middle bg-white rounded-lg shadow-xl transform transition-all">
                    <div className="max-h-[80vh] overflow-y-auto">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 sticky top-0 bg-white pt-2">Add New User</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Basic Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={user.name}
                                        onChange={(e) => handleChange(e)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        value={user.username}
                                        onChange={(e) => handleChange(e)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter username"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={user.email}
                                        onChange={(e) => handleChange(e)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={user.phone}
                                        onChange={(e) => handleChange(e)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter phone"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Website</label>
                                <input
                                    type="text"
                                    name="website"
                                    value={user.website}
                                    onChange={(e) => handleChange(e)}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter website"
                                />
                            </div>

                            {/* Address Section */}
                            <fieldset className="border rounded-lg p-4">
                                <legend className="text-lg font-semibold px-2">Address</legend>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Street</label>
                                        <input
                                            type="text"
                                            name="street"
                                            value={user.address.street}
                                            onChange={(e) => handleChange(e, 'address')}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter street"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Suite</label>
                                        <input
                                            type="text"
                                            name="suite"
                                            value={user.address.suite}
                                            onChange={(e) => handleChange(e, 'address')}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter suite"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={user.address.city}
                                            onChange={(e) => handleChange(e, 'address')}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter city"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Zipcode</label>
                                        <input
                                            type="text"
                                            name="zipcode"
                                            value={user.address.zipcode}
                                            onChange={(e) => handleChange(e, 'address')}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter zipcode"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Latitude</label>
                                        <input
                                            type="text"
                                            name="lat"
                                            value={user.address.geo.lat}
                                            onChange={(e) => handleChange(e, 'address', 'geo')}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter latitude"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Longitude</label>
                                        <input
                                            type="text"
                                            name="lng"
                                            value={user.address.geo.lng}
                                            onChange={(e) => handleChange(e, 'address', 'geo')}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter longitude"
                                        />
                                    </div>
                                </div>
                            </fieldset>

                            {/* Company Section */}
                            <fieldset className="border rounded-lg p-4">
                                <legend className="text-lg font-semibold px-2">Company</legend>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Company Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={user.company.name}
                                            onChange={(e) => handleChange(e, 'company')}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter company name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Catch Phrase</label>
                                        <input
                                            type="text"
                                            name="catchPhrase"
                                            value={user.company.catchPhrase}
                                            onChange={(e) => handleChange(e, 'company')}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter catch phrase"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">BS</label>
                                        <input
                                            type="text"
                                            name="bs"
                                            value={user.company.bs}
                                            onChange={(e) => handleChange(e, 'company')}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter BS"
                                        />
                                    </div>
                                </div>
                            </fieldset>

                            <div className="flex justify-between items-center pt-4 sticky bottom-0 bg-white pb-2">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                                >
                                    Add User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserModal;