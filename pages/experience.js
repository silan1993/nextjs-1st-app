
const Experience = (props) => {
    return (
     <div id="experience" className="bg-1">
            <div className="container">
           <h3 className="text-center">EXPERIENCE</h3>
           <p className="text-center">Here are all my educational & professional details</p>
           <ul className="nav nav-tabs">
              <li className="active"><a href="#home">EDUCATION</a></li>
              <li><a href="#menu1">COMPANY</a></li>
              <li><a href="#menu3">SKILLS</a></li>
           </ul>
           <div className="tab-content">
              <div id="home" className="tab-pane fade in active">
                 <h3>MATRICULATION</h3>
                 <table className="table">
                    <thead>
                       <tr>
                       </tr>
                    </thead>
                    <tbody>
                       <tr>
                          <td><strong>SCHOOL NAME</strong></td>
                          <td>PRACHI ACADEMY ADASPUR</td>
                       </tr>
                    </tbody>
                 </table>
                 <h3>INTERMEDIATE</h3>
                 <table className="table">
                    <thead>
                       <tr>
                       </tr>
                    </thead>
                    <tbody>
                       <tr>
                          <td><strong>COLLEGE NAME</strong></td>
                          <td>U.N COLLEGE ADASPUR</td>
                       </tr>
                    </tbody>
                 </table>
                 <h3>ENGINEERING</h3>
                 <table className="table">
                    <thead>
                       <tr>
                       </tr>
                    </thead>
                    <tbody>
                       <tr>
                          <td><strong>COLLEGE NAME</strong></td>
                          <td>KOUSTUV GROUP OF INSTITUTE</td>
                       </tr>
                    </tbody>
                 </table>
              </div>
              
              <div id="menu1" className="tab-pane fade">
              <h3>COMPANY 1</h3>
                 <table className="table">
                    <thead>
                       <tr>
                       </tr>
                    </thead>
                    <tbody>
                       <tr>
                          <td><strong>COMPANY NAME</strong></td>
                          <td>HURREH TECHNOLOGIES PVT LTD</td>
                       </tr>
                    </tbody>
                 </table>
                 <h3>COMPANY 2</h3>
                 <table className="table">
                    <thead>
                       <tr>
                       </tr>
                    </thead>
                    <tbody>
                       <tr>
                          <td><strong>COMPANY NAME</strong></td>
                          <td>INCRED FINANCIAL PVT LTD</td>
                       </tr>
                    </tbody>
                 </table>
                 <h3>COMPANY 3</h3>
                 <table className="table">
                    <thead>
                       <tr>
                       </tr>
                    </thead>
                    <tbody>
                       <tr>
                          <td><strong>COMPANY NAME</strong></td>
                          <td>INDEGENE IND PVT LTD</td>
                       </tr>
                    </tbody>
                 </table>
              </div>
              <div id="menu2" className="tab-pane fade">
                 <h3>SKILLS</h3>
                 <table className="table">
                    <thead>
                       <tr>
                          <th>SKILL NAME</th>
                          <th>VERSIONS</th>
                       </tr>
                    </thead>
                    <tbody>
                       <tr>
                          <td><strong>JAVA</strong></td>
                          <td>1.8</td>
                       </tr>
                       <tr>
                          <td><strong>HTML</strong></td>
                          <td>5</td>
                       </tr>
                       <tr>
                          <td><strong>PLAY</strong></td>
                          <td>2.2.3</td>
                       </tr>
                       <tr>
                          <td><strong>DATABASE</strong></td>
                          <td>SQL,MYSQL</td>
                       </tr>
                    </tbody>
                 </table>
              </div>
           </div>
        </div>
     </div>
  );
};

 export default Experience;