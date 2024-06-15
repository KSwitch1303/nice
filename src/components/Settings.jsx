import './Settings.css';
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import axios from 'axios';
const Settings = () => {
  const { firstName, lastName, email, userName, nationality } = useContext(UserContext);
  const { setFirstName, setLastName, setNationality, setEmail } = useContext(UserContext);
  const [firstname, setFirstname] = useState(firstName);
  const [lastname, setLastname] = useState(lastName);
  const [Email, setemail] = useState(email);
  const [username, setUsername] = useState(userName);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState(nationality);
  const [isPending, setIsPending] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;
  const handleReset = () => {
    setFirstname(firstName);
    setLastname(lastName);
    setemail(email);
    setCountry(nationality);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    checkPasswordSection();
  }
  const checkPasswordSection = async () => {
    if (currentPassword !== "" || newPassword !== "" || confirmPassword !== "") {
        if (currentPassword === "") {
            alert("Please enter your current password");
            setIsPending(false);
        } else if (newPassword === "") {
            alert("Please enter your new password");
            setIsPending(false);
        } else if (confirmPassword === "") {
            alert("Please confirm your new password");
            setIsPending(false);
        } else if (newPassword !== confirmPassword) {
            alert("Password doesn't match. Please try again");
            setIsPending(false);
        } else {
            if (newPassword.length < 8) {
                alert("Password must be at least 8 characters long. Please try again");
                setIsPending(false);
            } else {
                try {
                    const res = await axios
                    .post(`${apiUrl}/login`, {
                        username,
                        password: currentPassword
                    })
                    .catch((err) => console.log(err));
                    if (res.status === 200) {
                    updatePassword();
                    } else {
                    alert("Current password is incorrect. Please try again");
                    setIsPending(false);
                    }
                } catch (error) {
                    alert('Trouble with your network')
                    setIsPending(false)
                }
            }
        }
    } else {
        updateUser();
    }
  }
  const updatePassword = async () => {
    try {
      const res = await axios
        .post(`${apiUrl}/updatepassword`, {
          username,
          password: newPassword
        })
        .catch((err) => console.log(err));
      if (res.status === 200) {
        alert("Password updated successfully");
        updateUser();
      } else {
        alert(res.data);
        setIsPending(false);
      }
    } catch (error) {
      alert('Trouble with your network')
      setIsPending(false)
    }
  }
  const updateUser = async () => {
    try {
      const res = await axios
        .post(`${apiUrl}/updateuser`, {
          username,
          firstname,
          lastname,
          Email,
          country
        })
        .catch((err) => console.log(err));
      if (res.status === 200) {
        setFirstName(res.data.first_name);
        setLastName(res.data.last_name);
        setEmail(res.data.email);
        setNationality(res.data.nationality);

        alert("User updated successfully");
        setIsPending(false);
      } else {
        alert("User update failed. Please try again");
        setIsPending(false);
      }
    } catch (error) {
      alert('Trouble with your network')
      setIsPending(false)
    }
  }
    return (
        <div className="set_container">
            <h1 className="font-weight-bold py-3 mb-4">Account settings</h1>
            <div className="set_card">
                <div className="row no-gutters row-bordered row-border-light">
                    <div className="col-md-9">
                        <div className="tab-content">
                            <div className="tab-pane fade active show" id="account-general">
                                <hr className="border-light m-0" />
                                <div className="set_card-body">
                                    <div className="form-group">
                                        <label className="form-label">Username</label>
                                        <input type="text" className="form-control mb-1" value={username} onChange={(e) => setUsername(e.target.value)} disabled />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">First Name</label>
                                        <input type="text" className="form-control" value={firstname} onChange={(e) => setFirstname(e.target.value)} disabled={isPending} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Last Name</label>
                                        <input type="text" className="form-control" value={lastname} onChange={(e) => setLastname(e.target.value)} disabled={isPending} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">E-mail</label>
                                        <input type="text" className="form-control mb-1" value={Email} onChange={(e) => setemail(e.target.value)} disabled={isPending} />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="account-change-password">
                                <div className="set_card-body pb-2">
                                    <div className="form-group">
                                        <label className="form-label">Current password</label>
                                        <input type="password" className="form-control" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} disabled={isPending} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">New password</label>
                                        <input type="password" className="form-control" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} disabled={isPending} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Repeat new password</label>
                                        <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} disabled={isPending} />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="account-info">
                                <div className="set_card-body pb-2">
                                    <div className="form-group">
                                        <label className="form-label">Country</label>
                                        <select value={country} onChange={(e) => setCountry(e.target.value)} className="custom-select" disabled={isPending}>
                                        <option value="US">United States</option>
                                        <option value="CN">China</option>
                                        <option value="IN">India</option>
                                        <option value="ID">Indonesia</option>
                                        <option value="PK">Pakistan</option>
                                        <option value="BR">Brazil</option>
                                        <option value="NG">Nigeria</option>
                                        <option value="BD">Bangladesh</option>
                                        <option value="RU">Russia</option>
                                        <option value="MX">Mexico</option>
                                        <option value="JP">Japan</option>
                                        <option value="ET">Ethiopia</option>
                                        <option value="PH">Philippines</option>
                                        <option value="EG">Egypt</option>
                                        <option value="VN">Vietnam</option>
                                        <option value="DE">Germany</option>
                                        <option value="IR">Iran</option>
                                        <option value="TR">Turkey</option>
                                        <option value="CD">DR Congo</option>
                                        <option value="TH">Thailand</option>
                                        <option value="FR">France</option>
                                        <option value="GB">United Kingdom</option>
                                        <option value="IT">Italy</option>
                                        <option value="ZA">South Africa</option>
                                        <option value="TZ">Tanzania</option>
                                        <option value="MM">Myanmar</option>
                                        <option value="KR">South Korea</option>
                                        <option value="CO">Colombia</option>
                                        <option value="KE">Kenya</option>
                                        <option value="ES">Spain</option>
                                        <option value="AR">Argentina</option>
                                        <option value="UA">Ukraine</option>
                                        <option value="SD">Sudan</option>
                                        <option value="UG">Uganda</option>
                                        <option value="DZ">Algeria</option>
                                        <option value="CA">Canada</option>
                                        <option value="MA">Morocco</option>
                                        <option value="IQ">Iraq</option>
                                        <option value="AF">Afghanistan</option>
                                        <option value="PL">Poland</option>
                                        <option value="SA">Saudi Arabia</option>
                                        <option value="UZ">Uzbekistan</option>
                                        <option value="PE">Peru</option>
                                        <option value="AO">Angola</option>
                                        <option value="MY">Malaysia</option>
                                        <option value="MZ">Mozambique</option>
                                        <option value="GH">Ghana</option>
                                        <option value="YE">Yemen</option>
                                        <option value="NP">Nepal</option>
                                        <option value="VE">Venezuela</option>
                                        <option value="MG">Madagascar</option>
                                        <option value="CM">Cameroon</option>
                                        <option value="CI">Côte d'Ivoire</option>
                                        <option value="AU">Australia</option>
                                        <option value="NE">Niger</option>
                                        <option value="TW">Taiwan</option>
                                        <option value="LK">Sri Lanka</option>
                                        <option value="RO">Romania</option>
                                        <option value="SY">Syria</option>
                                        <option value="CL">Chile</option>
                                        <option value="KZ">Kazakhstan</option>
                                        <option value="NL">Netherlands</option>
                                        <option value="EC">Ecuador</option>
                                        <option value="AO">Angola</option>
                                        <option value="GT">Guatemala</option>
                                        <option value="CF">Central African Republic</option>
                                        <option value="RW">Rwanda</option>
                                        <option value="SN">Senegal</option>
                                        <option value="TD">Chad</option>
                                        <option value="SO">Somalia</option>
                                        <option value="ZW">Zimbabwe</option>
                                        <option value="GN">Guinea</option>
                                        <option value="SS">South Sudan</option>
                                        <option value="RW">Rwanda</option>
                                        <option value="BJ">Benin</option>
                                        <option value="TN">Tunisia</option>
                                        <option value="BE">Belgium</option>
                                        <option value="CU">Cuba</option>
                                        <option value="GR">Greece</option>
                                        <option value="BO">Bolivia</option>
                                        <option value="OM">Oman</option>
                                        <option value="CZ">Czech Republic</option>
                                        <option value="PT">Portugal</option>
                                        <option value="SE">Sweden</option>
                                        <option value="HU">Hungary</option>
                                        <option value="BD">Bangladesh</option>
                                        <option value="JO">Jordan</option>
                                        <option value="BY">Belarus</option>
                                        <option value="AE">United Arab Emirates</option>
                                        <option value="HN">Honduras</option>
                                        <option value="TJ">Tajikistan</option>
                                        <option value="IL">Israel</option>
                                        <option value="PS">Palestine</option>
                                        <option value="AT">Austria</option>
                                        <option value="CH">Switzerland</option>
                                        <option value="BG">Bulgaria</option>
                                        <option value="SR">Suriname</option>
                                        <option value="LY">Libya</option>
                                        <option value="YE">Yemen</option>
                                        <option value="NP">Nepal</option>
                                        <option value="HN">Honduras</option>
                                        <option value="BS">The Bahamas</option>
                                        <option value="FI">Finland</option>
                                        <option value="MN">Mongolia</option>
                                        <option value="IS">Iceland</option>
                                        <option value="LK">Sri Lanka</option>
                                        <option value="SZ">Eswatini</option>
                                        <option value="NO">Norway</option>
                                        <option value="PR">Puerto Rico</option>
                                        <option value="LB">Lebanon</option>
                                        <option value="UA">Ukraine</option>
                                        <option value="KP">North Korea</option>
                                        <option value="CI">Côte d'Ivoire</option>
                                        <option value="SZ">Eswatini</option>
                                        <option value="SI">Slovenia</option>
                                        <option value="MK">North Macedonia</option>
                                        <option value="LS">Lesotho</option>
                                        <option value="LV">Latvia</option>
                                        <option value="GE">Georgia</option>
                                        <option value="IE">Ireland</option>
                                        <option value="GN">Guinea</option>
                                        <option value="BA">Bosnia and Herzegovina</option>
                                        <option value="KW">Kuwait</option>
                                        <option value="HR">Croatia</option>
                                        <option value="MD">Moldova</option>
                                        <option value="PA">Panama</option>
                                        <option value="UR">Uruguay</option>
                                        <option value="ER">Eritrea</option>
                                        <option value="MZ">Mozambique</option>
                                        <option value="AM">Armenia</option>
                                        <option value="AL">Albania</option>
                                        <option value="QA">Qatar</option>
                                        <option value="CF">Central African Republic</option>
                                        <option value="ME">Montenegro</option>
                                        <option value="SL">Sierra Leone</option>
                                        <option value="MN">Mongolia</option>
                                        <option value="PY">Paraguay</option>
                                        <option value="LV">Latvia</option>
                                        <option value="TW">Taiwan</option>
                                        <option value="KW">Kuwait</option>
                                        <option value="BA">Bosnia and Herzegovina</option>
                                        <option value="OM">Oman</option>
                                        <option value="NI">Nicaragua</option>
                                        <option value="SV">El Salvador</option>
                                        <option value="MG">Madagascar</option>
                                        <option value="MR">Mauritania</option>
                                        </select>
                                    </div>
                                </div>
                                <hr className="border-light m-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-right mt-3">
                <button onClick={handleSubmit} type="button" className="btn btn-primary" disabled={isPending} id="BTNN">Save changes</button>&nbsp;
                <button onClick={handleReset} type="button" className="btn btn-default" disabled={isPending} id="BTNN" >Reset</button>
            </div>
        </div>
    );
}


export default Settings;