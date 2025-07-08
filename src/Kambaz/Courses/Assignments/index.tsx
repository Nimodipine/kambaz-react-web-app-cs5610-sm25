export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>


      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link">
            A1 - ENV + HTML
          </a>
          <div className="wd-assignment-description">
            Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am  <br />
            <strong>Due</strong> May 13 at 11:59pm | 100pts
          </div>         
        </li>
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/124" className="wd-assignment-link">
            A2 - CSS + BOOTSTRAP
          </a>
          <div className="wd-assignment-description">
            Multiple Modules | <strong>Not available until</
            strong> May 13 at 12:00am  <br />
            <strong>Due</strong> May 20 at 11:59pm | 100pts
          </div>          
        </li>
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/125" className="wd-assignment-link">
            A3 - JAVASCRIPT + REACT
          </a>
         <div className="wd-assignment-description">
           Multiple Modules | <strong>Not available until</
           strong> May 20 at 12:00am  <br />
           <strong>Due</strong> May 27 at 11:59pm | 100pts
         </div>                    
        </li>
      </ul>


    <h3 className="wd-category-title">QUIZZES 10% of Total <button>+</button></h3>
      <ul className="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/201" className="wd-assignment-link">
          Q1 - ENV + HTML
          </a>
          <div className="wd-assignment-description">
            <strong>Not available until</strong> May 13 at 9pm | 
            <strong> Due</strong> May 20 at 8:59pm | 
            -/29 pts
          </div>
        </li>
     </ul>


    <h3 className="wd-category-title">EXAMS 20% of Total <button>+</button></h3>
      <ul className="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/301" className="wd-assignment-link">
        Midterm Exam
          </a>
          <div className="wd-assignment-description">
          <strong>Not available until</strong> May 13 9pm | 
          <strong> Due</strong> May 20 at 8:59pm | 
          -/100 pts
          </div>
        </li>
      </ul>

    <h3 className="wd-category-title">PROJECT 30% of Total <button>+</button></h3>
      <ul className="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/401" className="wd-assignment-link">
        Final Project
          </a>
          <div className="wd-assignment-description">
        <strong>Due</strong> May 12, 2025 | -/100 pts
      </div>
    </li>
  </ul>
</div>        
  );
}
