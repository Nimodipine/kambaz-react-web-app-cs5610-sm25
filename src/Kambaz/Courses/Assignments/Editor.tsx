export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name" style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
      Assignment Name
      </label><br />
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

      <label htmlFor="wd-description">Description</label><br />
      <textarea id="wd-description" rows={4} cols={50}>
        The assignment is available online. Submit a link to the landing page of
      </textarea>
      <br /><br />

      <table>
        <tbody>
          <tr>
            <td align="right"><label htmlFor="wd-points">Points</label></td>
            <td><input id="wd-points" type="number" defaultValue={100} /></td>
          </tr><br />

          <tr>
            <td align="right"><label htmlFor="wd-group">Assignment Group</label></td>
            <td>
              <select id="wd-group">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECT</option>
              </select>
            </td>
          </tr><br />

          <tr>
            <td align="right"><label htmlFor="wd-display-grade-as">Display Grade as</label></td>
            <td>
              <select id="wd-display-grade-as">
                <option>Percentage</option>
                <option>Complete/Incomplete</option>
                <option>Points</option>
              </select>
            </td>
          </tr><br />

          <tr>
            <td align="right" valign="top"><label htmlFor="wd-submission-type">Submission Type</label></td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
                <option>No Submission</option>
              </select>
              <br /><br />

              <div>Online Entry Options
              </div>
              <label><input type="checkbox" id="wd-text-entry" /> Text Entry</label><br />
              <label><input type="checkbox" id="wd-website-url" /> Website URL</label><br />
              <label><input type="checkbox" id="wd-media-recordings" /> Media Recordings</label><br />
              <label><input type="checkbox" id="wd-student-annotation" /> Student Annotation</label><br />
              <label><input type="checkbox" id="wd-file-upload" /> File Uploads</label>
            </td>
          </tr><br /><br />

          <tr>
            <td align="right"><label htmlFor="wd-submission-type">Assign</label></td>
            <td><label htmlFor="wd-assign-to">Assign To</label></td>
          </tr>
          <tr>
            <td></td> 
            <td><input id="wd-assign-to" defaultValue="Everyone" /></td>
          </tr>

          <tr>
            <td></td>
            <td><label htmlFor="wd-due-date">Due Date</label></td>
          </tr>
          <tr>
            <td></td>
            <td><input id="wd-due-date" type="date" defaultValue="2025-05-17" /></td>
          </tr>

          <tr>
            <td></td>
            <td><label htmlFor="wd-available-from">Available From</label></td>
          </tr>
          <tr>
            <td></td>
            <td><input id="wd-available-from" type="date" defaultValue="2025-05-06" /></td>
          </tr>

          <tr>
            <td></td>
            <td><label htmlFor="wd-available-until">Until</label></td>
          </tr> 
          <tr>
            <td></td>
            <td><input id="wd-available-until" type="date" defaultValue="2025-05-31" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

