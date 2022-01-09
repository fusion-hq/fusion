/**
 * This the root Overview page of console.
 * Show basic welcome message and some UI
 */

 import React, { useEffect, useState } from "react";
 import "./Settings.css";
 import Sidenav from "../../Components/Sidenav/Sidenav.js";
 import { Button, Modal, Select, Tabs, Card } from "antd";
 import { LoadingOutlined } from "@ant-design/icons";
 import axios from "axios";
 import Setup from "./Setup";
 import { connect } from "react-redux";
  
 function Settings(props) {
 
   const [writeKey, ] = useState(props?.writeKeyModel?.user);
 
   const paymentsURL = process.env.REACT_APP_PAYMENT_URL
 
   const [modelState, setModalState] = useState(false);
   const [modalLoading, setModalLoading] = useState(false);
   const [selectedPlan, setSelectedPlan] = useState("Basic");
  
   function handleChange(value) {
     setSelectedPlan(value);
   }
  
   const { Option } = Select;
   const { TabPane } = Tabs;
 
   const handleOk = () => {
     setModalLoading(true);
     setTimeout(() => {
       setModalState(false);
       setModalLoading(false);
       showRazorpay();
     }, 3000);
   };
 
   const handleCancel = () => {
     setModalState(false);
   };
 
   const [emailLimit, setEmailLimit] = useState(0);
   const [emailUsed, setEmailUsed] = useState(0);
 
   const [eventLimit, setEventLimit] = useState(0);
   const [eventUsed, setEventUsed] = useState(0);
 
   const [messageLimit, setMessageLimit] = useState(0);
 
   const planURL =
     "https://user-plan-service-c1ae03e9e39e760c.onporter.run/plans/";
   //authtoken and writekey
 
   const [planPrice, setPlanPrice] = useState(0);
 
   useEffect(() => {
     axios.get(planURL + `getEmailQuota/${writeKey}/`).then((res) => {
       setEmailLimit(res.data.plan_limit);
       setEmailUsed(res.data.emails_used);
     });
 
     axios.get(planURL + `getEventQuota/${writeKey}/`).then((res) => {
       setEventLimit(res.data.plan_limit);
       setEventUsed(res.data.events_used);
     });
 
     axios.get(planURL + `messageQuota/${writeKey}/`).then((res) => {
       setMessageLimit(res.data.message_plan);
     });
 
     axios.get(planURL + `getPlanDetails/${selectedPlan}/`).then((res) => {
       setPlanPrice(res.data.price);
     });
   }, [selectedPlan, writeKey]);
 
   //razorypay code -
   const handlePaymentSuccess = async (response) => {
     try {
       let bodyData = new FormData();
 
       // we will send the response we've got from razorpay to the backend to validate the payment
       bodyData.append("response", JSON.stringify(response));
 
       await axios
         .post(`${paymentsURL}razorpay/payment/success/`, bodyData)
         .catch((err) => {
           console.log(err);
         });
 
       await axios
         .post(planURL + `updatePlan/${writeKey}/${selectedPlan}/`)
         .then((res) => console.log(res));
       window.location.reload();
     } catch (error) {
       console.log(console.error());
     }
   };
 
   // this will load a script tag which will open up Razorpay payment card to make transactions
   const loadScript = () => {
     const script = document.createElement("script");
     script.src = "https://checkout.razorpay.com/v1/checkout.js";
     document.body.appendChild(script);
   };
 
   const showRazorpay = async () => {
     await loadScript();
 
     let bodyData = new FormData();
 
     const amount = parseInt(planPrice);
 
     // we will pass the amount and product name to the backend using form data
     bodyData.append("amount", amount.toString());
     bodyData.append("name", "sarvesh");
 
     const data = await axios
       .post(`${paymentsURL}razorpay/pay/`, bodyData)
       .then((res) => {
         return res;
       });
     // in data we will receive an object from the backend with the information about the payment
     //that has been made by the user
 
     var options = {
       key_id: process.env.REACT_APP_PUBLIC_KEY_RAZORPAY,
       key_secret: process.env.REACT_APP_SECRET_KEY_RAZORPAY,
       amount: data.data.payment.amount,
       currency: "USD",
       name: "Fusion",
       description: "Payment to Fusion",
       image: "", // add image url
       order_id: data.data.payment.id,
       handler: function (response) {
         // we will handle success by calling handlePaymentSuccess method and
         // will pass the response that we've got from razorpay
         handlePaymentSuccess(response);
       },
       prefill: {
         name: "User's name",
         email: "User's email",
         contact: "User's phone",
       },
       notes: {
         address: "Razorpay Corporate Office",
       },
       theme: {
         color: "#3399cc",
       },
     };
 
     var rzp1 = new window.Razorpay(options);
     rzp1.open();
   };
  
   return (
     <div className="Settings">
       <div className="main-container">
         <Sidenav />
         <div className="content-container">
           <div className="content">
             <div className="header">
               <h1>Settings</h1>
               <p>System settings & useful tools</p>
 
               <Tabs defaultActiveKey="1" size="large">
                 <TabPane tab="Setup" key="1">
                   <div style={{ width: "100%" }}>
                     <Card
                       style={{
                         display: "flex",
                         flexDirection: "column",
                         justifyContent: "flex-start",
                         alignItems: "left",
                         width: "100%",
                         minHeight: "30vh",
                         margin: "2% 0% 1% 0%",
                         boxShadow: "1px 1px 15px 8px rgba(230, 230, 230, 0)",
                       }}
                     >
                       <Setup />
                     </Card>
                   </div>
                 </TabPane>
                 <TabPane tab="Billing" key="2">
                   <Card
                     style={{
                       display: "flex",
                       flexDirection: "column",
                       justifyContent: "center",
                       alignItems: "center",
                       width: "100%",
                       minHeight: "30vh",
                       margin: "2% 0% 1% 0%",
                       boxShadow: "1px 1px 15px 8px rgba(230, 230, 230, 0)",
                     }}
                   >
                     <div style={{ minWidth: "80vw" }}>
                       <div className="plan">
                         <h1>Your Plan</h1>
                         <p className="subtitle">
                           Your plan details and current usage
                         </p>
 
                         <div style={{ width: "100%", display: "flex" }}>
                           <div style={{ width: "100%" }}>
                             <h2
                               style={{ display: "flex", alignItems: "center" }}
                             >
                               <div
                                 style={{
                                   background: "rgb(24, 144, 255)",
                                   height: 20,
                                   width: 5,
                                   marginRight: 10,
                                 }}
                               ></div>
                               Event Limit
                             </h2>
                             <div className="stats">
                               <p>
                                 Total Limit:{" "}
                                 <span style={{ fontWeight: 500 }}>
                                   {eventLimit / 1000}k
                                 </span>{" "}
                               </p>
                               <p>
                                 Currently Used:{" "}
                                 <span style={{ fontWeight: 500 }}>
                                   {eventUsed / 1000}k
                                 </span>
                               </p>
                             </div>
                           </div>
                           <div style={{ width: "100%" }}>
                             <h2
                               style={{ display: "flex", alignItems: "center" }}
                             >
                               <div
                                 style={{
                                   background: "rgb(24, 144, 255)",
                                   height: 20,
                                   width: 5,
                                   marginRight: 10,
                                 }}
                               ></div>
                               Message Limit
                             </h2>
                             <div className="stats">
                               <p>
                                 Message Limit:{" "}
                                 <span style={{ fontWeight: 500 }}>
                                   {messageLimit / 1000}k
                                 </span>{" "}
                               </p>
                             </div>
                           </div>
                           <div style={{ width: "100%" }}>
                             <h2
                               style={{ display: "flex", alignItems: "center" }}
                             >
                               <div
                                 style={{
                                   background: "rgb(24, 144, 255)",
                                   height: 20,
                                   width: 5,
                                   marginRight: 10,
                                 }}
                               ></div>
                               Email Limit
                             </h2>
                             <div className="stats">
                               <p>
                                 Total Limit:{" "}
                                 <span style={{ fontWeight: 500 }}>
                                   {emailLimit}
                                 </span>{" "}
                               </p>
                               <p>
                                 Currently Used:{" "}
                                 <span style={{ fontWeight: 500 }}>
                                   {emailUsed}
                                 </span>
                               </p>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div
                         style={{ display: "flex", justifyContent: "center" }}
                       >
                         <Button
                           onClick={() => {
                             setModalState(true);
                           }}
                         >
                           Upgrade Your Plan
                         </Button>
                       </div>
                       <Modal
                         visible={modelState}
                         title="Select your Plan"
                         onOk={handleOk}
                         onCancel={handleCancel}
                         loading={modalLoading}
                         footer={[
                           <Button key="back" onClick={handleCancel}>
                             Return
                           </Button>,
                           <Button
                             key="submit"
                             type="primary"
                             onClick={handleOk}
                           >
                             {modalLoading ? <LoadingOutlined /> : "Submit"}
                           </Button>,
                         ]}
                       >
                         <Select
                           placeholder="Select Plan"
                           style={{ width: "100%" }}
                           onChange={handleChange}
                         >
                           <Option value="Lite">Paid</Option>
                         </Select>
                       </Modal>
                     </div>
                   </Card>
                 </TabPane>
               </Tabs>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 }
 const mapState = (state) => ({
   writeKeyModel: state.writeKeyModel,
 });
 
 const mapDispatch = (dispatch) => ({
   setWriteKey: () => dispatch.writeKeyModel.setWriteKey()
 });
 
 export default connect(mapState, mapDispatch)(Settings);