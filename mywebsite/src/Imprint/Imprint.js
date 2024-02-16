import React from 'react';
import './Imprint.css'


function Imprint() {
  return (
    <div id='imprint-background'>
      <h1>FORTI300 GmbH</h1>
      <p>Arnold-Schönberg Str. 45<br />
      51503 Rösrath<br />
      Tel.: +49 16095470023<br />
      E-Mail: <a href="mailto:tom@forti300.com">tom@forti300.com</a><br />
      Internet: <a href="https://www.forti300.com">www.forti300.com</a></p>

      <p>Managing Director: Tom Schwabe<br />
      Registry Court: Cologne<br />
      Registration Number: HRB 81208<br />
      Sales Tax Identification Number according to § 27 a Sales Tax Law: DE 249514681</p>

      <p><strong>Liability Note</strong><br />
      Despite diligent control, we assume no liability for the contents of external links. The respective providers are responsible for their contents.</p>
    </div>
  );
}

export default Imprint;
