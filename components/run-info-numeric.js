/**
 * @Author: H krishna
 * @Date:   2017-12-08T18:01:55+05:30
 * @Email:  krishnahare201@gmail.com
 * @Filename: run-info-numeric.js
 * @Last modified by:   H krishna
 * @Last modified time: 2017-12-08T18:06:56+05:30
 */

import RunInfo from './run-info';

export default class RunInfoNumeric extends RunInfo{
  formatValue(){
    return [this.state.value.toFixed(2), this.props.unit].join(' ');
  }
}
