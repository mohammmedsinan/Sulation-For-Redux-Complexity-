import { Checkbox, Col, InputNumber, Modal, Row } from "antd";
import React from "react";
function Modals({ modal, setModal, type }) {
    const [Details, setDetails] = React.useState({title:"",content:""})
    const [data, setData] = React.useState(false)
    React.useEffect(() => { 
        if (type === 'add') setDetails({title: "Deposit money to your budget", content:<Row justify={"space-evenly"} align={"middle"}><Col><InputNumber addonBefore="+" addonAfter="$" placeholder="Deposit Money"/></Col><Col> <InputNumber placeholder="Interest from bank" style={{width:"150px"}}/></Col><Col style={{marginTop:"10px"}} span={24} offset={3}><Checkbox>Monthly</Checkbox></Col></Row>})
        if(type === 'withdraw') setDetails({title:"Withdraw money from your budget account",content:<Row justify={"space-between"} align={"middle"}><Col><InputNumber addonBefore="-" addonAfter="$" placeholder="Withdraw Money"/></Col><Col><Checkbox>Monthly</Checkbox></Col></Row>})
    },[modal])
  const handleOk = () => { setDetails({title:"",content:""}); setModal(false) };
  const handleCancel = () => { setDetails({title:"",content:""}); setModal(false) };
  return (
      <Modal
        title={Details.title}
        open={modal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
     {Details.content} 
      </Modal>
  );
}

export default Modals;
