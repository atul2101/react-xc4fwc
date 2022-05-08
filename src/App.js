import React from "react";
import "./style.css";
import { jsPDF } from "jspdf";

const App = () =>{
  
export default App; generatePDF = () => {
  var doc = new jsPDF('p', 'pt');
  
  doc.text(20, 20, 'This is the first title.')
  doc.addFont('helvetica', 'normal')
  doc.text(20, 60, 'This is the second title.')
  doc.text(20, 100, 'This is the thrid title.')      
  
  doc.save('demo.pdf')
}   


  return (
     <div>
        <button onClick={this.generatePDF} type="primary">Download PDF</button> 
     </div>
  );

}
export default App;