import './../styles/styles.css'
import FileTrayFilled from './../assets/icons/file-tray-filled.svg'
import FileTrayOutline from './../assets/icons/file-tray-outline.svg'
import MergeFilled from './../assets/icons/merge-filled.svg'
import MergeOutline from './../assets/icons/merge-outline.svg'
import TelescopeFilled from './../assets/icons/telescope-filled.svg'
import TelescopeOutline from './../assets/icons/telescope-outline.svg'

function Icon({ name, color, className}) {
  switch (name) {
    case "file-tray-filled":
      return <img src={FileTrayFilled} className={`logo ${className}`}/>
    case "file-tray-outline":
      return <img src={FileTrayOutline} className={`logo ${className}`}/>
    case "merge-filled":
      return <img src={MergeFilled} className={`${className}`}/>
    case "merge-outline":
      return <img src={MergeOutline} className={`${className}`}/> 
    case "telescope-filled": 
      return <img src={TelescopeFilled} className={`${className}`}/>
    case "telescope-outline":
      return <img src={TelescopeOutline} className={`${className}`}/>
  }
}

export default Icon
