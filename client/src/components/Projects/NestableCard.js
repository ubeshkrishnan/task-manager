import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { FcClock } from "react-icons/fc";
import { Datepicker, Page, setOptions } from "@mobiscroll/react";
import { Modal } from "antd";
import { RadioButton } from "primereact/radiobutton";
import SplitButton from './splitbtn';

setOptions({
  theme: "ios",
  themeVariant: "dark",
});
const nsp = { color: "white", fontSize: "1.5em" };

function NestableCard(props) {
  const {
    title,
    images,
    titleBGClass,
    status,
    date,
    message,
    attachment,
    ticketInfo,
  } = props.data;
  const [visible, setVisible] = useState(false);
  const [taskcard, setTaskCard] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [ingredient, setIngredient] = useState("");
  const [showTextArea, setShowTextArea] = useState(false);
  const handleIngredientChange = (event) => {
    const selectedIngredient = event.target.value;
    setIngredient(selectedIngredient);

    if (selectedIngredient === "Pepper") {
      setShowTextArea(true);
    } else {
      setShowTextArea(false);
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/taskcard")
      .then((response) => {
        setTaskCard(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
    
    <div className="dd-handle mt-2">
      <div className="task-info d-flex align-items-center justify-content-between">
        <h6
          className={`${titleBGClass} py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0`}
        >
          {title}
        </h6>
        <div className="task-priority d-flex flex-column align-items-center justify-content-center">
          <div className="avatar-list avatar-list-stacked m-0">
            {images &&
              images.map((d, i) => (
                <img
                  key={"jfgsoihgh" + i}
                  className="avatar rounded-circle small-avt"
                  src={d}
                  alt=""
                />
              ))}
          </div>

          <span
            className={`badge ${
              status === "MEDIUM"
                ? "bg-warning"
                : status === "High"
                ? "bg-danger"
                : "bg-success"
            } text-end mt-2`}
          >
            {status}
          </span>
        </div>
      </div>
      <p className="py-2 mb-0">Attendance Process Error</p>
      {/* {taskcard.map((data, i) =>{
      return(
        <div key={"hahha"+i}>
        */}

        <div className="tikit-info row g-3 align-items-center">
        <div className="col-sm">
          <ul className="d-flex list-unstyled align-items-center flex-wrap">
            <li className="me-2">
              <div className="d-flex align-items-center">
                {/* <i className="icofont-flag"></i> */}
                <span className="ms-1">Last Modified Date:09/03/23 Time:7:00PM</span>
                {/* {date} */}
              </div>
            </li>
            <li className="me-2">
              <div className="d-flex align-items-center">
                <i className="icofont-ui-text-chat"></i>
                <span className="ms-1">{message}</span>
               
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <i className="icofont-paper-clip"></i>
                <span className="ms-1">Attachments</span>
                {/* {attachment} */}
              </div>
            </li>
          </ul>
        </div>
        <div className="col-sm text-end">
          <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
            {ticketInfo}
          </div>
        </div>
      </div>
   
      
      {/* <Datepicker
            theme="ios" 
            themeVariant="light"
            controls={['datetime']}
            select="range"
            display="inline"
            showRangeLabels={true}
            rangeStartLabel="Outbound"
            rangeEndLabel="Return"
            minRange={3}
            maxRange={10}
            
        /> */}
                       
                   
      
      <Button label="Details"  icon="pi pi-external-link p-button-sm p-inputtext-sm"  style={{ width: '100px',height:'20px',fontSize:'13px' }}  onClick={() => setVisible(true)} />
<Dialog header="Task Details" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => setVisible(false)}>
    <p style={{padding:'5px'}} className="m-0">
    <ul>
    <b><u>Assigned By:</u></b> Satheesh
    <br></br>
    <br></br>
  <li>#14336 - GCEB - Academic changes.
    <ul>
      <li>a) Student must enter NPTEL/SWAYAM courses studied with certificate uploaded and HOD approves and the same goes to COE (KASC).</li>
      <li>b) Maximum and Minimum credits that a student to study during a particular semester to be shown in student dashboard.</li>
      <li>c) Any hours taken extra apart from scheduled has to be shown separately in the same report. Eg. If the allotted hours as per regulation is 45 for a course but due to swapping or any other if a faculty actually handles 48 hours, then the report for attendance has to be shown as AH/CH (45/45) &amp; (3/3) additionally.</li>
    </ul>
  </li>
  <li>Register Number Format for Bulk Upload download &amp; Update process.?</li>
</ul>

    </p>
</Dialog>

  <FcClock
        style={{ height: '30px', width: '30px', marginLeft: '30px', cursor: 'pointer' }}
        onClick={showModal}
      />
     
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Datepicker
          theme="ios"
          themeVariant="light"
          controls={['datetime']}
          select="range"
          display="inline"
          showRangeLabels={true}
          rangeStartLabel="Start Time"
          rangeEndLabel="End Tine"
          minRange={3}
          maxRange={10}
          onClose={() => setIsOpen(false)}
        />
     </Modal><br></br>
     {/* <div className="card flex justify-content-center">
      <div className="flex flex-wrap gap-3">
        <div className="flex align-items-center">
          <input type="radio" id="ingredient1" name="pizza" value="Cheese" onChange={handleIngredientChange} checked={ingredient === 'Cheese'} />
          <label htmlFor="ingredient1" className="ml-2">completed</label>
        </div>
        <div className="flex align-items-center">
          <input type="radio" id="ingredient2" name="pizza" value="Mushroom" onChange={handleIngredientChange} checked={ingredient === 'Mushroom'} />
          <label htmlFor="ingredient2" className="ml-2">Incompleted</label>
        </div>
        <div className="flex align-items-center">
          <input type="radio" id="ingredient3" name="pizza" value="Pepper" onChange={handleIngredientChange} checked={ingredient === 'Pepper'} />
          <label htmlFor="ingredient3" className="ml-2">InHold</label>
        </div>
      </div>
    </div>
    {showTextArea && (
        <div className="popup">
          <textarea></textarea>
        </div>
      )} */}
      <SplitButton/>
   
    </div>
     
</div>

     )

     
  //    })}
  //   </div>
  // );
}

export default NestableCard;