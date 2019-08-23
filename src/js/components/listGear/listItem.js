import React from 'react'
import {Link} from 'react-router-dom'

export default props => {
    if( Array.isArray(props.gears) ){
        return props.gears.map((doc)=>{
          return <tr>
                    <td><img src={doc.data().url}/></td>
                    <td>{doc.data().Brand}</td>
                    <td>{doc.data().Model}</td>
                    <td>{doc.data().PricePerDay}</td>
                    <td>{doc.data().ReplacementAmount}</td>
                    <td>
                        <i class="far fa-trash-alt" onClick={() => { props.onDelete(doc.id) }}></i>
                        <Link to={`updategear/${doc.id}`} > <i class="far fa-edit"></i> </Link>
                    </td>
                </tr>
      })
      } 
      else
      {
        return <tr>
            <td>{" "}</td>
        </tr>
      } 
}