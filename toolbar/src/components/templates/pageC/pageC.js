import React, { Component } from 'react';
import './pageC.css';

class PageC extends Component {
  constructor() {
    super();
    this.state = {
      today_info: null,
      last30_info: null
    };
  }

  componentWillMount() {
    const URL = "http://localhost:3002/oee";
    fetch(URL)
      .then(res => res.json())
      .then(json => {
        this.setState({today_info: json[29]});
        let last30_highlights = {
          total_oee: 0,
          total_defects: 0
        };
        for (var i = 0; i < json.length; i++) {
          last30_highlights.total_oee += json[i].percent_oee;
          last30_highlights.total_defects += json[i].num_defects
        }
        this.setState({ last30_info : last30_highlights });
      });
  }

  render() {
    const today_info = this.state.today_info;
    const last30_info = this.state.last30_info;
    // console.log(data);
    if (!last30_info) {
      return(
        <div>
          <h1>Loading OEE information...</h1>
        </div>
      );
    } else {
      return(
        <div>
          <h3>Latest OEE information: {today_info.starttime.split(' ')[0]}</h3>
          <table>
            <tbody>
              <tr>
                <th>Percent OEE</th>
                <th>Number of Defects</th>
              </tr>
              <tr>
                <td>{today_info.percent_oee.toPrecision(4)}%</td>
                <td>{today_info.num_defects}</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <h3>Last 30 days...</h3>
          <table>
            <tbody>
              <tr>
                <th>Average OEE</th>
                <th>Total defects</th>
              </tr>
              <tr>
                <td>{(last30_info.total_oee/30).toPrecision(4)}%</td>
                <td>{last30_info.total_defects}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default PageC;
