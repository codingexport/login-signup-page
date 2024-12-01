import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/Api";

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        dob: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    // Validate user input
    const validate = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = "Full Name is required.";
        if (!formData.email.includes("@")) newErrors.email = "Invalid email format.";
        if (!formData.dob) newErrors.dob = "Date of Birth is required.";
        if (!formData.phone.startsWith("+")) newErrors.phone = "Phone must include country code.";
        if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match.";
        return newErrors;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        try {
            await signup(formData);
            alert("Account created successfully!");
            navigate("/login");
        } catch (error) {
            alert("Error during signup.");
        }
    };

    // Update form state on input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <div className="card shadow-lg p-4" style={{ maxWidth: "500px", width: "100%" }}>
                <h2 className="text-center mb-4">Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            className="form-control"
                            placeholder="Enter your full name"
                            onChange={handleChange}
                        />
                        {errors.fullName && <small className="text-danger">{errors.fullName}</small>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter your email"
                            onChange={handleChange}
                        />
                        {errors.email && <small className="text-danger">{errors.email}</small>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dob" className="form-label">Date of Birth</label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            className="form-control"
                            onChange={handleChange}
                        />
                        {errors.dob && <small className="text-danger">{errors.dob}</small>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="form-control"
                            placeholder="+1234567890"
                            onChange={handleChange}
                        />
                        {errors.phone && <small className="text-danger">{errors.phone}</small>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter your password"
                            onChange={handleChange}
                        />
                        {errors.password && <small className="text-danger">{errors.password}</small>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="form-control"
                            placeholder="Re-enter your password"
                            onChange={handleChange}
                        />
                        {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Create Account</button>
                </form>
                <p className="text-center mt-3">
                    Already have an account? <a href="/login" className="text-decoration-none">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
