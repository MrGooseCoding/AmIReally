import './../styles/styles.css'
import FileTrayFilled from './../assets/icons/file-tray-filled.svg?react'
import FileTrayOutline from './../assets/icons/file-tray-outline.svg?react'
import MergeFilled from './../assets/icons/merge-filled.svg?react'
import MergeOutline from './../assets/icons/merge-outline.svg?react'
import TelescopeFilled from './../assets/icons/telescope-filled.svg?react'
import TelescopeOutline from './../assets/icons/telescope-outline.svg?react'
import ArrowRightOutline from './../assets/icons/arrow-right-outline.svg?react'

function Icon({ name, color, className}) {
  switch (name) {
    case "file-tray-filled":
      return <FileTrayFilled className={`logo ${className}`}/>
    case "file-tray-outline":
      return <FileTrayOutline className={`logo ${className}`}/>
    case "merge-filled":
      return <MergeFilled className={`${className}`}/>
    case "merge-outline":
      return <MergeOutline className={`${className}`}/> 
    case "telescope-filled": 
      return <TelescopeFilled className={`${className}`}/>
    case "telescope-outline":
      return <TelescopeOutline className={`${className}`}/>
		case "arrow-right-outline":
			return <ArrowRightOutline className={`${className}`}/>
  }
}

export default Icon
