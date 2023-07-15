// Need to correspond the value of each <td> tag to the <th> tag (i.e. link titles to data in that column)

import './styling.css';

const Table = ({ sat }) => {
  return (
      <table>
       <thead>
          <tr>
            <th>Name</th>
            <th>Type of Satelite</th>
            <th>Launch Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sat.map((data, id) => {
            let statusDisp = () => {
              if(data.operational === true){
                return "Active";
              }else if(data.operational === false){
                return "Inactive";
              }
            }

            return(
              <tr key={id}>
                <td>{data.name}</td>
                <td>{data.type}</td>
                <td>{data.launchDate}</td>
                  <td>{statusDisp()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
  );
};

export default Table;