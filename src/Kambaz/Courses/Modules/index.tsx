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
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
        </li>
      </ul>
    </div>
);}
