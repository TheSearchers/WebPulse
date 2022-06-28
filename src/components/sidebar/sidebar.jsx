import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import History from '../history/history'

export default function Sidebar(){
    return(
<ProSidebar>
  <Menu iconShape="square">
    <MenuItem >OurFunction</MenuItem>
    <SubMenu title="Components" >
      <MenuItem><History/></MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>
    )

}
