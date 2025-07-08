export default function Modules() {
  return (
    <div>
      <div id="wd-modules-toolbar" style={{ marginBottom: "16px" }}>
      <button id="wd-collapse-all">Collapse All</button>
      <button id="wd-view-progress">View Progress</button>

      {/* Dropdown for Publish All */}
      <select id="wd-publish-all" style={{ padding: "2px" }}>
      <option>Publish All</option>
      <option>Unpublish All Modules</option>
      <option>Publish Only Week 1</option>
      </select>

      <button id="wd-add-module">+ Module</button>
    </div>

      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1, Lecture 1 - Course Introduction</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
             <span className="wd-title">SLIDES</span>
             <ul className="wd-content">
               <li className="wd-content-item">Introduction to Web Development</li>
               <li className="wd-content-item">Creating an HTTP server with Node.js</li>
               <li className="wd-content-item">Creating a React Application</li>
             </ul>              
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 2, Lecture 2 - Formatting User Interface with HTML</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
             <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Learn how to create user interface with HTML</li>
                <li className="wd-content-item">Deploy the assignment to Netlify</li>
                </ul>
            <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to HTML and DOM</li>
                <li className="wd-content-item">Formatting Web content with Headings</li>
                <li className="wd-content-item">Formatting content with Lists and Tables</li>                
              </ul>
          </li>
      </ul>

        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
        </li>
      </ul>
    </div>
);}
